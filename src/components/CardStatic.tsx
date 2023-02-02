type Props = {
	img: string
	title: string
	content: string
	dir?: string
}

export default function CardStatic({
	img,
	title,
	content,
	dir = undefined
}: Props): JSX.Element {
	if (dir !== undefined) {
		return (
			<div className='card even-columns' data-position={dir}>
				<div className='image-item'>
					<img src={img} title='grid-card' className='img' />
				</div>
				<div className='text-item | flow'>
					<h3 className='heading-3'>{title}</h3>
					<p>{content}</p>
				</div>
			</div>
		)
	} else {
		return (
			<div className='card even-columns'>
				<div className='image-item'>
					<img src={img} title='grid-card' className='img' />
				</div>
				<div className='text-item | flow'>
					<h3 className='heading-3'>{title}</h3>
					<p>{content}</p>
				</div>
			</div>
		)
	}
}
