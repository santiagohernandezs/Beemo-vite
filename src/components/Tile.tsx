type Props = {
	icon: string
	title: string
	description: string
}

export default function Tile({ icon, title, description }: Props): JSX.Element {
	return (
		<div className='tile'>
			<div className='tile__icon'>
				<img className='tile__icon-img' src={icon} alt={title}></img>
			</div>
			<div className='tile__text'>
				<h3 className='tile__text-title'>{title}</h3>
				<p className='tile__text-description'>{description}</p>
			</div>
		</div>
	)
}
