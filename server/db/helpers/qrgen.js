// const QRCode = require("qrcode")
import * as QRCode from "qrcode"

export const generateQR = async (text) => {
	try {
		await QRCode.toFile("./qr.png", text)
	} catch (err) {
		console.log(err)
	}
}

generateQR("I LOVE YOU")
