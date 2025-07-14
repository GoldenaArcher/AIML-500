import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
      <footer className="border-t border-neutral-200 dark:border-white/10 py-6 text-sm text-gray-500 dark:text-gray-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:gap-0">
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
                  className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition hover:scale-105"
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
                  className="text-gray-500 hover:text-[#0A66C2] dark:text-gray-400 transition hover:scale-105"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
  );
}
