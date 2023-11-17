import { useSpaceTourismContext } from "../../context";
import SpaceTourismPageHeader from "../shared/header";
import SpaceTourismCrewTabs from './tabs';

const SpaceTourismCrewContent = () => {
	const { currentPageIndx } = useSpaceTourismContext();
	return (
		<>
			<section className="destination-content">
				<SpaceTourismPageHeader indx={currentPageIndx} title={'meet your crew'} />
                <SpaceTourismCrewTabs />
			</section>
			<style jsx>{`
				.destination-content {
					position: absolute;
					top: 30%;
					width: 80%;
					left: 10%;
				}

				@media only screen and (max-width: 800px) {
					.destination-content {
						position: absolute;
						top: 15%;
						width: 80%;
						left: 10%;
					}

					.destination-header {
						gap: 0.8rem;
					}

					.destination-header .indx {
						font-size: 20px;
					}

					.pick {
						font-size: 20px;
					}
				}

				@media only screen and (max-width: 500px) {
					.destination-content {
						position: absolute;
						top: 15%;
						width: 80%;
						left: 10%;
					}

					.destination-header {
						gap: 0.8rem;
					}

					.destination-header .indx {
						font-size: 20px;
					}

					.pick {
						font-size: 20px;
					}
				}
			`}</style>
		</>
	);
};

export default SpaceTourismCrewContent;
