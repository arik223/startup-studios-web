import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import StarIcon from '@material-ui/icons/Star'
import InfoIcon from '@material-ui/icons/Info'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import MailIcon from '@material-ui/icons/Mail'
import { graphql, useStaticQuery } from 'gatsby'
// import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import InputAdornment from '@material-ui/core/InputAdornment'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('md')]: {
      backgroundColor:
        'linear-gradient(113.81deg, #FF6B1F 3.41%, #FF7121 20.63%, #FF8328 44.2%, #FF9F32 70.49%, #FFBE3D 94.06%)',
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  background: {
    width: '100%',
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
  },
  grid: {
    height: '85vh',
    alignItems: 'center',
    // textAlign: 'center',
    width: '35%',
    marginLeft: 20,
    [theme.breakpoints.down('md')]: {
      height: '95vh',
    },
  },
  gridMob: {
    height: '80vh',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    paddingLeft: 0,
  },
}))

const IndexPage = props => {
  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "bg-mob-min.png" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "bg-min.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
  ]

  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       desktop: file(relativePath: { eq: "bg-min.png" }) {
  //         childImageSharp {
  //           fluid(quality: 90, maxWidth: 1920) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  // Set ImageData.
  let imageData
  let mobile = false
  if (isWidthUp('md', props.width)) {
    imageData = desktopImage.childImageSharp.fluid
  } else {
    mobile = true
    imageData = mobileImage.childImageSharp.fluid
  }

  // const imageData = mobileImage.childImageSharp.fluid
  // console.log(imageData)
  return (
    <BackgroundImage
      Tag="div"
      fluid={imageData}
      style={{
        // background: 'no-repeat bottom center fixed',
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: mobile ? 'bottom center' : 'center',
        // backgroundRepeat: 'repeat-y',
        // backgroundSize: 'cover',
        // overflow: 'none',
      }}
    >
      <Layout header={false}>
        <SEO title="Home" />
        <Hidden mdUp>
          <Grid
            container
            justify="center"
            textAlign="center"
            justifyContent="center"
            className={classes.gridMob}
          >
            <Grid item>
              <Box
                style={{
                  // padding: 35,
                  backdropFilter: 'blur(5px)',
                  // border: '2px solid black',
                  borderRadius: 8,
                  marginBottom: 20,
                }}
              >
                <Typography variant="h2" style={{ color: 'white' }}>
                  Be part of the future of innovative business collaboration.
                  Join our startup studios today!
                </Typography>
                <Typography variant="h3">
                  Type your email below to join our newsletter!
                </Typography>
              </Box>
              <Grid container direction="row" spacing={2} justify="center">
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Email address"
                    variant="outlined"
                    style={{
                      width: 302,
                    }}
                    InputProps={{
                      endAdornment: <MailIcon />,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ height: '100%' }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        <Hidden smDown>
          <Grid container justify="left" className={classes.grid}>
            <Grid item>
              <Box
                style={{
                  // padding: 35,
                  backdropFilter: 'blur(5px)',
                  // border: '2px solid black',
                  borderRadius: 8,
                  marginBottom: 20,
                }}
              >
                <Typography variant="h2" color="primary">
                  Be part of the future of innovative business collaboration.
                  Join our startup studios today!
                </Typography>
                <Typography variant="h3">
                  Type your email below to join our newsletter!
                </Typography>
              </Box>
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Email address"
                    variant="outlined"
                    style={{
                      width: 302,
                    }}
                    InputProps={{
                      endAdornment: <MailIcon />,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ height: '100%' }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        {/* <Grid
          container
          justify="left"
          style={{
            height: '100vh',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <Grid item>
            <Box
              style={{
                padding: 35,
                backdropFilter: 'blur(5px)',
                border: '2px solid black',
                borderRadius: 8,
              }}
            >
              <Typography variant="h1" color="secondary">
                Startup Studios
              </Typography>
              <Typography variant="h5">
                {' '}
                Stay tuned for something great.
              </Typography>
            </Box>
          </Grid>
        </Grid> */}
      </Layout>
    </BackgroundImage>
  )
}

export default withWidth()(IndexPage)
