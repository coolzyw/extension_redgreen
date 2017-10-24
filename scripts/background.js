var condition;

window.setInterval(() => {
  condition = navigator.onLine ? "online" : "offline";
  setStatus(condition);
  chrome.browserAction.setIcon({path: condition + ".png"});
}, 2000);

function setStatus(condition) {
  localStorage.setItem("current_status", JSON.stringify(condition));
}