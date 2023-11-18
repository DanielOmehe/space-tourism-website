import { useSpaceTourismContext } from "../../context";
import SpaceTourismTechTab from "./tab";

const SpaceTourismTechTabs = () => {
	const { technologies, techIndx, getTechIndx } = useSpaceTourismContext();
	return (
		<>
			<div className="space-tourism-tech-tabs">
				<ul className="space-tourism-tech-tab-controls">
					{technologies.map((tech, indx) => (
						<li
							className={
								indx === techIndx
									? "space-tourism-tech-tab-control active"
									: "space-tourism-tech-tab-control"
							}
							onClick={() => getTechIndx(indx)}
							key={tech.name}
						>
							{indx + 1}
						</li>
					))}
				</ul>
				<div className="space-tourism-tech-tabs-container">
					{technologies.map((tech, indx) => {
						return (
							<>
								{indx === techIndx ? (
									<SpaceTourismTechTab tech={tech} />
								) : null}
							</>
						);
					})}
				</div>
			</div>
			<style jsx>{`
				.space-tourism-tech-tabs {
					width: 100%;
					display: flex;
				}

				.space-tourism-tech-tab-controls {
					width: 90px;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
					margin-top: 127px;
                    flex-basis: 10%;
				}

				.space-tourism-tech-tab-control {
					width: 80px;
                    cursor: pointer;
					height: 80px;
					flex-shrink: 0;
					border-radius: 50%;
					border: 2px solid #777;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #fff;
					text-align: center;
					font-family: "Bellefair", sans-serif;
					font-size: 32px;
					letter-spacing: 2px;
				}

				.space-tourism-tech-tab-control:hover {
                    border: 2px solid #fff;
				}

				.space-tourism-tech-tab-control.active {
					border-radius: 50%;
					background: #fff;
					color: #0b0d17;
                    border: none;
				}

				space-tourism-tech-tabs-container {
                    flex-basis: 90%;
                    border: 2px solid #fff;
				}
			`}</style>
		</>
	);
};

export default SpaceTourismTechTabs;
