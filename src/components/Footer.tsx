

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          At NotesTherapy Academy, we transform beginners into tech professionals with hands-on, expert-led coding courses. Our mission is to make quality tech education accessible, equipping you with the skills to thrive in a digital world. Join us to kickstart your coding journey!
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/abhishek.rathour.946"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://github.com/abhishekrathour07"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
            <a
              href="https://www.instagram.com/abhishek_rathour.07"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Banglore, India</p>
          <p>banglore 560090</p>
          <p>Email: singhrathourabhishek7@gmail.com</p>
          <p>Phone: </p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 coding School. All rights reserved.</p>
    </footer>
  )
}

export default Footer