import { Collection } from '@/types'
import { VStack, StackProps, Box, Link, IconButton } from '@chakra-ui/react'
import { CollectionItem } from './CollectionItem'
import { FiDelete, FiMove, FiPlus, FiTrash } from 'react-icons/fi'

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
    <VStack {...other} spacing={4} align="stretch">
      {list.map((collection) => (
        <Box
          pt="3"
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
