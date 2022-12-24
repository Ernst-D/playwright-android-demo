import { test, expect } from "core/fixtures/launch-app.fixture";

test.describe("Base Android suite", () => {
    test("Open webview", async ({ device }) => {
        await device.wait({ desc: "Forms" });
        await device.tap({ desc: "Forms" });
        await device.wait({ desc: 'text-input' }
            , { timeout: 6000 }
        ); 
        await device.fill({ desc: 'text-input' }, "Test text");    
        await expect(
            device.wait({ desc: 'input-text-result', text: "Test text" })
        ).resolves.toBeUndefined();
        debugger;
    });
});