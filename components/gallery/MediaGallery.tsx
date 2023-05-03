import {
  Box,
  Container,
  ContainerProps,
  HStack,
  IconButton,
  getToken,
  useBreakpointValue,
  useToken,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FiTrash } from 'react-icons/fi'
import Masonry from 'react-responsive-masonry'

const IMAGES = [
  'https://upcdn.io/12a1xj9FXn2Ytz2RjbSkp2h/thumbnail',
  'https://upcdn.io/12a1xj9RYJEAfE4QJ72Kpep/thumbnail',
  'https://upcdn.io/12a1xj95fQ6NuTLkTBx26vX/thumbnail',
  'https://upcdn.io/12a1xj9XiFpLHpp6E6mT33w/thumbnail',
  'https://upcdn.io/12a1xj9W9e8uTHnD9Hof4p6/thumbnail',
  'https://upcdn.io/12a1xj97oCphwNq5dAGh2kn/thumbnail',
  'https://upcdn.io/12a1xj9J5C4QNax1vwjHiQp/thumbnail',
  'https://upcdn.io/12a1xj95TZMEAfsBNzV8EJx/thumbnail',
  'https://upcdn.io/12a1xj9Et2xKpQKkAo6zMpn/thumbnail',
  'https://upcdn.io/12a1xj9VkyAoavHa8j5WGjm/thumbnail',
  'https://upcdn.io/12a1xj987SnkJihmyw2raLz/thumbnail',
  'https://upcdn.io/12a1xj9Lk1BPcBJmEdJiJhe/thumbnail',
]

export enum MediaGalleryAction {
  DELETE,
}

export interface MediaGalleryProps extends ContainerProps {
  actions?: MediaGalleryAction[]
  onAction?: (id: string, action: MediaGalleryAction) => void
}

export const MediaGallery = ({
  actions,
  onAction,
  ...props
}: MediaGalleryProps) => {
  const columnCount = useBreakpointValue({
    base: 2,
    md: 4,
  })

  const gap = useBreakpointValue({
    base: '1rem',
    md: '2rem',
  })

  return (
    <Container maxW="container.xl" {...props}>
      <Masonry gutter={gap} columnsCount={columnCount}>
        {IMAGES.map((url) => (
          <Box key={url}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={url}
              alt={url}
              style={{ width: '100%', height: 'auto' }}
            />
            {actions && (
              <HStack bg="black" spacing={0} justify="flex-end">
                <IconButton
                  boxSize={12}
                  aria-label="delete"
                  colorScheme="blackAlpha"
                  icon={<FiTrash />}
                  onClick={() =>
                    onAction && onAction(url, MediaGalleryAction.DELETE)
                  }
                />
              </HStack>
            )}
          </Box>
        ))}
      </Masonry>
    </Container>
  )
}
