import AppStoreImage from "/images/appstore.png";
import GooglePlayImage from "/images/googleplay.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-16 text-white md:px-16">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="flex-1">
          <h1 className="mb-6 text-2xl font-bold sm:text-3xl md:text-lg lg:text-3xl xl:text-4xl">
            Transform Trending Topics
            <span className="bg-linear-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
              <br />
              into Captivating Videos.
            </span>
          </h1>
          <div className="flex gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={AppStoreImage}
                alt="App Store"
                className="h-12 w-32 bg-contain bg-no-repeat"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GooglePlayImage}
                alt="Google Play"
                className="h-12 w-32 bg-contain bg-no-repeat"
              />
            </a>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="mb-4 text-lg font-semibold">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="border-transparent text-gray-400 transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="border-transparent text-gray-400 transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="border-transparent text-gray-400 transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  to="/generate"
                  className="border-transparent text-gray-400 transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
                >
                  Generate Video
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Social Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
