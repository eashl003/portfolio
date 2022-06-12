import CategoryButtons from "./CategoryButtons"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, categories, blogs }) => {
  return (
    <div className="">
      <div className="">
        {/* <Navbar categories={categories} blogs={blogs} /> */}
        <div className="">{children}</div>
      </div>
    </div>
  )
}

export default Layout
