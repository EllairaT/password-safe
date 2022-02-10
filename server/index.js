import express from "express"
import vaultRouter from "./routes/vault.js"
const app = express()

const PORT = 3001

// Routes
app.get("/", (req, res) => {
	res.send("Hey 🔥")
})

app.get("/test", (req, res) => {
	res.send("Test page!")
})

app.use("/vault", vaultRouter)

app.listen(PORT, () => {
	console.log("Server is running 🔥")
})
