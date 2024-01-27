import Reveal from './Reveal';
import { useState } from 'react';
import { Box } from '@mui/material';
import back5 from '../assets/5.jpg';
import SkillIcons from './SkillIcons';
import CarouselView from './CarouselView';
import { faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
	const [open, setOpen] = useState(false);
	const handleDialog = () => {
		setOpen(!open);
	};

	const [isCheck, setIsCheck] = useState(false);
	const gitHubLink = 'https://github.com/urielda00';
	const LinkedInLink = 'https://www.linkedin.com/in/uriel-dahan/';

	return (
		<Box id='contact' sx={container}>
			<Reveal
				variants={{
					hidden: { opacity: 0, y: -75 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<Box className='about-animated-text' sx={initialContainer}>
					<span>C</span>
					<span>o</span>
					<span>n</span>
					<span>t</span>
					<span>a</span>
					<span>c</span>
					<span>t&nbsp;</span>
					<span>M</span>
					<span>e</span>
				</Box>
			</Reveal>

			<Box className='about-animated-text2' sx={initialContainer2}>
				<Box component={'span'} sx={{ display: 'relative' }}>
					Ready to turn your vision into reality? Let's make it happen!
				</Box>
			</Box>

			<Box sx={{ display: 'flex', mt: 10 }}>
				<SkillIcons icon={faLinkedin} link={LinkedInLink} text='LinkedIn' />
				<SkillIcons icon={faGithub} link={gitHubLink} text='GitHub' />

				<Box onClick={handleDialog}>
					<SkillIcons open={open} icon={isCheck ? faCheck : faEnvelope} setIsCheck={setIsCheck} text={isCheck ? 'Copied' : 'Email'} />
				</Box>
			</Box>

			<CarouselView />
		</Box>
	);
};

export default Contact;

const container = {
	width: '100%',
	display: 'flex',
	height: '100vh',
	minWidth: '384px',
	textAlign: 'center',
	alignItems: 'center',
	backgroundSize: 'cover',
	flexDirection: 'column',
	backgroundRepeat: 'no-repeat',
	backgroundBlendMode: 'multiply',
	backgroundImage: `url(${back5})`,
};

const initialContainer = {
	pt: 5,
	textAlign: 'center',
	mb: { xs: 2, lg: 2 },
	fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
};

const initialContainer2 = {
	display: 'flex',
	alignContent: 'center',
	justifyContent: { xs: 'center' },
	lineHeight: { xs: '1.8', md: '1.6' },
	width: { xs: '73%', sm: '80%', md: '50%', lg: '50%' },
	fontSize: { xs: '1.1rem', md: '1.3rem', lg: '1.5rem' },
};
