import CardHeader from "./CardHeader.jsx"
import CardBody from "./CardBody.jsx"
import CardFooter from "./CardFooter.jsx"

const CardLayout = ({ data }) => {
  return (
    <div className={"mx-[1.5rem] overflow-hidden rounded-2xl bg-white font-Kumbh-Sans"}>
      {data &&
        data.map((profile) => (
          <>
            <CardHeader />
            <CardBody name={profile.name} age={profile.age} city={profile.city} profileImageName={profile.profileImageName} />
            <CardFooter followerCount={profile.followerCount} likeCount={profile.likeCount} photoCount={profile.photoCount} />
          </>
        ))}
    </div>
  )
}

export default CardLayout
