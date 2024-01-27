import { useEffect } from 'react';
import { Box } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import ContactBtn from './components/ContactBtn';
import ProgressStepper from './components/ProgressStepper';

const App = () => {
	const logStr1 = "%cWelcome to Uriel Dahan's cool website!";
	const logStr2 = 'color: #3498db; font-size: 16px; font-family:  Arial;';

	useEffect(() => console.log(logStr1, logStr2), []);

	return (
		<Box sx={style}>
			<ContactBtn />
			<ProgressStepper />
			<Home />
			<About />
			<Skill />
			<Portfolio />
			<Contact />
		</Box>
	);
};

export default App;

const style = { height: '100vh', width: '100%' };
