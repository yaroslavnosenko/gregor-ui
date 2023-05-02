import {
  Box,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  type ContainerProps,
} from '@chakra-ui/react'
import Image from 'next/image'

const MAIN_PHOTO_URL = 'https://upcdn.io/12a1xj96nn5BZpBzsUw9NZW'

export const ProfileHeadDesktop = (props: ContainerProps) => (
  <Container maxW="container.xl" {...props}>
    <HStack alignItems="stretch" spacing={32} pb="12">
      <Box flex={1} py="16">
        <Heading fontFamily="sans">Erika Mateo</Heading>
        <Text opacity={0.7}>Model • New York, USA</Text>
        <SimpleGrid my="8" columns={3} rowGap={4}>
          <Box>
            <Text opacity={0.7} fontFamily="sans">
              AGE
            </Text>
            <Text fontWeight="600">27</Text>
          </Box>
          <Box>
            <Text opacity={0.7} fontFamily="sans">
              HEIGHT
            </Text>
            <Text fontWeight="600">185</Text>
          </Box>
          <Box>
            <Text opacity={0.7} fontFamily="sans">
              WEIGHT
            </Text>
            <Text fontWeight="600">57</Text>
          </Box>
          <Box>
            <Text opacity={0.7} fontFamily="sans">
              EYE COLOUR
            </Text>
            <Text fontWeight="600">Green</Text>
          </Box>
          <Box>
            <Text opacity={0.7} fontFamily="sans">
              HAIR COLOR
            </Text>
            <Text fontWeight="600">Black</Text>
          </Box>
        </SimpleGrid>
        <Text>
          Erika Mateo, Swedish model, working in the fashion capitals for 6
          years, founder of ModelMe, a blog into sustainable lifestyle.
        </Text>
      </Box>
      <Box flex={1} bg="gray.100" pos="relative">
        <Box
          bottom="-12"
          left="-12"
          h="full"
          w="fit-content"
          pos="relative"
          aspectRatio="4/5"
          bg="gray.200"
        >
          <Image
            style={{ objectFit: 'cover' }}
            fill
            src={MAIN_PHOTO_URL}
            alt="main"
          />
        </Box>
      </Box>
    </HStack>
  </Container>
)

export const ProfileHead = (props: ContainerProps) => {
  return <ProfileHeadDesktop {...props} />
}
