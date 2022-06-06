const { default: setValue } = require("webdriverio/build/commands/element/setValue");
const BasePage = require("../pages/basePage")
class SelectItems extends BasePage {

    async radioButtons(index) {
        return $(`label:nth-child(${index}) .radioButton`);
    }

    async radioBtnAction(index) {
        let radioBtn = await this.radioButtons(index);
        await radioBtn.waitForDisplayed();
        await radioBtn.click();
    }

    get exampleDropdown() {
        return $("#dropdown-class-example");
    }
    async clickExampleDropdown() {
        let dropdownClick = await this.exampleDropdown;
        await dropdownClick.click();
    }

    async dynamicDropDown(index) {
        return $(`#dropdown-class-example option:nth-child(${index})`)
    }

    async clickDropDownItem(index) {
        let itemClick = await this.dynamicDropDown(index)
        await itemClick.waitForDisplayed();
        await itemClick.click();
    }

    get checkbox() {
        return $("#checkbox-example legend");
    }

    get checkboxes() {
        return $("#checkBoxOption1");
    }

    async selectCheckbox() {
        let boxSelect = await this.checkboxes;
        await boxSelect.click();
    }

    get textField() {
        return $("#autocomplete")
    }

    async typeText() {
        let fillInput = await this.textField;
        await fillInput.setValue("Albania");
    }

    get searchDropdown() {
        return $("#ui-id-1 > li:nth-child(1)")
    }

    async selectTheCountry() {
        let countrySelect = await this.searchDropdown;
        await countrySelect.waitForDisplayed();
        await countrySelect.click();

    }


}

module.exports = new SelectItems();