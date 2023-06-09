import { Header, SettingsForm } from '@/components'
import { Container, Text } from '@chakra-ui/react'

const Settings = () => {
  return (
    <>
      <Header />
      <Container maxW="container.xl" mt={{ base: 8, md: 16 }}>
        <Text opacity={0.7}>Settings</Text>
      </Container>
      <SettingsForm mt="4" />
    </>
  )
}

export default Settings
