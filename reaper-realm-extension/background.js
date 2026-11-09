chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "launch-reaper-realm") return;
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.id) {
      await chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["game.js"] });
    }
  } catch (error) {
    // Restricted browser pages cannot accept injected scripts.
    console.warn("Reaper Realm could not launch on this page.", error);
  }
});