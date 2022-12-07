/*
脚本作者：DecoAri
引用地址：https://raw.githubusercontent.com/DecoAri/JavaScript/main/Surge/Auto_join_TF.js
感谢某位大佬将改写为Loon版脚本！
*/
!(async () => {
var ids = $persistentStore.read('APP_ID')
if (ids == null) {
    $notification.post('请填写要加入的TestFlight App ID','','')
    $done()
    return
}

if (ids == '') {
	$notification.post('所有TF已加入完毕','请禁用插件','')
	$done()
} else {
	ids = ids.split(',')
	for await (const ID of ids) {
		await autoPost(ID)
	}
}
$done()
})();

function autoPost(ID) {
  let Key = $persistentStore.read('key')
  let testurl = 'https://testflight.apple.com/v3/accounts/' + Key + '/ru/'
  let header = {
    'X-Session-Id': `${$persistentStore.read('session_id')}`,
    'X-Session-Digest': `${$persistentStore.read('session_digest')}`,
    'X-Request-Id': `${$persistentStore.read('request_id')}`,
    'User-Agent': `iOS Loon`
  }
  console.log('testurl' + testurl)
  return new Promise(function(resolve) {
    $httpClient.get({url: testurl + ID,headers: header}, function(error, resp, data) {
      if (error === null) {
        let jsonData = JSON.parse(data)
        if (jsonData.data == null) {
          console.log(ID + ' ' + jsonData.messages[0].message)
          resolve();
        } else if (jsonData.data.status == 'FULL') {
          console.log(ID + ' ' + jsonData.data.message)
          resolve();
        } else {
          $httpClient.post({url: testurl + ID + '/accept',headers: header}, function(error, resp, body) {
            let jsonBody = JSON.parse(body)
            $notification.post(jsonBody.data.name, 'TestFlight加入成功', '')
						console.log(jsonBody.data.name + ' TestFlight加入成功')
						ids = $persistentStore.read('APP_ID').split(',')
						ids = ids.filter(ids => ids !== ID)
						$persistentStore.write(ids.toString(),'APP_ID')
						resolve()
          });
        }
      } else {
        if (error =='The request timed out.') {
          resolve();
        } else {
          $notification.post('自动加入TF', error,'')
          console.log(ID + ' ' + error)
          resolve();
        }
      }
    })
  })
}