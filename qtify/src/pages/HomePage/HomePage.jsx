import HeroSection from "../../components/HeroSection/HeroSection";
import { useOutletContext } from "react-router-dom";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import { fetchFilters } from "../../api/api";
import styles from "./HomePage.module.css";
const HomePage = () => {
  const { data } = useOutletContext();
  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
      <HeroSection />
      <div className={styles.cardSection}>
        <CardCarousel title="Top Albums" data={topAlbums} type="album" />
        <CardCarousel title="New Albums" data={newAlbums} type="album" />
        <CardCarousel
          title="Songs"
          filterSource={fetchFilters}
          data={songs}
          type="songs"
        />
      </div>
    </>
  );
};

export default HomePage;
