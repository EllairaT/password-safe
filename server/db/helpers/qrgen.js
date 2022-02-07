const QRCode = require("qrcode")

export const generateQR = async (text) => {
	try {
		await QRCode.toFile("./qr.png", text)
	} catch (err) {
		console.log(err)
	}
}

generateQR("THIS IS A FUTURE LOCK.IO FEATURE :D")
