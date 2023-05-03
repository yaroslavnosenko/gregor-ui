import { CollectionItem, Header, ProfileGallery } from '@/components'
import { Container, Heading, Text, Link, IconButton } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiPlus, FiSearch, FiUpload, FiUploadCloud } from 'react-icons/fi'

const Collection = () => {
  return (
    <>
      <Header />
      <Container maxW="container.xl" mt={{ base: 8, md: 16 }}>
        <Link as={NextLink} href={'/m/username/collections'}>
          <Text opacity={0.7} mb="2">
            My Collections
          </Text>
        </Link>
        <CollectionItem
          mt="4"
          collection={{ id: '1', title: 'Work', mediaCount: 10 }}
        >
          <IconButton
            boxSize={12}
            bg="none"
            icon={<FiPlus strokeWidth={2.5} />}
            aria-label={'search'}
          />
        </CollectionItem>
      </Container>
      <ProfileGallery mt={{ base: 6, md: 10 }} />
    </>
  )
}

export default Collection
