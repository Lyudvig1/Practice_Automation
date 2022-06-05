module.exports = class BasePage {
    async open(url) {
        await browser.maximizeWindow()
        await browser.url(url)
    }
}