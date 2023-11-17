import Image from "next/image";
import hamburger from "../../public/assets/shared/icon-hamburger.svg";
import { useSpaceTourismContext } from "../../context";

const SpaceTourismMenu = () => {

    const { hideMenu } = useSpaceTourismContext();
	return (
		<>
			<div className="hamburger_menu" onClick={hideMenu}>
				<Image src={hamburger} alt="hamburger-menu" />
			</div>
			<style jsx>{`
            .hamburger_menu{
                display: none;
            }

            @media only screen and (max-width: 500px){
                .hamburger_menu{
                    display: block;
                }   
            }
            `}</style>
		</>
	);
};

export default SpaceTourismMenu;
