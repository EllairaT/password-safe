import React from "react"
import Card from "@mui/material/Card"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import { CardActionArea } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Grid, AppBar, Box, Tooltip } from "@mui/material"
import { AvatarIcon, IconKeys } from "./ServiceAvatars"
import { motion } from "framer-motion"
import TextField from "@mui/material/TextField"

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean
}

interface IAccountProps {
	accName?: string
	accIcon?: IconKeys
}

export const AccountCard = ({ accName, accIcon }: IAccountProps) => {
	const [expanded, setExpanded] = React.useState(false)
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}
	return (
		<Card sx={{ maxWidth: 345, m: "10px" }}>
			<CardActionArea onClick={handleExpandClick}>
				<Grid container direction="row" alignItems="center" wrap="nowrap">
					<CardHeader
						avatar={<AvatarIcon icon={accIcon!} />}
						title={accName ?? "???"}
						titleTypographyProps={{
							variant: "h6",
							fontStyle: "oblique",
							fontWeight: 700,
						}}
						sx={{ flexGrow: 1 }}
					/>
					{/* <CardActions sx={{ pb: 0 }}> */}
					<motion.div>
						<ExpandMoreIcon />
					</motion.div>

					{/* </CardActions> */}
				</Grid>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<TextField
							id="filled-basic"
							label="password"
							variant="filled"
							defaultValue={accName}
							disabled
						/>
					</CardContent>
				</Collapse>
			</CardActionArea>
		</Card>
	)
}
