import { useSpaceTourismContext } from "../../context";
import SpaceTourismCrewTab from "./tab";

const SpaceTourismCrewTabs = () => {
	const { crews, crewIndx } = useSpaceTourismContext();
	return (
		<>
			<div className="space-tourism-crew-tabs">
				{crews.map((crew, indx) => {
					return (
						<>
							{crewIndx === indx ? (
								<SpaceTourismCrewTab key={crew.name} crew={crew} />
							) : null}
						</>
					);
				})}
			</div>
			<style jsx>{`
				.space-tourism-crew-tabs {
					width: 100%;
				}
			`}</style>
		</>
	);
};

export default SpaceTourismCrewTabs;
