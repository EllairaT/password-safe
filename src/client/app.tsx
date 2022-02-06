import React, { useState, useMemo, useContext, createContext } from "react"
import ReactDOM from "react-dom"
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles"
import { IconButton, Container, Box } from "@mui/material"
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone"
import Brightness5TwoToneIcon from "@mui/icons-material/Brightness5TwoTone"
import { light, dark, defaultPalette, defaultTypography } from "./theme"
import { AppNavBar } from "./components/AppBar"
import { BottomBar } from "./components/BottomBar"
import { MainContentBox } from "./components/MainContentBox"
import { motion } from "framer-motion"

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const Toggle = (): JSX.Element => {
	const [isOn, setIsOn] = useState(false)

	const handleSwitch = () => {
		colorMode.toggleColorMode()
		setIsOn(!isOn)
	}

	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30,
	}
	const theme = useTheme()
	const colorMode = useContext(ColorModeContext)
	return (
		<div className="switch" data-ison={isOn} onClick={handleSwitch}>
			<motion.div className="handle" layout transition={spring}>
				<IconButton
					// className="handle"
					color="inherit"
					aria-label="toggle theme"
					sx={{ align: "center", ml: "auto", p: 0, top: "auto" }}>
					{theme.palette.mode === "dark" ? (
						<DarkModeTwoToneIcon color="primary" sx={{ fontSize: "100%" }} />
					) : (
						<Brightness5TwoToneIcon
							color="secondary"
							sx={{ fontSize: "100%" }}
						/>
					)}
				</IconButton>
			</motion.div>
		</div>
	)
}

const App = (): JSX.Element => {
	const [mode, setMode] = useState<"light" | "dark">("light")
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
			},
		}),
		[]
	)

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === "light" ? light : dark),
					...defaultPalette,
				},
				typography: defaultTypography,
			}),
		[mode]
	)

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Container disableGutters maxWidth={false}>
					<Box sx={{ bgcolor: "background.default", height: "100vh" }}>
						<AppNavBar mode={mode} />
						<MainContentBox />
						<BottomBar />
					</Box>
				</Container>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

const render = () => {
	ReactDOM.render(<App />, document.getElementById("root"))
}

render()
