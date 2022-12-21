import { Contact, Home } from '@pages/index'
import { Route, Routes } from 'react-router-dom'

export default function App(): JSX.Element {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	)
}
