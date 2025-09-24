import { expect, test } from "vitest";
import withSingleton from "../withSingleton.js";

test("Check Singleton Class implementation", () => {
  const SampleClass = withSingleton(
    class MyClass {
      counter: number;
      name = "foo";
      constructor(value: number) {
        this.counter = value;
      }
    },
  );
  const first = new SampleClass(3);
  const second = new SampleClass(6);
  const equality = first === second;
  expect(equality).toBe(true);
  expect(second.counter).toBe(3);
});

test("getInstance method", () => {
  const SampleClassTwo = withSingleton(
    class MyClass {
      counter: number;
      name = "foo";
      constructor(value: number) {
        this.counter = value;
      }
    },
  );
  expect(() => SampleClassTwo.getInstance()).toThrowError(
    "Instance not intialized, please use new keyword",
  );
  new SampleClassTwo(4);
  expect(() => SampleClassTwo.getInstance()).not.toThrowError();
});
