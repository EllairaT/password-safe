import React from "react"
import Card from "@mui/material/Card"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { AvatarIcon, IconKeys } from "./ServiceAvatars"

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean
}

interface IAccountProps {
	accName?: string
	accIcon?: IconKeys
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props
	return <IconButton {...other} />
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}))

export const AccountCard = ({ accName, accIcon }: IAccountProps) => {
	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	// console.log(IconOptions[accIcon || "facebook"])

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={<AvatarIcon opt={accIcon ?? null} />}
				title="Reddit"></CardHeader>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more">
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>
						Heat 1/2 cup of the broth in a pot until simmering, add saffron and
						set aside for 10 minutes.
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	)
}
