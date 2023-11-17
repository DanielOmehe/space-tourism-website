import Link from "next/link";
import { useSpaceTourismContext } from "../../context";

const SpaceTourismNavItem = ({ children, indx, path, route }) => {
    const { getPageIndx } = useSpaceTourismContext();
	return (
		<>
			<li className={path === route ? "space_tourism_nav_item active" : "space_tourism_nav_item"}>
				<p>0{indx}</p>
				<Link href={route} onClick={() => getPageIndx(indx)}>{children}</Link>
			</li>
			<style jsx>{`
				.space_tourism_nav_item {
					list-style: none;
					display: flex;
					align-items: center;
					justify-content: space-between;
                    gap: 1rem;
                    height: 100%;
				}

				.space_tourism_nav_item:hover {
                    border-bottom: 2px solid #fff;
                    opacity: .5;
				}

				.space_tourism_nav_item.active{
					list-style: none;
					display: flex;
					align-items: center;
					justify-content: space-between;
                    gap: 1rem;
                    height: 100%;
                    border-bottom: 2px solid #fff;
				}

                p{
                    color: #fff;
                    font-size: 1rem;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-weight: bold;
                    letter-spacing: .2rem;
                }

                @media only screen and (max-width: 800px){
                    p{
                        display: none;
                    }
                }
			`}</style>
		</>
	);
};

export default SpaceTourismNavItem;
