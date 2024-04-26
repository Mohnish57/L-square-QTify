import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./CardCarousel.module.css";
const CardCarousel = ({ title, data, type }) => {
  return (
    <div className={styles.CardCarousel}>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <>
          <div className={styles.carousel}>
            <h2>{title}</h2>
            <div className={styles.cards}>
              {data.map((album, index) => {
                // console.log(album, index);
                if (index === 0) {
                  return (
                    <CardComponent
                      key={album.id}
                      image={album.image}
                      title={album.title}
                      slug={album.slug}
                      follows={album.follows}
                      songs={album.songs.length}
                    />
                  );
                }
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardCarousel;
