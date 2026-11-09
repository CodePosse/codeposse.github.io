document.getElementById("launch").addEventListener("click", async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) throw new Error("No active tab");
    await chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["game.js"] });
    window.close();
  } catch (err) {
    document.querySelector("p").textContent = "This page blocks extensions. Try a regular website.";
    console.error(err);
  }
});