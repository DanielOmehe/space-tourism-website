import Link from "next/link";
import { useRouter } from "next/navigation";
import { links } from "./data";
import SpaceTourismNavItem from "./item";

const SpaceTourismMobileMenu = () => {
    const { pathname } = useRouter();
	return (
		<>
			<div className="space_tour_mobile_menu">
                {
                    links.map(({name, route}, indx) => <SpaceTourismNavItem path={pathname} route={route} indx={indx}>{name}</SpaceTourismNavItem>)
                }
            </div>
			<style jsx>{`
				.space_tour_mobile_menu {
					display: none;
				}

				@media only screen and (max-width: 500px) {
					.space_tour_mobile_menu {
						height: 100vh;
						width: 304px;
						background: rgba(200, 200, 200, 0.5);
						backdrop-filter: blur(15px);
						position: absolute;
						top: 0;
						right: 0;
						display: block;
                        opacity: 1;
                        z-index: 2;
                        flex-shrink: 0; 
					}
				}
			`}</style>
		</>
	);
};

export default SpaceTourismMobileMenu;
