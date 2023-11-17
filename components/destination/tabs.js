import { useSpaceTourismContext } from "../../context";
import SpaceTourismTab from "./tab";

const SpaceTourismTabs = () => {
	const { destinations, currentDestination } = useSpaceTourismContext();
	return (
		<>
			<div className="space-tourism-tabs">
				{destinations.map((destination) => {
					return (
						<>
							{destination.name === currentDestination ? (
								<SpaceTourismTab destination={destination} />
							) : null}
						</>
					);
				})}
			</div>
			<style jsx>{`
				.space-tourism-tabs {
					width: 100%;
				}
			`}</style>
		</>
	);
};

export default SpaceTourismTabs;
