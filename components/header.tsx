import Link from 'next/link'
import Image from 'next/image'

export default function Header () {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 items-center">
              <Link href="/">
                <Image className="h-8 w-auto sm:h-10" src="/favicon.png" alt="Picture of the author" width={500} height={500}/>
              </Link>
              <h1 className="text-2xl font-bold text-gray-500 pl-6"> Learning Platform</h1>
          </div>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link href="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-700">
              Sign in
            </Link>
            <Link href="/" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
