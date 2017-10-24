var condition;

window.setInterval(() => {
  condition = navigator.onLine ? "online" : "offline";
  localStorage.setItem("current_status", JSON.stringify(condition));
  chrome.browserAction.setIcon({path: condition + ".png"});
}, 2000);
