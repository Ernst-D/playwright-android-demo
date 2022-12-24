import { test } from "core/fixtures/launch-app.fixture";

test.describe("Base Android suite", () => {
    test("Open webview", async ({ device }) => {
        let webView = await device.webView({ pkg: "com.wdiodemoapp" });
        await device.wait({ desc: "Webview" });
        debugger;
        await device.tap({ desc: "Webview" });
        const page = await webView.page();
        await page.pause();
        debugger;
    });
});