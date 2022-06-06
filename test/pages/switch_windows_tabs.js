const { default: setValue } = require("webdriverio/build/commands/element/setValue");
const BasePage = require("../pages/basePage");
class Switch extends BasePage {

    get linkNewWindow() {
        return $("#openwindow")
    }

    async clickOnNewWindow() {
        let linkTo = await this.linkNewWindow;
        await linkTo.waitForDisplayed();
        await linkTo.click();
    }

    get popUpTitle() {
        return $(" span > div > div:nth-child(4) > div > div > p")
    }

    get cancelIcon() {
        return $(" div.sumome-react-wysiwyg-component.sumome-react-wysiwyg-outside-horizontal-resize-handles.sumome-react-wysiwyg-outside-vertical-resize-handles.sumome-react-wysiwyg-close-button.sumome-react-wysiwyg-popup-image.sumome-react-wysiwyg-image > div > div > div:nth-child(2)")
    }

    async clickCancelIcon() {
        let cancelBtn = await this.cancelIcon;
        await cancelBtn.click();
    }

    get navigateToWindowFooter() {
        return $("#about-reviews > div.tint")
    }

    async scrollToFooter() {
        let scrollTo = await this.navigateToWindowFooter;
        await scrollTo.scrollIntoView();
    }

    get linkNewTab() {
        return $('//*[@id="opentab"]')
    }

    async clickOnOpenTab() {
        let openTab = await this.linkNewTab;
        await openTab.waitForDisplayed();
        await openTab.click();
    }

    get getItemInNewtab() {
        return $("footer > div > div > div > div:nth-child(2) > ul > li:nth-child(1) > a")
    }

    async clickOnItem() {
        let clickItem = await this.getItemInNewtab;
        await clickItem.scrollIntoView();
        await clickItem.waitForDisplayed();
        await clickItem.click();
    }

    get aboutUsPageTitle() {
        return $(".page-title  h1")
    }

}

module.exports = new Switch();