const skills = () => {
    return (
      <section id="skills" className="mt-20 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Développement Web
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Création d'applications web avec React, Next.js et TypeScript.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              UI/UX Design
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Conception d'interfaces utilisateur modernes et intuitives.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Optimisation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Performance et optimisation pour une expérience utilisateur
              optimale.
            </p>
          </div>
        </div>
    </section>);
}
export default skills