import axios from 'axios';
import { useEffect, useState } from "react"

export default function ProjectsExampleTable() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [table, setTable] = useState([])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); // Formats the date to a human-readable format
    };

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            setError(null)

            try {

                const response = await axios.get('https://api.go.razielrodrigues.dev/github')
                const json = response.data;

                const items = json.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td className="px-4 py-2 font-medium text-gray-900">{item.name}</td>
                            <td className="px-4 py-2 text-gray-700">{item.description || 'No description'}</td>
                            <td className="px-4 py-2 text-gray-500">{formatDate(item.created_at)}</td>
                            <td className="px-4 py-2 text-gray-500">{formatDate(item.updated_at)}</td>
                            <td className="px-4 py-2 text-gray-500">{item.language || 'N/A'}</td>
                            <td className="px-4 py-2 text-gray-500">{item.stargazers_count}</td>
                            <td className="px-4 py-2">
                                {item.demo_url ? (
                                    <a
                                        href={item.demo_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                ) : (
                                    'No demo available'
                                )}
                            </td>
                            <td className="px-4 py-2">
                                <a
                                    href={item.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Repository
                                </a>
                            </td>
                        </tr>
                    );
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

        loadData()
    }, [])

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h2>
                    <p className="mt-4 text-gray-500 sm:text-xl">
                        All the projects are update to date with my github profile
                    </p>
                </div>
            </div>

            <div className="overflow-x-auto text-left">
                <table className="w-full min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="px-4 py-2 font-medium text-gray-900">Description</th>
                            <th className="px-4 py-2 font-medium text-gray-900">Created</th>
                            <th className="px-4 py-2 font-medium text-gray-900">Updated</th>
                            <th className="px-4 py-2 font-medium text-gray-900">Language</th>
                            <th className="px-4 py-2 font-medium text-gray-900">Stars</th>
                            <th className="px-4 py-2 font-medium text-gray-900">Live Demo</th>
                            <th className="px-4 py-2 font-medium text-gray-900">Repository</th>
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
    )
}