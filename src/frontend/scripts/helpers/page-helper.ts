/**
 * Page helper class
 */
export default class PageHelper {
  /**
   * Redirect to page
   * @param {String} ur Url
   */
  public static redirect(url: string): void {
    window.location.href = url;
  }
}
