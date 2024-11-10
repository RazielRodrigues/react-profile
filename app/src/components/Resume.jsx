import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Resume() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [table, setTable] = useState([]);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            setError(null); // Reset any previous errors

            try {
                const response = await axios.get('http://localhost:8082');
                const json = response.data;

                const items = json.map((item, index) => {
                    let type = '';

                    // Assuming item represents the job object
                    switch (index) { // Use index to determine type, assuming you're mapping based on this
                        case 0:
                            type = 'English';
                            break;
                        case 1:
                            type = 'Deutsch';
                            break;
                        case 2:
                            type = 'Portuguese';
                            break;
                        default:
                            type = 'Unknown';
                            break;
                    }

                    return (
                        <tr key={item.job.id}>
                            <td className="px-4 py-2 font-medium text-gray-900">Download Resume - {item.job.id} ({type})</td>
                            <td className="px-4 py-2 text-gray-700">
                                <a
                                    href={item.job.urls[0]}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm font-bold text-gray-900 sm:text-sm"
                                >
                                    See more
                                </a>
                            </td>
                        </tr >
                    )
                });

                // Set the Table with mapped items
                setTable(items);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []); // Add an empty dependency array to run this only once on mount

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Resumes</h2>
                    <p className="mt-4 text-gray-500 sm:text-xl">
                        The files come from the CANVA API, which is the platform I use to create my resumes.
                    </p>
                </div>
            </div>

            <div className="overflow-x-auto text-left">
                <table className="w-full min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="px-4 py-2 font-medium text-gray-900">Link</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {error ? (
                            <tr><td>Error: {error.message}</td></tr>
                        ) : loading ? (
                            <tr><td>Loading...</td></tr>
                        ) : (
                            table
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
