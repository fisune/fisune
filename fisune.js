#!/usr/bin/env node

const shell = require("shelljs");
const path = require("path");

shell.exec(`cd ${path.join(__dirname, "")} && npm run rickroll`, {
  silent: true,
});
