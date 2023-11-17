import "../public/styles/app.css";
import SpaceTourismNavbar from "../components/shared";
import SpaceTourismProvider from "../context";

const SpaceTourismWebsite = ({ Component, pageProps }) => {
	return (
		<SpaceTourismProvider>
			<SpaceTourismNavbar />
			<Component {...pageProps} />
		</SpaceTourismProvider>
	);
};

export default SpaceTourismWebsite;
