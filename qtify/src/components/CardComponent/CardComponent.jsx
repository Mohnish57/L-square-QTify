import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Tooltip } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import styles from "./CardComponent.module.css";
import numberTransform from "../../helper/numberTransform";
const CardComponent = ({ data, type }) =>
  type === "album" ? (
    <Tooltip title={data.songs.length} placement="top">
      <Link to={`/album/${data.slug}`}>
        <Card sx={{ width: 160, height: 210 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              width="160"
              height="170"
              image={data.image}
              alt={data.slug}
            />
            <CardContent className={styles.cardContent}>
              <Chip
                className={styles.chip}
                label={`${data.follows} Follows`}
                variant="filled"
                color="primary"
              />
            </CardContent>
          </CardActionArea>
        </Card>

        <h4>{data.title}</h4>
      </Link>
    </Tooltip>
  ) : (
    <>
      <Link to={`/album/${data.slug}`}>
        <Card sx={{ width: 160, height: 210 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              width="160"
              height="170"
              image={data.image}
              alt={data.slug}
            />
            <CardContent className={styles.cardContent}>
              <Chip
                className={styles.chip}
                label={`${numberTransform(data.likes)} Likes`}
                variant="filled"
                color="primary"
              />
            </CardContent>
          </CardActionArea>
        </Card>

        <h4 className={styles.title}>{data.title}</h4>
      </Link>
    </>
  );

export default CardComponent;
