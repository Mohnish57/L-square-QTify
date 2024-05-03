import HeroSection from "../../components/HeroSection/HeroSection";
import { useOutletContext } from "react-router-dom";
import CardCarousel from "../../components/CardCarousel/CardCarousel";

import styles from "./HomePage.module.css";
const HomePage = () => {
  const { data } = useOutletContext();
  const { topAlbums = [], newAlbums = [], songs = [], filters = [] } = data;
  console.log(filters);
  return (
    <>
      <HeroSection />
      <div className={styles.cardSection}>
        <CardCarousel title="Top Albums" data={topAlbums} type="album" />
        <CardCarousel title="New Albums" data={newAlbums} type="album" />
        <CardCarousel
          title="Songs"
          filterSource={filters}
          data={songs}
          type="songs"
        />
      </div>
    </>
  );
};

export default HomePage;
