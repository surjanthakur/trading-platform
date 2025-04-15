const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const engine = require("ejs-mate");

const zerodha = require("./routes/zerodha")
const users = require("./routes/users")

// Set up EJS with ejs-mate
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/boilerplate"); // Default layout file
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

// Middleware
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", zerodha)
app.use("/", users)


// Start server
app.listen(8080, () => {
    console.log("App is listening on port 8080");
});
