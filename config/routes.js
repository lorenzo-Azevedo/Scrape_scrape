var scrape = require("../scripts/scrape");
var headlinesController = require("../controllers/headlines");

module.exports = function(router) {
    router.get("/", function(req, res) {
        res.render("home");
    });
    router.get("/api/fetch", function(req, res) {
        headlinesController.fetch(function(err, docs) {
            if (!docs || docs.insertedCount === 0) {
                res.json({
                    message: "No new articles"
                });
            }
            else {
                res.json({
                    message: "Added " + docs.insertedCount + " new articles"
                });
            }
        });
    });
}