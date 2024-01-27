import { FC } from 'react';
import MailDialog from './MailDialog';
import { Box, useMediaQuery } from '@mui/material';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
	icon: any;
	text: string;
	open?: boolean;
	setIsCheck?: any;
	link?: string | undefined;
}

const SkillIcons: FC<Props> = ({ icon, text, open, setIsCheck, link = undefined }) => {
	// Check the screen size:
	const isSm = useMediaQuery('(min-width:601px) and (max-width:900px)');
	const isMd = useMediaQuery('(min-width:901px) and (max-width:1199px)');
	const isLg = useMediaQuery('(min-width:1200px) and (max-width:1900px)');

	const handleLink = () => {
		if (link) {
			window.open(link, '_blank');
		}
	};
	const getSize = (): SizeProp | undefined => {
		if (isLg) {
			return '5x';
		} else if (isMd) {
			return '4x';
		} else if (isSm) {
			return '3x';
		}
		return '1x';
	};
	return (
		<Box
			sx={{
				mr: 4,
				mb: 3,
				color: 'white',
				display: 'flex',
				overflow: 'hidden',
				alignItems: 'center',
				position: 'relative',
				flexDirection: 'column',
				justifyContent: 'center',

				'&:hover': {
					'& .icon': {
						color: 'red',
						transform: 'scale(1.05)',
						transition: 'color 0.2s ease-in-out',
					},
				},
			}}
		>
			{open && <MailDialog setIsCheck={setIsCheck} open={open} />}
			<FontAwesomeIcon className='icon' icon={icon} size={getSize()} onClick={handleLink} />
			<p style={{ marginTop: '10px' }}>{text}</p>
		</Box>
	);
};

export default SkillIcons;
