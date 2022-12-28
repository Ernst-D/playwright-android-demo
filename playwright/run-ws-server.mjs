/* eslint-disable no-console */
import { _android } from "playwright";

// ernst: useful for remote execution or when you have device-farm
const browserServer = await _android.launchServer({
    // If you have multiple devices connected and want to use a specific one.
    // deviceSerialNumber: '<deviceSerialNumber>',
});
const wsEndpoint = browserServer.wsEndpoint();
console.log(wsEndpoint);