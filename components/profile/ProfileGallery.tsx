import { Box, Container, ContainerProps } from '@chakra-ui/react'
import Image from 'next/image'

const IMAGES = [
  'https://upcdn.io/12a1xj9FXn2Ytz2RjbSkp2h',
  'https://upcdn.io/12a1xj9RYJEAfE4QJ72Kpep',
  'https://upcdn.io/12a1xj95fQ6NuTLkTBx26vX',
  'https://upcdn.io/12a1xj9XiFpLHpp6E6mT33w',
  'https://upcdn.io/12a1xj9W9e8uTHnD9Hof4p6',
  'https://upcdn.io/12a1xj97oCphwNq5dAGh2kn',
  'https://upcdn.io/12a1xj9J5C4QNax1vwjHiQp',
  'https://upcdn.io/12a1xj95TZMEAfsBNzV8EJx',
  'https://upcdn.io/12a1xj9Et2xKpQKkAo6zMpn',
  'https://upcdn.io/12a1xj9VkyAoavHa8j5WGjm',
  'https://upcdn.io/12a1xj987SnkJihmyw2raLz',
  'https://upcdn.io/12a1xj9Lk1BPcBJmEdJiJhe',
  'https://upcdn.io/12a1xj9TUv8NFoivi6QqZDH',
]

export const ProfileGallery = (props: ContainerProps) => {
  const gap = 8
  return (
    <Container
      maxW="container.xl"
      style={{ columnCount: 4 }}
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
