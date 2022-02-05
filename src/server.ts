import express from "express"
const PORT = process.env.PORT || 8080
const server = express()

export async function initializeServer(): Promise<void> {
	server.get("/", function (req, res) {
		res.send("Initialized Server!")
	})
	server.use("/api", function (req, res) {
		res.send("cool stuff goes here")
	})
	server.listen(PORT, () => console.log("Server is running."))
}
