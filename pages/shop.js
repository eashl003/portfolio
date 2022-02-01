import ProductsList from "../components/ProductsList"
import { getProducts } from "../utils/api"
import CategoryButtons from "../components/CategoryButtons"

const ShopPage = ({ products, categories }) => {
  return (
    <div>
      <CategoryButtons categories={categories} />
      <ProductsList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = setTimeout(getProducts(), 1000)

  return { props: { products } }
}

export default ShopPage
