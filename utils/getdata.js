
function getdata(keyname, success){
  var value = ''
  wx.request({
    url: 'https://api.wxappclub.com/get',
    data: {
      appkey: '8ate68s9tyyk8bswng9xfnfaf01bchs5',
      key: keyname
    },
    header: {
      'Content-Type': 'application/json'
    },
    success: success,
    
  });
}

module.exports = {
  getdata: getdata
}