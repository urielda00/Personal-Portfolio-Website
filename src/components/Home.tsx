import back1 from '../assets/1.jpg';
import { Box, Link } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Home = () => {
	return (
		<Box id='home' sx={container}>
			<Box className='animated-text' sx={initialContainer}>
				<span>H</span>
				<span>i</span>
				<span>,&nbsp;</span>
				<span>I</span>
				<span>'</span>
				<span>m&nbsp;</span>

				<span>U</span>
				<span>r</span>
				<span>i</span>
				<span>e</span>
				<span>l&nbsp;</span>
				<span>D</span>
				<span>a</span>
				<span>h</span>
				<span>a</span>
				<span>n</span>
			</Box>

			<Box className='animated-text2' sx={initialContainer2}>
				<span>F</span>
				<span>u</span>
				<span>l</span>
				<span>l</span>
				<span>S</span>
				<span>t</span>
				<span>a</span>
				<span>c</span>
				<span>k&nbsp;</span>
				<span>W</span>
				<span>e</span>
				<span>b&nbsp;</span>
				<span>D</span>
				<span>e</span>
				<span>v</span>
				<span>e</span>
				<span>l</span>
				<span>o</span>
				<span>p</span>
				<span>e</span>
				<span>r</span>
			</Box>

			<Link href='#about' underline='none' sx={linkStyle}>
				About Me
				<KeyboardDoubleArrowDownIcon sx={iconStyle} />
			</Link>
		</Box>
	);
};

export default Home;

const ml = { xs: 0, md: '50px', lg: '80px' };
const textAlign = { xs: 'center', md: 'initial' };
const fontSize = { xs: '1.2rem', md: '1.5rem', lg: '2rem' };

const container = {
	width: '100%',
	height: '100vh',
	display: 'flex',
	minWidth: '384px',
	position: 'relative',
	alignItems: textAlign,
	flexDirection: 'column',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundBlendMode: 'multiply',
	backgroundImage: `url(${back1})`,
};

const initialContainer = {
	pl: ml,
	mb: { xs: 2 },
	textAlign: textAlign,
	fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
};

const initialContainer2 = {
	mb: 5,
	pl: ml,
	fontSize: fontSize,
	textAlign: textAlign,
};

const linkStyle = {
	ml: ml,
	color: 'white',
	display: 'flex',
	fontSize: fontSize,
	alignItems: 'center',
	width: { xs: '150', md: '200px' },

	'&:hover': {
		'& .MuiSvgIcon-root': {
			transform: 'rotate(-90deg)',
		},
	},
};

const iconStyle = {
	transform: 'rotate(0deg)',
	transition: 'transform 0.2s',
};
