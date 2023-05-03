import {
  Box,
  Container,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiMenu, FiSearch } from 'react-icons/fi'

export const Header = () => {
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
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="profile"
                size="lg"
                variant="ghost"
                icon={<FiMenu strokeWidth={2.5} />}
              />
              <MenuList mt={-2} borderRadius={0}>
                <MenuItem as={NextLink} href={'/m/username'}>
                  Profile
                </MenuItem>
                <MenuItem as={NextLink} href={'/m/username/edit'}>
                  Edit Profile
                </MenuItem>
                <MenuDivider />
                <MenuItem as={NextLink} href={'/m/username/collections'}>
                  My Collections
                </MenuItem>
                <MenuDivider />
                <MenuItem as={NextLink} href={'/m/username/logout'}>
                  Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
