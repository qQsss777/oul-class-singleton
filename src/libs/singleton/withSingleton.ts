/* eslint-disable @typescript-eslint/no-explicit-any */
import { Constructor, SingletonClass } from "./interface.js";

export default function withSingleton<T, Args extends any[]>(
  Target: Constructor<T, Args>,
): SingletonClass<T, Args> {
  //@ts-expect-error type ok, extends a class
  return class Singleton extends Target {
    private static instance: Singleton;

    constructor(...args: Args) {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      super(...args);
      Singleton.instance = this;
    }

    static getInstance(): Singleton {
      if (Singleton.instance) {
        return Singleton.instance;
      } else {
        throw new Error("Instance not intialized, please use new keyword");
      }
    }
  };
}
