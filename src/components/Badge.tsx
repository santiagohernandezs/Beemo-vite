type Props = {
	src: string
	alt: string
	p: string
}

export default function Badge({ src, alt, p }: Props): JSX.Element {
	return (
		<div className='badge__container'>
			<div className='badge__container-badge'>
				<img className='badge__container-badge-img' src={src} alt={alt} />
			</div>
			<div className='badge__container-text'>
				<p>{p}</p>
			</div>
		</div>
	)
}
