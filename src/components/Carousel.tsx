import * as style from '../style/carousel';

interface CarouselItemProps {
	width: string;
	item: { src: string };
}

const Carousel = ({ item, width }: CarouselItemProps) => {
	return (
		<div style={{ width: width, ...style.container }}>
			<img alt='' src={item.src} style={style.img} />
		</div>
	);
};

export default Carousel;
