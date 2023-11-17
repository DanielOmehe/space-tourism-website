import { links } from "./data";
import { useRouter } from "next/router";
import SpaceTourismNavItem from "./item";

const SpaceTourismNavItems = () => {
	const { pathname } = useRouter();

	return (
		<>
			<ul className="space_tourism_nav_items">
				{links.map(({ name, route }, indx) => (
					<SpaceTourismNavItem
						key={name}
						path={pathname}
						indx={indx}
						route={route}
					>
						{name}
					</SpaceTourismNavItem>
				))}
			</ul>
			<style jsx>{`
				.space_tourism_nav_items {
					width: 930px;
					height: 100px;
					background: rgba(255, 255, 255, 0.09);
					backdrop-filter: blur(40px);
					margin-right: -6.5rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 8rem;
				}

				@media only screen and (max-width: 800px) {
					.space_tourism_nav_items {
						width: 550px;
						margin: 0;
                        padding: 0;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        padding-left: 3rem;
                        gap: 3rem;
					}
				}

				@media only screen and (max-width: 500px) {
					.space_tourism_nav_items {
                        display: none;
					}
				}
			`}</style>
		</>
	);
};

export default SpaceTourismNavItems;
