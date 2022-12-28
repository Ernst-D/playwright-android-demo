describe("appium test suite", async () => {
    it("appium test case", async () => {
        // todo: refactor and add awaits

        /**
         * Forms test
         */
        let el1 = driver.element("~Forms");
        el1.click();
        let el2 = driver.element("~text-input");
        el2.setValue("hello from webdriverIO");
        let el3 = driver.element("~input-text-result");
        el3.click();
        let el4 = driver.element("~switch-text");
        el4.click();
        let el5 = driver.element("~switch");
        el5.click();
        let el6 = driver.element("~switch-text");
        el6.click();
        let el7 = driver.element("~Dropdown");
        el7.click();
        let el8 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]");
        el8.click();
        let el9 = driver.element("//android.view.ViewGroup[@content-desc=\"Dropdown\"]/android.view.ViewGroup/android.widget.EditText");
        el9.click();
        let el10 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]");
        el10.click();
        let el11 = driver.element("~button-Inactive");
        el11.click();
        let el12 = driver.element("~button-Active");
        el12.click();
        // check also android:id/button3 by id
        let el13 = driver.element("android:id/content");
        el13.click();
        let el14 = driver.element("android:id/message");
        el14.click();
        let el15 = driver.element("android:id/button1");
        el15.click();


        /**
         * Swipe tests
         */

        let el17 = driver.element("~Swipe");
el17.click();
driver.touchAction([
  {action: 'press', x: [object Object], y: undefined},
  {action: 'moveTo', x: undefined, y: undefined},
  'release'
]);
driver.touchAction([
  {action: 'press', x: [object Object], y: undefined},
  {action: 'moveTo', x: undefined, y: undefined},
  'release'
]);
    });
    let el18 = driver.element("(//android.view.ViewGroup[@content-desc=\"card\"])[1]");
el18.click();
});