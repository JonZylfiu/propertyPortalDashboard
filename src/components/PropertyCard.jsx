import {  Badge, Button, Card, Group, Image, Text, Stack } from '@mantine/core';
import { SimpleGrid, Paper, Title } from '@mantine/core';
import { List, ThemeIcon, rem } from '@mantine/core';
import { Icon } from '@iconify/react';

const mockdata = {
    "id": 1,
    "title": "Modern Family House",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80",
    "location": {
      "street": "12 Kopernice Street",
      "city": "Kamenice",
      "country": "Kosove"
    },
    "price": "250,000.000",
    "specifics": {
      "bedrooms": 4,
      "bathrooms": 3,
      "area": 2500,
      "parking": 2
    },
    "about": "A modern home with open floor plan and high-end finishes...",
    "details": {
      "propertyId": "PROP-2024-001",
      "propertyType": "House",
      "yearBuilt": 2020,
      "status": "For Sale"
    },
    "features": [
      "Open floor plan",
      "Smart home system",
      "Landscaped backyard"
    ],
    "listedDate": "2025-10-12"
};


const propertyData = [
  { label: 'Property ID', value: 'PROP-2024-002' },
  { label: 'Property Type', value: 'Apartment' },
  { label: 'Year Built', value: '2021' },
  { label: 'Status', value: 'For Sale', isStatus: true },
];


const PropertyCard = () => {
  const { image, title, about: description, location } = mockdata;

  return (
  <Card withBorder radius="md" p="md" shadow="sm">
  <Card.Section>
    <Image src={image} alt={title} height={160} />
  </Card.Section>

  <Card.Section mt="sm" px="md">
    <Group justify="space-between" mb={4}>
      <Text fz="lg" fw={700} c="dark.4">{title}</Text>
      <Badge size="sm" variant="dot" color="orange">
        {location.city}
      </Badge>
    </Group>
    <Text fz="sm" c="dimmed" lineClamp={2}>
      {description}
    </Text>
  </Card.Section>

  <Card.Section px="md" py="sm">
    <Stack gap={6}>
      {propertyData.map((item) => (
        <Paper
          key={item.label}
          withBorder
          px="md"
          py={6} 
          radius="xl"
          className="bg-gray-50/50"
        >
          <Group justify="space-between">
            <Text size="xs" fw={600} c="dimmed" tt="uppercase">
              {item.label}
            </Text>
            <Text size="xs" fw={700} c={item.isStatus ? 'orange.7' : 'dark.4'}>
              {item.value}
            </Text>
          </Group>
        </Paper>
      ))}
    </Stack>
  </Card.Section>

  <Card.Section px="md" py="xs">
    <List
      spacing={6}
      size="sm"
      icon={
        <ThemeIcon color="orange" size={18} radius="xl" variant="light">
          <Icon icon="tabler:check" style={{ width: rem(12), height: rem(12) }} />
        </ThemeIcon>
      }
    >
      <List.Item>Ngrohje qendrore</List.Item>
      <List.Item>Garazh i mbyllur</List.Item>
      <List.Item>Sistem sigurie 24/7</List.Item>
    </List>
  </Card.Section>

  <Button 
    fullWidth 
    mt="md" 
    radius="md" 
    size="sm" 
    variant="filled" 
    className='!bg-dark'
    leftSection={<Icon icon="tabler:edit" width={16} />}
  >
    Edit Property
  </Button>
</Card>
  );
}

export default PropertyCard;