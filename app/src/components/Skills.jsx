export default function Skills() {
    return (
        <section>

            <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                        <h2 className="text-3xl font-bold sm:text-4xl">Skills</h2>

                        <p className="mt-4 text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
                            iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
                            minima aliquid tempora. Obcaecati, autem.
                        </p>
                        {/* 
                        <a
                            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:text-gray-200"
                            href="https://github.com/RazielRodrigues?tab=repositories"
                            target="blank"
                        >
                            <span className="text-sm font-medium">All projects</span>

                                                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a> */}
                    </div>


            

                    <div className="overflow-x-auto text-left">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="ltr:text-left rtl:text-right">
                                <tr>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Years</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Companies</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Symfony</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">6</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Up Outsourcing and CGI Deutschland</td>
                                </tr>

                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">React</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">2</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Studies</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}