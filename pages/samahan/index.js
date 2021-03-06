import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

import Advocasix from '../../components/samahan/advocasix';
import BoardMembers from '../../components/samahan/board-members';
import ClusterReps from '../../components/samahan/cluster-reps';
import Departments from '../../components/samahan/departments';

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    fontFamily: 'Open\ Sans',
  },
  motionLogoContainer: {
    position: 'relative'
  },
  motionLogo: {
    position: 'absolute',
    left: -300,
    top: -300,
    width: 600,
    zIndex: -1
  },
  rootContainer: {
    width: '80%',
    margin: 'auto'
  }
}));

const Page = () => {
  // Get the data of the current list.

  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <div style={{ height: 100 }} />
      <Grid container direction="row" spacing={3} alignItems="center">
        <Grid item sm={9} component={Paper} elevation={0}>
          <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20 }}>
            SAMAHAN
          </Typography>
          <Typography style={{ marginBottom: 10, fontSize: '1.3em' }}>
          The Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de
          Davao, or SAMAHAN, is the official Student Government of the
          Higher Education Unit of the Ateneo de Davao University. It is
          an autonomous student government that is mandated to
          promote and protect the rights, welfare, aspirations, and
          interests of the student body.
          </Typography>
          <Typography style={{ marginBottom: 10, fontSize: '1.3em' }}>
          SAMAHAN promotes various advocacies that pertain to social
          justice, climate action, equal rights, and many more that promote
          the welfare of individuals inside and outside of the university. The
          SAMAHAN aims to fulfill not only our duties, but to also move
          forward with the student community in transforming into leaders
          of today for the university, Mindanao, and Philippines.
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item sm>
            <img src="https://samahan-cdn.snry.xyz/samahanDesc.png" width="100%" />
          </Grid>
        </Hidden>
      </Grid>
      <div style={{ height: 100 }} />
      <Grid container direction="row" spacing={3} alignItems="center" className={classes.contentContainer}>
        <Grid item sm className={classes.motionLogoContainer}>
          <img src="https://samahan-cdn.snry.xyz/samahanMotion.svg" className={classes.motionLogo} />
        </Grid>
        <Grid item sm={9} component={Paper} elevation={0}>
          <Typography variant="h3" component="h4" className={classes.contentHeader} style={{ marginBottom: 20 }}>
            SAMAHAN: More in Motion
          </Typography>
          <Typography style={{ marginBottom: 10, fontSize: '1.3em' }}>
          The central point of being in motion is that the SAMAHAN is
          dynamic, flexible, and mobile. All these point out that it is in
          constant progress. The motion does not only revolve around
          working to fulfill the duties, but it also refers to the joint move-
          ment of the SAMAHAN, as one student government, to be active
          pursuers of “more.” The SAMAHAN highlights its collective action
          as it links its ideals to those of the promising sections of Ateneo
          – the artists, athletes, scholars, business enthusiasts, digitally
          inclined students – to build strong relations that yield meaningful
          outcomes. It gears towards a community of workers, performers,
          and leaders mobilized through partnerships and empowerment
          of students who are driven to create impact and inspire more
          people to do the same.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ height: 100 }} />
      <div style={{ height: 100 }} />

      <Advocasix />

      <div style={{ height: 100 }} />

      <BoardMembers />

      <div style={{ height: 100 }} />

      <ClusterReps />

      <div style={{ height: 100 }} />

      <Departments />

    </div>
  );
};

export default Page;
