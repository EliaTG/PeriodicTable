const express = require("express");
const path = require('path');
const app = express();
const expressHbs = require("express-handlebars");
const {engine} = require("express-handlebars")
const HomeRouter = require("./routes/HomeRouter")


app.engine("hbs", expressHbs.engine({
     extname: 'hbs', defaultLayout: "main"},
     ))
app.set("view engine", "hbs")
app.set("views", "views")

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(HomeRouter.route)

app.use((req,res, next) => {
    res.status(404).render("404", {layout: false});
});

app.listen(5050, () => {
    console.log('App listening to port', 5050);
})