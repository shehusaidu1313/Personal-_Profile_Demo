// App Initialisation
const express = require("express"),
  app = express(),
  port = 1357;

//   middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});
// port
app.listen(port, () => {
  console.log(`Server has started serving at pot number:${port}`);
});
