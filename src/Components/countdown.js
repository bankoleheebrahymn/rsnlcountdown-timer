import React, { useState, useEffect } from "react";
import "./Countdown/styles.css";
import Shoprite from "./Countdown/shoprite.png";
import Jara from "./Countdown/jara.png";
import Fresh from "./Countdown/fresh.png";
import Banner from "./Countdown/banner2.png";

const COUNTDOWN_TARGET = new Date("2024-05-31T23:59:59");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	return { days, hours, minutes, seconds };
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className='countdown'>
		<div className="banner"><img src={Banner} alt="RSN Logo" /></div>
			<div className='content'>
				{Object.entries(timeLeft).map((el) => {
					const label = el[0];
					const value = el[1];
					return (
						<div className='box' key={label}>
							<div className='value'>
								<span>{value}</span>
							</div>
							<span className='label'> {label} </span>
						</div>
					);
				})}
			</div>
			<div className="wrap">
			<div className="shopriteLogo"><img src={Shoprite} alt="Shoprite Logo" width={100} height={17} /></div>
			<div><img src={Jara} alt="JaraLogo" width={55} height={60} /></div>
			<div><img src={Fresh} alt="Fresh Logo" width={100} height={30} /></div>
			</div>
		</div>
	);
};

export default Countdown;