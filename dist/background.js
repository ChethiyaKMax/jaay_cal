chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get("currPoints", (result) => {
    if (Object.keys(result).length === 0)
      chrome.storage.local.set({ currPoints: 0});
  });
});
chrome.storage.local.get("currPoints", (result) => {
  if (Object.keys(result).length === 0)
    chrome.storage.local.set({ currPoints: 0});
});
chrome.storage.local.get("redeems", (result) => {
  if (Object.keys(result).length === 0)
    chrome.storage.local.set({ redeems: []});
    console.log('set')
});