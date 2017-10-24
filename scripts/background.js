
window.setInterval(() => {
  let condition = navigator.onLine ? "online" : "offline";
  chrome.browserAction.setIcon({path: condition + ".png"});
}, 2000);
