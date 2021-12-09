chrome.storage.local.get(["currPoints", "redeems"], (result) => {
  if (result.currPoints === undefined)
    chrome.storage.local.set({ currPoints: 0 });
  if (result.redeems === undefined) chrome.storage.local.set({ redeems: [] });
});
