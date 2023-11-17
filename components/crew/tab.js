import Image from "next/image";
import { useSpaceTourismContext } from "../../context";

const SpaceTourismCrewTab = ({ crew, indx }) => {
	const { crews, crewIndx, getCrewIndx } = useSpaceTourismContext();
	return (
		<>
			<div className="space-tourism-crew-tab">
				<div className="space-tourism-crew-tab-bio">
					<p className="crew-role">{crew.role}</p>
					<h3 className="crew-name">{crew.name}</h3>
					<p className="crew-bio">{crew.bio}</p>
					<ul className="crew-tab-controls">
						{crews.map((_, indx) => (
							<li
								onClick={() => getCrewIndx(indx)}
								key={`0${indx}`}
								className={indx === crewIndx ? "active" : ""}
							></li>
						))}
					</ul>
				</div>
				<img className="crew-image" src={crew.images.webp} alt="crew" />
			</div>
			<style jsx>{`
				.space-tourism-crew-tab {
					width: 100%;
					display: flex;
					justify-content: space-between;
				}

				.space-tourism-crew-tab-bio {
					flex-basis: 60%;
					padding: 5rem 0 0 0.5rem;
				}

				.crew-role {
					color: #fff;
					font-family: "Bellefair", sans-serif;
					font-size: 32px;
					font-weight: 400;
					text-transform: uppercase;
					margin-bottom: 15px;
				}

				.crew-name {
					color: #fff;
					font-family: "Bellefair", sans-serif;
					font-size: 56px;
					font-weight: 400;
					text-transform: uppercase;
					margin-bottom: 27px;
				}

				.crew-bio {
					color: #d0d6f9;
					font-family: "Barlow", sans-serif;
					font-size: 18px;
					font-weight: 400;
					line-height: 32px;
					padding-right: 12rem;
				}

				.crew-tab-controls {
					display: flex;
					gap: 1rem;
					margin-top: 5rem;
				}

				li {
					width: 15px;
					height: 15px;
					border-radius: 50%;
					background: #fff;
					opacity: 0.5;
					list-style: none;
				}

				li.active {
					opacity: 1;
				}
			`}</style>
		</>
	);
};

export default SpaceTourismCrewTab;
