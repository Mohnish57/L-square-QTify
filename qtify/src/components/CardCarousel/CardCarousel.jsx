import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./CardCarousel.module.css";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filters/Filter";
// import { fetchFilters } from "../../api/api";

const CardCarousel = ({ title, data, type, filterSource }) => {
  const [toggle, setToggle] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", value: "all" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  useEffect(() => {
    // console.log("useEffect called", await filterSource);
    if (!!filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters((prev) => [...prev, ...data]);
      });
    }
  }, []);

  // console.log("***", filters);
  const showFilters = filters.length > 1;
  // console.log(showFilters);

  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );
  return (
    <div className={styles.CardCarousel}>
      <>
        <div className={styles.carousel}>
          <div className={styles.header}>
            <h2>{title}</h2>
            {type === "album" ? (
              <h3 className={styles.toggle} onClick={() => setToggle(!toggle)}>
                {toggle ? "Show All" : "Collapse"}
              </h3>
            ) : null}
          </div>

          {data.length === 0 ? (
            <CircularProgress />
          ) : (
            <>
              {!toggle ? (
                <div className={styles.cards}>
                  {cardsToRender.map((album) => {
                    return (
                      <CardComponent key={album.id} data={album} type={type} />
                    );
                  })}
                </div>
              ) : (
                <>
                  {showFilters && (
                    <div className={styles.filterWrapper}>
                      <Filter
                        filters={filters}
                        selectedFilterIndex={selectedFilterIndex}
                        setSelectedFilterIndex={setSelectedFilterIndex}
                      />
                    </div>
                  )}

                  <Carousel
                    data={cardsToRender}
                    renderComponent={(data) => (
                      <CardComponent data={data} type={type} />
                    )}
                  />
                </>
              )}
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default CardCarousel;
