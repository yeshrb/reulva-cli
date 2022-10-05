'use strict';

module.exports = core;
const index = require('@yestech-cli/utils');
function core() {
    console.log(index());
    return "Hello from core";
}
core();
