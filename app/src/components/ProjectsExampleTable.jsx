export default function ProjectsExampleTable() {

    const resumes = [
        { id: 1, name: 'CV EN', link: 'google.com' },
        { id: 2, name: 'CV DE', link: 'google.com' }
    ]

    const list = resumes.map(v =>
        <li>
            <a href={v.link} key={v.id} className="text-sm font-bold text-gray-900 sm:text-sm">Download Resume - {v.name}</a>
        </li>
    )

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h2>
                    <p className="mt-4 text-gray-500 sm:text-xl">
                        All the projects are update to date with my github profile
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                        

 <div className="mt-5 flex flex-wrap justify-center gap-4 mb-8">
                    <ul>
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="ltr:text-left rtl:text-right">
                                <tr>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Creation Date</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Link</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">PHP Encrypted API</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">01/01/1999</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Only repository</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-gray-700 transition hover:opacity-75"
                                        >
                                            google.com
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">PHP Encrypted API</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">01/01/1999</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Online</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-gray-700 transition hover:opacity-75"
                                        >
                                            google.com
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">PHP Encrypted API</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">01/01/1999</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Deprecated</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-gray-700 transition hover:opacity-75"
                                        >
                                            google.com
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </ul>
                </div>


            </div>
        </div>
    )
}