## NodeJS Continued

* We talked about the diffrence between `dependencies` and `devDependencies` 
* We saw how to install the typescript compiler into the package
* We saw how to create the `tsconfig.json` file and configure different aspects of the typescript project
  * What the target version of javascript is
  * Where to locate the source files
  * Where to place the compiled files
  * Libreries to include
  * Adding `map` files to support debugging
  * Running in the compiler in `watch` mode for continous compilation
* We saw how to configure the `VS Code Debugger` for work with our `node.js` project

## Typescript Continued
  * Typed arrays: `number[]` and `Array<number>`
  * Tuples: `[number, number], [string, boolean, number]`
  * Fixed object notation: `{x: number, y: boolean}`
  * Flexible object notation: `{[key: string]: number}` and the equivilent: `Record<string, number>`
  * Function notation: `(x: number, y: string) => boolean` 
  * Using interfaces
  * Typescript definition for **Type Safety** as "signature compatible"
  * Union Types
  * Cross Types
  * Mapped types
