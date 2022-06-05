const { default: setValue } = require("webdriverio/build/commands/element/setValue");
const BasePage = require("../pages/basePage");
class Alert extends BasePage {

    get alertField() {
        return $("#name")
    }

    get confirmBtn() {
        return $("#confirmbtn")
    }

    get hiddenTextField() {
        return $("#displayed-text");
    }

    get hiddenBtn() {
        return $("#hide-textbox")
    }

    get showBtn() {
        return $("#show-textbox")
    }

    async typeInAlertField(string) {
        await (await this.alertField).setValue(string);
    }

    async clickConfirmBtn() {
        await (await this.confirmBtn).click()
    }

    async typeInHiddenField(string) {
        await (await this.hiddenTextField).scrollIntoView();
        await (await this.hiddenTextField).waitForDisplayed();
        await (await this.hiddenTextField).setValue(string);
    }

    async clickOnHiddenBtn() {
        await (await this.hiddenBtn).click();
    }

    async clickOnShowBtn() {
        await (await this.showBtn).click();
    }

}

module.exports = new Alert();