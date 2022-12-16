import test, { AndroidDevice, AndroidWebView } from "@playwright/test";

test.describe("Base Android suite", () => {
    let webView: AndroidWebView; 
    let _device: AndroidDevice;

    test.beforeAll(async ({ playwright  }) => {
        const android  = playwright._android;
        const [ device ] = await android.devices();
        _device = device;
        console.info(`Model: ${_device.model()}`);
        console.info(`Serial: ${_device.serial()}`);
        await _device.shell('am force-stop com.wdiodemoapp');
        await _device.shell('am start com.wdiodemoapp/.MainActivity');
        webView = await _device.webView({ pkg: "com.wdiodemoapp" });
    });

    test.afterAll(async () => {
        await _device.shell('am force-stop com.wdiodemoapp');
        await _device.close();
    });

    test("Open webview", async () => {
        await _device.wait({ desc: "Webview" });
        debugger;
        await _device.tap({ desc: "Webview" });
        const page = await webView.page();
        await page.pause();
        debugger;
    });
});