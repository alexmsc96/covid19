import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

export default function Cards({
  data: { cases, recovered, deaths, updated, active, todayCases, todayDeaths },
}) {
  if (!cases) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={cases} duration={3} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of total cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of total deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container spacing={4} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected today
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={todayCases} duration={3} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths today
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={todayDeaths} duration={3} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of new cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={active} duration={3} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of total active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
