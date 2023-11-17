import Link from "next/link";
import { useRouter } from "next/navigation";
import { links } from "./data";
import Close from "./close";
import { useSpaceTourismContext } from "../../context";

const SpaceTourismMobileMenu = () => {
	const { pathname } = useRouter();
    const { open } = useSpaceTourismContext();
	return (
		<>
			<div className="space_tour_mobile_menu">
				<Close />
				<ul>
					{links.map(({ name, route }, indx) => (
						<li key={name} className={pathname === route ? 'route active' : 'route'}>
							<p className="indx">{`0${indx}`}</p>
							<Link href={route} key={name}>
								{name}
							</Link>
						</li>
					))}
				</ul>
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
						right: 304px;
						display: block;
						opacity: 1;
						z-index: 2;
						padding: 2rem;
					}

					ul {
						gap: 2rem;
						margin-top: 4rem;
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						justify-content: flex-start;
					}

                    .route{
                        list-style: none;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        width: 100%;
                        gap: 1rem;
                    }

                    .route.active{
                        list-style: none;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        width: 100%;
                        border-right: 3px solid #fff;
                        gap: 1rem;
                    }

					.indx {
						font-weight: bold;
                        display: inline-flex;
						margin-left: 1rem;
						font-size: 1.2rem;
                        color: #fff;
                        font-family: 'Barlow Condensed', sans-serif;
					}
				}
			`}</style>
		</>
	);
};

export default SpaceTourismMobileMenu;
