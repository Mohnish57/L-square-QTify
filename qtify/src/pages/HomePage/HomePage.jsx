import HeroSection from "../../components/HeroSection/HeroSection";

import { useOutletContext } from "react-router-dom";
import CardCarousel from "../../components/CardCarousel/CardCarousel";

const HomePage = () => {
  const { data } = useOutletContext();
  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  return (
    <>
      <HeroSection />
      <CardCarousel title="Top Albums" data={topAlbums} type="album" />
      <CardCarousel title="New Albums" data={newAlbums} type="album" />
      {/* <CardCarousel title="Songs" filters={} data={songs} type="songs" /> */}
    </>
  );
};

export default HomePage;
