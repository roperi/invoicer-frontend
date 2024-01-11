import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function Contact() {
    return (
        <section className="w-full py-20 px-6 bg-gray-100 dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">Contact Us</h2>
          <div className="flex flex-col items-center mt-8">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have any questions or concerns? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col w-full max-w-md mt-8">
              <Input className="mb-4" placeholder="Name" />
              <Input className="mb-4" placeholder="Email" type="email" />
              <textarea
                className="w-full h-32 px-3 py-2 text-gray-700 bg-white rounded shadow focus:outline-none focus:shadow-outline mb-4"
                placeholder="Message"
              />
              <Button>Submit</Button>
            </div>
          </div>
        </section>
    );
}

export default Contact;