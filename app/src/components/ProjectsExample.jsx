import { Link } from "react-router-dom";

export default function ProjectsExample() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Checkout my projects</h2>

                <p className="mt-4 text-gray-500 sm:text-xl">
                    I would like to invite you to take a look to a few projects of mine, I made this
                    to showcase my code because inthe end, this is the pourpouse of my job right?
                </p>

            </div>

            <div className="overflow-x-auto mt-5 text-left">

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <h2 className="text-sm font-bold text-gray-900 sm:text-sm"><Link to='/project' >See More</Link></h2>
                </div>

            </div>
        </div>
    )
}