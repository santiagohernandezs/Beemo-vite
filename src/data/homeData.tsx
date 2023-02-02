import {
	ColumnVertical,
	Component,
	FlexAlignSpaced,
	Layers,
	Layout,
	Lightning,
	Stars,
	UserProfileCirle
} from '@assets/index'
import { BadgeInfo, TileInfo } from '@models/index'

const badgeInfo: Array<BadgeInfo> = [
	{
		src: ColumnVertical,
		alt: 'frame',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis.'
	},
	{
		src: FlexAlignSpaced,
		alt: 'ruler',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis.'
	},
	{
		src: UserProfileCirle,
		alt: 'education',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis.'
	},
	{
		src: Layout,
		alt: 'layout',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis.'
	},
	{
		src: Layers,
		alt: 'frames',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis.'
	}
]

const tileInfo: Array<TileInfo> = [
	{
		icon: Stars,
		title: 'Title',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	},
	{
		icon: Component,
		title: 'Title',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	},
	{
		icon: Stars,
		title: 'Title',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	},
	{
		icon: Lightning,
		title: 'Title',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	}
]

export { badgeInfo, tileInfo }
