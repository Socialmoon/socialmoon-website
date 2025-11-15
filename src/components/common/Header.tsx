import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">SocialMoon</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/services" className="hover:text-gray-400">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
            <li><Link href="/insights" className="hover:text-gray-400">Insights</Link></li>
            <li><Link href="/contact" className="hover:text-gray-400">Contact Us</Link></li>
            <li><Link href="/admin/login" className="hover:text-gray-400">Admin Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;