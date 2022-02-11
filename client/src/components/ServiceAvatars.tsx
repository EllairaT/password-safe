import React from "react"
import Avatar from "@mui/material/Avatar"
import { deepOrange } from "@mui/material/colors"

const IconOptions = [
	"facebook",
	"twitter",
	"instagram",
	"tiktok",
	"snapchat",
	"tumblr",
	"reddit",
	"youtube",
	"amongus",
	"linkedin",
	"default",
] as const

export type IconKeys = typeof IconOptions[number]

const importAll = (require: any) =>
	require.keys().reduce((acc: any, next: any) => {
		acc[next.replace("./", "")] = require(next)
		return acc
	}, {})

const images = importAll(
	require.context("../assets/icons/", false, /\.(png|jpe?g|svg)$/)
)

interface IProps {
	icon: string
}
export const AvatarIcon = ({ icon = "default" }: IProps) => {
	return (
		<Avatar
			sx={{ bgcolor: deepOrange[50], height: "30px", width: "30px" }}
			alt={icon}
			src={images[icon + ".png"].default}
			aria-label="account icon"
			variant="circular"
		/>
	)
}
