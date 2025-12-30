import React from 'react'
import { Container, Grid, Skeleton } from '@mantine/core';
import StatsCard from '../components/StatsCard';
import MarketOverviewChart from '../components/MarketOverviewChart';

// main
// soft
// mid
// dark
// accent

const Main = () => {
  const data = [
    { title: 'Total Properties', icon: 'mdi:home-city', value: '13'},
    { title: 'For Sale', icon: 'mdi:home', value: '4'},
    { title: 'For Rent', icon: 'mdi:trending-up', value: '1'},
    { title: 'Avg. Sale Price', icon: 'mdi:currency-eur', value: '112,000'},
  ];

  return (
    <div className='p-6 bg-main overflow-y-auto'>
      <h5>Dashboard</h5>
      <p className='text-sm text-accent mb-6'>Welcome back! Here's your property overview</p>        
        <Grid>
          {data.map((card, index) => {
            return (<Grid.Col span={{ base: 12, lg:3, md: 6, xs: 6 }}>
                      <StatsCard title={card.title} value={card.value} icon={card.icon} key={index}/>
                </Grid.Col>);
          })}
          
          <Grid.Col span={{ base: 12, md:12, xs: 12 }}>
            <MarketOverviewChart />
          </Grid.Col>
        </Grid>
    </div>
  )
}

export default Main
