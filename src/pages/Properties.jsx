import { Grid, Skeleton } from '@mantine/core'
import React from 'react'
import PropertyCard from '../components/PropertyCard';
import AddPropertyModal from '../components/AddPropertyModal';

const child = <Skeleton height={140} radius="md" animate={false} />;

const Properties = () => {
  return (
    <div className='md:p-10 p-2 overflow-y-auto bg-main'>
        <div className='flex justify-between md:flex-row flex-col gap-2 my-10 md:mt-0'>
          <h5 className='font-semibold md:text-xl'>Your properties!</h5>
          <div>
            <AddPropertyModal />
          </div>
        </div>

        <Grid>
          <Grid.Col span={{base: 12, lg:4, md: 6, sm: 12}}>
              <PropertyCard />
          </Grid.Col>
          <Grid.Col span={{base: 12, lg:4, md: 6, sm: 12}}>
              <PropertyCard />
          </Grid.Col>
          <Grid.Col span={{base: 12, lg:4, md: 6, sm: 12}}>
              <PropertyCard />
          </Grid.Col>
          
        </Grid>
    </div>
  )
}

export default Properties
