import React, { useMemo, useState } from 'react';
import CountUp from 'react-countup';
import { IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';
import { Helmet } from 'react-helmet';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import BombImage from '../../assets/img/bomb.png';
import { makeStyles } from '@material-ui/core/styles';
import useBombFinance from '../../hooks/useBombFinance';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import { Box, Button, Card, CardContent, Grid, Paper } from '@material-ui/core';
import useLpStats from '../../hooks/useLpStats';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';
import usebShareStats from '../../hooks/usebShareStats';
import useBondStats from '../../hooks/useBondStats';
import useBombStats from '../../hooks/useBombStats';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import { roundAndFormatNumber } from '../../0x';
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
  // const bombFinance = useBombFinance();

  const bombFtmLpStats = useLpStatsBTC('BOMB-BTCB-LP');
  const bShareFtmLpStats = useLpStats('BSHARE-BNB-LP');
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const bombFinance = useBombFinance();

  const bombLPStats = useMemo(() => (bombFtmLpStats ? bombFtmLpStats : null), [bombFtmLpStats]);
  const bshareLPStats = useMemo(() => (bShareFtmLpStats ? bShareFtmLpStats : null), [bShareFtmLpStats]);
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

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
        {/* BOMB */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
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
              <h2 style={{ marginBottom: '10px' }}>BOMB</h2>
              10,000 BOMB (1.0 Peg) =
              <Box>
                <span style={{ fontSize: '30px', color: 'white' }}>
                  {bombPriceInBNB ? bombPriceInBNB : '-.----'} BTC
                </span>
              </Box>
              <Box>
                <span style={{ fontSize: '16px', alignContent: 'flex-start' }}>
                  ${bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'} / BOMB
                </span>
              </Box>
              <span style={{ fontSize: '12px' }}>
                Market Cap: ${roundAndFormatNumber(bombCirculatingSupply * bombPriceInDollars, 2)} <br />
                Circulating Supply: {roundAndFormatNumber(bombCirculatingSupply, 2)} <br />
                Total Supply: {roundAndFormatNumber(bombTotalSupply, 2)}
              </span>
            </CardContent>
          </Card>
        </Grid>

        {/* BSHARE */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
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
              <h2 style={{ marginBottom: '10px' }}>BSHARE</h2>
              Current Price
              <Box>
                <span style={{ fontSize: '30px', color: 'white' }}>
                  {bSharePriceInBNB ? bSharePriceInBNB : '-.----'} BNB
                </span>
              </Box>
              <Box>
                <span style={{ fontSize: '16px' }}>
                  ${bSharePriceInDollars ? bSharePriceInDollars : '-.--'} / BSHARE
                </span>
              </Box>
              <span style={{ fontSize: '12px' }}>
                Market Cap: ${roundAndFormatNumber((bShareCirculatingSupply * bSharePriceInDollars).toFixed(2), 2)}{' '}
                <br />
                Circulating Supply: {roundAndFormatNumber(bShareCirculatingSupply, 2)} <br />
                Total Supply: {roundAndFormatNumber(bShareTotalSupply, 2)}
              </span>
            </CardContent>
          </Card>
        </Grid>

        {/* BBOND */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
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
              <h2 style={{ marginBottom: '10px' }}>BBOND</h2>
              10,000 BBOND
              <Box>
                <span style={{ fontSize: '30px', color: 'white' }}>
                  {tBondPriceInBNB ? tBondPriceInBNB : '-.----'} BTC
                </span>
              </Box>
              <Box>
                <span style={{ fontSize: '16px' }}>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'} / BBOND</span>
              </Box>
              <span style={{ fontSize: '12px' }}>
                Market Cap: ${roundAndFormatNumber((tBondCirculatingSupply * tBondPriceInDollars).toFixed(2), 2)} <br />
                Circulating Supply: {roundAndFormatNumber(tBondCirculatingSupply, 2)} <br />
                Total Supply: {roundAndFormatNumber(tBondTotalSupply, 2)}
              </span>
            </CardContent>
          </Card>
        </Grid>
        <Button
          href={investNowAddress}
          style={{ margin: 'auto', padding: '10px 70px' }}
          target="_blank"
          className={'shinyButton ' + classes.button}
        >
          Invest Now
        </Button>
        <Button
          href={'https://discord.bomb.money'}
          rel="noopener noreferrer"
          style={{ margin: 'auto', padding: '10px 70px' }}
          target="_blank"
          className={'shinyButton ' + classes.button}
        >
          Chat on Discord
        </Button>
        <Button
          href={'https://docs.bomb.money/welcome-start-here/readme'}
          style={{ margin: 'auto', padding: '10px 70px'}}
          target="_blank"
          className={'shinyButton ' + classes.button}
        >
          Read Docs
        </Button>
      </Grid>
    </Page>
  );
};

export default Dashboard;
