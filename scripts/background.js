var condition;
var trueCondition;
var flag = true;

window.setInterval(() => {
  condition = navigator.onLine ? "online" : "offline";
  //localStorage.setItem("current_status", JSON.stringify(condition));
  /*
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.status);
      if (xmlHttp.status === 200){
        flag = true;
      } else {
        flag = false;
      }
  }
  xmlHttp.open("GET", "umich.edu", true); // true for asynchronous
  if (condition === "offline") {
    trueCondition = "offline";
  } else {
    if (flag === true) {
      trueCondition = "online";
    } else {
      trueCondition = "yellow";
    }
  }
  */
  chrome.browserAction.setIcon({path: condition + ".png"});
}, 1000);
