import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Trail() {
  return (
    <section className="w-full py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Ready to Get Started?</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Join thousands of satisfied customers using our app globally.
      </p>
        <Button className="mt-8">
          <Link href="/signup">
            <a>Sign Up Now</a>
          </Link>
        </Button>
    </section>
  );
}

export default Trail;
