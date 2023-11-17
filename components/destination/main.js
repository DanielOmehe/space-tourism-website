import { useSpaceTourismContext } from "../../context";
import SpaceTourismTabNav from './tabnav'
import SpaceTourismTabs from './tabs'

const SpaceTourismDestinationContent = () => {
	const { currentPageIndx } = useSpaceTourismContext();
	return (
		<>
			<section className="destination-content">
				<div className="destination-header">
					<p className="indx">0{currentPageIndx}</p>
					<p className='pick'>pick your destination</p>
				</div>
                <SpaceTourismTabNav />
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
					font-family: 'Barlow Condensed', sans-serif;
					font-size: 28px;
					letter-spacing: 4.725px;
                    opacity: 0.25;
				}

				.pick{
					font-weight: 500;
					color: #fff;
                    font-family: 'Barlow Condensed', sans-serif;
					font-size: 28px;
					letter-spacing: 4.725px;
                    text-transform: uppercase;
                    margin-left: 28px;
				}
			`}</style>
		</>
	);
};

export default SpaceTourismDestinationContent;
