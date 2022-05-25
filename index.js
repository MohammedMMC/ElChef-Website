//Developed By MohammedMMc#1234 - https://github.com/MohammedMMC
const express = require('express');
const path = require('path');
const app = express();

app.listen(process.env.PORT || 5500);
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "./public")));


app.use("/", (req, res) => {
    res.render("index.ejs", {
        avatar: "https://cdn.discordapp.com/avatars/280005397983789056/11752b012ac38e5c1fecca3133e665b2.png",
        song: "https://file-examples.com/storage/fe6bd68931628d5b79b8f47/2017/11/file_example_MP3_1MG.mp3"
    });
    // avatar : its ELChef Avatar url or path
    // song : its ELChef Song url or path
    // THE PATH MUST ME START WITH /public/MYSONG.mp3 AND THE SONG MUST BE IN THE public folder!!
});