import {
  Button,
  Container,
  ContainerProps,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react'

export const ProfileForm = (props: ContainerProps) => {
  return (
    <Container maxW="container.xl" {...props}>
      <Heading fontFamily="serif">Edit Profile</Heading>
      <Text opacity={0.7} mb="8">
        Set up your Gregor Profile
      </Text>

      <Heading opacity={0.7} mt="12" size="md" fontFamily="serif">
        Basic Info
      </Heading>

      <SimpleGrid columns={2} columnGap={6}>
        <FormControl mt="6" isRequired>
          <FormLabel mb="0" fontWeight="600">
            First Name
          </FormLabel>
          <Input size="lg" type="text" variant="flushed" placeholder="First" />
        </FormControl>

        <FormControl mt="6" isRequired>
          <FormLabel mb="0" fontWeight="600">
            First Name
          </FormLabel>
          <Input size="lg" type="text" variant="flushed" placeholder="First" />
        </FormControl>
      </SimpleGrid>

      <FormControl mt="6" isRequired>
        <FormLabel mb="0" fontWeight="600">
          Email Address
        </FormLabel>
        <Input
          size="lg"
          type="text"
          variant="flushed"
          placeholder="youremail@mail.com"
        />
      </FormControl>

      <FormControl mt="6" isRequired>
        <FormLabel mb="0" fontWeight="600">
          Username
        </FormLabel>
        <Input
          size="lg"
          type="text"
          variant="flushed"
          placeholder="youremail@mail.com"
        />
      </FormControl>

      <FormControl mt="6">
        <FormLabel fontWeight="600">Bio</FormLabel>
        <Textarea size="lg" borderRadius={0} placeholder="Some Description" />
      </FormControl>

      <Heading opacity={0.7} mt="16" size="md" fontFamily="serif">
        Parameters
      </Heading>

      <SimpleGrid columns={3} columnGap={6}>
        <FormControl mt="6">
          <FormLabel mb="0" fontWeight="600">
            Measurements
          </FormLabel>
          <Input
            size="lg"
            type="text"
            variant="flushed"
            placeholder='36" / 24" / 36"'
          />
        </FormControl>

        <FormControl mt="6">
          <FormLabel mb="0" fontWeight="600">
            Height
          </FormLabel>
          <Input size="lg" type="text" variant="flushed" placeholder="5'9" />
        </FormControl>

        <FormControl mt="6">
          <FormLabel mb="0" fontWeight="600">
            Shoes
          </FormLabel>
          <Input size="lg" type="text" variant="flushed" placeholder="8.5" />
        </FormControl>

        <FormControl mt="6">
          <FormLabel mb="0" fontWeight="600">
            Eyes
          </FormLabel>
          <Input size="lg" type="text" variant="flushed" placeholder="Color" />
        </FormControl>

        <FormControl mt="6">
          <FormLabel mb="0" fontWeight="600">
            Hair
          </FormLabel>
          <Input size="lg" type="text" variant="flushed" placeholder="Color" />
        </FormControl>

        <FormControl mt="6">
          <FormLabel mb="0" fontWeight="600">
            Gender
          </FormLabel>
          <Input size="lg" type="text" variant="flushed" placeholder="Gender" />
        </FormControl>
      </SimpleGrid>

      <Heading opacity={0.7} mt="16" size="md" fontFamily="serif">
        Social
      </Heading>
      <FormControl mt="6">
        <FormLabel mb="0" fontWeight="600">
          Instagram Link
        </FormLabel>
        <Input size="lg" type="text" variant="flushed" placeholder="Gender" />
      </FormControl>

      <FormControl mt="6">
        <FormLabel mb="0" fontWeight="600">
          Twitter Link
        </FormLabel>
        <Input size="lg" type="text" variant="flushed" placeholder="Gender" />
      </FormControl>

      <FormControl mt="6">
        <FormLabel mb="0" fontWeight="600">
          Facebook Link
        </FormLabel>
        <Input size="lg" type="text" variant="flushed" placeholder="Gender" />
      </FormControl>

      <Button my="16">Save Profile</Button>
    </Container>
  )
}
