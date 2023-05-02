import {
  ContainerProps,
  Container,
  HStack,
  Link,
  Divider,
  IconButton,
  Box,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiPlus, FiShare } from 'react-icons/fi'

export const ProfileToolbar = (props: ContainerProps) => {
  return (
    <Container maxW="container.xl" {...props}>
      <HStack spacing={0}>
        <Box
          overflowX="scroll"
          flex={1}
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <HStack w="fit-content" spacing={6} pr="6">
            <Link
              fontWeight="600"
              as={NextLink}
              fontFamily="serif"
              fontSize="xl"
              href="/"
              lineHeight="48px"
            >
              Work
            </Link>
            <Link
              opacity={0.7}
              as={NextLink}
              fontSize="md"
              href="/"
              lineHeight="48px"
            >
              Polaroids
            </Link>
          </HStack>
        </Box>

        <HStack pl="2" borderLeftWidth={1} spacing={0}>
          <IconButton
            boxSize={12}
            bg="none"
            icon={<FiShare strokeWidth={2.5} />}
            aria-label={'share'}
          />
          <IconButton
            boxSize={12}
            bg="none"
            icon={<FiPlus strokeWidth={2.5} />}
            aria-label={'edit'}
          />
        </HStack>
      </HStack>
      <Divider />
    </Container>
  )
}
