import '../style/About.css';
import Reveal from './Reveal';
import back3 from '../assets/3.jpg';
import SkillIcons from './SkillIcons';
import { Box, IconButton } from '@mui/material';
import * as Fa1 from '@fortawesome/free-brands-svg-icons';
import * as Fa2 from '@fortawesome/free-solid-svg-icons';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Skill = () => {
	return (
		<Box id='skills' sx={container}>
			<Reveal
				variants={{
					hidden: { opacity: 0, y: 70 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<Box>
					<Box className='animated-text' sx={initialContainer}>
						<span>S</span>
						<span>k</span>
						<span>i</span>
						<span>l</span>
						<span>l</span>
						<span>s&nbsp;</span>
						<span>&&nbsp;</span>

						<span>E</span>
						<span>x</span>
						<span>p</span>
						<span>e</span>
						<span>r</span>
						<span>i</span>
						<span>e</span>
						<span>n</span>
						<span>c</span>
						<span>e</span>
					</Box>
				</Box>
			</Reveal>

			<Box sx={initialContainer2}>
				<Box
					component={'span'}
					sx={{
						display: 'relative',
						textAlign: textAlign,
						mb: {
							xs: 3,
							md: 5,
							lg: 5,
						},
					}}
				>
					<Reveal
						variants={{
							hidden: { opacity: 0, x: 70 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<Box>
							Degreed Fullstack Developer and Backend Engineer, skilled in end-to-end web development with a focus on efficient database management.
							Demonstrated adaptability and innovation in two years of collaborative project work, particularly in startup application development. You can
							visit my{' '}
							<a href='https://www.linkedin.com/in/uriel-dahan/' target='_blank'>
								<span style={{ color: '#ff6347' }}>Linkedin</span>
							</a>{' '}
							for more details.{' '}
							<IconButton href='#portfolio' sx={{ color: 'var(--white)' }}>
								<KeyboardDoubleArrowDownIcon fontSize='inherit' className='fade' />
							</IconButton>
						</Box>
					</Reveal>
				</Box>
			</Box>

			<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: { xs: '80%', md: '60%', lg: '65%' } }}>
				<SkillIcons icon={Fa1.faNodeJs} text='Node.js' />
				<SkillIcons icon={Fa1.faJs} text='JavaScript' />
				<SkillIcons icon={Fa1.faReact} text='React' />
				<SkillIcons icon={Fa1.faHtml5} text='HTML' />
				<SkillIcons icon={Fa2.faT} text='TypeScript' />
				<SkillIcons icon={Fa1.faCss3} text='CSS' />
				<SkillIcons icon={Fa2.faTable} text='Postgres' />
				<SkillIcons icon={Fa2.faDatabase} text='MongoDB' />
				<SkillIcons icon={Fa2.faM} text='MUI' />
				<SkillIcons icon={Fa2.faScrewdriverWrench} text='Redux ToolKit' />
				<SkillIcons icon={Fa1.faGitAlt} text='Git' />
				<SkillIcons icon={Fa1.faGithub} text='GitHub' />
				<SkillIcons icon={Fa2.faE} text='Express' />
				<SkillIcons icon={Fa2.faTerminal} text='Bash' />
			</Box>
		</Box>
	);
};

export default Skill;

const container = {
	width: '100%',
	display: 'flex',
	height: '100vh',
	minWidth: '384px',
	alignItems: 'center',
	backgroundSize: 'cover',
	flexDirection: 'column',
	backgroundRepeat: 'no-repeat',
	backgroundBlendMode: 'multiply',
	backgroundImage: `url(${back3})`,
};

const textAlign = { xs: 'center', md: 'center' };

const initialContainer = {
	pt: 5,
	mb: { xs: 2, lg: 2 },
	textAlign: textAlign,
	fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
};

const initialContainer2 = {
	display: 'flex',
	mb: { xs: 2, lg: 5 },
	color: 'var(--white)',
	alignContent: 'center',
	justifyContent: { xs: 'center' },
	lineHeight: { xs: '1.8', md: '1.6' },
	width: { xs: '73%', sm: '80%', md: '50%', lg: '50%' },
	fontSize: { xs: '0.8rem', md: '1.1rem', lg: '1.4rem' },
};
