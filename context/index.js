import { useState, createContext, useContext } from "react";

const SpaceTourismContext = createContext();

export const useSpaceTourismContext =()=> useContext(SpaceTourismContext);

const SpaceTourismProvider = ({ children }) => {
    const [open, SetOpen] = useState(false);

    const showMenu =()=> SetOpen(open => true);
    const hideMenu =()=> SetOpen(open => false);
	return (
		<SpaceTourismContext.Provider value={{ open, showMenu, hideMenu }}>{children}</SpaceTourismContext.Provider>
	);
};

export default SpaceTourismProvider;