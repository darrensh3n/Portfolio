import Link from 'next/link';
import FloatingToolbar from './components/FloatingToolbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-teal-100 dark:from-slate-800 dark:via-blue-900 dark:to-teal-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-white">🏖️</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Darren Shen
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-6">
              Computer Engineering @ San Jose State University
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🌊 To Portfolio
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Preview My Resume
            </a>
          </div>
        </div>
      </main>

      <FloatingToolbar />
    </div>
  );
}
