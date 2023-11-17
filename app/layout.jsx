'use client';

export default function Page({ children }) {
  const openNavbar = () => {
    const navbar = document.querySelector('#navbar-default');

    if (navbar.classList.contains('hidden')) navbar.classList.remove('hidden');
    else navbar.classList.add('hidden');
  };

  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" as="image" href="/favicon.ico" />
        <title>PrismBot | A simple music bot for Discord</title>
        <meta name="theme-color" content="#eb1757"/>
      </head>
      <body>
        <header className="border-gray-200 px-2 sm:px-4 py-2.5 rounded sticky">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="/" className="flex items-center">
              <img src="/favicon.ico" className="h-6 mr-3 sm:h-9 mb-4" alt="PrismBot Logo" />
              <span className="self-center text-2xl font-black whitespace-nowrap">PrismBot</span>
            </a>

            <button onClick={() => openNavbar()} className="inline-flex items-center p-2 ml-3 text-sm md:hidden text-gray-400">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg%22%3E">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-normal md:border-0">
                <li><a href="/" className="block py-2 pl-3 pr-4 md:p-0">Home</a></li>
                <li><a href="/socials" className="block py-2 pl-3 pr-4 md:p-0">Development Team</a></li>
                <li><a href="https://status.prismbot.site/" className="block py-2 pl-3 pr-4 md:p-0">Service Status</a></li>
                <li><a href="https://discord.com/oauth2/authorize?client_id=1070824661845295134&scope=bot%20applications.commands" className="block py-2 pl-3 pr-4 md:p-0">PrismBot Canary</a></li>
                <li><a href="https://terms.prismbot.site/" className="block py-2 pl-3 pr-4 md:p-0">Terms of Service</a></li>
                <li><a href="https://discord.com/invite/WWuA9gduSJ" className="block py-2 pl-3 pr-4 md:p-0">Support</a></li>
              </ul>
            </div>
          </div>
        </header>
        { children }
      </body>
    </html>
  );
}
