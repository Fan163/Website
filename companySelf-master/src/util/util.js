export function setCookie (cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 60 * 60 * 1000))
    // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toUTCString()
    // console.info(cname + '=' + cvalue + '; ' + expires)
    document.cookie = cname + '=' + cvalue + '; ' + expires
  }
  
  // 获取cookie
  export function getCookie (cname) {
    var name = cname + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1)
      if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
    }
    return ''
  }
  
  // 删除cookie
  export function clearCookie (name) {
    setCookie(name, '', -1)
  }
  
  // 秒数回转
  export function secondToFormat (second) {
    var oDate = new Date(second)
    var oYear = oDate.getFullYear()
    var oMonth = oDate.getMonth() + 1
    var oDay = oDate.getDate()
    var oHour = oDate.getHours()
    var oMin = oDate.getMinutes()
    var oSen = oDate.getSeconds()
    // oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay)
    var oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(oSen)
    return oTime
  }
  
  // 补零
  function getzf (num) {
    if (parseInt(num) < 10) {
      num = '0' + num
    }
    return num
  }