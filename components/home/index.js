import SpaceTourismMobileMenu from '../shared/menu'
import SpaceTourismLandingContent from './main'

const SpaceTourismLandingPage =()=>{
    return (
        <>
        <header className='space-tourism-landing-page'>
        <SpaceTourismLandingContent />
        <SpaceTourismMobileMenu />
        </header>
        <style jsx>{`
            .space-tourism-landing-page{
                width: 100%;
                height: 100vh;
                background-image: url('assets/home/background-home-desktop.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 30% 70%;
            }

            @media only screen and (max-width: 800px){
                .space-tourism-landing-page{
                    width: 100%;
                    height: 100vh;
                    background-image: url('assets/home/background-home-tablet.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: 30% 70%;
                }
            }

            @media only screen and (max-width: 500px){
                .space-tourism-landing-page{
                    width: 100%;
                    height: 100vh;
                    background-image: url('assets/home/background-home-mobile.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: 30% 70%;
                }
            }
        `}</style>
        </>
    )
}

export default SpaceTourismLandingPage