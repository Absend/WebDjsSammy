let express = require("express"),
    bodyParser = require("body-parser"),
    openurl = require("openurl");

let app = express();
// let db = require("./db/db");

let jsonParser = bodyParser.json()
app.use(jsonParser);

let middleware = express.static("public");
app.use(middleware);

let port = 3333;
app.listen(port, function () {
    openurl.open(`http://localhost:${port}/index.html`);
    console.log(`Server is running at http://localhost:${port}`);
});
