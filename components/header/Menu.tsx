import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Heading,
  Link,
  Stack,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

export const Menu = (props: MenuProps) => {
  return (
    <Drawer {...props} autoFocus={false}>
      <DrawerOverlay backdropFilter="blur(7px)" />
      <DrawerContent color="gray.50" bg="gray.900">
        <DrawerBody p="8">
          <Stack spacing={4}>
            <Link as={NextLink} href="/m/username">
              <Heading fontFamily="serif">Profile</Heading>
            </Link>
            <Link as={NextLink} href="/m/username/collections">
              <Heading fontFamily="serif">Collections</Heading>
            </Link>
            <Link as={NextLink} href="/m/username/settings">
              <Heading fontFamily="serif">Settings</Heading>
            </Link>
          </Stack>
        </DrawerBody>
        <DrawerFooter p="8">
          <Link as={NextLink} href="/m/username/signout">
            <Heading fontFamily="serif">Sign Out</Heading>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
