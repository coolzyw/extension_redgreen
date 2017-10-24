
window.setInterval(() => {
  console.log("first time out");
  setTimeout(() => {
    chrome.browserAction.setIcon({path: "offline.png"});
  }, 1000);
  console.log("first time out over")

  console.log("icon changed to red")
  console.log("second time out");
  setTimeout(() => {
    chrome.browserAction.setIcon({path: "online.png"});
  }, 1000);
  console.log("second time out over");
  console.log("icon changed to green")
}, 3000);
