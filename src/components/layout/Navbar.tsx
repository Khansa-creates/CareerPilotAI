import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-white">
          CareerPilot AI
        </h1>

        <div className="hidden gap-8 text-gray-300 md:flex">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">FAQ</a>
        </div>

        <div className="flex gap-4">
          <Button variant="secondary">
            Sign In
          </Button>

          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;