import * as React from "react"
import { Paper, Box } from "@mui/material"

interface ComponentProp {
	component?: React.ReactNode
}
export const MainContentBox = ({ component }: ComponentProp): JSX.Element => {
	return (
		<Box
			sx={{
				display: "flex",
				width: "75%",
				height: "80%",
				m: "auto",
				mt: 3,
			}}>
			<Paper
				elevation={6}
				sx={{ height: "100%", width: "100%", padding: "10px" }}>
				{component}
			</Paper>
		</Box>
	)
}
