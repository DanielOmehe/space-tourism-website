import SpaceTourismPageHeader from "../shared/header";
import SpaceTourismTechTabs from './tabs'
import { useSpaceTourismContext } from "../../context";

const SpaceTourismTechContent = () => {
    const { currentPageIndx } = useSpaceTourismContext();
	return (
		<>
			<section className="space-tourism-tech-content">
				<SpaceTourismPageHeader indx={currentPageIndx} title="space launch 101" />
                <SpaceTourismTechTabs />
			</section>
			<style jsx>{`
				.space-tourism-tech-content {
					width: 100%;
					position: absolute;
					top: 25%;
					left: 0;
                    padding-left: 166.5px;
				}
			`}</style>
		</>
	);
};

export default SpaceTourismTechContent;
