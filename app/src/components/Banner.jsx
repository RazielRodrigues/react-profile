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
                <a href="https://export-download.canva.com/ZBwXs/DAGNTKZBwXs/109/0-8206006162052533319.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20241120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241120T194853Z&X-Amz-Expires=81636&X-Amz-Signature=b21284d158d1cac213f227ab834a98d69a154d22795ac0fa2a3f10cf5164ea3b&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27RAZIEL%2520RODRIGUES%2520CV%2520PHP%2520NODEJS%2520GO%2520-%2520EN%2520-%25202024.pdf&response-expires=Thu%2C%2021%20Nov%202024%2018%3A29%3A29%20GMT" className="text-sm font-bold text-gray-900 sm:text-sm">Download Resume</a>
            </div>
        </div>
    )
}