import Link from "next/link";
const hero = () => {
    return (

        <section className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Développeur passionné par la création d'applications web modernes et
            performantes.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Me contacter
            </Link>
          </div>
        </section>
    )
}
export default hero;