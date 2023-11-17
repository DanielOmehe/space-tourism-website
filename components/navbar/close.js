import Image from 'next/image';
import close from '../../public/assets/shared/icon-close.svg';

const Close =()=>{
    return(
        <>
            <div className='close_menu'>
                <Image src={close} alt='close menu' />
            </div>
        </>
    )
}

export default Close