import { Routes } from '@/configs'
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
      <DrawerContent>
        <DrawerBody p="8">
          <Stack spacing={4}>
            <Link as={NextLink} href={Routes.PROFILE('me')}>
              <Heading fontFamily="serif">Profile</Heading>
            </Link>
            <Link as={NextLink} href={Routes.PROFILE_COLLECTIONS('me')}>
              <Heading fontFamily="serif">Collections</Heading>
            </Link>
            <Link as={NextLink} href={Routes.SETTINGS}>
              <Heading fontFamily="serif">Settings</Heading>
            </Link>
          </Stack>
        </DrawerBody>
        <DrawerFooter p="8">
          <Link opacity={0.7} as={NextLink} href={Routes.SIGNOUT}>
            <Heading fontFamily="serif">Sign Out</Heading>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
