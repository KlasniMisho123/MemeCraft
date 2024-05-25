import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "1"] });
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
