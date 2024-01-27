import React from 'react';

// Carousel
export const container: React.CSSProperties = {
	alignItems: 'center',
	display: 'inline-flex',
	justifyContent: 'center',
};

export const img: React.CSSProperties = {
	width: '100%',
	height: '100%',
	objectFit: 'contain',
	borderRadius: '30px',
	backgroundColor: 'red',
};

// CarouselView
export const viewContainer: React.CSSProperties = {
	width: '384px',
	height: '300px',
	overflow: 'hidden',
	marginRight: '20px',
	position: 'relative',
};

export const inlineViewContainer: React.CSSProperties = {
	whiteSpace: 'nowrap',
	transition: 'transform 1.3s',
	boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
};

export const linkStyle: React.CSSProperties = {
	color: 'white',
	fontSize: '20px',
	textDecoration: 'none',
};

export const buttonContainer: React.CSSProperties = {
	bottom: '45px',
	width: '100%',
	height: '50px',
	display: 'flex',
	position: 'absolute',
	justifyContent: 'space-evenly',
};
