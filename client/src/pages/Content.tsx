import React from "react"
import { motion } from "framer-motion"
import { PageTwo } from "./PageTwo"
import { PageOne } from "./PageOne"

import { MainContentBox } from "../components/MainContentBox"
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
			<MainContentBox component={<PageContent />} />
			<MainContentBox component={<PageOne />} />
			<MainContentBox component={<PageTwo />} />
		</>
	)
}
