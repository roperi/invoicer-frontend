import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between px-6 bg-white dark:bg-gray-800">
      <Link href="#">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">Invoicer</div>
      </Link>
      <nav className="flex items-center gap-4">
        <Link href="#features">
          <div className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Features</div>
        </Link>
        <Link href="#pricing">
          <div className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Pricing</div>
        </Link>
        <Link href="#">
          <div className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Log In</div>
        </Link>
        <Button href="/signup" className="ml-4">
          Sign Up
        </Button>
      </nav>
    </header>
  );
};

export default Header;
