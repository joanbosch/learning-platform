import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (

    <div className="bg-white ">

      <main className="max-w-6xl min-h-screen mx-auto justify-between">
      <h1 className="text-3xl font-bold text-black p-6 text-center pb-20"> Mis cursos y actividades</h1>

        <div className="grid gap-32 initial:col-span-22 initial:grid-cols-1 initial:items-start sm:gap-10 initial:sm:col-span-16 initial:sm:grid-cols-16 container items-stretch sm:-mt-8 ">

          <div className="group relative col-span-full flex flex-col items-center gap-2 overflow-hidden rounded bg-gradient-to-r from-gray-850 to-gray-900 p-3 pt-4 text-center shadow-2xl shadow-black/45 md:col-span-8 md:flex-row md:items-start md:pt-3 md:text-left lg:gap-8 lg:p-4 transition ease-in-out delay-0 hover:shadow-orange-200">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
