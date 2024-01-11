import Link from 'next/link';
import Button from '@/components/ui/button';

const Footer = () => {
  return (
      <footer className="w-full h-auto flex flex-col items-center justify-center border-t p-6">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            href="#"
          >
            Terms & Conditions
          </Link>
          <Link
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            href="#"
          >
            FAQ
          </Link>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">© Invoicer. All rights reserved.</p>
      </footer>
  );
};

export default Footer;
