type Props = {
	width?: number
	height?: number
	fill?: string
	xmlns?: string
	props?: any
}

export default function Bg(props: Props): JSX.Element {
	return (
		<svg
			width={1167}
			height={1080}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M0 426.896V0h1167v1080H0V596.495c0-31.915 21.295-59.908 52.052-68.425l59.083-16.36-59.112-16.397C21.28 486.786 0 458.8 0 426.896Z'
				fill='#FFBE0B'
			/>
		</svg>
	)
}
