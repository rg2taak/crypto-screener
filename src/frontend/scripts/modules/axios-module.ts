import { AxiosResponse, default as Axios } from "axios";

export default class AxiosModule {
  /**
   * get data
   * @param type
   * @param url
   * @param data
   * @param options
   */
  public static async get(url: string, options?: any): Promise<AxiosResponse> {
    const result: AxiosResponse = await Axios.get(url, options);

    return result;
  }

  /**
   * Post data
   * @param type
   * @param url
   * @param data
   * @param options
   */
  public static async post(
    url: string,
    data: any,
    options?: any,
  ): Promise<AxiosResponse> {
    const result: AxiosResponse = await Axios.post(url, data, options);

    return result;
  }
}
