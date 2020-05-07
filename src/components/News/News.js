import React, { useState, useEffect } from "react";
import cx from "classnames";

import {
  CardContent,
  Typography,
  Card,
  Grid,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import { fetchNewsData } from "../../api";

import styles from "./News.module.css";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setNews(await fetchNewsData());
    };
    fetchApi();
  }, []);

  const newsGrid = news
    ? news.map((article, i) => {
        return (
          <Grid
            key={i}
            className={cx(styles.card, styles.infected)}
            item
            component={Card}
            xs={12}
            md={3}
          >
            <CardHeader
              key={i + 2}
              title={article.title}
              subheader={new Date(article.publishedAt).toDateString()}
            />
            <CardMedia
              key={i + 3}
              className={styles.media}
              image={article.urlToImage}
            />
            <CardContent>
              <Typography
                key={i + 4}
                variant="body2"
                gutterBottom
                component="p"
              >
                {article.description}
              </Typography>
              <Typography>
                <a key={i + 5} href={article.url}>
                  Link to full article
                </a>
              </Typography>
            </CardContent>
          </Grid>
        );
      })
    : null;

  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center">
        {newsGrid}
      </Grid>
    </div>
  );
}
