import * as React from "react"
import { Paper, Box } from "@mui/material"

export const MainContentBox = (): JSX.Element => {
	return (
		<Box
			sx={{
				display: "flex",
				borderRadius: 5,
				width: "75%",
				height: "85%",
				m: "auto",
				mt: 3,
			}}>
			<Paper elevation={6} sx={{ height: "100%", width: "100%" }}>
				Hello
			</Paper>
		</Box>
	)
}
