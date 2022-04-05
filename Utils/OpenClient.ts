import { OpenAIApi, Configuration } from "openai";
import { param } from "./constant";
export default class Client {
  public key: string;
  public Type: string;
  public ai: OpenAIApi;
  public config: Configuration;
  public constructor(param: param) {
    const con = this.init(param.Key)
    this.key = param.Key;
    this.Type = param.Type;
    this.config = con
    this.ai = new OpenAIApi(con);
    
  }
  private init(key: string) {
    const configuration:Configuration = new Configuration({
      apiKey: key,
    });
  return configuration ;
  }
}
