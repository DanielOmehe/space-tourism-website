import Image from "next/image";

const SpaceTourismTechTab = ({ tech }) => {
	return (
		<>
			<div className="space-tourism-tech-tab">
				<div className="space-tourism-tech-info">
					<p className="tech-header">THE TERMINOLOGY…</p>
					<h1 className="tech-name">{tech.name}</h1>
					<p className="tech-desc">{tech.description}</p>
				</div>
				<img src={tech.images.portrait} alt="tech" />
			</div>
			<style jsx>{`
				.space-tourism-tech-tab {
					display: flex;
					justify-content: space-between;
					padding-left: 80px;
					gap: 2rem;
				}

				.space-tourism-tech-info {
                    padding-top: 137px;
				}

				.space-tourism-tech-info .tech-header {
					color: #d0d6f9;
					font-family: 'Barlow Condensed', sans-serif;
					font-size: 16px;
					font-weight: 400;
					letter-spacing: 2.7px;
                    margin-bottom: 0.6875rem;
				}

				.space-tourism-tech-info .tech-name {
                    color: #FFF;
                    font-family: 'Bellefair', sans-serif;
                    font-size: 56px;
                    font-weight: 400;
                    text-transform: uppercase;
                    margin-bottom: 1.0625rem;
				}

				.space-tourism-tech-info .tech-desc {
                    color: #D0D6F9;
                    font-family: 'Barlow', sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 32px;
                    padding: 0 18rem 0 0;
				}
			`}</style>
		</>
	);
};

export default SpaceTourismTechTab;
