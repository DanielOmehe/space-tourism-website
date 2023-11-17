import Image from "next/image";
import hamburger from "../../public/assets/shared/icon-hamburger.svg";

const SpaceTourismMenu = () => {
	return (
		<>
			<div className="hamburger_menu">
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
