export default function Article() {
  return (
    <section>
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">Read my articles</h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quibusdam error soluta nihil esse dolor repellat, ea, est ab ipsum eaque porro dicta. Nihil ut eaque ad quis explicabo velit!
            </p>
            
          </div>

          <div className="overflow-x-auto text-left">
            <table className="w-full min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="px-4 py-2 font-medium text-gray-900">Name</th>
                  <th className="px-4 py-2 font-medium text-gray-900">Link</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {/* PHP */}
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-900">PHP</td>
                  <td className="px-4 py-2 text-gray-700">
                    <a
                      href="https://github.com/RazielRodrigues?tab=repositories&q=php&type=&language=&sort="
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-gray-900 sm:text-sm"
                    >
                      See more
                    </a>
                  </td>
                </tr>

                {/* JavaScript */}
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-900">JavaScript</td>
                  <td className="px-4 py-2 text-gray-700">
                    <a
                      href="https://github.com/RazielRodrigues?tab=repositories&q=js&type=&language=&sort="
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-gray-900 sm:text-sm"
                    >
                      See more
                    </a>
                  </td>
                </tr>

                {/* Go */}
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-900">Go</td>
                  <td className="px-4 py-2 text-gray-700">
                    <a
                      href="https://github.com/RazielRodrigues?tab=repositories&q=go&type=&language=&sort="
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-gray-900 sm:text-sm"
                    >
                      See more
                    </a>
                  </td>
                </tr>

                {/* Others */}
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-900">Others</td>
                  <td className="px-4 py-2 text-gray-700">
                    <a
                      href="https://github.com/RazielRodrigues?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-gray-900 sm:text-sm"
                    >
                      See more
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}