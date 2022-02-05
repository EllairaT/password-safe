import * as React from "react"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import Button from "@mui/material/Button"
import ReactDOM from "react-dom"
import { Grid } from "@mui/material"

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function App() {
	const theme = useTheme()
	const colorMode = React.useContext(ColorModeContext)
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				bgcolor: "background.paper",
				color: "text.primary",
				borderRadius: 1,
			}}>
			{theme.palette.mode} mode
			<IconButton
				// sx={{ ml: 1 }}
				onClick={colorMode.toggleColorMode}
				color="inherit">
				{theme.palette.mode === "dark" ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</IconButton>
		</Box>
	)
}

function ToggleColorMode() {
	const [mode, setMode] = React.useState<"light" | "dark">("light")
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
			},
		}),
		[]
	)

	const light = {
		background: {
			default: "#fafafa",
			paper: "#fff",
		},
	}

	const dark = {
		background: {
			default: "#303030",
			paper: "#424242",
		},
		text: {
			primary: "#ffffff",
		},
	}

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === "light" ? light : dark),
					primary: {
						main: "#0e79b2",
					},
					secondary: {
						main: "#bf1363",
					},
					warning: {
						main: "#f39237",
					},
					info: {
						main: "#2196f3",
					},
					success: {
						main: "#4caf50",
					},
				},
			}),
		[mode]
	)

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

function render() {
	ReactDOM.render(<ToggleColorMode />, document.getElementById("root"))
}

render()
