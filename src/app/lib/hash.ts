import bcrypt from "bcrypt"

export async function hashPassword(pass: string | Buffer) {
	const hash = await bcrypt.hash(pass, 5)

	const result = await bcrypt.compare(pass, hash)

	console.log(hash)
	console.log(result) //should be true
}

hashPassword("Vipera")
