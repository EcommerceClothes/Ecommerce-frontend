import { NavBar } from '../../components/NavBar';
import { Home } from '../components/homePage/home/Home';
import { Popular } from '../components/homePage/popular/Popular';

import './homePage.css';

export const HomePage = () => {
	return (
		<>
			<svg
				viewBox='0 0 190 587'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='home_blob-container'
			>
				<g clipPath='url(#clip0_45_15)'>
					<path
						d='M1457.88 152.168C1465.38 217.35 1578.98 348.473 1544.71 427.778C1510.43 507.084 1364.18 591.697 1252.22 628.002C1140.27 664.308 966.429 659.848 872.975 645.611C779.521 631.375 799.581 584.713 691.498 542.583C583.415 500.453 338.821 466.658 224.478 392.832C110.134 319.007 12.2034 174.757 5.43778 99.6279C-1.32786 24.4992 97.2134 10.6847 183.884 -57.94C270.554 -126.565 479.916 -236.782 525.461 -312.12C571.005 -387.459 410.183 -467.299 457.15 -509.972C504.117 -552.645 680.947 -562.756 807.264 -568.16C933.582 -573.565 1094.21 -569.239 1215.06 -542.398C1335.9 -515.557 1436.43 -457.696 1532.32 -407.116C1628.21 -356.536 1795.82 -312.887 1790.39 -238.919C1784.96 -164.952 1555.15 -28.4939 1499.73 36.6874'
						fill='#BC96E6'
					/>
				</g>
				<clipPath id='clip0_45_15'>
					<rect width='892' height='587' fill='white' />
				</clipPath>
			</svg>
			<div className='App'>
				<NavBar />

				<main className='main'>
					<Home />
					<Popular />
				</main>
			</div>
		</>
	);
};
