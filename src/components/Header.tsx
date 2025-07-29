
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white">Cohorts</h1>
            <span className="text-sm text-purple-400">App</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-purple-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="border-white text-white px-6 py-2 rounded-lg transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </header>
  )
}

export default Header
