import {
  Button,
  Container,
  ContainerProps,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Spacer,
  DarkMode,
} from '@chakra-ui/react'

export const ProfileForm = (props: ContainerProps) => {
  return (
    <Container maxW="container.xl" {...props}>
      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem borderTop="none">
          <AccordionButton pt="0" pl="0" _hover={{ bg: 'none', opacity: 0.7 }}>
            <Heading fontFamily="serif" as="span" flex="1" textAlign="left">
              General
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel p="0">
            <Box p="6" bg="gray.50">
              <SimpleGrid columns={2} columnGap={6}>
                <FormControl mb="6" isRequired>
                  <FormLabel fontWeight="600">First Name</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder="First"
                  />
                </FormControl>

                <FormControl mb="6" isRequired>
                  <FormLabel fontWeight="600">Last Name</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder="Last"
                  />
                </FormControl>

                <FormControl mb="6" isRequired>
                  <FormLabel fontWeight="600">Username</FormLabel>
                  <Input
                    size="lg"
                    type="text"
                    borderRadius={0}
                    placeholder="youremail@mail.com"
                  />
                </FormControl>

                <FormControl mb="6" isRequired>
                  <FormLabel fontWeight="600">Email Address</FormLabel>
                  <Input
                    size="lg"
                    type="text"
                    borderRadius={0}
                    placeholder="youremail@mail.com"
                  />
                </FormControl>
              </SimpleGrid>
              <FormControl mb="6">
                <FormLabel fontWeight="600">Bio</FormLabel>
                <Textarea
                  size="lg"
                  borderRadius={0}
                  placeholder="Some Description"
                />
              </FormControl>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton pt="6" pl="0" _hover={{ bg: 'none', opacity: 0.7 }}>
            <Heading fontFamily="serif" as="span" flex="1" textAlign="left">
              Parameters
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton pt="6" pl="0" _hover={{ bg: 'none', opacity: 0.7 }}>
            <Heading fontFamily="serif" as="span" flex="1" textAlign="left">
              Social
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Spacer h="1000px" />

      <Heading opacity={0.7} mt="12" size="md">
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

      <Heading opacity={0.7} mt="16" size="md">
        Parameters
      </Heading>

      <SimpleGrid columns={3} columnGap={6}>
        <FormControl mt="6">
          <FormLabel mb="0" fontWeight="600">
            Measure
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

      <Heading opacity={0.7} mt="16" size="md">
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
