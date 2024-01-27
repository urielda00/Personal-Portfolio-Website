import Reveal from './Reveal';
import back4 from '../assets/4.jpg';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import projectsData from '../utils/portfolioData';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, Grid, useMediaQuery } from '@mui/material';

const Portfolio = () => {
	// Check the screen size:
	const isXs = useMediaQuery('(max-width:600px)');
	const projectsToDisplay = isXs ? projectsData.slice(0, 2) : projectsData;

	return (
		<Box id='portfolio' sx={container}>
			<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
				<Reveal
					variants={{
						hidden: { opacity: 0, y: 75 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<Box className='about-animated-text' sx={initialContainer}>
						<span>P</span>
						<span>o</span>
						<span>r</span>
						<span>t</span>
						<span>f</span>
						<span>o</span>
						<span>l</span>
						<span>i</span>
						<span>o&nbsp;</span>
						<span>&&nbsp;</span>

						<span>P</span>
						<span>r</span>
						<span>o</span>
						<span>j</span>
						<span>e</span>
						<span>c</span>
						<span>t</span>
						<span>s</span>
					</Box>
				</Reveal>
			</Box>

			<Box>
				<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
					<Grid container spacing={1} sx={{ width: '80%' }}>
						{projectsToDisplay.map((project, index) => (
							<Grid item xs={isXs ? 12 : 6} sm={6} md={4} lg={4} key={index} sx={{ width: '80%', height: '300px' }}>
								<Card sx={{ maxWidth: 345, mb: 2 }}>
									<CardMedia component='img' alt='' height='140' image={project.img} />
									<CardContent>
										<Typography gutterBottom variant='h5' component='div'>
											{project.header}
										</Typography>

										<Typography variant='body2' color='text.secondary'>
											{project.text}
										</Typography>
									</CardContent>

									<CardActions>
										<Button size='small' target='_blank' href={project.codeLink}>
											View Code
										</Button>

										<Button size='small' target='_blank' href={project.siteLink}>
											Visit App
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default Portfolio;

const container = {
	width: '100%',
	height: '100vh',
	display: 'flex',
	minWidth: '384px',
	overflow: 'hidden',
	flexDirection: 'column',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundBlendMode: 'multiply',
	backgroundImage: `url(${back4})`,
};

const textAlign = { xs: 'center', md: 'center' };

const initialContainer = {
	pt: 5,
	textAlign: textAlign,
	mb: { xs: 5, md: 20, lg: 15 },
	fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
};
