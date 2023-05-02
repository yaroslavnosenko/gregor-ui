import { Box, Container, HStack, IconButton, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiSearch, FiUser } from 'react-icons/fi'

export const Header = () => {
  return (
    <Container maxW="container.xl">
      <HStack
        justifyContent="space-between"
        spacing={0}
        as="header"
        borderBottomWidth={1}
        pt="4"
      >
        <Box borderRightWidth={1}>
          <Link
            fontWeight="600"
            _hover={{ textDecoration: 'none' }}
            as={NextLink}
            fontSize="xl"
            href="/"
            lineHeight="48px"
            px="3"
            pr="5"
          >
            Gregor
          </Link>
        </Box>
        <HStack borderLeftWidth={1} pl="2" spacing={0}>
          <IconButton
            boxSize={12}
            bg="none"
            icon={<FiUser strokeWidth={2.5} />}
            aria-label={'profile'}
          />
          <IconButton
            boxSize={12}
            bg="none"
            icon={<FiSearch strokeWidth={2.5} />}
            aria-label={'search'}
          />
        </HStack>
      </HStack>
    </Container>
  )
}
