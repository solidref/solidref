import {v4 as uuid} from "uuid";

export const id = (): string => {
  return uuid();
};