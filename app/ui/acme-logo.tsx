import { BookmarkIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center gap-3 leading-none text-white`}
    >
      <span className="bg-gradient-to-tr from-gray-500 via-gray-500 to-gray-500 rounded-full p-2 shadow-lg">
        <BookmarkIcon className="h-12 w-12 rotate-[15deg] text-white" />
      </span>
      <p className="text-[44px] font-bold tracking-tight drop-shadow-lg">RASA</p>
    </div>
  );
}
