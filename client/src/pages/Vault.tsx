import React from "react"
import { AccountCard } from "../components/AccountCard"

const PageContent = () => {
	const arr = [
		<AccountCard accIcon="instagram" accName="instagram" key="1" />,
		<AccountCard accIcon="facebook" accName="facebook" key="2" />,
		<AccountCard accIcon="reddit" accName="reddit" key="3" />,
		<AccountCard accIcon="snapchat" accName="snapchat" key="4" />,
		<AccountCard accIcon="amongus" accName="amongus" key="5" />,
		<AccountCard key="6" accName="thing" accIcon="tiktok" />,
		<AccountCard key="7" accName="professional shit" accIcon="linkedin" />,
	]

	return arr
}

export const Vault = () => {
	return (
		<>
			{PageContent().map((k) => {
				return k
			})}
		</>
	)
}
