import { Collection } from '@/types'
import { VStack, StackProps, Box } from '@chakra-ui/react'
import { CollectionItem } from './CollectionItem'

interface ListProps extends StackProps {
  list: Collection[]
  onSelectCollection: (collection: Collection) => void
}

export const CollectionsList = ({
  list,
  onSelectCollection,
  ...other
}: ListProps) => {
  return (
    <VStack {...other} spacing={6} align="stretch">
      {list.map((collection) => (
        <Box
          cursor="pointer"
          key={collection.id}
          onClick={() => onSelectCollection(collection)}
        >
          <CollectionItem collection={collection} />
        </Box>
      ))}
    </VStack>
  )
}
