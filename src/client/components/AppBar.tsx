import React from "react"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Toggle } from "../app"
import { LockIcon } from "./LockIcon"
import { motion } from "framer-motion"
import { Grid, AppBar, Box, Tooltip } from "@mui/material"

type Props = {
	mode: string
}
export const AppNavBar = ({ mode }: Props): JSX.Element => {
	return (
		<Box sx={{ flexGrow: 1 }} bgcolor="primary.paper">
			<AppBar position="static" color="transparent">
				<Toolbar>
					<Typography
						align="center"
						variant="overline"
						component="div"
						color={mode === "light" ? "primary" : "secondary"}
						sx={{
							flexGrow: 1,
							letterSpacing: 6,
							fontWeight: "bold",
							fontStyle: "normal",
							textTransform: "lowercase",
						}}>
						<Grid container direction="row" alignItems="center" wrap="nowrap">
							<Grid item container alignItems="center">
								lock.i
								<motion.div
									whileHover={{ rotate: 360, transition: { duration: 0.5 } }}>
									<LockIcon mode={mode} iconProps={{ fontSize: "small" }} />
								</motion.div>
							</Grid>
						</Grid>
					</Typography>
					<Tooltip
						title={
							"Switch to " + (mode === "light" ? "dark" : "light") + " mode"
						}>
						<Box sx={{ flexGrow: 0 }}>
							<Toggle />
						</Box>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
