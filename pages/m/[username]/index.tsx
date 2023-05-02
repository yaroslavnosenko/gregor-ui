import { Header, ProfileHead, ProfileGallery } from '@/components'
import { Divider } from '@chakra-ui/react'

const Profile = () => {
  return (
    <>
      <Header />
      <ProfileHead mt={{ base: 8, md: 12 }} />
      <ProfileGallery mt={{ base: 12, md: 24 }} />
    </>
  )
}

export default Profile
