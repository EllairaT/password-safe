import React from "react"
import { motion } from "framer-motion"
import { PageTwo } from "./PageTwo"
import { Vault } from "./Vault"
import Carousel from "react-material-ui-carousel"
import { MainContentBox } from "../components/MainContentBox"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
type Props = {
	mode: string
}

interface IContent {
	currentPage: React.ReactNode
}

const PageContent = () => {
	return <div>I'M HOME</div>
}

export const Content = ({ mode }: Props) => {
	return (
		<>
			<MainContentBox component={<Vault />} />
		</>
	)
}
