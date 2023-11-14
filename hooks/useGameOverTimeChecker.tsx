import React, { useEffect, useState } from "react";

export default function useGameOverTimeChecker() {
	const [currentTime, setCurrentTime] = useState(new Date());
	const [isGameOver, setIsGameOver] = useState(false);
	const [hasClickTrayAgain, setAsClickTryAgain] = useState(false);

	useEffect(() => {
		// Update the current time every second
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => {
			// Clear the interval when the component is unmounted
			clearInterval(intervalId);
		};
	}, []);

	useEffect(() => {
		// Check if it's 12 PM and trigger your rendering logic
		const checkAndRender = () => {
			const currentHour = currentTime.getHours();
			const currentMinutes = currentTime.getMinutes();

			if (currentHour === 12 && currentMinutes === 0) {
				// Perform your rendering logic here
				if (hasClickTrayAgain) {
					setIsGameOver(false);
				} else {
					setIsGameOver(true);
				}

				console.log("Rendering at 12 PM");
			}
		};

		// Initial check when the component mounts
		checkAndRender();

		// Check every minute to see if it's 12 PM
		const intervalId = setInterval(checkAndRender, 60 * 1000);

		return () => {
			// Clear the interval when the component is unmounted
			clearInterval(intervalId);
		};
	}, [currentTime]);

	return { isGameOver, currentTime, setIsGameOver, setAsClickTryAgain };
}
