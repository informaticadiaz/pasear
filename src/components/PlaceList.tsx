

import { Place } from '../data/types'
import placeData from '../data/places.json'
export default function PlaceList() {
  return (
    <>
      {/* <h2>Places to Visit</h2>
      <ul>
        {placeData.map((place: Place) => (
          <li key={place.id}>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </li>
        ))}
      </ul> */}
      <div className="bg-gray-100 p-8 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {placeData.map((place: Place) => (
              <li key={place.id} className="col-span-1 flex flex-col rounded-lg bg-white text-center shadow dark:bg-slate-800">
              <div className="flex flex-1 flex-col p-8">
                <img
                  src="./user.webp"
                  alt=""
                  className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900 dark:text-white">
                  {place.name}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">{place.tittle}</dt>
                  <dd className="text-sm text-gray-500 dark:text-slate-400 line-clamp-2">
                    {place.description}
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="rounded-full bg-slate-500 px-3 py-2 text-xs font-medium text-slate-200">
                      {place.location}
                    </span>
                  </dd>
                </dl>
              </div>
              <div>
                <div className="flex">
                  <div className="flex w-0 flex-1 border-t-2">
                    <a
                      href="mailto:janecooper@example.com"
                      className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-slate-400"
                    >
                      whatsapp
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1 border-l-2 border-t-2">
                    <a
                        href={`/places/${place.id}`}
                      className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent  py-4 text-sm font-semibold text-gray-900 dark:text-slate-400"
                    >
                      saber mas
                    </a>
                  </div>
                </div>
              </div>
            </li>
            ))}
                    
        </ul>
      </div>
    </div>
    </>
  )
}
