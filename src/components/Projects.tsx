import  { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

type ProjectCategory = 'All' | 'Websites' | 'Applications' | 'Mobile';

interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A simple portfolio website written in ReactJS",
    image: "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/1036557452PartTimeNETDeveloper.jpg=ws1280x960?auto=format&fit=crop&w=800&q=80",
    category: "Websites",
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    demoLink: "https://my-portfolio-2-vert.vercel.app/",
    githubLink: "https://github.com/Morg3an/my-portfolio-2"
  },
  {
    title: "Parent-Teacher Communication App",
    description: "A responsive parent-teacher communication application done in Django and Bootstrap UI",
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Applications",
    techStack: ["Django", "Python", "HTML5", "FastAPI"],
    demoLink: "https://parent-teacher-comm-app.onrender.com/",
    githubLink: "https://github.com/Morg3an/parent-teacher-comm-app"
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts and nutrition",
    image: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&w=800&q=80",
    category: "Mobile",
    techStack: ["React Native", "TypeScript", "Redux"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com"
  }
];

const categories: ProjectCategory[] = ['All', 'Websites', 'Applications', 'Mobile'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white'
                  : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-blue-500 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
