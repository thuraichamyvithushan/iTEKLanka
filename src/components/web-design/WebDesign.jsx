import WebDesignHero from './WebDesignHero';
import WebDesignServices from './WebDesignServices';
import WebDesignWhyChoose from './WebDesignWhyChoose';
import WebDesignPortfolio from './WebDesignPortfolio';
import WebDesignSeoContent from './WebDesignSeoContent';
import WebDesignFaq from './WebDesignFaq';
// import WebDesignContact from './WebDesignContact';
import heroVisual from '../../assets/services/webdesign.png';
import WebCTA from './webCta';

const WebDesign = () => {
    return (
        <div className="bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]">
            <WebDesignHero heroImage={heroVisual} />
            <WebDesignServices />
            <WebDesignWhyChoose />
            <WebDesignPortfolio />
            <WebDesignSeoContent />
            <WebDesignFaq />
            {/* <WebDesignContact /> */}
            <WebCTA/>
        </div>
    );
};

export default WebDesign;
