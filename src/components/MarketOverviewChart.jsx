import React from 'react'
import {  Paper, Text, Group, Divider, rem, Stack} from '@mantine/core';
import { LineChart } from '@mantine/charts'; // Importojmë grafikët
import { Icon } from '@iconify/react';

// Të dhënat për grafikun e trendit (Area Chart)
const trendData = [
  { date: 'Jan', Sales: 2400, Rent: 1200 },
  { date: 'Feb', Sales: 1398, Rent: 2100 },
  { date: 'Mar', Sales: 9800, Rent: 2290 },
  { date: 'Apr', Sales: 3908, Rent: 2000 },
  { date: 'May', Sales: 4800, Rent: 2181 },
  { date: 'Jun', Sales: 3800, Rent: 2500 },
];

function CustomTooltip({ active, payload, label }) {
    
  if (!active || !payload || !payload.length) return null;

  return (
    <Paper shadow="md" radius="sm" withBorder p="xs" style={{ minWidth: rem(120) }}>
      <Text size="xs" fw={700} c="dimmed" mb={4} tt="uppercase">
        {label}
      </Text>
      <Divider mb={8} />
      <Stack gap={4}>
        {payload.map((item) => (
          <Group key={item.name} justify="space-between" gap="lg">
            <Group gap={6}>
              <div 
                style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: item.color }} 
              />
              <Text size="xs" fw={500}>{item.name}</Text>
            </Group>
            <Text size="xs" fw={700}>
              €{item.value.toLocaleString()}
            </Text>
          </Group>
        ))}
      </Stack>
    </Paper>
  );
}

const MarketOverviewChart = () => {
  return (
    <div className="py-6 space-y-6 w-full">
      <div>
        <Paper shadow="xs" radius="md" p="md" withBorder className="lg:col-span-2">
          <Text size="lg" fw={600} mb="md">Revenue Overview</Text>
           <LineChart
                h={400}
                data={trendData}
                dataKey="date"
                series={[
                    { name: 'Sales', color: 'orange.4' },
                    { name: 'Rent', color: 'gray.6' },
                ]}
                curveType="linear"
                tooltipProps={{
                content: ({ active, payload, label }) => (
                <CustomTooltip active={active} payload={payload} label={label} />
                ),
            }}
            />
        </Paper>
      </div>
    </div>
  )
}

export default MarketOverviewChart

