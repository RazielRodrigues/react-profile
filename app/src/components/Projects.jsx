export default function Projects() {
    return (
        <section >
            <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                        <h2 className="text-3xl font-bold sm:text-4xl">My trends roadmap</h2>

                        <p className="mt-4 text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
                            iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
                            minima aliquid tempora. Obcaecati, autem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <h2 className="mt-2 font-bold">PHP</h2>
                            <a href="https://github.com/RazielRodrigues?tab=repositories&q=php&type=&language=&sort=" target="blank" className="underline hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                See my codes
                            </a>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <h2 className="mt-2 font-bold">JS</h2>
                            <a href="https://github.com/RazielRodrigues?tab=repositories&q=js&type=&language=&sort=" target="blank" className="underline hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                See my codes
                            </a>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <h2 className="mt-2 font-bold">GO</h2>
                            <a href="https://github.com/RazielRodrigues?tab=repositories&q=go&type=&language=&sort=" target="blank" className="underline hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                See my codes
                            </a>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}