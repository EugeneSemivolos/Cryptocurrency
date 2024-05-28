import React from 'react'
import millify  from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Loading...';

  const { total, totalExchanges, totalMarketCap, total24hVolume, totalMarkets } = globalStats;

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={total}/></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(totalExchanges)}/></Col>
        <Col span={12}><Statistic title='Total Market cap' value={millify(totalMarketCap)}/></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(total24hVolume)}/></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(totalMarkets)}/></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>

  )
}

export default Homepage;
