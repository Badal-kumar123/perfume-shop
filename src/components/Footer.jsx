/*export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-6">
      <p>© {new Date().getFullYear()} PerfumeShop. All rights reserved.</p>
    </footer>
  );
}
  */
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Needed for SPA routing

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & About */}
        <div>
          <h3 className="text-2xl font-bold text-white">PerfumeShop</h3>
          <p className="mt-4 text-sm">
            Discover luxury fragrances and curated selections. Your destination for premium perfumes.
          </p>
        </div>

        {/* ✅ Fixed Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'Products', 'About', 'Contact'].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase()}`} className="hover:underline">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links (unchanged, since likely external/static) */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Support</h4>
          <ul className="space-y-2">
            {['Help Center', 'Refund Policy', 'Terms of Service', 'Privacy Policy'].map((l) => (
              <li key={l}>
                <a href={`/${l.toLowerCase().replace(/ /g, '-')}`} className="hover:underline">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Social (unchanged) */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Stay in Touch</h4>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-md text-white font-medium"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl transition-transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl transition-transform hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl transition-transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl transition-transform hover:scale-110">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl transition-transform hover:scale-110">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 text-center text-sm">
        © {currentYear} PerfumeShop. All rights reserved.
      </div>
    </footer>
  );
}
