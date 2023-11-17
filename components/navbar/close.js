import Image from 'next/image';
import close from '../../public/assets/shared/icon-close.svg';
import { useSpaceTourismContext } from '../../context';

const Close =()=>{
    const { hideMemu } = useSpaceTourismContext();
    return(
        <>
            <div className='close_menu' onClick={hideMemu}>
                <Image src={close} alt='close menu' />
            </div>
            <style jsx>{`
                .close_menu{
                    margin-top: 1rem;
                    margin-left: 14rem;
                }
            `}</style>
        </>
    )
}

export default Close