let express = require("express"),
    bodyParser = require("body-parser"),
    low = require("lowdb"),
    openurl = require("openurl"),
    underscoreDb = require("underscore-db");

let db = low("./db/localDb.json");
db.defaults({ users: [], data: [] }).value();
db._.mixin(underscoreDb);

let app = express();

let jsonParser = bodyParser.json()
app.use(jsonParser);

let staticMiddleware = express.static("public");
app.use(staticMiddleware);

let data = db.get("data").value();
let users = db.get("users").value();
app
    .get("/api/data", (req, res) => {
        return res.json({
            result: data
        }); 
    })
    .get("/api/users", (req, res) => {
        return res.json({
            result: users
        });
    })
    .post("/api/newUser", (req, res)=>{
        let user = req.body;
        db.get("users")
            .insert(user)
            .value().status(200);
    });

let port = 3333;
app.listen(port, function () {
    openurl.open(`http://localhost:${port}/index.html`);
    console.log(`Server is running at http://localhost:${port}`);
});
