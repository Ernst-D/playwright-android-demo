/* eslint-disable @typescript-eslint/ban-types */
import { AndroidDevice, test as base } from "@playwright/test";

export const test = base.extend<{ device: AndroidDevice }>({
    device: async ({ playwright }, use ) => {
        const android  = playwright._android;
        const [ device ] = await android.devices();
        console.info(`Model: ${device.model()}`);
        console.info(`Serial: ${device.serial()}`);
        await device.shell('am force-stop com.wdiodemoapp');
        await device.shell('am start com.wdiodemoapp/.MainActivity'); 
        await use(device);

        await device.shell('am force-stop com.wdiodemoapp');
        await device.close();
    }
});

export { expect } from "@playwright/test";