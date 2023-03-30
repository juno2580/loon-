if (typeof $response == "undefined") {
    console.log("invalid response");
    $done({});
    return;
}

let bodyObj = JSON.parse($response.body);
bodyObj.properties.water_mark = false;


let multi = bodyObj.multi;
for (var i = 0; i < multi.length; i ++) {
    multi[i].path = multi[i].original_path;
}

$done({"body":JSON.stringify(bodyObj)});
