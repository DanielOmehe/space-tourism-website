import '../public/styles/app.css';
import SpaceTourismNavbar from '../components/navbar';

const SpaceTourismWebsite =({Component, pageProps})=> {
    return (
        <>
        <SpaceTourismNavbar />
        <Component {...pageProps} />
        </>
    )
}

export default SpaceTourismWebsite