
const BasePage = require("./basePage")
class Page extends BasePage {

    open(url) {
        return super.open(url);
    }
}

module.exports = new Page();

