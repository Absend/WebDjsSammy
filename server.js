let express = require("express"),
    bodyParser = require("body-parser"),
    low = require("lowdb"),
    openurl = require("openurl");

let db = low("./db/localDb.json");
db.defaults({ users: [], data: [] }).value();
db._.mixin(require("underscore-db"));

let app = express();

let jsonParser = bodyParser.json()
app.use(jsonParser);

let staticMiddleware = express.static("public");
app.use(staticMiddleware);

let data = db.get("data").value();
app.get("/api/data", (req, res, next) => {
    return res.json({
        result: data
    });
});

let port = 3333;
app.listen(port, function () {
    openurl.open(`http://localhost:${port}/index.html`);
    console.log(`Server is running at http://localhost:${port}`);
});
