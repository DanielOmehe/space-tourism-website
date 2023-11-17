import SpaceTourismNavItems from "./navItems";
import Logo from "./logo";
import SpaceTourismMenu from "./hamburger";

const SpaceTourismNavbar = () => {
	return (
		<>
			<nav className="space_tourism_navbar">
				<Logo />
				<hr />
				<SpaceTourismNavItems />
                <SpaceTourismMenu />
			</nav>
			<style jsx>{`
				.space_tourism_navbar {
					width: 90%;
					position: absolute;
					top: 0;
					left: 0;
					margin-top: 1.5rem;
					margin-left: 3rem;
					padding: 24px 0;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				hr {
					width: 523px;
					position: absolute;
					left: 8rem;
				}

				@media only screen and (max-width: 800px) {
					.space_tourism_navbar {
                        width: 100%;
                        margin-top: 0;
                    }
                    
                    hr {
						display: none;
					}
				}

				@media only screen and (max-width: 500px) {
					.space_tourism_navbar {
                        width: 100%;
                        margin-top: 0;
                        padding: 1.5rem;
                        margin: 0;
                    }
                    
                    hr {
						display: none;
					}
				}
			`}</style>
		</>
	);
};

export default SpaceTourismNavbar;
