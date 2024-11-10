export default function Projects() {
    return (
        <section>
            <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                        <h2 className="text-3xl font-bold sm:text-4xl">See my progress</h2>

                        <p className="mt-4 text-gray-600">
                            I'm a continuous learner, and since I started developing, I created a GitHub account to track my progress.
                            You can see my entire journey, from learning PHP, JavaScript, SQL, Go, Symfony, and many other cool technologies I explored along the way.
                        </p>
                        <p className="mt-4 text-gray-600">
                            I develop for fun and because, yes, I love to code.
                        </p>
                    </div>

                    <div className="overflow-x-auto text-left">
                        <table className="w-full min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="ltr:text-left rtl:text-right">
                                <tr>
                                    <th className="px-4 py-2 font-medium text-gray-900">Category</th>
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