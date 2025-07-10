import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-400 border-t border-white/10">
      <div className="container flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row items-center justify-center sm:justify-between max-w-[80%] mx-auto sm:max-w-[1280px]">
        <p>© {new Date().getFullYear()} Lu Han. All rights reserved.</p>
        <ul className="flex gap-x-2">
          <li>
            <a
              href="https://github.com/GoldenaArcher"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub profile"  
              className="flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-105 transition ease-in-out"
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
              title="LinkedIn profile"
              className="flex items-center justify-center text-gray-600 dark:text-gray-400  hover:text-[#0A66C2] hover:scale-105 transition ease-in-out"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
