import React from 'react'
import millify  from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const { total, totalExchanges, totalMarketCap, total24hVolume, totalMarkets } = data?.data?.stats;

  if (isFetching) return 'Loading...';

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
    </>
  )
}

export default Homepage