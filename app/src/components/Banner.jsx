import { Link } from 'react-router-dom';

export default function Banner() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Hello 👋</h2>

                <p className="mt-4 text-gray-500 sm:text-xl">
                    I have been working as a software developer since 2018. My main skills are in PHP and JavaScript, and I am currently expanding my knowledge in Go.
                </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/resume" className="text-sm font-bold text-gray-900 sm:text-sm">Download Resume</Link>
            </div>
        </div>
    )
}