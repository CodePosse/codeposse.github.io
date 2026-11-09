(() => {
  const ROOT_ID = "__reaper_realm_root__";
  const existing = document.getElementById(ROOT_ID);
  if (existing) { existing.remove(); return; }

  const doc = document;
  const W = window.innerWidth, H = window.innerHeight;
  const root = doc.createElement("div");
  root.id = ROOT_ID;
  root.style.cssText = "position:fixed;inset:0;z-index:2147483647;background:#090911;color:#f5efff;font:14px/1.4 system-ui,sans-serif;overflow:hidden;";
  root.innerHTML = `
    <style>
      #rr-canvas,#rr-3d{position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated}#rr-canvas{cursor:crosshair}#rr-3d{pointer-events:none;z-index:2}
      #rr-hud{position:absolute;inset:0;pointer-events:none}
      #rr-top{position:absolute;top:14px;left:16px;right:16px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
      .rr-pill{background:#171421eF;border:1px solid #5a4c75;border-radius:9px;padding:8px 11px;box-shadow:0 5px 24px #0008}
      #rr-brand{font-weight:900;letter-spacing:.08em;color:#d8c8ff}
      #rr-stats{margin-left:auto}
      #rr-tools{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;gap:6px;pointer-events:auto;flex-wrap:wrap;justify-content:center;max-width:95vw}
      .rr-tool{background:#171421;border:1px solid #55486b;color:#eee6ff;border-radius:8px;padding:9px 11px;font-weight:700;cursor:pointer}
      .rr-tool.active{background:#a78bfa;color:#1a1225;border-color:#d8c8ff}
      #rr-help{position:absolute;bottom:70px;left:16px;max-width:330px;color:#d3cadf;background:#171421d9;border:1px solid #433751;border-radius:9px;padding:10px 12px}
      #rr-close{pointer-events:auto;margin-left:4px}
      #rr-toast{position:absolute;top:76px;left:50%;transform:translateX(-50%);background:#21192f;border:1px solid #8267b5;padding:9px 14px;border-radius:9px;opacity:0;transition:opacity .2s}
      @media(max-width:600px){#rr-help{display:none}#rr-stats{margin-left:0}}
    </style>
    <canvas id="rr-canvas"></canvas><canvas id="rr-3d"></canvas>
    <div id="rr-hud">
      <div id="rr-top">
        <div class="rr-pill" id="rr-brand">☠ REAPER REALM</div>
        <div class="rr-pill">PAGE MAP: <span id="rr-world">SCANNING</span></div>
        <div class="rr-pill" id="rr-stats">SOULS <b id="rr-score">0</b> · COMBO <b id="rr-combo">x1</b></div>
        <button class="rr-tool" id="rr-close">✕ EXIT</button>
      </div>
      <div id="rr-help" class="rr-pill">WASD / arrows: move · Mouse: aim<br>Click: attack · Hold click: repeat · Space: bomb<br>1 Scythe · 2 Bolt · 3 Bomb · 4 Terrain brush<br>R: rebuild world · Esc: exit</div>
      <div id="rr-toast"></div>
      <div id="rr-tools">
        <button class="rr-tool active" data-tool="scythe">1 · SCYTHE</button>
        <button class="rr-tool" data-tool="bolt">2 · SOUL BOLT</button>
        <button class="rr-tool" data-tool="bomb">3 · GRAVE BOMB</button>
        <button class="rr-tool" data-tool="brush">4 · TERRAFORM</button>
        <button class="rr-tool" data-tool="restore">RESTORE LEVEL</button>
      </div>
    </div>`;
  doc.documentElement.appendChild(root);

  const canvas = root.querySelector("#rr-canvas");
  const ctx = canvas.getContext("2d");
  const scoreEl = root.querySelector("#rr-score"), comboEl = root.querySelector("#rr-combo");
  const worldEl = root.querySelector("#rr-world"), toastEl = root.querySelector("#rr-toast");
  const originalOverflow = doc.documentElement.style.overflow;
  doc.documentElement.style.overflow = "hidden";

  let vw = W, vh = H, dpr = Math.min(devicePixelRatio || 1, 2);
  let running = true, tool = "scythe", score = 0, combo = 1, lastHit = 0, cameraX = 0, cameraY = 0;
  const keys = new Set(), structures = [], particles = [], projectiles = [], souls = [];
  const terrainCell = 32;
  const worldW = Math.max(1800, W * 1.7), worldH = Math.max(1300, H * 1.7);
  const player = { x: worldW/2, y: worldH/2, vx:0, vy:0, dir:0, walk:0, attack:0 };
  let mouse = {x: W/2, y:H/2, down:false};
  let terrain = [];
  const originalNodes = [];
  const fallbackReaper = new Image();
  fallbackReaper.src = chrome.runtime.getURL("reaper-sprite.png");

  let threeState = null;
  function resize() {
    vw = innerWidth; vh = innerHeight; dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.floor(vw*dpr); canvas.height = Math.floor(vh*dpr);
    canvas.style.width = vw+"px"; canvas.style.height = vh+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
    if(threeState){threeState.renderer.setSize(vw,vh,false);threeState.camera.left=-vw/2;threeState.camera.right=vw/2;threeState.camera.top=vh/2;threeState.camera.bottom=-vh/2;threeState.camera.updateProjectionMatrix();}
  }
  addEventListener("resize", resize); resize();
  // Local Three.js runtime + actual animated GLB model, loaded from extension files.
  const canvas3d = root.querySelector("#rr-3d");
  async function initReaper3D() {
    try {
      const THREE = await import(chrome.runtime.getURL("vendor/three/build/three.module.js"));
      const { GLTFLoader } = await import(chrome.runtime.getURL("vendor/three/examples/jsm/loaders/GLTFLoader.js"));
      const renderer = new THREE.WebGLRenderer({ canvas: canvas3d, alpha: true, antialias: false });
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
      renderer.setSize(vw, vh, false);
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-vw/2, vw/2, vh/2, -vh/2, 0.1, 1000);
      camera.position.set(0, 0, 100); camera.lookAt(0, 0, 0);
      scene.add(new THREE.HemisphereLight(0xe8dcff, 0x21152e, 2.2));
      const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
      keyLight.position.set(-35, 70, 100); scene.add(keyLight);
      // Soft radial ground shadow, independent of the model's cast shadow.
      const shadowCanvas = doc.createElement("canvas"); shadowCanvas.width=128; shadowCanvas.height=128;
      const shctx=shadowCanvas.getContext("2d");
      const grad=shctx.createRadialGradient(64,64,4,64,64,60);
      grad.addColorStop(0,"rgba(0,0,0,0.48)"); grad.addColorStop(0.55,"rgba(0,0,0,0.22)"); grad.addColorStop(1,"rgba(0,0,0,0)");
      shctx.fillStyle=grad;shctx.fillRect(0,0,128,128);
      const shadowTex=new THREE.CanvasTexture(shadowCanvas);
      const shadow=new THREE.Mesh(new THREE.PlaneGeometry(76,34),new THREE.MeshBasicMaterial({map:shadowTex,transparent:true,depthWrite:false}));
      shadow.position.set(0,-25,-1);scene.add(shadow);
      const loader=new GLTFLoader();
      const gltf=await loader.loadAsync(chrome.runtime.getURL("pixel_reaper.glb"));
      const model=gltf.scene;
      const box=new THREE.Box3().setFromObject(model);
      const size=box.getSize(new THREE.Vector3());
      const center=box.getCenter(new THREE.Vector3());
      model.position.sub(center);
      const scale=72/Math.max(size.y,0.001);
      model.scale.setScalar(scale);
      // Center the feet around the shadow plane after normalizing model size.
      const normalizedBox=new THREE.Box3().setFromObject(model);
      model.position.y -= normalizedBox.min.y + 7;
      scene.add(model);
      const mixer=new THREE.AnimationMixer(model);
      const clips=gltf.animations||[];
      const pick=(names)=>clips.find(c=>names.some(n=>c.name.toLowerCase().includes(n.toLowerCase())));
      const idle=pick(["Idle"])||clips[0], walk=pick(["Walk"]), attack=pick(["ScytheTwirl"]);
      const actions={};
      for(const [name,clip] of Object.entries({idle,walk,attack})) if(clip) actions[name]=mixer.clipAction(clip);
      let current="";
      const play=(name,once=false)=>{
        const next=actions[name]||actions.idle;
        if(!next || current===name)return;
        if(actions[current])actions[current].fadeOut(0.12);
        next.reset().fadeIn(0.12);
        next.setLoop(once?THREE.LoopOnce:THREE.LoopRepeat,once?1:Infinity);
        if(once)next.clampWhenFinished=true;
        next.play();current=name;
      };
      play("idle");
      threeState={THREE,renderer,scene,camera,model,mixer,actions,play,get current(){return current},shadow};
      toast("3D Reaper summoned");
    } catch (err) {
      console.error("Reaper Realm: 3D model failed to load",err);
      toast("3D Reaper failed: " + String(err && err.message || err).slice(0, 90));
    }
  }
  initReaper3D();


  // Read only visible DOM geometry and labels. The page is never edited or removed.
  function scanDOM() {
    structures.length = 0;
    const candidates = [...doc.querySelectorAll("h1,h2,h3,article,section,main,nav,header,footer,button,a,img,video,figure,[role=button],.card")];
    const seen = new Set();
    for (const el of candidates) {
      if (root.contains(el) || seen.has(el)) continue;
      seen.add(el);
      const r = el.getBoundingClientRect();
      if (r.width < 22 || r.height < 18 || r.bottom < 0 || r.right < 0 || r.top > vh || r.left > vw) continue;
      const style = getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) < .08) continue;
      const type = el.matches("h1,h2,h3") ? "cliff" : el.matches("img,video,figure") ? "landmark" : el.matches("button,a,[role=button]") ? "platform" : el.matches("nav,header,footer") ? "wall" : "block";
      const x = clamp(r.left / vw * worldW, 20, worldW-60);
      const y = clamp(r.top / vh * worldH, 20, worldH-60);
      const width = clamp(r.width / vw * worldW, 42, 330);
      const height = clamp(r.height / vh * worldH, 28, 220);
      const seed = hash((el.innerText || el.alt || el.tagName || "") + Math.round(r.left) + Math.round(r.top));
      const rawBg = style.backgroundColor;
      const bg = rawBg && rawBg !== "rgba(0, 0, 0, 0)" ? rawBg : "";
      const rawColor = style.color || "";
      const label = (el.innerText || el.alt || el.getAttribute("aria-label") || el.tagName || "").replace(/\\s+/g," ").trim().slice(0,64);
      const imageSrc = el.matches("img") ? el.currentSrc || el.src : "";
      structures.push({x,y,w:width,h:height,type,seed,hp:type==="cliff"?3:2,maxHp:type==="cliff"?3:2,alive:true,label,bg,color:rawColor,imageSrc,tag:el.tagName.toLowerCase()});
    }
    // Fill sparse pages with ruins so even minimal pages remain playable.
    if (structures.length < 5) {
      for(let i=0;i<32;i++){
        const x=80+(i*173 % (worldW-160)), y=80+(i*257 % (worldH-160));
        structures.push({x,y,w:38+(i*13%90),h:28+(i*17%65),type:i%5===0?"cliff":"block",seed:i*177+19,hp:2,maxHp:2,alive:true,label:"Ancient ruin"});
      }
    }
    worldEl.textContent = structures.length + " STRUCTURES";
    buildTerrain();
  }
  function buildTerrain() {
    terrain = [];
    const cols = Math.ceil(worldW/terrainCell), rows = Math.ceil(worldH/terrainCell);
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++) {
      let v = Math.sin(x*.27)*2 + Math.cos(y*.21)*2 + Math.sin((x+y)*.13)*1.5;
      for(const s of structures) {
        const dx=(x*terrainCell+16)-(s.x+s.w/2), dy=(y*terrainCell+16)-(s.y+s.h/2);
        const d=Math.sqrt(dx*dx+dy*dy), rad=Math.max(s.w,s.h)*.8;
        if(d<rad) v += (1-d/rad)*(s.type==="cliff"?5:2.3);
      }
      terrain.push(v);
    }
  }
  function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
  function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
  function rand(seed){let x=Math.sin(seed*127.1+311.7)*43758.5453;return x-Math.floor(x)}
  function toast(msg){toastEl.textContent=msg;toastEl.style.opacity=1;clearTimeout(toast.timer);toast.timer=setTimeout(()=>toastEl.style.opacity=0,1300)}
  function setTool(t){tool=t;root.querySelectorAll("[data-tool]").forEach(b=>b.classList.toggle("active",b.dataset.tool===t));toast(t==="brush"?"Terraform: click to raise or crater the land":t.toUpperCase()+" selected")}
  function worldPoint(sx,sy){return {x:sx+cameraX,y:sy+cameraY}}
  function screenPoint(x,y){return {x:x-cameraX,y:y-cameraY}}
  function addBurst(x,y,color,n=12,power=4){for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,sp=Math.random()*power+1;particles.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:35+Math.random()*25,max:60,size:2+Math.random()*4,color})}}
  function hitAt(x,y,radius=110,damage=1){
    let hit=0;
    for(const s of structures){
      if(!s.alive)continue;
      const cx=s.x+s.w/2,cy=s.y+s.h/2,dist=Math.hypot(cx-x,cy-y);
      if(dist<radius+Math.max(s.w,s.h)*.22){
        s.hp-=damage;hit++;
        addBurst(cx,cy,s.type==="cliff"?"#c7b1ff":"#a78bfa",8,4);
        if(s.hp<=0){
          s.alive=false; score+=s.type==="cliff"?35:15;
          souls.push({x:cx,y:cy,life:220,value:s.type==="cliff"?3:1});
          addBurst(cx,cy,"#f4d7ff",24,7);
          for(let i=0;i<9;i++) particles.push({x:cx+(Math.random()-.5)*s.w,y:cy+(Math.random()-.5)*s.h,vx:(Math.random()-.5)*7,vy:-Math.random()*7,life:70,max:70,size:4+Math.random()*8,color:"#66527f",gravity:.15});
        }
      }
    }
    if(hit){const now=performance.now();combo=now-lastHit<1800?Math.min(combo+1,12):1;lastHit=now;score+=hit*2;scoreEl.textContent=score;comboEl.textContent="x"+combo}
    return hit;
  }
  function attack() {
    const aim=worldPoint(mouse.x,mouse.y), dx=aim.x-player.x,dy=aim.y-player.y;
    player.dir=Math.atan2(dy,dx); player.attack=16;
    if(tool==="scythe"){const x=player.x+Math.cos(player.dir)*65,y=player.y+Math.sin(player.dir)*65;hitAt(x,y,92,1);addBurst(x,y,"#c4a7ff",8,3)}
    else if(tool==="bolt"){projectiles.push({x:player.x,y:player.y,vx:Math.cos(player.dir)*13,vy:Math.sin(player.dir)*13,life:90,kind:"bolt"}); }
    else if(tool==="bomb"){projectiles.push({x:aim.x,y:aim.y,life:38,kind:"bomb"});toast("Grave bomb armed")}
    else if(tool==="brush"){hitAt(aim.x,aim.y,115,1); addBurst(aim.x,aim.y,"#6fe0b2",24,5)}
  }
  const imageTextures = new Map();
  function imageTexture(url) {
    if (!url) return null;
    if (imageTextures.has(url)) return imageTextures.get(url);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {};
    img.onerror = () => {};
    img.src = url;
    imageTextures.set(url, img);
    return img;
  }
  function drawTerrain(){
    const startX=Math.max(0,Math.floor(cameraX/terrainCell)),startY=Math.max(0,Math.floor(cameraY/terrainCell));
    const endX=Math.min(Math.ceil(worldW/terrainCell),Math.ceil((cameraX+vw)/terrainCell)+1),endY=Math.min(Math.ceil(worldH/terrainCell),Math.ceil((cameraY+vh)/terrainCell)+1);
    for(let gy=startY;gy<endY;gy++) for(let gx=startX;gx<endX;gx++){
      const idx=gy*Math.ceil(worldW/terrainCell)+gx, elev=terrain[idx]||0;
      const x=gx*terrainCell-cameraX,y=gy*terrainCell-cameraY;
      const noise=rand(gx*311+gy*71);
      const shade=Math.floor(18+noise*13+Math.max(0,elev)*2);
      ctx.fillStyle=`rgb(${shade+4},${shade+2},${shade+15})`;ctx.fillRect(x,y,terrainCell+1,terrainCell+1);
      // Contour-like stepped lines, intentionally pixelated.
      if((Math.floor(elev*1.4+gx*.18+gy*.12)%3)===0){ctx.fillStyle="#51416b";ctx.fillRect(x,y,terrainCell,2);ctx.fillRect(x,y,2,terrainCell)}
      if(noise>.91){ctx.fillStyle="#8874a3";ctx.fillRect(x+8,y+8,3,3)}
    }
    // faint grid gives the map a miniature tactical feel
    ctx.strokeStyle="#c3a5ff12";ctx.lineWidth=1;ctx.beginPath();
    for(let x=-(cameraX%128);x<vw;x+=128){ctx.moveTo(x,0);ctx.lineTo(x,vh)}
    for(let y=-(cameraY%128);y<vh;y+=128){ctx.moveTo(0,y);ctx.lineTo(vw,y)}ctx.stroke();
  }
  function drawStructures(){
    for(const s of structures){
      if(!s.alive)continue;
      const p=screenPoint(s.x,s.y);if(p.x+s.w<0||p.y+s.h<0||p.x>vw||p.y>vh)continue;
      const lift=s.type==="cliff"?22:s.type==="landmark"?10:5;
      ctx.fillStyle="#03030888";ctx.fillRect(p.x+7,p.y+lift+7,s.w,s.h);
      const colors=s.type==="cliff"?["#8870a7","#57436f","#342843"]:s.type==="landmark"?["#7e9f91","#4b7066","#2a453f"]:s.type==="platform"?["#c7a9ff","#8b6bc0","#513b75"]:["#b2a0c9","#78638f","#493957"];
      // Use the page's own computed colors where possible so this reads as a
      // miniature interpretation of the source page, not a pile of identical blocks.
      ctx.fillStyle=colors[2];ctx.fillRect(p.x,p.y+lift,s.w,s.h);
      ctx.fillStyle=s.bg || colors[1];ctx.fillRect(p.x,p.y,s.w,s.h);
      ctx.fillStyle=colors[0];ctx.fillRect(p.x,p.y, s.w, Math.max(4,lift));
      ctx.fillStyle="#ffffff18";ctx.fillRect(p.x+3,p.y+3,Math.max(2,s.w-6),2);
      if (s.type==="landmark" && s.imageSrc) {
        // Canvas image textures are optional; cross-origin images can be blocked.
        const img = imageTexture(s.imageSrc);
        if (img && img.complete && img.naturalWidth) {
          try { ctx.globalAlpha=.88; ctx.drawImage(img,p.x+2,p.y+2,Math.max(1,s.w-4),Math.max(1,s.h-4)); ctx.globalAlpha=1; }
          catch (_) { ctx.globalAlpha=1; }
        }
      }
      if (s.label && s.w > 58 && s.h > 25) {
        ctx.save(); ctx.beginPath(); ctx.rect(p.x+4,p.y+lift+3,Math.max(0,s.w-8),Math.max(0,s.h-6)); ctx.clip();
        ctx.fillStyle=s.color && s.color!=="rgba(0, 0, 0, 0)" ? s.color : "#f1eaff";
        ctx.font="bold 11px system-ui, sans-serif";
        const words=s.label.split(/\\s+/); let line="", yy=p.y+lift+17;
        for(const word of words){const test=line?line+" "+word:word;if(ctx.measureText(test).width>s.w-12){if(line){ctx.fillText(line,p.x+7,yy);yy+=13;}line=word;}else line=test;if(yy>p.y+s.h-3)break;}
        if(line && yy<=p.y+s.h-3)ctx.fillText(line,p.x+7,yy);
        ctx.restore();
      }
      // pixel damage cracks
      if(s.hp<s.maxHp){ctx.strokeStyle="#17101f";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(p.x+s.w*.3,p.y+lift*.4);ctx.lineTo(p.x+s.w*.45,p.y+lift+8);ctx.lineTo(p.x+s.w*.7,p.y+lift+14);ctx.stroke()}
      if(s.type==="cliff"){ctx.fillStyle="#d7c0ff";ctx.fillRect(p.x+8,p.y-4,Math.max(8,s.w-16),4)}
      if(s.type==="landmark"){ctx.fillStyle="#a9d4be";ctx.fillRect(p.x+s.w*.35,p.y-9,Math.max(5,s.w*.2),10)}
    }
  }
  // Sorthen sprite sheet: use the compact 50px animation cells from the top grid.
  const reaperSheet = new Image();
  try { reaperSheet.src = chrome.runtime.getURL("reaper-sprite.png"); } catch (_) {}
  function drawPlayer(){
    const p=screenPoint(player.x,player.y), moving=keys.has("w")||keys.has("a")||keys.has("s")||keys.has("d")||keys.has("arrowup")||keys.has("arrowdown")||keys.has("arrowleft")||keys.has("arrowright");
    ctx.save();
    ctx.fillStyle="#000b";ctx.beginPath();ctx.ellipse(p.x,p.y+18,19,7,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#8b5cf622";ctx.beginPath();ctx.ellipse(p.x,p.y+13,27,12,0,0,Math.PI*2);ctx.fill();
    // Always draw the sprite as a reliable visible base layer. The transparent 3D model overlays it when available.
    if(fallbackReaper.complete && fallbackReaper.naturalWidth){
      // First idle frame from the supplied sprite sheet.
      ctx.imageSmoothingEnabled=false;
      ctx.drawImage(fallbackReaper, 0, 0, 56, 56, p.x-29, p.y-35, 58, 58);
    }
    // The 3D GLB character is rendered on a transparent Three.js overlay when available.
    // Directional aim marker keeps aiming readable even though sprite poses face a fixed direction.
    ctx.strokeStyle="#c4a7ff";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+Math.cos(player.dir)*31,p.y+Math.sin(player.dir)*31);ctx.stroke();
    if(player.attack>0){ctx.strokeStyle="#e2c5ff";ctx.lineWidth=4;ctx.beginPath();ctx.arc(p.x,p.y,40,player.dir-.8,player.dir+.8);ctx.stroke()}
    ctx.restore();
  }
  function drawEffects(){
    for(const p of projectiles){
      const s=screenPoint(p.x,p.y);
      if(p.kind==="bolt"){ctx.fillStyle="#d9b7ff";ctx.fillRect(s.x-5,s.y-5,10,10);ctx.fillStyle="#8b5cf6";ctx.fillRect(s.x-2,s.y-2,4,4)}
      else {ctx.fillStyle="#ffb36a";ctx.fillRect(s.x-9,s.y-9,18,18);ctx.fillStyle="#fff1c7";ctx.fillRect(s.x-4,s.y-4,8,8)}
    }
    for(const p of particles){const s=screenPoint(p.x,p.y);ctx.globalAlpha=Math.max(0,p.life/p.max);ctx.fillStyle=p.color;ctx.fillRect(s.x,s.y,p.size,p.size)}ctx.globalAlpha=1;
    for(const s of souls){const p=screenPoint(s.x,s.y),bob=Math.sin(s.life*.12)*4;ctx.fillStyle="#7df2c3";ctx.fillRect(p.x-5,p.y-6+bob,10,10);ctx.fillRect(p.x-3,p.y+3+bob,6,5);ctx.fillStyle="#e1fff4";ctx.fillRect(p.x-3,p.y-4+bob,2,2);ctx.fillRect(p.x+2,p.y-4+bob,2,2)}
  }
  function frame(){
    if(!running)return;
    ctx.clearRect(0,0,vw,vh);ctx.fillStyle="#0b0a12";ctx.fillRect(0,0,vw,vh);
    const speed=keys.has("shift")?7:4.2;
    let mx=0,my=0;if(keys.has("w")||keys.has("arrowup"))my--;if(keys.has("s")||keys.has("arrowdown"))my++;if(keys.has("a")||keys.has("arrowleft"))mx--;if(keys.has("d")||keys.has("arrowright"))mx++;
    player.vx=0;player.vy=0;if(mx||my){const l=Math.hypot(mx,my)||1;player.vx=mx/l*speed;player.vy=my/l*speed;player.x+=player.vx;player.y+=player.vy;player.walk+=.25}
    player.x=clamp(player.x,20,worldW-20);player.y=clamp(player.y,20,worldH-20);
    const targetX=clamp(player.x-vw/2,0,worldW-vw),targetY=clamp(player.y-vh/2,0,worldH-vh);
    cameraX+=(targetX-cameraX)*.12;cameraY+=(targetY-cameraY)*.12;
    const aim=worldPoint(mouse.x,mouse.y);player.dir=Math.atan2(aim.y-player.y,aim.x-player.x);
    if(player.attack>0)player.attack--;
    drawTerrain();drawStructures();drawEffects();drawPlayer();
    for(let i=projectiles.length-1;i>=0;i--){const p=projectiles[i];p.life--;if(p.kind==="bolt"){p.x+=p.vx;p.y+=p.vy;const hit=hitAt(p.x,p.y,24,1);if(hit||p.life<=0){addBurst(p.x,p.y,"#bd91ff",10,4);projectiles.splice(i,1)}}else if(p.life<=0){hitAt(p.x,p.y,180,3);addBurst(p.x,p.y,"#ffad72",48,10);projectiles.splice(i,1)}}
    for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.x+=p.vx;p.y+=p.vy;p.vx*=.985;p.vy*=.985;if(p.gravity)p.vy+=p.gravity;p.life--;if(p.life<=0)particles.splice(i,1)}
    for(let i=souls.length-1;i>=0;i--){const s=souls[i];s.life--;if(Math.hypot(s.x-player.x,s.y-player.y)<46){score+=s.value*10;scoreEl.textContent=score;addBurst(s.x,s.y,"#7df2c3",8,3);souls.splice(i,1)}else if(s.life<=0)souls.splice(i,1)}
    if(threeState){
      const pt=screenPoint(player.x,player.y);
      threeState.model.position.x=pt.x-vw/2;
      threeState.model.position.z=0;
      // Screen-space y is inverted relative to Three.js world up.
      threeState.model.position.y=vh/2-pt.y-7;
      threeState.shadow.position.x=pt.x-vw/2;
      threeState.shadow.position.y=vh/2-pt.y-25;
      const moving=Math.hypot(player.vx,player.vy)>0.25;
      const desired=player.attack>0?"attack":(moving?"walk":"idle");
      if(threeState.current!==desired)threeState.play(desired,desired==="attack");
      threeState.mixer.update(1/60);
      threeState.renderer.render(threeState.scene,threeState.camera);
    }
    requestAnimationFrame(frame);
  }
  function exit(){running=false;removeEventListener("resize",resize);doc.documentElement.style.overflow=originalOverflow;if(threeState){threeState.renderer.dispose()}root.remove()}
  root.querySelector("#rr-close").addEventListener("click",exit);
  root.querySelectorAll("[data-tool]").forEach(b=>b.addEventListener("click",()=>setTool(b.dataset.tool)));
  root.querySelector('[data-tool="restore"]').addEventListener("click",()=>{score=0;combo=1;scoreEl.textContent="0";comboEl.textContent="x1";scanDOM();toast("World rebuilt from the original page")});
  canvas.addEventListener("mousemove",e=>{mouse.x=e.clientX;mouse.y=e.clientY});
  canvas.addEventListener("mousedown",e=>{mouse.down=true;mouse.x=e.clientX;mouse.y=e.clientY;attack()});
  addEventListener("mouseup",()=>mouse.down=false);
  canvas.addEventListener("contextmenu",e=>e.preventDefault());
  addEventListener("keydown",e=>{
    if(e.key==="Escape"){exit();return}
    if(["w","a","s","d","W","A","S","D","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Shift"," "].includes(e.key))e.preventDefault();
    keys.add(e.key.toLowerCase());
    if(e.key==="1")setTool("scythe");if(e.key==="2")setTool("bolt");if(e.key==="3")setTool("bomb");if(e.key==="4")setTool("brush");
    if(e.key===" "){e.preventDefault();const aim=worldPoint(mouse.x,mouse.y);projectiles.push({x:aim.x,y:aim.y,life:25,kind:"bomb"})}
    if(e.key.toLowerCase()==="r"){scanDOM();toast("World regenerated")}
  },true);
  addEventListener("keyup",e=>keys.delete(e.key.toLowerCase()),true);
  let lastAutoAttack=0;
  const repeatTimer=setInterval(()=>{if(!running){clearInterval(repeatTimer);return}if(mouse.down&&performance.now()-lastAutoAttack>240){attack();lastAutoAttack=performance.now()}},60);

  scanDOM();
  // Start near the map center, then snap camera to player.
  cameraX=clamp(player.x-vw/2,0,worldW-vw);cameraY=clamp(player.y-vh/2,0,worldH-vh);
  toast("The living world is yours to ruin");
  requestAnimationFrame(frame);
})();