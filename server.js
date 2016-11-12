let express = require("express"),
    bodyParser = require("body-parser"),
    openurl = require("openurl"),
    low = require("lowdb");

let db = low("./db/localDb.json");
db.defaults({ users: [], data: [] }).value();
db._.mixin(require("underscore-db"));

let data = db.get("data").value();

let app = express();

let jsonParser = bodyParser.json()
app.use(jsonParser);

let staticMiddleware = express.static("public");
app.use(staticMiddleware);

app.get("/api/data", (req, res) => {
    return res.status(200).json({
        result: data
    });
});

console.log(JSON.parse(data));

let port = 3333;
app.listen(port, function () {
    openurl.open(`http://localhost:${port}/index.html`);
    console.log(`Server is running at http://localhost:${port}`);
});
