export default function Testimonial() {
  return (
    <section>
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">I already made some friends :)</h2>

            <p className="mt-4 text-gray-600">
              Words from people who worked with me and from leaders of teams I was partipapating
              all of projects I have learned a lot
            </p>
          </div>

          <div className="overflow-x-auto text-left">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">Jing Wang</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                I would like to recommend my colleague, Mr. Rodrigues, for his exceptional qualities and contributions to our PHP Symfony project. Mr. Rodrigues is not only highly skilled in his work but also brings a passion and enthusiasm that greatly enhances our team's dynamics. His empathetic nature makes him easy to work with, and he excels in communicating effectively with team members. His dedication and expertise have been invaluable to our project's success, and I have full confidence in his abilities to continue delivering outstanding results in future endeavors.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}