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
        let inputAlert = await this.alertField;
        await inputAlert.setValue(string);
    }

    async clickConfirmBtn() {
        let btnConfirm = await this.confirmBtn;
        await btnConfirm.click();
    }

    async typeInHiddenField(string) {
        let hideInput = await this.hiddenTextField;
        await hideInput.scrollIntoView();
        await hideInput.waitForDisplayed();
        await hideInput.setValue(string);
    }

    async clickOnHiddenBtn() {
        let btnHide = await this.hiddenBtn
        await btnHide.click();
    }

    async clickOnShowBtn() {
        let btnShow = await this.showBtn
        await btnShow.click();
    }

}

module.exports = new Alert();