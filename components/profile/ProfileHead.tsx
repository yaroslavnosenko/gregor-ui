import {
  type ContainerProps,
  Box,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  Button,
  IconButton,
  Show,
  Hide,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

const MAIN_PHOTO_URL = 'https://upcdn.io/12a1xj96nn5BZpBzsUw9NZW'

const ProfileDetails = () => {
  return (
    <>
      <Heading fontFamily="sans">Erika Mateo</Heading>
      <Text opacity={0.7}>Model • New York, USA</Text>
      <SimpleGrid my="8" columns={3} rowGap={4}>
        <Box>
          <Text opacity={0.7} fontFamily="sans">
            MEASURE
          </Text>
          <Text fontWeight="600">36&quot; / 24&quot; / 36&quot;</Text>
        </Box>
        <Box>
          <Text opacity={0.7} fontFamily="sans">
            HEIGHT
          </Text>
          <Text fontWeight="600">5&apos;9&quot;</Text>
        </Box>
        <Box>
          <Text opacity={0.7} fontFamily="sans">
            SHOES
          </Text>
          <Text fontWeight="600">8.5</Text>
        </Box>
        <Box>
          <Text opacity={0.7} fontFamily="sans">
            EYES
          </Text>
          <Text fontWeight="600">Green</Text>
        </Box>
        <Box>
          <Text opacity={0.7} fontFamily="sans">
            HAIR
          </Text>
          <Text fontWeight="600">Black</Text>
        </Box>
        <Box>
          <Text opacity={0.7} fontFamily="sans">
            GENDER
          </Text>
          <Text fontWeight="600">Female</Text>
        </Box>
      </SimpleGrid>
      <Text>
        Erika Mateo, Swedish model, working in the fashion capitals for 6 years,
        founder of ModelMe, a blog into sustainable lifestyle.
      </Text>
      <HStack mt="8" spacing={4}>
        <Button color="white" bg="black">
          Message
        </Button>
        <IconButton
          icon={<FiInstagram strokeWidth={2.5} />}
          bg="none"
          aria-label={'instagram'}
        />
        <IconButton
          icon={<FiTwitter strokeWidth={2.5} />}
          bg="none"
          aria-label={'twitter'}
        />
        <IconButton
          icon={<FiFacebook strokeWidth={2.5} />}
          bg="none"
          aria-label={'facebook'}
        />
      </HStack>
    </>
  )
}

const ProfileHeadLarge = () => (
  <HStack alignItems="stretch" spacing={32} pb="12">
    <Box flex={1} py="8">
      <ProfileDetails />
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
)

const ProfileHeadSmall = () => <ProfileDetails />

export const ProfileHead = (props: ContainerProps) => {
  return (
    <Container maxW="container.xl" {...props}>
      <Hide above="md">
        <ProfileHeadSmall />
      </Hide>
      <Show above="md">
        <ProfileHeadLarge />
      </Show>
    </Container>
  )
}
