const Photo = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">FOCUS</h1>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Portfolio Theme</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          <ul className="space-y-1">
            <li>
              <a href="#" className="block px-6 py-2 text-teal-500 font-medium">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                ALBUMS
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                PAGES 1
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                PAGES 2
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                ELEMENTS
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                LAYOUTS
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:text-teal-500 transition-colors">
                CONTACTS
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons and Footer */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex space-x-3 mb-4">
            <a
              href="#"
              className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
              </svg>
            </a>
          </div>
          <div className="text-xs text-gray-500">
            <p>Focus © 2019.</p>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative h-screen">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/focus-photography-bootstrap-website-template.jpg-r6eBrZLUdV4mjpoAwDNeqSikZq1cyF.jpeg"
            alt="Couple in bedroom - wedding photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-white text-sm">1/3</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 py-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Professional photographer with camera lens"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-5xl font-light text-gray-800 mb-8">About Me</h2>
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  I've been working as a professional wedding photographer all my adult life.
                </p>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    My name is Susan Parker, and I have been a professional wedding photographer for over 15 years. I
                    specialize in capturing the most precious moments of your special day with a natural, candid style
                    that tells your unique love story.
                  </p>
                  <p>
                    From intimate ceremonies to grand celebrations, I work closely with couples to ensure every detail
                    is beautifully documented. My approach combines artistic vision with technical expertise to create
                    timeless images you'll treasure forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photo
