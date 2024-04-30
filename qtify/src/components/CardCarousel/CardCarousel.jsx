import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./CardCarousel.module.css";
import Carousel from "../Carousel/Carousel";

const CardCarousel = ({ title, data, type }) => {
  //   console.log("***", data);
  const [toggle, setToggle] = useState(true);
  const [filters, setFilters] = useState({ key: "all", value: "all" });
  //   console.log(toggle);

  //   useEffect(() => {
  //     if()
  //   }, []);
  return (
    <div className={styles.CardCarousel}>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <>
          <div className={styles.carousel}>
            <div className={styles.header}>
              <h2>{title}</h2>
              <h3 className={styles.toggle} onClick={() => setToggle(!toggle)}>
                {toggle ? "Show All" : "Collapse"}
              </h3>
            </div>

            {!toggle ? (
              <div className={styles.cards}>
                {data.map((album) => {
                  return (
                    <CardComponent key={album.id} data={album} type={type} />
                  );
                })}
              </div>
            ) : (
              <Carousel
                data={data}
                renderComponent={(data) => (
                  <CardComponent data={data} type={type} />
                )}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CardCarousel;
