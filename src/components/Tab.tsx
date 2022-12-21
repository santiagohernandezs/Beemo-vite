import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

export default function Tab({ children }: Props): JSX.Element {
	return <div>{children}</div>
}
