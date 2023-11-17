import Image from "next/image";
import { useSpaceTourismContext } from "../../context";

const SpaceTourismTab = ({ destination }) => {
	const { currentDestination } = useSpaceTourismContext();
	return (
		<>
			<div className="space-tourism-tab">
				<Image
					src={destination.images.webp}
					alt={destination.name}
					width={420}
					height={420}
				/>
				<div className="space-tourism-tab-info">
					<h1 className="heading">{destination.name}</h1>
					<p className="description">{destination.description}</p>
					<hr />
					<div className="space-tourism-measure">
						<div className="space-tourism-avg-est">
							<p>avg. distance</p>
							<h3>{destination.distance}</h3>
						</div>
						<div className="space-tourism-avg-est">
							<p>est. travel time</p>
							<h3>{destination.travel}</h3>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.space-tourism-tab {
					display: grid;
					grid-template-columns: 1fr 1fr;
					padding-left: 5rem;
				}

				.space-tourism-tab-info {
					color: #fff;
					width: 100%;
					margin-top: 2.3rem;
				}

				.space-tourism-tab-info .heading {
					color: #fff;
					font-family: "Bellefair", sans-serif;
					text-transform: uppercase;
					font-size: 100px;
					font-weight: 400;
					margin-bottom: 1rem;
				}

				.space-tourism-tab-info .description {
					color: #d0d6f9;
					font-family: Barlow;
					font-size: 1.2rem;
					font-weight: 400;
					line-height: 32px;
					margin-bottom: 3.375rem;
					padding-right: 8rem;
				}

				.space-tourism-measure {
					display: grid;
					grid-template-columns: 1fr 1fr;
					margin-top: 1.75rem;
				}

				.space-tourism-avg-est p {
					text-transform: uppercase;
					color: #d0d6f9;
					font-family: 'Barlow Condensed', sans-serif;
					font-size: 0.875rem;
					font-weight: 400;
					letter-spacing: 2.362px;
                    margin-bottom: .5rem;
				}

				.space-tourism-avg-est h3 {
					text-transform: uppercase;
                    color: #FFF;
                    font-family: Bellefair;
                    font-size: 28px;
                    font-weight: 400;
				}
			`}</style>
		</>
	);
};

export default SpaceTourismTab;
