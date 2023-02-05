export default function Entry ({ info })
{
  return (
    <div className="group relative col-span-full flex flex-col items-center gap-2 overflow-hidden rounded bg-gradient-to-r from-gray-850 to-gray-900 p-3 pt-4 text-center shadow-2xl shadow-black/45 md:col-span-8 md:flex-row md:items-start md:pt-3 md:text-left lg:gap-8 lg:p-4 transition ease-in-out delay-0 hover:shadow-orange-200">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{info.title}</div>
        <p className="text-gray-700 text-base">
          {info.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {
          info.tags.map((tag) => (
            // eslint-disable-next-line react/jsx-key
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
          ))
        }
      </div>
    </div>
  )
}