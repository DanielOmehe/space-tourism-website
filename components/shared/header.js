const SpaceTourismPageHeader = ({ indx, title }) => {
	return (
		<>
			<div className="destination-header">
				<p className="indx">0{indx}</p>
				<p className="pick">{title}</p>
			</div>
			<style jsx>{`
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
			`}</style>
		</>
	);
};

export default SpaceTourismPageHeader;
