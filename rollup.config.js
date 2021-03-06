import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"

export default [
  {
    input: [
      "main.js"
    ],
    output: [
      {
        sourcemap: true,
        dir: "dist",
        format: "esm",
      },
    ],
    plugins: [
      resolve(),
      commonjs()
    ],
  },
];
