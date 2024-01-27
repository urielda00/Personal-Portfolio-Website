import '../style/ProgressStepper.css';
import progressData from '../utils/progressData';
import React, { useState, useEffect, useRef } from 'react';

interface ProgressStepperProps {
	style?: React.CSSProperties;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({ style }) => {
	const [activeStep, setActiveStep] = useState(0);
	const progressRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const totalSteps = 4;
			const stepHeight = window.innerHeight;
			const scrollPosition = window.scrollY || document.documentElement.scrollTop;
			const newActiveStep = Math.floor((scrollPosition + stepHeight / 2) / stepHeight);

			setActiveStep(newActiveStep);

			// Update the progress bar position
			if (progressRef.current) {
				const progressPosition = (newActiveStep / (totalSteps - 1)) * 100;
				progressRef.current.style.transform = `translateY(${progressPosition}%)`;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='progress-stepper' style={style}>
			{[1, 2, 3, 4, 5].map((step, index) => (
				<a style={{ textDecoration: 'none' }} key={step} href={`#${progressData[step].link}`} className={`step ${activeStep === index ? 'active' : ''}`}>
					<div>{progressData[step].page}</div>
				</a>
			))}
			<div className='progress-bar' ref={progressRef} />
		</div>
	);
};

export default ProgressStepper;
