import * as React from "react"
import { Paper, Box, Container } from "@mui/material"

interface ComponentProp {
	component?: React.ReactNode
}
export const MainContentBox = ({ component }: ComponentProp): JSX.Element => {
	return (
		<Box
			className="content"
			component={Container}
			sx={{
				display: "flex",
				width: "80%",
				height: "80%",
				m: "auto",
				mt: 3,
				overflowY: "auto",
			}}>
			<Paper
				elevation={6}
				sx={{
					minHeight: "80%",
					height: "fit-content",
					width: "100%",
					padding: "10px",
					mb: "20px",
				}}>
				{component}
			</Paper>
		</Box>
	)
}
