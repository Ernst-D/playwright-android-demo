/* eslint-disable no-undef */
/* eslint-disable no-console */

import { _android as android  } from "playwright";

const [ device ] = await android.devices();
console.log(`Model: ${device.model()}`);
console.log(`Serial: ${device.serial()}`);
// Take screenshot of the whole device.
await device.screenshot({ path: 'device.png' });

await device.shell('am force-stop com.android.chrome');
const context = await device.launchBrowser();

// Use BrowserContext as usual.
const page = await context.newPage();
await page.goto('https://webkit.org/');
console.log(await page.evaluate(() => window.location.href));
await page.screenshot({ path: 'page.png' });

await context.close();

await device.shell('am force-stop com.android.chrome');

await device.close();

