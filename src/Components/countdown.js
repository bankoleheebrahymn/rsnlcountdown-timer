import React, { useState, useEffect } from "react";
import '../index.css';
import Shoprite from "./Countdown/shoprite.png";
import Jara from "./Countdown/jara.png";
import Fresh from "./Countdown/fresh.png";
import Rsnl from "./Countdown/rsnl.png";
import VideoBg from  "./Countdown/videoBG.mp4";

const COUNTDOWN_TARGET = new Date("2024-08-05T07:49:59");

const getTimeLeft = () => {
	// const totalTimeLeft = COUNTDOWN_TARGET - new Date();
		const totalTimeLeft = new Date() - COUNTDOWN_TARGET;

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
		{/* <h3>Project Phoenix Countdown</h3> */}
		<h3>Project Phoenix is Live!</h3>
		<p>We are pleased to announce the successful cut over of Jara Stores at Ikeja, Ibadan, Oyo, Ado-Ekiti, Benin City (Ugbowo and Sakponba) and Shoprite Stores at The Palms, Lekki Mall, Circle Mall, Adeniran Ogunsanya, Ikeja City Mall, Festival Mall, Park Lane, Ota Gateway, Cocoa Mall, Ibadan Mall, and Akure Mall to the new ERP. <div className='boldy' >Shoprite Akure Mall has been live for:</div> </p>
		{/* <p>We are pleased to announce the successful cut over of Jara Stores at Ikeja, Ibadan, Oyo, Ado-Ekiti, Benin City (Ugbowo and Sakponba) and Shoprite Stores at The Palms, Lekki Mall, Circle Mall, Adeniran Ogunsanya, Ikeja City Mall, Festival Mall, Park Lane, Ota Gateway, Cocoa Mall, and Ibadan Mall to the new ERP.
	     <div className='boldy' > Shoprite Akure Mall is scheduled to go live in:</div></p> */}
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