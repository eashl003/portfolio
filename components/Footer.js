import NextImage from "./Image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-semibold text-gray-600"></p>
      <div className="flex gap-3 ml-4">
        <a href="https://twitter.com/strapijs" className="max-w-xs ml-4">
          <NextImage src="/medium.svg" width={20} height={20} alt="Twitter" />
        </a>
        <a href="https://facebook.com/strapijs" className="ml-3">
          <NextImage
            src="/facebook.svg"
            width={20}
            height={20}
            alt="Facebook"
          />
        </a>
        <Link href="https://github.com/eashl003" passHref className="ml-3">
          <NextImage src="/github.svg" width={20} height={20} alt="GitHub" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
