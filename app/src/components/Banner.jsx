export default function Banner() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Hello Visitor</h2>

                <p className="mt-4 text-gray-500 sm:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
                    provident impedit esse recusandae facere libero harum sequi.
                </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none  active:text-red-500 text-center"
                    href="#"
                >
                    Download CV
                </a>
            </div>
        </div>
    )
}