import HomeBanner from "../components/HomePageComponets/HomeBanner";
import HomeCampaigns from "../components/HomePageComponets/HomeCampaigns";
import HomeMission from "../components/HomePageComponets/HomeMission";

const HomePage = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeMission></HomeMission>

            <section className="bg-[rgb(38,67,97)]">
                <h2 className="w-[80%] md:w-[60%] lg:w-[50%] mx-auto text-white pt-6 md:pt-10 pb-4 md:pb-6 font-bold text-base md:text-xl lg:text-2xl text-center"> FundFusion allows fundraisers to create free personal crowdfunding campaigns, with no platform fees!</h2>
                <div className="pb-6 md:pb-10">
                <button className="text-black bg-[#F2EEE0] text-sm lg:text-lg font-medium rounded-xl py-1 md:py-2 px-3 md:px-4  flex items-center justify-center mx-auto  gap-1">
                  Create a Campaign
              </button>
                </div>

            </section>

            <HomeCampaigns></HomeCampaigns>
            
        </div>
    );
};

export default HomePage;