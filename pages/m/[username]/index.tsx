import {
  Header,
  ProfileHead,
  ProfileGallery,
  ProfileToolbar,
} from '@/components'

const Profile = () => {
  return (
    <>
      <Header />
      <ProfileHead mt={{ base: 8, md: 12 }} />
      <ProfileToolbar mt={12} />
      <ProfileGallery mt={{ base: 6, md: 10 }} />
    </>
  )
}

export default Profile
