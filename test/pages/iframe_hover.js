const { default: setValue } = require("webdriverio/build/commands/element/setValue");
const BasePage = require("../pages/basePage");
class IframeHover extends BasePage {

    get iframeSection() {
        return $("#courses-iframe")
    }

    async switchToIframe() {
        let iframe = await this.iframeSection;
        await iframe.scrollIntoView();
        await browser.switchToFrame(iframe);
    }

    get iframeSectionFooter() {
        return $("footer > div > div > div > div:nth-child(1) > div > a")
    }

    async scrollIntoIframeFooter() {
        await (await this.iframeSectionFooter).scrollIntoView();
        await (await this.iframeSectionFooter).waitForDisplayed();
    }

    get hoverItem() {
        return $("div.nav-outer.clearfix > nav > div.navbar-collapse.collapse.clearfix > ul > li.dropdown > a")
    }

    async hoverToItem() {
        await (await this.hoverItem).scrollIntoView();
        await (await this.hoverItem).waitForDisplayed();
        await (await this.hoverItem).moveTo();
    }

    async selectHoverItem(index) {
        return $(`div.nav-outer.clearfix > nav > div.navbar-collapse.collapse.clearfix > ul > li.dropdown > ul > li:nth-child(${index}) > a`)
    }

    async clickOnHoverItem(index) {
        await (await this.selectHoverItem(index)).click();
    }

    get selectedPageTitle() {
        return $(".page-title > div > div > h1")
    }

}
module.exports = new IframeHover();