import Link from 'next/link'
import Image from 'next/image'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}]

export default function Header () {
  return (
    <div className="relative bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 items-center">
              <Link href="/">
                <Image className="h-8 w-auto sm:h-10" src="/favicon.png" alt="Picture of the author" width={500} height={500}/>
              </Link>
              <h1 className="text-2xl font-bold text-white pl-6"> Learning Platform</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
