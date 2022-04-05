import { Key } from "../config.json";
export const OpenKey: string = process.env.KEY || Key;
export interface param {
  Key: string;
  Type: string;
}
