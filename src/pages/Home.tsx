import { Beemo3d, BeemoIcon, IsoLogo } from '@assets/index'
import { Badge, Footer, Tile } from '@components/index'
import { badgeInfo, tileInfo } from '@data/homeData'
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

function Home(): JSX.Element {
	const App3d = lazy(() => import('@/components/App3d'))

	return (
		<main className='main'>
			{/* navbar component */}
			{/* <Navbar /> */}
			{/* banner */}

			<section className='hero'>
				<div className='container | even-columns '>
					{/* <img className='banner__bg' src={Bg} alt='bg' loading='lazy' /> */}

					<img className='hero__beemo3d' src={Beemo3d} alt='' loading='lazy' />
					<div className='hero__content | flow'>
						<img className='hero__isologo' src={IsoLogo} alt='' loading='lazy' />

						<h1 className='hero__h1'>
							Reúne a tu <span className='push-right'> equipo </span>
						</h1>

						<p>
							El trabajo en grupo trae consigo grandes cosas, haz que tu equipo forme
							parte de una de ellas.
						</p>
						<Link className='button' to='./Registrate'>
							<img src={BeemoIcon} alt='beemo icon' loading='lazy' />
							<p>Comienza Ahora</p>
						</Link>
					</div>
				</div>
			</section>
			{/* about section */}
			<section className='about'>
				<div className='about__text-container'>
					<div className='about__text-container-title'>
						<h1>
							LO QUE TENEMOS PARA <br />
							<span>OFRECERTE</span>
						</h1>
					</div>
					<div className='about__text-container-p'>
						<p>
							Sin negar nuestro compromiso con las organizaciones, nuestro foco central
							está en el usuario y su experiencia de uso, por ello Beemo ofrece una
							plataforma:
						</p>
					</div>
				</div>
				<div className='cards'></div>
				<div className='explanation'>
					<div className='explanation__text-container'>
						<div className='explanation__text-container-title'>
							<h1>¿POR QUÉ MODULAR?</h1>
						</div>
					</div>
					<div className='explanation__badges__container'>
						{badgeInfo.map(info => (
							<Badge key={info.alt} {...info} />
						))}
					</div>
				</div>
				<div className='visuals'>
					<div className='visuals__app3d'>
						<Suspense fallback={<h1>Cargando...</h1>}>
							<App3d />
						</Suspense>
					</div>
					<div className='visuals__text'>
						<h1 className='visuals__text-h1'>Simple y Moderno</h1>
						<div className='visuals__text-tiles'>
							{tileInfo.map(info => (
								<Tile key={info.title} {...info} />
							))}
						</div>
					</div>
				</div>
			</section>
			<section className='prices'></section>
			{/* Footer component */}
			<Footer />
		</main>
	)
}

export default Home
