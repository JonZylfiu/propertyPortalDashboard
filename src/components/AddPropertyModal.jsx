import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Stack, Group, NumberInput, Radio, Divider, List, rem, Text } from '@mantine/core';
import { Icon } from '@iconify/react';

const AddPropertyModal = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [ value, setValue ] = useState(false);

      const [features, setFeatures] = useState(['Ngrohje Qendrore']);

  return (
    <>
      <Button onClick={open} className='!bg-accent' radius="md">
        Add Property
      </Button>

      <Modal 
        opened={opened} 
        onClose={close} 
        title="Add Property" 
        centered // E mban në mes të ekranit
        radius="md"
        size="md" // Mund të jetë xs, sm, md, lg, xl
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Përmbajtja e Popup-it */}
        <Stack gap="md">
          <TextInput 
            label="Property Title" 
            placeholder="Property Title..." 
            radius="md" 
            required
          />

          <TextInput 
            label="Image URL" 
            placeholder="https://..." 
            radius="md"
            required 
          />
          
          <TextInput 
            label="Description" 
            placeholder="Description..." 
            radius="md"
            required 
          />

          <Group grow>
            <NumberInput 
              label="Bedrooms" 
              placeholder="Enter..." 
              radius="md"
              required 
            />
            <NumberInput 
              label="Bathrooms" 
              placeholder="Enter..." 
              radius="md"
              required 
            />
          </Group>

          <Group grow>
            <NumberInput 
              label="Area" 
              placeholder="Enter..." 
              radius="md"
              required 
            />
            <NumberInput 
              label="Parking" 
              placeholder="Enter..." 
              radius="md"
              required 
            />
          </Group>

          <Group grow>
            <TextInput 
              label="Property ID" 
              placeholder="Enter..." 
              radius="md"
              required 
            />
            <TextInput 
              label="Property Type" 
              placeholder="Enter..." 
              radius="md"
              required 
            />
          </Group>

          <Group grow>
            <NumberInput 
              label="Year Built" 
              placeholder="Enter..." 
              radius="md"
              required 
            />
            <Radio.Group
              name="propertyStatus"
              value={value}
              onChange={setValue}
              withAsterisk
            >
              <Group mt="xs">
                <Radio 
                  value="sale" 
                  label="For Sale" 
                  color="orange" 
                  styles={{ label: { cursor: 'pointer' } }}
                />
                <Radio 
                  value="rent" 
                  label="For Rent" 
                  color="orange"
                  styles={{ label: { cursor: 'pointer' } }}
                />
              </Group>
            </Radio.Group>
          </Group>

          <Group grow>
            <NumberInput 
              label="Price (€)" 
              placeholder="120,000" 
              radius="md"
              required 
            />
            <TextInput 
              label="Country" 
              placeholder="Country..." 
              radius="md"
              required 
            />
          </Group>

          <Group grow>
            <TextInput 
              label="City" 
              placeholder="City..." 
              radius="md"
              required 
            />
            <TextInput 
              label="Street" 
              placeholder="Street..." 
              radius="md"
              required 
            />
          </Group>
          <Divider my="sm" label="Lista aktuale" labelPosition="center" />

          {/* Lista e elementeve të shtuara */}
          <div className="bg-gray-50 p-4 rounded-md border border-dashed border-gray-300">
            <TextInput 
              label="Feature" 
              placeholder="Feature..." 
              radius="md" 
              className='!mb-4'
            />
            <Button onClick={open} className='!bg-accent !mb-4' radius="md">
              Add
            </Button>
            <List
              spacing="xs"
              size="sm"
              icon={
                  <Icon icon="tabler:check" style={{ width: rem(12), height: rem(12) }} />
              }
            >
              {features.map((f, index) => (
                <List.Item key={index}>
                  <Group justify="space-between">
                    <Text size="sm">{f}</Text>
                    <Icon 
                      icon="tabler:trash" 
                      className="cursor-pointer text-red-500 hover:text-red-700" 
                      width={16}
                      onClick={() => setFeatures(features.filter(item => item !== f))}
                    />
                  </Group>
                </List.Item>
              ))}
            </List>
            
            {features.length === 0 && (
              <Text size="xs" c="dimmed" ta="center">No elements in the list.</Text>
            )}
          </div>

          <Group justify="flex-end" mt="xl">
            <Button variant="subtle" color="gray" onClick={close}>
              Cancel
            </Button>
            <Button className='!bg-accent' onClick={close}>
              Save Changes
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  )
}

export default AddPropertyModal;