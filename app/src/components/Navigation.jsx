import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                            <Link to="/">
                                <span>razielrodrigues.dev</span>
                            </Link>
                        </h1>
                    </div>

                    {/* Hamburger Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-900 dark:text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/" className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                            Home
                        </Link>
                        <Link to="/project" className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                            Projects
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${isMobileMenuOpen ? 'block' : 'hidden'
                        } md:hidden mt-4 flex flex-col items-center space-y-4`}
                >
                    <Link
                        to="/"
                        className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/project"
                        className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </header>
    );
}
