const BasePage = require('./basePage');
class TestPage extends BasePage {

    get productItem() {
        return $(".products div:nth-child(18)");
    }

    async scrollToProductItem() {
        let scroll = await this.productItem;
        await scroll.scrollIntoView();
        let show = await this.productItem;
        await show.waitForDisplayed();
    }

    get searchInput() {
        return $(".search > form > input")
    }

    async searchNameProduct(productName) {
        let searchField = await this.searchInput;
        await searchField.setValue(productName);
    }

    get productTitle() {
        return $(".products-wrapper > div > div > h4");
    };

    get productItems() {
        return $(".cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3) > strong")
    }

    get productPrice() {
        return $(".cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3) > strong")
    }

    get itemQuantityInput() {
        return $(".stepper-input > input");
    };

    async insertItemQuantity(number) {
        let quantityInput = await this.itemQuantityInput;
        await quantityInput.clearValue();
        await quantityInput.waitForDisplayed();
        await quantityInput.setValue(number);
    }

    async sum(number, price) {
        await this.insertItemQuantity(number)
        return number * price;
    }

    get itemAddBtn() {
        return $(".product-action > button");
    }

    async clickOnAddBtn() {
        let clickOnAdd = await this.itemAddBtn;
        await clickOnAdd.click();
    }

    get cartIcon() {
        return $(".cart-icon > img")
    }

    async clickOnCartIcon() {
        let clickCart = await this.cartIcon
        await clickCart.click();
    }

    get cartClickability() {
        return $(".cart > div.cart-preview")
    }

    get cartTotalPrice() {
        return $(".cart-preview.active ul > li >.product-total > p.amount")
    }

    get cartItemsQuantity() {
        return $(".cart-preview.active ul")
    }

    async cartItems() {
        let parent = await this.cartItemsQuantity;
        let child = parent.$$("li");
        return child;
    }

    get proceedBtn() {
        return $(".cart > div.cart-preview.active > div.action-block > button")
    }

    async clickOnProceedBtn() {
        let clickProceed = await this.proceedBtn;
        await clickProceed.click();
    }

    get cartProductList() {
        return $("#productCartTables > tbody")
    }

    async productList() {
        let parent = await this.cartProductList;
        let child = parent.$$("tr")
        return child;
    }

    get amountTotal() {
        return $(".totAmt")
    }

    async totalAmount() {
        let amount = await this.amountTotal;
        amount.getText();
    }

    get amtDiscount() {
        return $(".discountAmt")
    }

    async discountAmt() {
        let amt = await this.amtDiscount;
        amt.getText();
    }

    get placeOrderBtn() {
        return $("#root > div > div > div > div > button")
    }

    async clickOnPlaceOrderBtn() {
        let click = await this.placeOrderBtn;
        click.click();
    }
    get countryList() {
        return $(".wrapperTwo select")
    }

    async countryBox() {
        let hopar = await this.countryList;
        let hopariTxa = hopar.$$("option");
        return hopariTxa;
    }

    async clickOnCountryDropdown() {
        let click = await this.countryList;
        await click.click();
    }

    async getCountryIndex() {
        let arr = await this.countryBox();
        let number = Math.floor(Math.random() * (arr.length - 1) + 1);
        return number;
    }

    async selectCountry(index) {
        await this.clickOnCountryDropdown();
        let countries = await this.countryList;
        await countries.waitForDisplayed();
        let click = await this.countryBox();
        await click[index].click();
    }

    get checkAgree() {
        return $(".chkAgree")
    }

    async clickOnAgreecheckBpx(){
        let displayedBox = await this.checkAgree;
        await displayedBox.waitForDisplayed();
        displayedBox.click();
    }

    get proceedBtnConfirm(){
        return $("#root > div > div > div > div > button")
    }

    async clickProceedBtn(){
        let display = await this.proceedBtnConfirm;
        await display.waitForDisplayed();
        display.click();
    }

    get succesMessage(){
        return $("span*=Thank you, your order has been placed successfully")
    }

}





module.exports = new TestPage();