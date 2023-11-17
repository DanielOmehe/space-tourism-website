const SpaceTourismLandingContent = () => {
	return (
		<>
			<section className="space_tourism_landing_content">
				<article className="space_tourism_heading">
					<p>SO, YOU WANT TO TRAVEL TO</p>
					<h2>SPACE</h2>
					<p className='space'>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</article>
				<article className="space_tourism_explore">
					<p>EXPLORE</p>
				</article>
			</section>
			<style jsx>{`
				.space_tourism_landing_content {
                    width: 80%;
                    position: absolute;
                    top: 40%;
                    left: 10%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
				}

                .space_tourism_heading p{
                    color: #fff;
                    font-size: 28px;
                    font-family: 'Barlow Condensed', sans-serif;
                }

                .space_tourism_heading .space{
                    color: #fff;
                    font-size: 18px;
                    font-family: 'Barlow', sans-serif;
                    padding-right: 12rem;
                    line-height: 34px;
                }

                .space_tourism_heading h2{
                    color: #fff;
                    font-size: 150px;
                    font-family: 'Bellefair', serif;
                    margin: 24px 0;
                }

                .space_tourism_explore{
                    width: 274px;
                    height: 274px;
                    background: #fff;
                    border-radius: 50%;
                    text-align: center;
                    display: grid;
                    place-items: center center;
                    font-size: 32px;
                    font-family: 'Bellefair', serif;
                    margin: auto;
                    position: relative;
                    z-index: 1;
                    cursor: pointer;
                }

                .space_tourism_explore:hover::after{
                    content: '';
                    width: 450px;
                    height: 450px;
                    background: #fff;
                    border-radius: 50%;
                    text-align: center;
                    display: grid;
                    place-items: center center;
                    position: absolute;
                    z-index: 0;
                    opacity: 0.1036;
                    background: #FFF; 
                }

                @media only screen and (max-width: 800px){
                    .space_tourism_landing_content {
                        width: 100%;
                        position: absolute;
                        top: 20%;
                        left: 0;
                        grid-template-columns: 1fr;
                        gap: 15rem;
                    }

                    .space_tourism_heading p{
                        text-align: center;
                    }

                    .space_tourism_heading h2{
                        text-align: center;
                    }

                    .space_tourism_heading .space{
                        padding: 0 9.3rem;
                        text-align: center;
                    }
                }

                @media only screen and (max-width: 500px){
                    .space_tourism_landing_content {
                        width: 100%;
                        position: absolute;
                        top: 15%;
                        left: 0;
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }

                    .space_tourism_heading p{
                        text-align: center;
                        font-size: 16px;
                    }

                    .space_tourism_heading h2{
                        text-align: center;
                        font-size: 80px;
                        margin: 10px 0;
                    }

                    .space_tourism_heading .space{
                        padding: 0 2rem;
                        font-size: 15px;
                        line-height: 25px;
                    }

                    .space_tourism_explore{
                        width: 200px;
                        height: 200px;
                    }

                    .space_tourism_explore:hover::after{
                        content: '';
                        width: 280px;
                        height: 280px;
                        background: #fff;
                        border-radius: 50%;
                        text-align: center;
                        position: absolute;
                        z-index: 0;
                        opacity: 0.1036;
                    }
                }
			`}</style>
		</>
	);
};

export default SpaceTourismLandingContent;
