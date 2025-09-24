/* eslint-disable @typescript-eslint/no-explicit-any */
export type Constructor<T = object, Args extends any[] = any[]> = new (
  ...args: Args
) => T;

export type SingletonClass<T, Args extends any[]> = Constructor<T, Args> & {
  getInstance(): T;
};
