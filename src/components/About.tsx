import '../style/About.css';
import Reveal from './Reveal';
import back2 from '../assets/2.jpg';
import { Box, IconButton } from '@mui/material';

// Icons:
import HtmlIcon from '@mui/icons-material/Html';
import LockIcon from '@mui/icons-material/Lock';
import CodeIcon from '@mui/icons-material/Code';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SourceIcon from '@mui/icons-material/Source';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';
import PasswordIcon from '@mui/icons-material/Password';
import LanguageIcon from '@mui/icons-material/Language';
import SecurityIcon from '@mui/icons-material/Security';
import JavascriptIcon from '@mui/icons-material/Javascript';
import DataObjectIcon from '@mui/icons-material/DataObject';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const iconData = [
	CodeIcon,
	HtmlIcon,
	LockIcon,
	VpnKeyIcon,
	SourceIcon,
	StorageIcon,
	DevicesIcon,
	PasswordIcon,
	LanguageIcon,
	SecurityIcon,
	JavascriptIcon,
	DataObjectIcon,
];

const About = () => {
	return (
		<Box id='about' sx={container}>
			<Reveal
				width='100%'
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<Box className='about-animated-text' sx={initialContainer}>
					<span>W</span>
					<span>h</span>
					<span>o&nbsp;</span>
					<span>A</span>
					<span>m&nbsp;</span>
					<span>I</span>
					<span>?</span>
				</Box>
			</Reveal>

			<Reveal
				variants={{
					hidden: { opacity: 0, x: 75 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<Box>
					<Box className='about-animated-text2' sx={initialContainer2}>
						<Box component={'span'} sx={{ display: 'relative', textAlign: textAlign }}>
							Problem solver and highly organized individual with meticulous attention to detail. A fan of sports, outdoor activities, video games, and, of
							course, coding. A quick learner, always eager to acquire new skills. Scroll to see my skills and projects.
							<Box sx={iconBtnContainer}>
								<IconButton sx={iconBtn} href='#skills'>
									<KeyboardDoubleArrowDownIcon fontSize='inherit' className='fade' />
								</IconButton>
							</Box>
						</Box>
					</Box>
				</Box>
			</Reveal>

			<Box className='sliderContainer'>
				<Box className='slider' sx={white}>
					{iconData.map((Icon, index) => (
						<Icon key={index} fontSize='large' sx={{ mr: 11 }} />
					))}
				</Box>

				<Box className='slider' sx={white}>
					{iconData.map((Icon, index) => (
						<Icon key={index + iconData.length} fontSize='large' sx={{ mr: 11 }} />
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default About;

const white = { color: 'var(--white)' };
const textAlign = { xs: 'center', md: 'initial' };

const container = {
	width: '100%',
	height: '100vh',
	overFlow:'hidden',
	backgroundSize: 'cover',
	minWidth: '384px',
	backgroundRepeat: 'no-repeat',
	backgroundBlendMode: 'multiply',
	backgroundImage: `url(${back2})`,
};

const initialContainer = {
	mb: { xs: 4 },
	textAlign: textAlign,
	pl: { xs: 0, md: '50px', lg: '80px' },
	fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
};

const initialContainer2 = {
	display: 'flex',
	alignContent: 'center',
	justifyContent: { xs: 'center' },
	lineHeight: { xs: '1.8', md: '1.6' },
	ml: { xs: 8, sm: 11, md: 14, lg: 20 },
	width: { xs: '73%', sm: '80%', md: '50%', lg: '50%' },
	fontSize: { xs: '1.1rem', md: '1.4rem', lg: '1.8rem' },
};

const iconBtnContainer = {
	top: 60,
	position: 'absolute',
	right: { md: 200, lg: 300 },
	display: { xs: 'none', sm: 'none', md: 'initial' },
};

const iconBtn = {
	color: 'var(--white)',
	fontSize: { sm: '55px', lg: '70px' },
};
