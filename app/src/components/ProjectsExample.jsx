export default function ProjectsExample() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Online Softwares</h2>

            </div>

            <div className="overflow-x-auto mt-5 text-left">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Creation Date</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    Devto
                                </a>
                            </th>
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
            </div>
        </div>
    )
}