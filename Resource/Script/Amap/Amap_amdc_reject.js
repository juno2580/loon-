/*
引用地址https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amdc.js
*/
// 2023-03-31 15:08

const url = $request.url;
const header = $request.headers;
let ua = header["User-Agent"] || header["user-agent"];

if (ua.includes("AMap")) {
  if (typeof $task !== "undefined") {
    $done({ status: "HTTP/1.1 404 Not Found" });
  } else {
    $done();
  }
} else {
  $done({});
}