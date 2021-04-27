const app = require("../model/serverConnection");


function Render(dir) {
    const pages = [
        "about",
        "cart",
        "checkout",
        "constact-us",
        "gallery",
        "index",
        "login",
        "my-account",
        "register",
        "shop-detail",
        "shop",
        "wishlist",
    ];

    pages.forEach((page) => {
        app.use(dir + page, (req, res, next) => {
            res.render(page);
            next();
        });
    });
}

module.exports = {
    Render,
};
