const { default: setValue } = require("webdriverio/build/commands/element/setValue");
const BasePage = require("../pages/basePage")
class SelectItems extends BasePage {

    async radioButtons(index) {
        return $(`label:nth-child(${index}) .radioButton`);
    }

    async radioBtnAction(index) {
        await (await this.radioButtons(index)).waitForDisplayed();
        await (await this.radioButtons(index)).click();
    }

    get exampleDropdown() {
        return $("#dropdown-class-example");
    }
    async clickExampleDropdown() {
        await (await this.exampleDropdown).click();
    }

    async dynamicDropDown(index) {
        return $(`#dropdown-class-example option:nth-child(${index})`)
    }

    async clickDropDownItem(index) {
        await (await this.dynamicDropDown(index)).waitForDisplayed();
        await (await this.dynamicDropDown(index)).click();
    }

    get checkbox() {
        return $("#checkbox-example legend");
    }

    get checkboxes() {
        return $("#checkBoxOption1");
    }

    async selectCheckbox() {
        await (await this.checkboxes).click();
    }

    get textField() {
        return $("#autocomplete")
    }

    async typeText() {
        await (await this.textField).setValue("Albania");
    }

    get searchDropdown() {
        return $("#ui-id-1 > li:nth-child(1)")
    }

    async selectTheCountry() {
        await (await this.searchDropdown).waitForDisplayed();
        await (await this.searchDropdown).click();

    }


}

module.exports = new SelectItems();