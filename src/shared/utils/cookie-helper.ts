import { Injectable } from '@angular/core';
import { EnumValues } from 'enum-values';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  setCookieValue(key, value, expireDate, path, domain = undefined) {
    var cookieValue = encodeURIComponent(key) + '=';

    if (value) {
      cookieValue = cookieValue + encodeURIComponent(value);
    }

    if (expireDate) {
      cookieValue = cookieValue + "; expires=" + expireDate.toString();
    }

    if (path) {
      cookieValue = cookieValue + "; path=/"; //+ path;
    }

    if (domain) {
      cookieValue = cookieValue + "; domain=" + domain;
    }

    if (typeof document !== "undefined")
      document.cookie = cookieValue;
  }

  getCookieValue(key: string): string {
    var equalities;
    if (typeof document !== "undefined") {
      equalities = document.cookie.split('; ')

      var currentCookies = equalities.filter(s => s.split('=')[0] === key);
      if (currentCookies && currentCookies.length !== 0) {
        var splitted = currentCookies[currentCookies.length - 1].split('=');
        if (splitted.length != 2) {
          return null;
        }
        if (decodeURIComponent(splitted[0]) === key) {
          return decodeURIComponent(splitted[1] || '');
        }
      }

      // for (var i = 0; i < equalities.length; i++) {
      //   if (!equalities[i]) {
      //     continue;
      //   }

      //   var splitted = equalities[i].split('=');
      //   if (splitted.length != 2) {
      //     continue;
      //   }

      //   if (decodeURIComponent(splitted[0]) === key) {
      //     return decodeURIComponent(splitted[1] || '');
      //   }
      // }
    }

    return null;
  }


  deleteCookie(key: string, path?: string): void {
    var cookieValue = encodeURIComponent(key) + '=';

    // cookieValue = cookieValue + "; expires=" + (new Date(new Date().getTime() - 86400000)).toUTCString();
    cookieValue = cookieValue +'; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    var equalities = document.cookie.split('; ')
    var currentCookies = equalities.filter(s => s.split('=')[0] === key);


    if (path) {
      cookieValue = cookieValue + "; path=/"; //+ path;
    }
    if (typeof document !== "undefined"){
      if(currentCookies && currentCookies.length > 0) {
        currentCookies.forEach(element => {
          document.cookie = cookieValue;

        });
      }
    }
  }

  setToken(tokenCookieName, authToken, expireDate, appPath, domain) {
    this.setCookieValue(tokenCookieName, authToken, expireDate, appPath, domain);
  }

  getDomain(url) {
    var domainRegex = /(https?:){0,1}\/\/((?:[\w\d-]+\.)+[\w\d]{2,})/i;
    var matches = domainRegex.exec(url);
    return (matches && matches[2]) ? matches[2] : '';
  }


  stringEnumToIdName(EnumArray) {
    const idName = [];
    const namesAndValues = EnumValues.getNamesAndValues(EnumArray);
    namesAndValues.forEach(function (nameValObj) {
      idName.push({ id: nameValObj.value, name: nameValObj.name });
    }, this);

    return idName;
  }

  stringEnumToIdText(EnumArray) {
    const idName = [];
    const namesAndValues = EnumValues.getNamesAndValues(EnumArray);
    namesAndValues.forEach(function (nameValObj) {
      idName.push({ id: nameValObj.value, text: nameValObj.name });
    }, this);

    return idName;
  }

  stringEnumToKeyValue(stringEnum) {
    const keyValue = [];
    const keys = Object.keys(stringEnum).filter((value, index) => {
      return value;
    });

    for (const k of keys) {
      keyValue.push({ key: k, value: stringEnum[k] });
    }

    return keyValue;
  }

}

