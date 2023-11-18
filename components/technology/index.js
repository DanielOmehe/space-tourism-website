import SpaceTourismTechContent from "./main";

const SpaceTourismTechnologyPage = () => {
	return (
		<>
			<header className="space-tourism-Technology-page">
				<SpaceTourismTechContent />
			</header>
			<style jsx>{`
				.space-tourism-Technology-page {
					width: 100%;
					height: 100vh;
					background-image: url("assets/technology/background-technology-desktop.jpg");
					background-repeat: no-repeat;
					background-size: cover;
					background-position: 30% 70%;
				}
			`}</style>
		</>
	);
};

export default SpaceTourismTechnologyPage;
