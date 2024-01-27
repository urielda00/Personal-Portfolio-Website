import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
	variants: any;
	children: JSX.Element;
	width?: 'fit-content' | '100%';
}

const Reveal = ({ children, variants, width = '100%' }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 1 });
	const mainControls = useAnimation();
	const slideControls = useAnimation();
	const [test, setTest] = useState<any>(ref);
	useEffect(() => {
		const options = {
			root: null, // Use the viewport as the root
			rootMargin: '0px', // No margin around the root
			threshold: 0.5, // Trigger when 50% of the element is visible
		};

		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Element is in the viewport
					mainControls.start('visible');
					slideControls.start('visible');
				} else {
					// Element has left the viewport
					mainControls.start('hidden');
					slideControls.start('hidden');
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, options);

		// Start observing the target element
		if (ref.current) {
			observer.observe(ref.current);
		}

		// Cleanup:
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
				observer.disconnect();
			}
		};
	}, [isInView]);

	return (
		<div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
			<motion.div variants={variants} initial='hidden' animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }} viewport={{ once: false }}>
				{children}
			</motion.div>
		</div>
	);
};

export default Reveal;
