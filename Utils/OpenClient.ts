import { OpenAIApi, Configuration } from "openai";
import { param } from "./constant"
export default class Client  {
    public key: string;
    public Type: string;
    public ai: OpenAIApi
    public config: Configuration
    public  constructor(param:param){
        this.key = param.Key
        this.Type = param.Type

    }
}

function Config(key: string) {
   const configuration:Configuration = new Configuration({
    apiKey:key,
  });
  return configuration
}