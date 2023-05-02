import {
  Box,
  Center,
  Container,
  HStack,
  IconButton,
  Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiSearch } from 'react-icons/fi'

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
        <Center borderRightWidth={1} h="12" px="4">
          <Link
            fontWeight="600"
            _hover={{ textDecoration: 'none' }}
            as={NextLink}
            fontSize="xl"
            href="/"
          >
            Gregor
          </Link>
        </Center>
        <Center borderLeftWidth={1} h="12" px="2">
          <IconButton
            bg="none"
            icon={<FiSearch strokeWidth={2.5} />}
            aria-label={'search'}
          />
        </Center>
      </HStack>
    </Container>
  )
}
