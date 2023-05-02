import {
  Box,
  Container,
  ContainerProps,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'
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
  'https://upcdn.io/12a1xj9TUv8NFoivi6QqZDH/thumbnail',
]

export const ProfileGallery = (props: ContainerProps) => {
  const gap = { base: 4, md: 8 }
  const columnCount = useBreakpointValue({
    base: 2,
    md: 4,
  })

  return (
    <Container
      maxW="container.xl"
      style={{ columnCount }}
      columnGap={gap}
      {...props}
    >
      {IMAGES.map((url) => (
        <Box key={url} pb={gap}>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={url}
            alt={url}
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      ))}
    </Container>
  )
}
