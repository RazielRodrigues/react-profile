import photo from './../assets/razielrodrigues.jpeg'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-white lg:grid lg:grid-cols-5">
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                <img
                    src={photo}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>

                        <p>
                            <span className="text-xs uppercase tracking-wide text-gray-500"> Email</span>
                            <a href="mailto:razielx3@live.com" className="block  font-medium text-gray-900 hover:opacity-75  ">
                                razielx3@live.com
                            </a>
                        </p>

                        <p>
                            <span className="text-xs uppercase tracking-wide text-gray-500"> Phone</span>
                            <a href="tel:+351967634861" className="block  font-medium text-gray-900 hover:opacity-75  ">
                                +351 967 634 861
                            </a>
                        </p>

                        <ul className="mt-8 flex gap-6">

                            <li>
                                <a
                                    href="https://www.linkedin.com/in/raziel-rodrigues/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    Linkedin
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/RazielRodrigues"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    Github
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://dev.to/razielrodrigues"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    Devto
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <ul className="mt-6 space-y-4 text-sm">

                                <li>
                                    <p className="text-gray-700 transition hover:opacity-75">Porto, Portugal </p>
                                </li>

                                <li>
                                    <p className="text-gray-700 transition hover:opacity-75">Visitors count: 0</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li>
                                <p className="text-gray-500 transition hover:opacity-75"> Made with enthusiasm 🚀</p>
                            </li>
                        </ul>

                        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                            &copy; {year}. Raziel Rodrigues. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    )
}