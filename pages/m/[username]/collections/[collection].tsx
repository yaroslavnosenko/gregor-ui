import {
  CollectionItem,
  Header,
  MediaGallery,
  MediaGalleryAction,
} from '@/components'
import { Container, Text, Link, IconButton } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'
import NextLink from 'next/link'

const Collection = () => {
  return (
    <>
      <Header />
      <Container maxW="container.xl" mt={{ base: 8, md: 16 }}>
        <Link as={NextLink} href={'/m/username/collections'}>
          <Text opacity={0.7} mb="2">
            Collections
          </Text>
        </Link>
        <CollectionItem
          mt="4"
          collection={{ id: '1', title: 'Work', mediaCount: 10 }}
        >
          <IconButton
            size="lg"
            variant="ghost"
            icon={<FiPlus strokeWidth={2.5} />}
            aria-label={'search'}
          />
        </CollectionItem>
      </Container>
      <MediaGallery
        mt={{ base: 6, md: 10 }}
        actions={[MediaGalleryAction.DELETE]}
        onAction={console.info}
      />
    </>
  )
}

export default Collection
