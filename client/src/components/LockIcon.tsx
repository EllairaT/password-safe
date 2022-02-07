import React, { useState } from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"
import { grey } from "@mui/material/colors"

type Props = {
	iconProps?: SvgIconProps
	mode?: string
}

export const LockIcon = (props: Props) => {
	return (
		<SvgIcon viewBox="0 0 370 370" {...props.iconProps}>
			<g id="XMLID_502_">
				<g id="XMLID_503_">
					<g id="XMLID_511_">
						<g id="XMLID_1307_">
							<g id="XMLID_1308_">
								<g id="XMLID_1309_">
									<path
										id="XMLID_1310_"
										style={{ fill: "#e4ba00" }}
										d="M185,290c-55.14,0-100-44.86-100-100v-90C85,44.86,129.86,0,185,0
							s100,44.86,100,100v90C285,245.14,240.14,290,185,290z M185,40c-33.084,0-60,26.916-60,60v90c0,33.084,26.916,60,60,60
							s60-26.916,60-60v-90C245,66.916,218.084,40,185,40z"
									/>
								</g>
							</g>
						</g>
					</g>
					<path
						id="XMLID_524_"
						style={{ fill: "#816b01" }}
						d="M185,0v40c33.084,0,60,26.916,60,60v90c0,33.084-26.916,60-60,60v40
			c55.14,0,100-44.86,100-100v-90C285,44.86,240.14,0,185,0z"
					/>
				</g>
				<g id="XMLID_525_">
					<circle
						id="XMLID_526_"
						style={{ fill: props.mode === "light" ? "#4D4D4D" : "#9e9e9e" }}
						cx="185"
						cy="245"
						r="125"
					/>
					<path
						id="XMLID_531_"
						style={{ fill: props.mode === "light" ? "#212121" : "#757575" }}
						d="M185,120v250c69.036,0,125-55.964,125-125S254.036,120,185,120z"
					/>
				</g>
				<g id="XMLID_532_">
					<path
						id="XMLID_535_"
						style={{ fill: "#F9E375" }}
						d="M216.25,231.607c0-17.259-13.991-31.25-31.25-31.25s-31.25,13.991-31.25,31.25
			c0,11.565,6.287,21.655,15.625,27.059v30.977h31.25v-30.977C209.963,253.262,216.25,243.172,216.25,231.607z"
					/>
					<path
						id="XMLID_783_"
						style={{ fill: "#F5D361" }}
						d="M185,200.357v89.286h15.625v-30.977c9.338-5.404,15.625-15.494,15.625-27.059
			C216.25,214.348,202.259,200.357,185,200.357z"
					/>
				</g>
			</g>
		</SvgIcon>
	)
}
