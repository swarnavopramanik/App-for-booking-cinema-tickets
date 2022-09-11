import React, {useState} from "react";
// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
// Layout HOC
import DefaultLayoutHoc from "../layout/Default.layout";


const Homepage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvent, setOnlineStreamEvent] = useState([]);
  
  
  return (
    <>
    <HeroCarousel />

    <div className = "container mx-auto px-4 md:px-12 my-8">
    <h1 className = "text-2x font-bold text-gray-800 sm:ml-3 ml-0 my-3">
      The best of Entertainment
    </h1>
    <EntertainmentCardSlider />
    </div>

    <div className="container mx-auto px-4 md:px-12 my-8">
    <PosterSlider title= "Recommended Movies"
    subject= "List of recommended movies" 
    posters= {recommendedMovies}
    isDark={false} 
    />
    </div>

    <div className=" bg-premier-selago-800 py-12">
      <div className="container mx-auto px-4 md:px-12 my-8 flex-col gap-3">
        <div className= "hidden md:flex">
          <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className="w-full h-full" />
        </div>

    <div>
    <PosterSlider title= "Recommended Movies"
    subject= "Brand new releases every Friday" 
    posters= {premierMovies}
    isDark={true} 
    />
    </div>
    
    </div>
    </div>

    <div className="container mx-auto px-4 md:px-12 my-8 ">
    <PosterSlider title= "Online Streaming Event "
    subject= "" 
    posters= {onlineStreamEvent}
    isDark={false} 
    />
    </div>
    
    </>
  );
};

export default DefaultLayoutHoc(Homepage);
