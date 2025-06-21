const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10 mt-10 lg:mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold mb-4">E-Shop</h2>
          <p className="text-sm">
            Your one-stop destination for the latest fashion and accessories.
            Shop smart, live stylish!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-200">Home</a></li>
            <li><a href="/cart" className="hover:text-blue-200">Cart</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/category/men" className="hover:text-blue-200">Men</a></li>
            <li><a href="/category/women" className="hover:text-blue-200">Women</a></li>
            <li><a href="/category/kids" className="hover:text-blue-200">Kids</a></li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-white text-blue-500 font-semibold py-2 rounded-md hover:bg-blue-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-blue-400 pt-4">
        &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
