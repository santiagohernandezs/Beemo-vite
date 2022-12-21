import Spline from '@splinetool/react-spline'
import { useRef } from 'react'

export default function App3d(): JSX.Element {
	const objectToAnimate = useRef()

	function onLoad(spline: any): void {
		const obj = spline.findObjectByName('98e3ed1f-1b61-4536-a3e9-5b98435e1c8c')
		objectToAnimate.current = obj
	}

	return (
		<Spline
			onLoad={onLoad}
			style={spline}
			scene='https://prod.spline.design/FLxF9WD8Np1wZGaT/scene.splinecode'
		/>
	)
}

const spline = {
	width: '100%',
	height: '80%'
}
