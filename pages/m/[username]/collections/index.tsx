import { CollectionsList, Header } from '@/components'
import { Container, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const COLLECTIONS = [
  { id: '1', title: 'Work', mediaCount: 10 },
  { id: '2', title: 'Polaroid', mediaCount: 5 },
]

const Collections = () => {
  const router = useRouter()

  return (
    <>
      <Header />
      <Container maxW="container.xl" mt={{ base: 8, md: 16 }}>
        <Heading>My Collections</Heading>
        <Text opacity={0.7}>Collections management will be supported soon</Text>
        <CollectionsList
          mt="12"
          list={COLLECTIONS}
          onSelectCollection={(collection) =>
            router.push('/m/username/collections/' + collection.id)
          }
        />
      </Container>
    </>
  )
}

export default Collections
