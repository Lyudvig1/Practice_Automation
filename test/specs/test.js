const { elementToBeSelected } = require('wdio-wait-for');
const { typeText } = require('../pages/page');
const Items = require('../pages/select_items');
const expect = require('chai').expect;
const OpenPage = require('../pages/page');
const SwitchTo = require('../pages/switch_windows_tabs');
const Shows = require('../pages/alert_hide_show');
const FrameHover = require('../pages/iframe_hover');
describe("Testing /Automation Practice/ page", () => {
    before(async () => {
        await OpenPage.open(env.BASE_URL);
    });

    it.only("Select the radio button", async () => {
        await (await Items.radioButtons(2)).waitForDisplayed();
        await Items.radioBtnAction(2);
        expect(await (await Items.radioButtons(2)).isSelected()).to.be.true;
    });

    it.only(" Select an item from the dynamic dropdown", async () => {
        await Items.clickExampleDropdown();
        await (await Items.dynamicDropDown(2)).isExisting();
        await Items.clickDropDownItem(2)
        expect(await (await Items.exampleDropdown).getText()).to.contain("Option1");
    });

    it("Select an option from the checkbox", async () => {
        await (await Items.checkbox).waitForDisplayed()
        await Items.selectCheckbox();
        expect(await (await Items.checkboxes).isSelected()).to.be.true;
    })

    it("Typing text in the search field", async () => {
        await Items.typeText();
        expect(await (await Items.textField).getValue()).to.be.equals("Albania");
    })

    it("Select the coutntry in search dropdown", async () => {
        await Items.selectTheCountry();
        await (await Items.textField).waitForDisplayed();
        expect(await (await Items.textField).getValue()).to.contain("Albania");
    })

    it("Navigate to the new window", async () => {
        await SwitchTo.clickOnNewWindow();
        await browser.switchWindow("qaclickacademy.com")
        await SwitchTo.popUpTitle.waitForDisplayed();
        expect(await (await SwitchTo.popUpTitle).getText()).to.contain("Join Our Newsletter");
        await SwitchTo.clickCancelIcon();
    })

    it("Should scroll down to the page footer section", async () => {
        await SwitchTo.scrollToFooter();
        await (await SwitchTo.navigateToWindowFooter).waitForDisplayed();
        expect(await (await SwitchTo.navigateToWindowFooter).isDisplayed()).to.be.true;
        await browser.pause(3000);
        await browser.closeWindow();
    })

    it("Navigate to the new tab", async () => {
        await browser.switchWindow("Practice Page")
        await SwitchTo.clickOnOpenTab();
        await browser.switchWindow("Rahul Shetty Academy");
        expect(await (await browser.getUrl())).to.be.equals("https://www.rahulshettyacademy.com/");
    })

    it("Should scroll down to the selected item and click on it", async () => {
        await SwitchTo.clickOnItem();
        await browser.switchWindow("Rahul Shetty Academy")
        expect(await (await browser.getUrl())).to.be.equals("https://www.rahulshettyacademy.com/about-my-mission");
        await (await SwitchTo.aboutUsPageTitle).waitForDisplayed();
        expect(await (await SwitchTo.aboutUsPageTitle).getText()).to.be.equals("ABOUT US")
        await browser.pause(3000);
    })

    it("Check alert functionality", async () => {
        await browser.switchWindow("Practice Page");
        await Shows.typeInAlertField("Joe");
        await Shows.clickConfirmBtn();
        expect(await (await browser.isAlertOpen())).to.be.true;
        expect(await (await browser.getAlertText())).to.contain("Joe");
        await browser.dismissAlert();
        expect(await (await browser.isAlertOpen())).to.be.false;
    })

    it("Checked hide/show input field", async () => {
        await Shows.typeInHiddenField("PC");
        await Shows.clickOnHiddenBtn();
        expect(await (await Shows.hiddenTextField).isDisplayed()).to.be.false;
        await Shows.clickOnShowBtn();
        expect(await (await Shows.hiddenTextField).isDisplayed()).to.be.true;
        await browser.pause(2000);
        expect(await (await Shows.hiddenTextField).getValue()).to.be.equals("PC");

    })

    it("Navigate to the iframe section", async () => {
        await FrameHover.switchToIframe();
        await FrameHover.scrollIntoIframeFooter();
        expect(await (await FrameHover.iframeSectionFooter).getText()).to.contain("RahulShettyAcademy");
    })

    it("Select the item in iframe section", async () => {
        await FrameHover.hoverToItem();
        await FrameHover.clickOnHoverItem(2);
        expect(await (await FrameHover.selectedPageTitle).getText()).to.be.equals("PART TIME JOBS")
        await browser.pause(2000);
    })

});