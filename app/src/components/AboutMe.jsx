export default function AboutMe() {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                        <h2 className="text-3xl font-bold sm:text-4xl">About me</h2>

                        <p className="mt-4 text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
                            iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
                            minima aliquid tempora. Obcaecati, autem.
                        </p>

                        {/*                         <a
                            href="#"
                            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Download CV
                        </a> */}
                    </div>

                    <div className="mx-auto max-w-lg lg:mx-0">
                        <div className="flow-root">
                            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                                <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-gray-900">Title</dt>
                                    <dd className="text-gray-700 sm:col-span-2">Mr</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-gray-900">Name</dt>
                                    <dd className="text-gray-700 sm:col-span-2">Raziel Rodrigues</dd>
                                </div>

                                <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-gray-900">Occupation</dt>
                                    <dd className="text-gray-700 sm:col-span-2">PHP Developer</dd>
                                </div>

                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}