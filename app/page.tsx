'use client'

import Entry from '../components/entry'
import { useTranslation } from '../utils/locales'

export default function Home () {
  const { courses } = useTranslation()
  return (

    <div className="bg-white ">

      <main className="max-w-6xl min-h-screen mx-auto justify-between">
      <h1 className="text-3xl font-bold text-black p-6 text-center pb-20"> Mis cursos y actividades</h1>
        <div className="grid gap-32 initial:col-span-22 initial:grid-cols-1 initial:items-start sm:gap-10 initial:sm:col-span-16 initial:sm:grid-cols-16 container items-stretch sm:-mt-8 ">
          {courses.map((course) => (
            <Entry info={ course }/>
          ))}
        </div>
      </main>
    </div>
  )
}
