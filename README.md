# Singleton libs

## Features
This package is used to transform class to singleton. Two methods:
- from a function called withSingleton
- from a decorator @singleton

## Installation

```
npm i @qqsss777/oul-class-singleton
```

## Usages

### Functionnal pattern

Export the class with the function withSingleton, e.g.

```
const SampleClass = withSingleton(
    class MyClass {
      counter: number;
      name = "foo";
      constructor(value: number) {
        this.counter = value;
      }
    },
  );

export default SampleClass;
```

### decorator pattern
First, set experimentalDecorators to true in tsconfig.json. Then add decorator @singleton at the top of the class, e.g.
```
@singleton
class MyClass {
    counter: number;
    name = "foo";
    constructor(value: number) {
      this.counter = value;
    }
}
```
## License
This project is licensed under the MIT License – see the LICENSE
 file for details.