import Image from "next/image";

/* eslint-disable import/no-default-export */
export default function About(): JSX.Element {
	function AboutSection(props: any) {
		return (
			<div id={props.id} className="about-section">
				<img className="about-img" alt="" src={props.image} />
				<h3 className="faq-title">{props.title}</h3>
				<p>{props.text}</p>
			</div>
		);
	}
	function AboutRow(props: any) {
		return (
			<div style={{ flexDirection: props.flex }} className="about-row">
				<Image
					width={600}
					height={400}
					className="about-team-logo"
					id={props.imageID}
					src={props.image}
					alt=""
				/>
				{props.func}
			</div>
		);
	}
	return (
		<div className="about-div" id="about">
			<h2 className="section-title">Sparks Volleyball Club</h2>
			<AboutRow
				func={
					<AboutSection
						image="/Images/desktop.svg"
						title="Who We Are"
						id="row-0"
						text="Sparks Volleyball Club is committed to providing an excellent volleyball experience that promotes hard work, great attitudes, a genuine respect for the game, a “TEAM” concept at all times, and leadership development for each athlete. SVBC will provide the maximum opportunity for each athlete to train and compete at their highest level."
					/>
				}
				image="/Images/Sparks/8-22-2_Tourney-55c.jpg"
				imageID="about-img-1"
				flex="row-reverse"
			/>
			<AboutRow
				func={
					<AboutSection
						image="/Images/mobile.svg"
						title="What We Do"
						id="row-1"
						text="Champion athletes aren’t just born - they’re selected, trained, molded and tested. We hone raw talent to maturity with quality coaching, primal workouts and a true love of the sport. Teamwork, perseverance, sportsmanship - those are the hallmarks of Sparks VBC.  No more hoping for the “good coach” or following coaches from club to club."
					/>
				}
				image="/Images/Sparks/8-22-2_Tourney-43.jpg"
				imageID="about-img-2"
				flex="row"
			/>
		</div>
	);
}
