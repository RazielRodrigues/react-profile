export default function AboutMe() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>

                <p className="mt-4 text-gray-500 sm:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
                    provident impedit esse recusandae facere libero harum sequi.
                </p>
            </div>

            <dl className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-1 sm:divide-x sm:divide-y-0 lg:grid-cols-4" >
                <div className="flex flex-col px-4 py-8 text-center">
                    <dt className="order-last text-small font-medium text-gray-500">years of experience</dt>
                    <dd className="text-small font-extrabold text-gray-600 md:text-5xl">+6</dd>
                </div>

                <div className="flex flex-col px-4 py-8 text-center">
                    <dt className="order-last text-small font-medium text-gray-500">real world projects</dt>
                    <dd className="text-small font-extrabold text-gray-600 md:text-5xl">+10</dd>
                </div>

                <div className="flex flex-col px-4 py-8 text-center">
                    <dt className="order-last text-small font-medium text-gray-500">articles</dt>
                    <dd className="text-small font-extrabold text-gray-600 md:text-5xl">+14</dd>
                </div>

                <div className="flex flex-col px-4 py-8 text-center">
                    <dt className="order-last text-small font-medium text-gray-500">open source contributions</dt>
                    <dd className="text-small font-extrabold text-gray-600 md:text-5xl">+22</dd>
                </div>

            </dl>
        </div>
    )
}