import { CollectionsList, Header } from '@/components'
import { Routes } from '@/configs'
import { Container, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const COLLECTIONS = [
  { id: '1', title: 'Work', mediaCount: 10 },
  { id: '2', title: 'Polaroids', mediaCount: 5 },
]

const Collections = () => {
  const router = useRouter()

  return (
    <>
      <Header />
      <Container maxW="container.xl" mt={{ base: 8, md: 16 }}>
        <Text opacity={0.7}>Collections</Text>
        <CollectionsList
          mt="4"
          list={COLLECTIONS}
          onSelectCollection={(collection) =>
            router.push(Routes.PROFILE_COLLECTION('me', collection.id))
          }
        />
        <Text mt="4" opacity={0.7}>
          Collections management will be supported soon
        </Text>
      </Container>
    </>
  )
}

export default Collections
