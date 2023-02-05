export default function Entry ({ info } : { info: { title: string, description: string, date: string, link: string, tags: string[]}}) {
  return (
    <a href={info.link}>
      <div className="group relative col-span-full flex flex-col items-center gap-2 overflow-hidden bg-gray-100 rounded bg-gradient-to-r from-gray-850 to-gray-900 p-3 pt-4 text-center shadow-2xl shadow-black/45 md:col-span-8 md:flex-row md:items-start md:pt-3 md:text-left lg:gap-8 lg:p-4 transition ease-in-out delay-5 hover:shadow-orange-200">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-black">{info.title}</div>
          <div className="mb-2 text-xs text-black">{info.date}</div>
          <p className="text-gray-700 text-base">
            {info.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 text-right">
          {
            info.tags.map((tag) => (
              // eslint-disable-next-line react/jsx-key
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            ))
            }
        </div>
      </div>
    </a>
  )
}
