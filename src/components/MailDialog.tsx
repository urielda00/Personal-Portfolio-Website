import React, { FC } from 'react';
import * as Mui from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
	open: boolean;
	setIsCheck?: any;
}

const MailDialog: FC<Props> = ({ open, setIsCheck }) => {
	const textToCopy = 'urielda00@gmail.com';
	const [openDialog, setOpenDialog] = React.useState(false);

	const closeDialog = () => setOpenDialog(false);
	const handleClick = () => {
		setIsCheck(true);
		setTimeout(() => {
			setIsCheck(false);
		}, 2000);
	};

	React.useEffect(() => {
		if (open) {
			setOpenDialog(true);
		}
	}, [open]);

	const openGmail = () => {
		const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${textToCopy}`;
		window.open(gmailUrl, '_blank');
	};

	return (
		<Mui.Dialog open={openDialog} onClose={closeDialog}>
			<Mui.DialogTitle>
				<CopyToClipboard text={textToCopy}>
					<Mui.Button sx={{ bgcolor: '#ffffff', color: 'black', mr: 2 }} onClick={handleClick}>
						Copy Mail
					</Mui.Button>
				</CopyToClipboard>

				<Mui.Button onClick={openGmail} sx={{ bgcolor: '#ff6347', color: 'black' }}>
					Go To Mail
				</Mui.Button>
			</Mui.DialogTitle>

			<Mui.DialogActions>
				<Mui.Button onClick={closeDialog} sx={{ color: 'black' }}>
					Close
				</Mui.Button>
			</Mui.DialogActions>
		</Mui.Dialog>
	);
};

export default MailDialog;
