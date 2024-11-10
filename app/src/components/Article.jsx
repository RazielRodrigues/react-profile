import axios from 'axios';
import { useEffect, useState } from "react"

export default function Article() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const [table, setTable] = useState([])

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(null)
      
      try {

        const response = await axios.get('http://localhost:8081');
        const json = response.data;

        const items = json.map((item) => {
          return (
            <tr key={item.id}>
              <td className="px-4 py-2 font-medium text-gray-900">{item.title}</td>
              <td className="px-4 py-2 text-gray-700">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-gray-900 sm:text-sm"
                >
                  See more
                </a>
              </td>
            </tr >
          )
        })

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
    <section>
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">Read my articles</h2>

            <p className="mt-4 text-gray-600">
              I love to share my knowledge with the community and my colleagues, one my ways to do it is writing articles
              I like to post on dev.to this is the why I'm getting my articles there using an API please click the button
              and take a look on last articles.
            </p>

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
      </div>
    </section>
  )
}