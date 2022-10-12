$(document).ready(function () {
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get("id");
  var baseURL = "https://pub1.pskt.io/" + id;

  $("#ios").click(function () {
    window.location.href = `${baseURL}.pkpass`;
  });

  $("#google").click(function () {
    window.location.href = `${baseURL}.gpay`;
  });

  if (getBrowser("chrome")) {
    $("#ios").css("display", "none");
  } else if (getBrowser("safari")) {
    $("#google").css("display", "none");
  }
});

function getBrowser(browserString) {
  return navigator.userAgent.toLowerCase().indexOf(browserString) > -1;
}
