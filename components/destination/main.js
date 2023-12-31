import { useSpaceTourismContext } from "../../context";
import SpaceTourismTabs from "./tabs";
import SpaceTourismPageHeader from "../shared/header";

const SpaceTourismDestinationContent = () => {
	const { currentPageIndx } = useSpaceTourismContext();
	return (
		<>
			<section className="destination-content">
				<SpaceTourismPageHeader indx={currentPageIndx} title={'pick your destination'} />
				<SpaceTourismTabs />
			</section>
			<style jsx>{`
				.destination-content {
					position: absolute;
					top: 30%;
					width: 80%;
					left: 10%;
				}

				.destination-header {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					gap: 1rem;
				}

				.destination-header .indx {
					font-weight: bold;
					color: #fff;
					font-family: "Barlow Condensed", sans-serif;
					font-size: 28px;
					letter-spacing: 4.725px;
					opacity: 0.25;
				}

				.pick {
					font-weight: 500;
					color: #fff;
					font-family: "Barlow Condensed", sans-serif;
					font-size: 28px;
					letter-spacing: 4.725px;
					text-transform: uppercase;
					margin-left: 28px;
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

export default SpaceTourismDestinationContent;
