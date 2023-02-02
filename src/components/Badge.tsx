import type { BadgeInfo } from '@/models'

export default function Badge({ src, alt, content }: BadgeInfo): JSX.Element {
	return (
		<div className='badge'>
			<div className='badge__img-container'>
				<img src={src} alt={alt} />
			</div>

			<p className='grid-item'>{content}</p>
		</div>
	)
}
