export async function setCookie(cname, cvalue, hours) {
    let d = new Date();
    d.setTime(d.getTime() + (hours * 60 * 60 * 1000)); // (exdays * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
  
export function getCookie(cname) {
    let name = cname + '=';
    let ca = document.cookie.split(';');
  
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) ===' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
  
    return '';
}
  
export function checkCookie(cname) {
    let userToken = getCookie(cname);
    if (userToken !== '') {
      return userToken;
    } else {
      return null;
    }
}

export function removeCookie(cname) {
  document.cookie = cname + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;' + 'path=/;';
}
  