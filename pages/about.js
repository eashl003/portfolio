import { getAbout } from "../utils/api"

const About = ({ about }) => {
  return <div>{about.title}TEST</div>
}

export async function getStaticProps() {
  const about = await getAbout()

  return { props: { about } }
}

export default About
