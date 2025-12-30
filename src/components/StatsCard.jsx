import { Icon } from '@iconify/react'
import { Card, Group, Text, Badge } from '@mantine/core';
import React from 'react'



const StatsCard = ({title, value, icon}) => {
  return (
    <Card withBorder className='h-28 flex justify-center' radius="md" padding="md" shadow="sm" bg="var(--mantine-color-body)">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between" direction="column">
          <Text size="sm" c="dimmed">
            {title}
          </Text>
          <Icon icon={icon} className='w-8 h-8 mt-5 text-accent' />
        </Group>
          <Badge
            color="black"
            variant="light"
            size="lg"
          >
            {value}
          </Badge>
      </Card.Section>

      {/* Add more content here if needed, e.g., a list of properties or stats */}
    </Card>
  )
}

export default StatsCard
