/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck because type of singleton class
import { expect, test } from "vitest";
import singleton from "../singletonDecorator.js";

test("Check Singleton Class implementation from decorator", () => {
  @singleton
  class MyClass {
    counter: number;
    name = "foo";
    constructor(value: number) {
      this.counter = value;
    }
  }
  const first = new MyClass(3);
  expect(first.counter).toBe(3);
  const second = new MyClass(6);
  expect(second.counter).toBe(3);
});

test("getInstance method", () => {
  @singleton
  class MyClass {
    counter: number;
    name = "foo";
    constructor(value: number) {
      this.counter = value;
    }
  }
  expect(() => MyClass.getInstance()).toThrowError(
    "Instance not intialized, please use new keyword",
  );
  new MyClass(4);
  expect(() => MyClass.getInstance()).not.toThrowError();
});
