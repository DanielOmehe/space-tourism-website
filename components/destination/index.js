import SpaceTourismDestinationContent from "./main";

const SpaceTourismDestinationPage = () => {
	return (
		<>
			<header className="space-tourism-destination-page">
				<SpaceTourismDestinationContent />
			</header>
			<style jsx>{`
				.space-tourism-destination-page {
					width: 100%;
					height: 100vh;
					background-image: url("assets/destination/background-destination-desktop.jpg");
					background-repeat: no-repeat;
					background-size: cover;
					background-position: 30% 70%;
				}
			`}</style>
		</>
	);
};

export default SpaceTourismDestinationPage;
