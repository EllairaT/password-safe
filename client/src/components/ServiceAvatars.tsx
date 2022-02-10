import React from "react"
import Avatar from "@mui/material/Avatar"

// I have no idea what this even means and I'm scared to touch it
// taken from https://www.petermorlion.com/iterating-a-typescript-enum/
// dont need this rn but who knows lmao
function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
	return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[]
}

enum EIconOptions {
	facebook,
	twitter,
	instagram,
	tiktok,
	snapchat,
	tumblr,
	reddit,
	youtube,
	amongus,
	linkedin,
}

export type IconKeys = keyof typeof EIconOptions

export const AvatarIcon = (IconKeys: { opt: IconKeys | null }) => {
	return (
		<Avatar
			src={`/${IconKeys.opt}_icon.png`}
			aria-label="account icon"
			alt="display image"
		/>
	)
}
