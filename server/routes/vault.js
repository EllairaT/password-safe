import express from "express"
const vaultRouter = express.Router()

// Show all
vaultRouter.route("/").get((req, res) => {
	res.send("heyyyy you can find your accounts here ")
})

// Show for one
vaultRouter
	.route("/:id")
	// GET requests
	.get((req, res) => {
		res.send("Show account details here!")
	})
	// POST requests
	.post((req, res) => {
		res.send("Process accounts here!")
	})
	.put((req, res) => {
		res.send("Update account here!")
	})
	.delete((req, res) => {
		res.send("Delete account here!")
	})

export default vaultRouter
