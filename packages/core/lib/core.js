'use strict';

module.exports = core;
const index = require('@reulav-cli/utils');
function core() {
    console.log(index());
    return "Hello from core";
}
core();
