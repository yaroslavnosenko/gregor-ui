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
} from '@chakra-ui/react'

export const SettingsForm = (props: ContainerProps) => {
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
          <AccordionPanel p="0" pt="2">
            <Box p={{ base: 6, md: 20 }} bg="gray.50">
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
              <Button bg="gray.900" color="white" size="lg" type="submit">
                Save
              </Button>
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
          <AccordionPanel p="0" pt="2">
            <Box p={{ base: 6, md: 20 }} bg="gray.50">
              <SimpleGrid columns={{ base: 2, md: 3 }} columnGap={6}>
                <FormControl mb="6">
                  <FormLabel fontWeight="600">Measurements</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder='36" / 24" / 36"'
                  />
                </FormControl>

                <FormControl mb="6">
                  <FormLabel fontWeight="600">Height</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder="5'9"
                  />
                </FormControl>

                <FormControl mb="6">
                  <FormLabel fontWeight="600">Shoes</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder="8.5"
                  />
                </FormControl>

                <FormControl mb="6">
                  <FormLabel fontWeight="600">Eyes</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder="Color"
                  />
                </FormControl>

                <FormControl mb="6">
                  <FormLabel fontWeight="600">Hair</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder="Color"
                  />
                </FormControl>

                <FormControl mb="6">
                  <FormLabel fontWeight="600">Gender</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder="Gender"
                  />
                </FormControl>
              </SimpleGrid>
              <Button bg="gray.900" color="white" size="lg" type="submit">
                Save
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton pt="6" pl="0" _hover={{ bg: 'none', opacity: 0.7 }}>
            <Heading fontFamily="serif" as="span" flex="1" textAlign="left">
              Social
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel p="0" pt="2">
            <Box p={{ base: 6, md: 20 }} bg="gray.50">
              <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={6}>
                <FormControl mb="6">
                  <FormLabel fontWeight="600">Contact Email</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder="contact@me.com"
                  />
                </FormControl>

                <FormControl mb="6">
                  <FormLabel fontWeight="600">Instagram Link</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder="Instagram"
                  />
                </FormControl>

                <FormControl mb="6">
                  <FormLabel fontWeight="600">Twitter Link</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder="Twitter"
                  />
                </FormControl>

                <FormControl mb="6">
                  <FormLabel fontWeight="600">Facebook Link</FormLabel>
                  <Input
                    borderRadius={0}
                    size="lg"
                    type="text"
                    placeholder="Facebook"
                  />
                </FormControl>
              </SimpleGrid>
              <Button bg="gray.900" color="white" size="lg" type="submit">
                Save
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  )
}
