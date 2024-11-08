export default function Testimonial() {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">People that know me</h2>


          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">


                <div>


                  <p className="mt-0.5 text-lg font-medium text-gray-900">Jing Wang</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                error officiis atque voluptates magnam!
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">


                <div>


                  <p className="mt-0.5 text-lg font-medium text-gray-900">Hicham Labani</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                error officiis atque voluptates magnam!
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">


                <div>


                  <p className="mt-0.5 text-lg font-medium text-gray-900">Dilenon Delfino</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                error officiis atque voluptates magnam!
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    )
}