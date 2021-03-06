export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}

export async function getCategories() {
  const categories = await fetchAPI("/categories")
  return categories
}

export async function getCategory(slug) {
  const categories = await fetchAPI(`/categories?slug=${slug}`)
  return categories?.[0]
}

export async function getProducts() {
  const products = await fetchAPI("/products")
  return products
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`)
  return products?.[0]
}

export async function getBlogs() {
  const blogs = await fetchAPI("/blogs")
  return blogs
}

export async function getBlog(slug) {
  const blogs = await fetchAPI(`/blogs?slug=${slug}`)
  return blogs?.[0]
}

export async function getArticles() {
  const articles = await fetchAPI("/articles")
  return articles
}

export async function getArticle(slug) {
  const articles = await fetchAPI(`/articles?slug=${slug}`)
  return articles?.[0]
}

export async function getFeaturedArticles() {
  const featuredArticles = await fetchAPI("/articles?featured=true")
  return featuredArticles
}

export async function getRecentArticles() {
  const recentArticles = await fetchAPI("/articles?_sort=date_created:DESC")
  return recentArticles
}

export async function getHome() {
  const home = await fetchAPI("/home")
  return home
}

export async function getAbout() {
  const about = await fetchAPI("/about")
  return about
}
