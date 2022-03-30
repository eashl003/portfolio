import { getAbout } from "../utils/api"

const About = ({ about }) => {
  return (
    <div className="bg-teal-500 flex flex-col h-screen text-center text-teal-100 text-3xl">
      {about.title}
      <div className="gap-3 space-x-4 text-xl">
        <a
          href="https://medium.com/@elisabethashley"
          target="_blank"
          passHref
          rel="noreferrer"
        >
          <i className="fab fa-medium fa-2x transform hover:-translate-y-1 transition-all duration-500 hover:text-teal-700"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/elisabethjoyashley"
          passHref
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin fa-2x transform hover:-translate-y-1 transition-all duration-500 hover:text-teal-700"></i>
        </a>
        <a
          href="https://github.com/eashl003"
          passHref
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github fa-2x transform hover:-translate-y-1 transition-all duration-500 hover:text-teal-700"></i>
        </a>
        <a
          href="https://github.com/eashl003"
          passHref
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-codepen fa-2x transform hover:-translate-y-1 transition-all duration-500 hover:text-teal-700"></i>
        </a>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const about = await getAbout()

  return { props: { about } }
}

export default About
