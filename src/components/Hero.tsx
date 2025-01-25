import { Github, Linkedin, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-800 to-red-800 bg-clip-text text-transparent">
              Hi, I'm Keath Morgan
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Backend & Systems Developer | 🦀 Rust | 💻 Node.js | 🌐 Web3 Enthusiast | 🎮 Gamer |
          Building scalable systems, mastering Rust, Node.js, probing Web3's future
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-900 to-red-800 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-600 rounded-lg hover:bg-purple-50 dark:hover:bg-green-500 transition-colors"
            >
              Download CV
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Morg3an" target='0' className="social-link">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/keath-morgan-7456a9239" target='0' className="social-link">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="/resume.pdf" target='0' className="social-link">
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/1022/449/132/code-fibonacci-sequence-programming-rust-wallpaper-preview.jpg?fit=crop&w=800&h=800"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}