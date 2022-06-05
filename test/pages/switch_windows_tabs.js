const { default: setValue } = require("webdriverio/build/commands/element/setValue");
const BasePage = require("../pages/basePage");
class Switch extends BasePage {

    get linkNewWindow() {
        return $("#openwindow")
    }

    async clickOnNewWindow() {
        await (await this.linkNewWindow).waitForDisplayed();
        await (await this.linkNewWindow).click();
    }

    get popUpTitle() {
        return $(" span > div > div:nth-child(4) > div > div > p")
    }

    get cancelIcon() {
        return $(" div.sumome-react-wysiwyg-component.sumome-react-wysiwyg-outside-horizontal-resize-handles.sumome-react-wysiwyg-outside-vertical-resize-handles.sumome-react-wysiwyg-close-button.sumome-react-wysiwyg-popup-image.sumome-react-wysiwyg-image > div > div > div:nth-child(2)")
    }

    async clickCancelIcon() {
        await (await this.cancelIcon).click();
    }

    get navigateToWindowFooter() {
        return $("#about-reviews > div.tint")
    }

    async scrollToFooter() {
        await (await this.navigateToWindowFooter).scrollIntoView();
    }

    get linkNewTab() {
        return $('//*[@id="opentab"]')
    }

    async clickOnOpenTab() {
        await (await this.linkNewTab).waitForDisplayed();
        await (await this.linkNewTab).click();
    }

    get getItemInNewtab() {
        return $("footer > div > div > div > div:nth-child(2) > ul > li:nth-child(1) > a")
    }

    async clickOnItem() {
        await (await this.getItemInNewtab).scrollIntoView();
        await (await this.getItemInNewtab).waitForDisplayed();
        await (await this.getItemInNewtab).click();
    }

    get aboutUsPageTitle() {
        return $(".page-title  h1")
    }

}

module.exports = new Switch();