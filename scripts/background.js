var condition;
var trueCondition;
var flag = true;

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState === 4)
                aCallback(anHttpRequest.status);
        }
        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send();
    }
}
var client = new HttpClient();
window.setInterval(() => {
  condition = navigator.onLine ? "online" : "offline";
  //localStorage.setItem("current_status", JSON.stringify(condition));

  client.get('http://www.google.com', function(response) {
    if (response === 200) {
      flag = true;
    } else {
      flag = false;
    }
  });
  if (condition === "offline") {
    trueCondition = "offline_I";
  } else {
    if (flag === true) {
      trueCondition = "online_I";
    } else {
      trueCondition = "yellow_I";
    }
  }
  chrome.browserAction.setIcon({path: trueCondition + ".png"});
}, 1000);
