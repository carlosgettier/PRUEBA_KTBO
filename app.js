const express = require("express")
const app = express()
const path = require("path")
const methodOverride = require ('method-override');
app.listen(3000, () => console.log("corriendo en el puerto 3000"))

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src/views"))
app.use(methodOverride('_method'));

const mainRouter = require("./src/router/mainRouter")

app.use("/", mainRouter)


