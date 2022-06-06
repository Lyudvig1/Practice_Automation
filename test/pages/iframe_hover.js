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
        let iframeFooter = await this.iframeSectionFooter;
        await iframeFooter.scrollIntoView();
        await iframeFooter.waitForDisplayed();
    }

    get hoverItem() {
        return $("div.nav-outer.clearfix > nav > div.navbar-collapse.collapse.clearfix > ul > li.dropdown > a")
    }

    async hoverToItem() {
        let hover = await this.hoverItem;
        await hover.scrollIntoView();
        await hover.waitForDisplayed();
        await hover.moveTo();
    }

    async selectHoverItem(index) {
        return $(`div.nav-outer.clearfix > nav > div.navbar-collapse.collapse.clearfix > ul > li.dropdown > ul > li:nth-child(${index}) > a`)
    }

    async clickOnHoverItem(index) {
        let hoverClick = await this.selectHoverItem(index);
        await hoverClick.click();
    }

    get selectedPageTitle() {
        return $(".page-title > div > div > h1")
    }

}
module.exports = new IframeHover();