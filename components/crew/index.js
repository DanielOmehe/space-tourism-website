import SpaceTourismCrewContent from './main'

const SpaceTourismCrewPage =()=>{
    return (
        <>
        <header className='space-tourism-crew-page'>
            <SpaceTourismCrewContent />
        </header>
        <style jsx>{`
            .space-tourism-crew-page{
                width: 100%;
                height: 100vh;
                background-image: url('assets/crew/background-crew-desktop.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 30% 70%;
            }
        `}</style>
        </>
    )
}

export default SpaceTourismCrewPage