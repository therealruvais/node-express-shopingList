const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", "pages");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", adminRoutes.routes);
app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "ERROR" });
});

app.listen(3000, () => {
  console.log("locahost port is runing at 3000");
});
