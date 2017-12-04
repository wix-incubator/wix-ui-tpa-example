require('babel-polyfill');
const {baseURL} = require('./test-common');

const virtualConsole = require('jsdom').createVirtualConsole().sendTo(console);
require('jsdom-global')(undefined, {url: baseURL, virtualConsole});

const axios = require('axios');
const {wixAxiosConfig} = require('wix-axios-config');

wixAxiosConfig(axios, {baseURL});
