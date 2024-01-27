import { Button } from '@mui/material';

const ContactBtn = () => {
	return (
		<Button sx={btnStyle} href='#contact'>
			Contact
		</Button>
	);
};

export default ContactBtn;

const btnStyle = {
	top: 45,
	right: 45,
	zIndex: 999,
	color: 'white',
	width: '100px',
	position: 'fixed',
	bgcolor: '#2C3333',
	border: '2px solid white',
	display: { xs: 'none', md: 'flex' },

	':hover': {
		color: 'black',
		backgroundColor: 'white',
	},
};
