import { useEffect, useState, createContext, useContext } from "react";
import data from "../data.json";

const SpaceTourismContext = createContext();

export const useSpaceTourismContext = () => useContext(SpaceTourismContext);

const SpaceTourismProvider = ({ children }) => {
	const [open, SetOpen] = useState(false);
	const [currentPageIndx, setCurrentPageIndx] = useState(1);
	const [crews, setCrews] = useState(data.crew);
	const [crewIndx, setCrewIndx] = useState(0);
	const [destinations, setDestinations] = useState(data.destinations);
	const [currentDestination, setCurrentDestination] = useState(
		destinations[0].name
	);
	const [technologies, setTechnologies] = useState(data.technology);
	const [techIndx, setTechIndx] = useState(0);

    const getTechIndx =(indx)=> setTechIndx(techIndx => indx);
	const getCurrentDestination = (name) =>
		setCurrentDestination((currentDestination) => name);
	const getCrewIndx = (indx) => setCrewIndx((crewIndx) => indx);
	const getPageIndx = (indx) => setCurrentPageIndx((currentPage) => indx);
	const showMenu = () => SetOpen((open) => true);
	const hideMenu = () => SetOpen((open) => false);
	return (
		<SpaceTourismContext.Provider
			value={{
				open,
				showMenu,
				hideMenu,
				currentPageIndx,
				getPageIndx,
				crews,
				destinations,
				technologies,
				currentDestination,
				getCurrentDestination,
                crewIndx,
                getCrewIndx,
                techIndx,
                getTechIndx
			}}
		>
			{children}
		</SpaceTourismContext.Provider>
	);
};

export default SpaceTourismProvider;
