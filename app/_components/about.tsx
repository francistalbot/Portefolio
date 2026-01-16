import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            À propos de moi
        </h2>

        <div className="prose dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Qui suis-je ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Je suis un développeur passionné par la création d'applications
              web modernes et performantes. Avec une expertise en React, Next.js
              et TypeScript, je transforme des idées en solutions numériques
              élégantes.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Mon approche combine technique solide et créativité pour offrir
              des expériences utilisateur exceptionnelles.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Compétences
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "JavaScript/TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Tailwind CSS",
                "Git/GitHub",
                "PostgreSQL",
                "MongoDB",
                "API REST",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg text-center"
                >
                  <span className="text-gray-900 dark:text-white font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Parcours
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Formation en développement web
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Apprentissage continu des dernières technologies et best
                  practices
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Projets personnels
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Développement de plusieurs applications web pour perfectionner
                  mes compétences
                </p>
              </div>
            </div>
          </div>
        </div>
       <Button
        className="mx-auto my-8 p-5 flex w-max"
        variant="outline"
      >
        <Link href="/projects" className="text-base font-semibold">
          En savoir plus sur moi
        </Link>
      </Button>
    </section>
  );
}
