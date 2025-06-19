import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-100">
      {/* Header bar */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gray-800 p-4 md:h-52 shadow-lg border-b-4 border-gray-700">
        <AcmeLogo />
      </div>

      {/* Main layout */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* Welcome Text + CTA */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20 shadow-md border border-gray-200">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className} space-y-2`}>
            <strong>Welcome to RASA.</strong> A streamlined dashboard for creators, operators, and teams.
            <br />
            Manage your workflows, payments, and customer insights all in one place.
            <br />
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 border rounded-lg bg-white shadow-lg">
          <Image
            src="/image.png"
            width={1000}
            height={760}
            className="hidden md:block rounded-lg transition-transform duration-300 hover:scale-105 shadow"
            alt="Hero desktop view"
          />
          <Image
            src="/image.png"
            width={560}
            height={620}
            className="block md:hidden rounded-lg transition-transform duration-300 hover:scale-105 shadow"
            alt="Hero mobile view"
          />
        </div>
      </div>
    </main>
  );
}
