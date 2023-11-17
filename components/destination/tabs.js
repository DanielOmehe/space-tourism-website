import { useSpaceTourismContext } from "../../context";
import SpaceTourismTab from "./tab";
import SpaceTourismTabNav from "./tabnav";

const SpaceTourismTabs = () => {
	const { destinations, currentDestination } = useSpaceTourismContext();
	return (
		<>
			<div className="space-tourism-tabs">
				<SpaceTourismTabNav />
				{destinations.map((destination) => {
					return (
						<>
							{destination.name === currentDestination ? (
								<SpaceTourismTab key={destination.name} destination={destination} />
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
