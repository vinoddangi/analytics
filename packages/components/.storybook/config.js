import { configure } from "@storybook/react";

const req = require.context("../src", true, /\.story\.(js|jsx)$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
