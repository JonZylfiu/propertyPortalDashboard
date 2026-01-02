import React, { useEffect, useState } from 'react'
import { Flex, Button, Image, Group, TextInput, Box, Grid, List, Text, rem, Radio } from '@mantine/core';
import { Icon } from '@iconify/react';


const mockdata = {
    "id": 1,
    "title": "Modern Family House",
    "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80",
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
      "status": "sale"
    },
    "features": [
      "Open floor plan",
      "Smart home system",
      "Landscaped backyard"
    ],
    "listedDate": "2025-10-12"
};

const EditProperty = (props) => {
    const [ formData, setFormData ] = useState({
        url: mockdata.url,
        title: mockdata.title,
        country: mockdata.location.country,
        city: mockdata.location.city,
        street: mockdata.location.street,
        price: mockdata.price,
        bedrooms: mockdata.specifics.bedrooms,
        bathrooms: mockdata.specifics.bathrooms,
        area: mockdata.specifics.area,
        parking: mockdata.specifics.parking,
        propertyId: mockdata.details.propertyId,
        propertyType: mockdata.details.propertyType,
        yearBuilt: mockdata.details.yearBuilt,
        status: mockdata.details.status,
        features: mockdata.features        
    });    
    const [ feature, setFeature ] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        
    }, [formData?.features])
    


  return (

    <form className='overflow-y-auto'>
        <Box className="bg-main" py="lg">
        <Flex
            direction="column"
            gap="xs" 
            className='lg:w-[60%] md:w-[80%] w-[95%]'
            mx="auto"
        >

            <Flex direction="column" gap="xs" align="center">
            <Image
                radius="xl"
                w="100%"
                h="300px"
                src={mockdata.url}
            />
            <TextInput 
                w="100%" 
                label="Background URL:" 
                name="url" 
                value={formData.url} 
                onChange={handleChange} 
            />
            </Flex>
            
            <Grid gutter="md">
            <Grid.Col span={{base: 8, xs:9}}>
                <TextInput 
                label="Title" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                />
            </Grid.Col>
            <Grid.Col span={{base: 4, xs:3}}>
                <TextInput 
                label="Price" 
                name="price" 
                value={formData.price} 
                onChange={handleChange} 
                />
            </Grid.Col>
            </Grid>

            <Box>
            <Grid gutter="md">
                <Grid.Col span={{base: 6, xs:4}}>
                <TextInput label="Country" name="country" value={formData.country} onChange={handleChange} />
                </Grid.Col>
                <Grid.Col span={{base: 6, xs:4}}>
                <TextInput label="City" name="city" value={formData.city} onChange={handleChange} />
                </Grid.Col>
                <Grid.Col span={{base: 12, xs:4}}>
                <TextInput label="Street" name="street" value={formData.street} onChange={handleChange} />
                </Grid.Col>
            </Grid>
            </Box>

            <Box>
            <Grid gutter="md">
                <Grid.Col span={{base: 6, xs:3}}>
                <TextInput label="Bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
                </Grid.Col>
                <Grid.Col span={{base: 6, xs:3}}>
                <TextInput label="Bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
                </Grid.Col>
                <Grid.Col span={{base: 6, xs:3}}>
                <TextInput label="Area" name="area" value={formData.area} onChange={handleChange} />
                </Grid.Col>
                <Grid.Col span={{base: 6, xs:3}}>
                <TextInput label="Parking" name="parking" value={formData.parking} onChange={handleChange} />
                </Grid.Col>
            </Grid>
            </Box>
            <Box>
            <Grid gutter="md">
                <Grid.Col span={{base: 6, xs:3}}>
                <TextInput label="Property ID" name="propertyId" value={formData.propertyId} onChange={handleChange} />
                </Grid.Col>
                <Grid.Col span={{base: 6, xs:3}}>
                <TextInput label="Property Type" name="propertyType" value={formData.propertyType} onChange={handleChange} />
                </Grid.Col>
                <Grid.Col span={{base: 6, xs:3}}>
                <TextInput label="Year Built" name="yearBuilt" value={formData.yearBuilt} onChange={handleChange} />
                </Grid.Col>
                <Grid.Col span={{base: 6, xs:3}}>
                    <Radio.Group
                        name="propertyStatus"
                        value={formData.status}
                        label="Status"
                        onChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                ["status"]: e,
                            }));
                        }}
                        withAsterisk
                    >
                        <Group mt="xs">
                        <Radio 
                            value="sale" 
                            label="For Sale" 
                            color="orange" 
                            name='sale'
                            styles={{ label: { cursor: 'pointer' } }}
                        />
                        <Radio 
                            value="rent" 
                            label="For Rent" 
                            color="orange"
                            name="rent"
                            styles={{ label: { cursor: 'pointer' } }}
                        />
                        </Group>
                    </Radio.Group>
                </Grid.Col>
            </Grid>


            <Grid gutter="md">
                <Grid.Col span={12}>
                    <TextInput mt="xs" label="Add Feature" value={feature} onChange={e => setFeature(e.target.value)} placeholder='Add a feature...' />
                </Grid.Col>
                <Grid.Col>
                    <Button className='!bg-accent !mb-4' onClick={() => {
                        if (feature.trim() === '') return;
                        setFormData((prev) => ({
                            ...prev,
                            features: [...prev.features, feature] 
                        }));
                        setFeature('');
                        }}
                        radius="md">Add</Button>
                </Grid.Col>
            </Grid>

            
            
            <div className="bg-gray-50 p-4 rounded-md border border-dashed border-gray-300">
                <List
                    spacing="xs"
                    size="sm"
                    icon={
                        <Icon icon="tabler:check" style={{ width: rem(12), height: rem(12) }} />
                    }
                >
                    {formData?.features.map((f, index) => (
                    <List.Item key={index}>
                        <Group justify="space-between">
                        <Text size="sm">{f}</Text>
                        <Icon 
                            icon="tabler:trash" 
                            className="cursor-pointer text-red-500 hover:text-red-700" 
                            width={16}
                            onClick={() => {
                                setFormData((prev) => ({
                                    ...prev,
                                    features: prev.features.filter((_, i) => i !== index) 
                                }))
                            }}
                        />
                        </Group>
                    </List.Item>
                    ))}
                </List>
                
                {formData?.features.length === 0 && (
                    <Text size="xs" c="dimmed" ta="center">No features in the list.</Text>
                )}
            </div>
                <Button variant="filled" className='!bg-accent mt-6' fullWidth>Save</Button>
            </Box>
        </Flex>
        </Box>
    </form>
  )
}

export default EditProperty
