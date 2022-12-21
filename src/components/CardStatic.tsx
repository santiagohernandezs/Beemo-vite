type Props = {
	img: string
	title: string
	content: string
}

export default function CardStatic({ img, title, content }: Props): JSX.Element {
	return (
		<div className='card'>
			<div className='card__image__container'>
				<img src={img} alt='svg' loading='lazy' />
			</div>
			<div className='card__title__container'>
				<h1>{title}</h1>
			</div>
			<div className='card__paragraph__container'>
				<p>{content}</p>
			</div>
		</div>
	)
}
