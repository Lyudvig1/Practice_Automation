const OpenPage = require('../pageobjects/page');
const PageNew = require('../pageobjects/testPage');
const expects = require('chai').expect;

describe('GreenKart - veg and fruits kart testing', () => {
    before(async () => {
        await OpenPage.open(env.BASE_URL);
    });

    it('Should check page URL and Title', async () => {
        let pageUrl = await browser.getUrl();
        let title = await browser.getTitle();
        expects(await pageUrl).to.contain(env.BASE_URL);
        expects(await title).to.be.equals(env.BASE_TITLE);
    });

    it('Should add product in cart popup', async () => {
        await PageNew.scrollToProductItem();
        let displayItem = await PageNew.productItem;
        expects(await displayItem.isDisplayed()).to.be.true;
        await PageNew.searchNameProduct("Mango");
        let displayTitle = await PageNew.productTitle;
        await displayTitle.waitForDisplayed();
        let sumResult = await PageNew.sum(5, 75);
        let sumString = sumResult + "";
        await PageNew.clickOnAddBtn();
        await expect(PageNew.itemAddBtn).toHaveElementClass("added");
        expects(await (await PageNew.productPrice).getText()).to.contain(sumString);
        await PageNew.clickOnCartIcon();
        await expect(PageNew.cartClickability).toHaveElementClass("active");
        expects(await (await PageNew.cartTotalPrice).getText()).to.contain(sumString);
    })

    it("Check the product items list in cart popup and navigate to the chekckout section", async () => {
        let items = await PageNew.cartItems();
        await expect(items).toHaveLength(1)
        await PageNew.clickOnProceedBtn();
        await browser.getUrl();
        await expect(browser).toHaveUrlContaining("cart");
    })

    it("Check the product items list in cart section", async () => {
        let productList = await PageNew.productList();
        await expect(productList).toHaveLength(1);
        let total = await PageNew.totalAmount();
        let disc = await PageNew.discountAmt();
        expects(total).to.be.equals(disc);
    })

    it("Navigate to the checkout section", async () => {
        await PageNew.clickOnPlaceOrderBtn();
        await browser.getUrl();
        await expect(browser).toHaveUrlContaining("country");
    })

    it("Should select country in country box", async () => {
        await PageNew.clickOnCountryDropdown();
        let number = await PageNew.getCountryIndex();
        await PageNew.selectCountry(number)
        let list = await PageNew.countryBox();
        expects(await list[number].isSelected()).to.be.true;
        await PageNew.clickOnAgreecheckBpx();
        let chekBoxSelected = await PageNew.checkAgree
        expects(await chekBoxSelected.isSelected()).to.be.true;
    })

    it("Should check order message", async () =>{
        await PageNew.clickProceedBtn();
        let message = await PageNew.succesMessage;
        expects(await message.isDisplayed()).to.be.true;
        
    })


});


