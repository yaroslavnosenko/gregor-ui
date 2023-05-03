import {
  Box,
  Container,
  HStack,
  IconButton,
  Link,
  useBoolean,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { Menu } from './Menu'

export const Header = () => {
  const [isOpen, setIsOpen] = useBoolean()
  return (
    <Box
      pos="sticky"
      top="0"
      bg="whiteAlpha.900"
      backdropFilter="blur(7px)"
      zIndex={99}
      as="header"
    >
      <Container maxW="container.xl">
        <HStack
          justifyContent="space-between"
          spacing={0}
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
              icon={<FiSearch strokeWidth={2.5} />}
              size="lg"
              variant="ghost"
              aria-label={'search'}
            />
            <IconButton
              icon={<FiMenu strokeWidth={2.5} />}
              size="lg"
              variant="ghost"
              aria-label={'menu'}
              onClick={setIsOpen.on}
            />
          </HStack>
        </HStack>
      </Container>
      <Menu isOpen={isOpen} onClose={setIsOpen.off} />
    </Box>
  )
}
