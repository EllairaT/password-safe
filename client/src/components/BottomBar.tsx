import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Typography from "@mui/material/Typography"

export const BottomBar = (): JSX.Element => {
	return (
		<AppBar
			position="fixed"
			color="transparent"
			sx={{ top: "auto", bottom: 0, boxShadow: 0 }}>
			<Typography
				align="center"
				component="div"
				color="inherit"
				variant="subtitle2"
				sx={{
					flexGrow: 1,
					fontWeight: "regular",
					fontStyle: "italic",
					textTransform: "lowercase",
				}}>
				&copy; lockio | Ellaira Torio | 2022
			</Typography>
		</AppBar>
	)
}
