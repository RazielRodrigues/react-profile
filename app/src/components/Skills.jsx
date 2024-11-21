export default function Skills() {
    return (
        <section>
            <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                        <h2 className="text-3xl font-bold sm:text-4xl">Skills</h2>

                        <p className="mt-4 text-gray-600">
                            I have been working as a software developer since 2018. My main skills are in PHP and JavaScript,
                            and I am currently expanding my knowledge in Go.
                        </p>

                        <p className="mt-4 text-gray-600">
                            During these years, I have encountered various technologies and methodologies that enhanced my
                            knowledge and expertise across multiple domains.
                        </p>
                    </div>

                    <div className="overflow-x-auto text-left">
                        <table className="w-full min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="ltr:text-left rtl:text-right">
                                <tr>
                                    <th className="px-4 py-2 font-medium text-gray-900">Category</th>
                                    <th className="px-4 py-2 font-medium text-gray-900">Skills & Experience</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {/* Backend */}
                                <tr>
                                    <td className="px-4 py-2 font-medium text-gray-900">Backend</td>
                                    <td className="px-4 py-2 text-gray-700">PHP, NodeJS, Go (learning)</td>
                                </tr>

                                {/* Frontend */}
                                <tr>
                                    <td className="px-4 py-2 font-medium text-gray-900">Frontend</td>
                                    <td className="px-4 py-2 text-gray-700">
                                        HTML, CSS/SASS, JavaScript, ReactJS
                                    </td>
                                </tr>

                                {/* Frameworks */}
                                <tr>
                                    <td className="px-4 py-2 font-medium text-gray-900">Frameworks</td>
                                    <td className="px-4 py-2 text-gray-700">
                                        Symfony, Zend, Laravel, WordPress
                                    </td>
                                </tr>

                                {/* Infrastructure */}
                                <tr>
                                    <td className="px-4 py-2 font-medium text-gray-900">Infrastructure</td>
                                    <td className="px-4 py-2 text-gray-700">
                                        Docker, Datadog, Linux, GIT
                                    </td>
                                </tr>

                                {/* Database */}
                                <tr>
                                    <td className="px-4 py-2 font-medium text-gray-900">Database</td>
                                    <td className="px-4 py-2 text-gray-700">
                                        SQL, Redis, ORM, Modeling
                                    </td>
                                </tr>

                                {/* Architecture */}
                                <tr>
                                    <td className="px-4 py-2 font-medium text-gray-900">Architecture</td>
                                    <td className="px-4 py-2 text-gray-700">
                                        Monolith, MVC, Microservices
                                    </td>
                                </tr>

                                {/* Concepts */}
                                <tr>
                                    <td className="px-4 py-2 font-medium text-gray-900">Concepts</td>
                                    <td className="px-4 py-2 text-gray-700">
                                        Clean Code, Code Review, Design Patterns, SOLID, API, SCRUM, Jira, Automated Tests, Encryption
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
