/* eslint-disable @typescript-eslint/no-explicit-any */
import { Constructor } from "./interface.js";
import withSingleton from "./withSingleton.js";

export default function singleton<T, Args extends any[]>(
  Target: Constructor<T, Args>,
) {
  return withSingleton(Target);
}
