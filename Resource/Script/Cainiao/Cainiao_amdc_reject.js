/*
引用地址https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amdc.js
*/
// 2023-03-31 12:32

const url = $request.url;
const header = $request.headers;

if ("undefined" !== typeof $task) {
  let ua = header["User-Agent"];
  if (ua.includes("Cainiao")) {
    $done({ status: "HTTP/1.1 404 Not Found" });
  } else {
    $done({});
  }
} else {
  let ua = header["user-agent"];
  if (ua.includes("Cainiao")) {
    $done();
  } else {
    $done({});
  }
}
