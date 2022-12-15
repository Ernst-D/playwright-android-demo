import { _android } from "playwright";

const [ device ] = await _android.devices();

console.info(`Model: ${device.model()}`);
console.info(`Serial: ${device.serial()}`);
// Take screenshot of the whole device.
await device.screenshot({ path: 'device.png' });

await device.shell('am force-stop com.wdiodemoapp');
await device.shell('am start com.wdiodemoapp/.MainActivity');
const webView = await device.webView({ pkg: "com.wdiodemoapp" });
/**
 * ernst: pw-android uses UiSelector class (see https://developer.android.com/reference/android/support/test/uiautomator/UiSelector#description)
 * and UIAutomator2 as automation driver
 */
await device.tap({ desc: "Webview" });
// todo: add native tap to webview icon
const page = await webView.page();
await page.pause();

debugger;

await device.shell('am force-stop com.wdiodemoapp');
await device.close();