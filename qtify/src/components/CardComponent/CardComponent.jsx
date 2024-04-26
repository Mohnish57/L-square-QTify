import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Tooltip } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import styles from "./CardComponent.module.css";

const CardComponent = ({ image, slug, follows, title, songs }) => {
  return (
    // <Link to="/album/:">

    <Tooltip title={songs} placement="top">
      <Card sx={{ width: 160, height: 210 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="160"
            height="170"
            image={image}
            alt={slug}
          />
          <CardContent className={styles.cardContent}>
            <Chip
              className={styles.chip}
              label={follows}
              variant="filled"
              color="primary"
            />
          </CardContent>
        </CardActionArea>
      </Card>
      {title}
    </Tooltip>
    // </Link>
  );
};

export default CardComponent;
