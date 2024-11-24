const express = require('express');
const { engine } = require('express-handlebars'); // Sử dụng { engine } thay cho expressHbs
const app = express();
const port = 3000;
const { createPagination } = require('express-handlebars-paginate');

// Cấu hình thư mục web tĩnh
app.use(express.static(__dirname + "/html"));

// Cấu hình sử dụng view template
app.engine(
    "hbs",
    engine({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: ".hbs", // Lưu ý sửa thành .hbs
        defaultLayout: "layout",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
        },
        helpers: {
            createPagination,
            formatDate: (date) => {
                return new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });
            },
        }
    })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => res.redirect("/blogs"));
app.use("/blogs", require("./routes/blogRouter")); 

// Lắng nghe server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
