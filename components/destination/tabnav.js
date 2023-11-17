import { useSpaceTourismContext } from "../../context";

const SpaceTourismTabNav = () => {
	const { destinations, currentDestination, getCurrentDestination } = useSpaceTourismContext();

	return (
		<>
			<ul className="space-tourism-tab-nav">
				{destinations.map(({ name }) => (
					<li className={name === currentDestination ? 'active' : ''} onClick={() => getCurrentDestination(name)}>{name}</li>
				))}
			</ul>
			<style jsx>{`
				.space-tourism-tab-nav {
					widht: 100%;
					display: flex;
					align-items: center;
					justify-content: flex-end;
                    margin: 0 10rem 0 0;
				}

				li {
					list-style: none;
					color: #fff;
					font-family: 'Barlow Condensed', sans-serif;
					font-size: 1rem;
					font-weight: 400;
                    text-transform: uppercase;
                    margin: 0 35px;
					letter-spacing: 2.7px;
                    cursor: pointer;
				}

				li.active {
                    padding: 12px 0;
					list-style: none;
                    cursor: pointer;
					color: #fff;
					font-family: 'Barlow Condensed', sans-serif;
                    height: 100%;
					font-size: 1rem;
					font-weight: 400;
                    text-transform: uppercase;
                    margin: 0 35px;
                    border-bottom: 2px solid #fff;
					letter-spacing: 2.7px;
				}
			`}</style>
		</>
	);
};

export default SpaceTourismTabNav;
