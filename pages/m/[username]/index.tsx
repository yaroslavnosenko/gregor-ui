import { Header, ProfileHead, ProfileGallery } from '@/components'
import { Divider } from '@chakra-ui/react'

const Profile = () => {
  return (
    <>
      <Header />
      <ProfileHead mt={16} />
      <ProfileGallery mt={24} />
    </>
  )
}

export default Profile
