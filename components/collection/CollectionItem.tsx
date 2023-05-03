import { Collection } from '@/types'
import { HStack, Heading, StackProps, Text } from '@chakra-ui/react'
import { Children, PropsWithChildren } from 'react'

interface CollectionItemProps extends StackProps {
  collection: Collection
}

export const CollectionItem = ({
  collection,
  children,
  ...props
}: PropsWithChildren<CollectionItemProps>) => {
  return (
    <HStack borderBottomWidth={1} alignItems="flex-end" spacing={6} {...props}>
      <HStack pb="2" flex={1} justify="space-between" align="baseline">
        <Heading fontFamily="serif" as="h2">
          {collection.title}
        </Heading>
        <Text opacity={0.7}>{collection.mediaCount} objects</Text>
      </HStack>
      {children && (
        <HStack borderLeftWidth={1} pl={2} spacing={0}>
          {children}
        </HStack>
      )}
    </HStack>
  )
}
