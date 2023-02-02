import { IsoLogo } from '@assets/index'

export default function PrimaryNav() {
	return (
		<div className='container' data-type='wide'>
			<nav className='primary-nav '>
				<img className='isologo' src={IsoLogo} alt='' loading='lazy' />
				<ul className='flex-group'>
					<li>
						<a href='#'>Nosotros</a>
					</li>
					<li>
						<a href='#'>Precios</a>
					</li>
					<li>
						<a href='#'>Contacto</a>
					</li>
					<li>
						<a href='#'>Entrar</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
