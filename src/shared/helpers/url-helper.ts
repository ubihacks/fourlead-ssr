export class UrlHelper {
  /**
   * The URL requested, before initial routing.
   */

  static getQueryParameters(): any {
    return document.location.search
      .replace(/(^\?)/, '')
      .split('&')
      .map(function (n) { return n = n.split('='), this[n[0]] = n[1], this; }.bind({}))[0];
  }

  public static get initialUrl() {
    if (typeof (location) !== 'undefined')
      return location.href;
  }
}
