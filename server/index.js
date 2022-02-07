const express = require("express")
const app = express()

const PORT = 3001

// Routes
app.get("/", (req, res) => {
	res.send("Hey 🔥")
})

app.get("/test", (req, res) => {
	res.status(200).json({ success: true })
})

app.listen(PORT, () => {
	console.log("Server is running 🔥")
})
