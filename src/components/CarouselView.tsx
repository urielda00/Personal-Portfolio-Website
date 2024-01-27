import * as React from 'react';
import Carousel from './Carousel';
import * as Mui from '@mui/material';
import images from '../utils/carouselData';
import * as style from '../style/carousel';

//Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CarouselView = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const updateIndex = (newIndex: any) => {
		if (newIndex < 0) {
			newIndex = 0;
		} else if (newIndex >= images.length) {
			newIndex = images.length - 1;
		}
		setActiveIndex(newIndex);
	};

	return (
		<Mui.Box sx={style.viewContainer}>
			<Mui.Box
				style={{
					...style.inlineViewContainer,
					transform: `translate(-${activeIndex * 100}%)`,
				}}
			>
				{images.map((item, index) => {
					return <Carousel item={item} width={'100%'} key={index} />;
				})}
			</Mui.Box>

			<Mui.Box style={style.buttonContainer}>
				{/* LEFT BUTTON */}
				<Mui.Button className='button-arrow' onClick={() => updateIndex(activeIndex - 1)}>
					<span className='material-symbols-outlined'>
						<ChevronLeftIcon fontSize='large' />
					</span>{' '}
				</Mui.Button>

				{/* RIGHT BUTTON */}
				<Mui.Button className='button-arrow' onClick={() => updateIndex(activeIndex + 1)}>
					<span className='material-symbols-outlined'>
						<ChevronRightIcon fontSize='large' />
					</span>
				</Mui.Button>
			</Mui.Box>
		</Mui.Box>
	);
};

export default CarouselView;
