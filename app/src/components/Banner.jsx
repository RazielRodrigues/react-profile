export default function Banner() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Hello Visitor👋</h2>

                <p className="mt-4 text-gray-500 sm:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
                    provident impedit esse recusandae facere libero harum sequi.
                </p>
            </div>

            <dl
                className="mg-6 grid grid-cols-1 gap-3 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-1 sm:divide-x sm:divide-y-0 lg:grid-cols-3"
            >
                <div className="flex flex-col px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">year of working</dt>
                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">+6</dd>
                </div>

                <div className="flex flex-col px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">Repositories</dt>
                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">+70</dd>
                </div>

                <div className="flex flex-col px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">Articles</dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">+10</dd>
                </div>

            </dl>
        </div>
    )
}