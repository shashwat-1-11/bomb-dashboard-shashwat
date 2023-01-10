import React, { useMemo, useState } from 'react';
import CountUp from 'react-countup';
import { IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';
import { Helmet } from "react-helmet"
import Page from "../../components/Page"
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import BombImage from '../../assets/img/bomb.png';
import { makeStyles } from '@material-ui/core/styles';
import useBombFinance from '../../hooks/useBombFinance';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import { Box, Button, Card, CardContent, Grid, Paper } from '@material-ui/core';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
const TITLE = 'Bomb Dashoard';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const useStyles = makeStyles((theme) => ({
    button: {
      [theme.breakpoints.down('415')]: {
        // marginTop: '10px'
      },
    },
}));
const Dashboard = () => {
    const classes = useStyles();
    const investNowAddress = '#';
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const bombFinance = useBombFinance();

    const openModal = () => {
        setModal(!modal);
    };

    const spinner = () => {
        setVideoLoading(!videoLoading);
    };
    return (
        <Page>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <BackgroundImage />
            <Grid container spacing={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8} justify='center' style={{ margin: 'auto', display: 'flex' }}>
                        <Paper>
                            <Box p={4} style={{ textAlign: 'center' }}>
                            <h3>Bomb Finance Summary</h3>
                            <Card>
                                <CardContent align="center" style={{ position: 'relative' }}>
                                    <h5>$BOMB</h5>
                                    <Button
                                        onClick={() => {
                                        bombFinance.watchAssetInMetamask('BOMB');
                                        }}
                                        style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
                                    >
                                        {' '}
                                        <b>+</b>&nbsp;&nbsp;
                                        <img alt="metamask fox" style={{ width: '20px', filter: 'grayscale(100%)' }} src={MetamaskFox} />
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent align="center" style={{ position: 'relative' }}>
                                    <h5>$BSHARE</h5>
                                    <Button
                                        onClick={() => {
                                            bombFinance.watchAssetInMetamask('BSHARE');
                                        }}
                                        style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
                                    >
                                        {' '}
                                        <b>+</b>&nbsp;&nbsp;
                                        <img alt="metamask fox" style={{ width: '20px', filter: 'grayscale(100%)' }} src={MetamaskFox} />
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent align="center" style={{ position: 'relative' }}>
                                    <h5>$BBOND</h5>
                                    <Button
                                        onClick={() => {
                                            bombFinance.watchAssetInMetamask('BBOND');
                                        }}
                                        style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
                                    >
                                        {' '}
                                        <b>+</b>&nbsp;&nbsp;
                                        <img alt="metamask fox" style={{ width: '20px', filter: 'grayscale(100%)' }} src={MetamaskFox} />
                                    </Button>
                                </CardContent>
                            </Card>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

                <Button
                    href={investNowAddress}
                    style={{ margin: 'auto' }}
                    target="_blank"
                    className={'shinyButton ' + classes.button}
                >
                Invest Now
                </Button>
                <Button
                    href={'https://discord.bomb.money'}
                    rel="noopener noreferrer"
                    style={{ margin: 'auto' }}
                    target="_blank"
                    className={'shinyButton ' + classes.button}
                >
                Chat on Discord
                </Button>
                <Button
                    href={'https://docs.bomb.money/welcome-start-here/readme'}
                    style={{ margin: 'auto' }}
                    target="_blank"
                    className={'shinyButton ' + classes.button}
                >
                Read Docs
                </Button>
                <Grid item xs={12} sm={4}>
                    <Card style={{'paddingTop': '10px'}}>
                        <CardContent align="center">
                        <h2>Total Value Locked</h2>
                        <CountUp style={{ fontSize: '25px' }} end={50} separator="," prefix="$" />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card style={{'paddingTop': '10px'}}>
                        <CardContent align="center">
                        <h2>Total Value Locked</h2>
                        <CountUp style={{ fontSize: '25px' }} end={50} separator="," prefix="$" />
                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
            
        </Page>
    )
}

export default Dashboard;