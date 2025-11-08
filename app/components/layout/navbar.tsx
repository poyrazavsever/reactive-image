import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className="container max-w-6xl mx-auto px-6 py-6 sm:px-0 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <img
          src="/logo/logo.png"
          alt="Logo for navigation bar"
          className="w-8 h-8"
        />
        <span className="text-lg font-semibold ">Reactive Image</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center gap-4">
        <a href="#" className="hover:text-orange-500 hover:underline">Docs</a>
        <a href="#" className="hover:text-orange-500 hover:underline">Blog</a>
        <a href="#" className="hover:text-orange-500 hover:underline">Showcase</a>
        <a
          href="#"
          className="flex items-center gap-2 border border-dashed border-orange-500 py-2 px-4 group hover:bg-orange-500 hover:text-white transition-colors rounded-md"
        >
          <Icon
            icon="cib:buy-me-a-coffee"
            width="16"
            height="16"
            className="text-orange-500 group-hover:text-white"
          />
          Buy Me a Coffee
        </a>
        <a
          href="#"
          className="flex items-center gap-2 border border-dashed border-orange-500 text-white py-2 px-4 group bg-orange-500 hover:bg-white hover:text-black transition-colors rounded-md"
        >
          <Icon
            icon="akar-icons:github-fill"
            width="16"
            height="16"
            className="text-white group-hover:text-orange-500"
          />
          Star on GitHub
        </a>
      </div>
    </nav>
  );
}

export default Navbar
