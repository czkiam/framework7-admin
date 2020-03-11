function setCookie(cname, cvalue, cdays) {
  var d = new Date();
  d.setTime(d.getTime() + cdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname, default_val) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + cname + "=");
  console.log(value)
  if (parts.length == 2)
    return parts
      .pop()
      .split(";")
      .shift();
  else return default_val;
}

