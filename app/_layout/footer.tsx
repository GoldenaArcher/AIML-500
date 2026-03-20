import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
      <footer className="border-t border-neutral-300 py-6 text-sm text-slate-600 dark:border-white/10 dark:text-gray-400">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Lu Han. All rights reserved.
          </p>
          <ul className="flex gap-x-3">
            <li>
              <a
                  href="https://github.com/GoldenaArcher"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="text-slate-600 transition hover:scale-105 hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <FaGithub size={20} />
              </a>
            </li>
            <li>
              <a
                  href="https://www.linkedin.com/in/lu-han-cs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-slate-600 transition hover:scale-105 hover:text-[#0A66C2] dark:text-gray-400"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
  );
}
