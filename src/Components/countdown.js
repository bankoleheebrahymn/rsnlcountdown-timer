import React, { useState, useEffect } from "react";
import '../index.css';
import Shoprite from "./Countdown/shoprite.png";
import Jara from "./Countdown/jara.png";
import Fresh from "./Countdown/fresh.png";
import Rsnl from "./Countdown/rsnl.png";
import VideoBg from  "./Countdown/videoBG.mp4";

const COUNTDOWN_TARGET = new Date("2024-07-22T11:59:59");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
		// const totalTimeLeft = new Date() - COUNTDOWN_TARGET;

	const DAYS = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const HOURS = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const MINUTES = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const SECONDS = Math.floor((totalTimeLeft / 1000) % 60);
	return { DAYS, HOURS, MINUTES, SECONDS };
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
		
			<div className="bgContainer">
				<div className="overlay"><video src={VideoBg} autoPlay loop muted />
				</div>
			<div className='countdown'>
        <img src={Rsnl} alt="Rsnl Logo" width={300} height={60}/>
		<h3>Project Phoenix Countdown</h3>
		{/* <h3>Project Phoenix is Live!</h3>
		<p>We are pleased to announce the successful transition of Jara Ikeja, Jara Ibadan, Jara Oyo, Jara Ekiti, Jara Ugbowo, Jara Sakponba, Shoprite Palms, Shoprite Lekki, Shoprite Circle, Shoprite Adeniran Stores to the new ERP. <span className='boldy' >Shoprite Adeniran has been live for:</span> </p> */}
		<p>We are pleased to announce the successful transition of Jara Ikeja, Jara Ibadan, Jara Oyo, Jara Ekiti, Jara Ugbowo, Jara Sakponba, Shoprite Palms, Shoprite Lekki, Shoprite Circle, Shoprite Adeniran Stores to the new ERP. 
	     <span className='boldy' > Shoprite Ikeja is scheduled to go live in:</span></p>
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
		</div>
		
	);
};

export default Countdown;