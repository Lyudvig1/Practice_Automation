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

    it("Select the radio button", async () => {
        let selectRadioBtn = await Items.radioButtons(2);
        await selectRadioBtn.waitForDisplayed();
        await Items.radioBtnAction(2);
        expect(await selectRadioBtn.isSelected()).to.be.true;
    });

    it(" Select an item from the dynamic dropdown", async () => {
        let dropdownDynamic = await Items.dynamicDropDown(2);
        let itemName = await Items.exampleDropdown;
        await Items.clickExampleDropdown();
        await dropdownDynamic.isExisting();
        await Items.clickDropDownItem(2)
        expect(await itemName.getText()).to.contain("Option1");
    });

    it("Select an option from the checkbox", async () => {
        let checkbox = await Items.checkbox;
        let checkboxes = await Items.checkboxes;
        await checkbox.waitForDisplayed()
        await Items.selectCheckbox();
        expect(await checkboxes.isSelected()).to.be.true;
    })

    it("Typing text in the search field", async () => {
        let searchInputField = await Items.textField;
        await Items.typeText();
        expect(await searchInputField.getValue()).to.be.equals("Albania");
    })

    it("Select the coutntry in search dropdown", async () => {
        let searchInput = await Items.textField;
        await Items.selectTheCountry();
        await searchInput.waitForDisplayed();
        expect(await searchInput.getValue()).to.contain("Albania");
    })

    it("Navigate to the new window", async () => {
        let popUpTitle = await SwitchTo.popUpTitle;
        await SwitchTo.clickOnNewWindow();
        await browser.switchWindow("qaclickacademy.com")
        await SwitchTo.popUpTitle.waitForDisplayed();
        expect(await popUpTitle.getText()).to.contain("Join Our Newsletter");
        await SwitchTo.clickCancelIcon();
    })

    it("Should scroll down to the page footer section", async () => {
        let footer = await SwitchTo.navigateToWindowFooter;
        await SwitchTo.scrollToFooter();
        await footer.waitForDisplayed();
        expect(await footer.isDisplayed()).to.be.true;
        await browser.pause(3000);
        await browser.closeWindow();
    })

    it("Navigate to the new tab", async () => {
        await browser.switchWindow("Practice Page")
        await SwitchTo.clickOnOpenTab();
        await browser.switchWindow("Rahul Shetty Academy");
        let tabUrl = await browser.getUrl();
        expect(await tabUrl).to.be.equals("https://www.rahulshettyacademy.com/");
    })

    it("Should scroll down to the selected item and click on it", async () => {
        await SwitchTo.clickOnItem();
        await browser.switchWindow("Rahul Shetty Academy")
        let windowUrl = await browser.getUrl();
        expect(await windowUrl).to.be.equals("https://www.rahulshettyacademy.com/about-my-mission");
        await (await SwitchTo.aboutUsPageTitle).waitForDisplayed();
        let pageTitle = await SwitchTo.aboutUsPageTitle;
        expect(await pageTitle.getText()).to.be.equals("ABOUT US")
        await browser.pause(3000);
    })

    it("Check alert functionality", async () => {
        await browser.switchWindow("Practice Page");
        await Shows.typeInAlertField("Joe");
        await Shows.clickConfirmBtn();
        let alertOpened = await browser.isAlertOpen();
        expect(await alertOpened).to.be.true;
        let alertText = await browser.getAlertText();
        expect(await alertText).to.contain("Joe");
        await browser.dismissAlert();
        let alertClosed = await browser.isAlertOpen();
        expect(await alertClosed).to.be.false;
    })

    it("Checked hide/show input field", async () => {
        await Shows.typeInHiddenField("PC");
        await Shows.clickOnHiddenBtn();
        let hideInput = await Shows.hiddenTextField;
        expect(await hideInput.isDisplayed()).to.be.false;
        await Shows.clickOnShowBtn();
        let showInput = await Shows.hiddenTextField;
        expect(await showInput.isDisplayed()).to.be.true;
        await browser.pause(2000);
        expect(await showInput.getValue()).to.be.equals("PC");

    })

    it("Navigate to the iframe section", async () => {
        let iframeFooter = await FrameHover.iframeSectionFooter;
        await FrameHover.switchToIframe();
        await FrameHover.scrollIntoIframeFooter();
        expect(await iframeFooter.getText()).to.contain("RahulShettyAcademy");
    })

    it("Select the item in iframe section", async () => {
        await FrameHover.hoverToItem();
        await FrameHover.clickOnHoverItem(2);
        let newPageTitle = await FrameHover.selectedPageTitle;
        expect(await newPageTitle.getText()).to.be.equals("PART TIME JOBS")
        await browser.pause(2000);
    })

});