import { Beemo3d, BeemoIcon, IsoLogo } from '@assets/index'
import { Badge, Footer, Tile, CardStatic, PrimaryNav } from '@components/index'
import { badgeInfo, tileInfo } from '@data/homeData'
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

function Home(): JSX.Element {
	const App3d = lazy(() => import('@/components/App3d'))
	return (
		<>
			{/* Primary Navigation */}
			<header>
				<PrimaryNav />
			</header>
			{/* Primary Navigation ends */}
			<main className='main'>
				{/*  hero */}
				<section className='hero'>
					<div className='container | even-columns ' data-type='wide'>
						{/* <img className='banner__bg' src={Bg} alt='bg' loading='lazy' /> */}
						<div className='grid-image'>
							<img className='hero__beemo3d' src={Beemo3d} alt='' loading='lazy' />
						</div>
						<div className='grid-item | flow'>
							<h1 className='heading-special' data-type='special'>
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
				<article className='margin-block-10'>
					<div className='container | even-columns' data-type='wide'>
						<h2 className='heading-2'>
							LO QUE TENEMOS PARA
							<span className='text-primary-400'> OFRECERTE. </span>
						</h2>
						<p>
							Sin negar nuestro compromiso con las organizaciones, nuestro foco central
							está en el usuario y su experiencia de uso, por ello Beemo ofrece una
							plataforma:
						</p>
					</div>
				</article>
				{/* Next section need a real name like about-us,contact,projects */}
				<section className='section |  padding-block-start-1' id='card-container'>
					<div className='container'>
						<CardStatic
							img='realmage.jpg'
							title='Title'
							content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris vulputate, cursus diam eu, laoreet risus. Nulla ut est et ligula hendrerit consectetur. Pellentesque non scelerisque nisl. Aliquam ut egestas ligula.'
						/>
						<CardStatic
							img='realmage.jpg'
							title='Title'
							content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris vulputate, cursus diam eu, laoreet risus. Nulla ut est et ligula hendrerit consectetur. Pellentesque non scelerisque nisl. Aliquam ut egestas ligula.'
							dir='left'
						/>
						<CardStatic
							img='realmage.jpg'
							title='Title'
							content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mauris vulputate, cursus diam eu, laoreet risus. Nulla ut est et ligula hendrerit consectetur. Pellentesque non scelerisque nisl. Aliquam ut egestas ligula.'
							dir='right'
						/>
					</div>
				</section>
				<section className='section | bg-primary-700 wavy-background' id='why-modular'>
					<div className='container | dp-grid gap-10'>
						<h2 className='heading-2 mx-auto '>¿POR QUÉ MODULAR?</h2>

						<div className='grid-auto-fit'>
							{badgeInfo.map(info => (
								<Badge key={info.alt} {...info} />
							))}
						</div>
					</div>
				</section>
				<section className='about'>
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
		</>
	)
}

export default Home
