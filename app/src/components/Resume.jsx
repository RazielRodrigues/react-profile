export default function Resume() {

    const resumes = [
        { id: 1, name: 'CV EN', link: 'google.com' },
        { id: 2, name: 'CV DE', link: 'google.com' }
    ]

    const list = resumes.map(v =>
        <li>
            <a href={v.link} key={v.id} className="text-sm font-bold text-gray-900 sm:text-sm">Download Resume - {v.name}</a>
        </li>
    )

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Resumes</h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                        The files comes from the CANVA API which is the platform I use to create my resumes
                    </p>
                </div>
            </div>

            <div className="m-3">
                <div>
                    <span id="ProgressLabel" class="sr-only">Loading</span>

                    <span
                        role="progressbar"
                        aria-labelledby="ProgressLabel"
                        aria-valuenow="75"
                        class="relative block rounded-full bg-gray-200"
                    >
                        <span class="absolute inset-0 flex items-center justify-center text-[10px]/4">
                            <span class="font-bold text-white"> 75% </span>
                        </span>

                        <span class="block h-4 rounded-full bg-indigo-600 text-center" style={{ width: '75%' }}> </span>
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <ul>
                    Loading...
{/*                     {list}
 */}                </ul>
            </div>
        </div>
    )
}