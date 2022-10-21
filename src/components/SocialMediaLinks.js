const SocialMediaLinks = () => {
  return (
    <div className="fixed pl-4 left-0 bottom-0 z-10">
      <a href="https://github.com/KojoObeng" target="_blank" rel="noreferrer">
        <svg
          width="24"
          height="24"
          fill="currentColor"
          className="w-6 h-6 mb-4 text-green-400 fill-current hover:-translate-y-1 duration-200 hover:text-green-300"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
          ></path>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/kojo-obeng/"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          className="w-6 h-6 mb-4 text-green-400 fill-current hover:-translate-y-1 duration-200 hover:text-green-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
        </svg>
      </a>
      <a
        href="https://github.com/KojoObeng/Personal-Website-V2"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
          className="w-6 h-6 mb-4 text-green-400 fill-current hover:-translate-y-1 duration-200 hover:text-green-300"
        >
          <path
            fill-rule="evenodd"
            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
          ></path>
        </svg>
      </a>
      <div className="w-3 h-24 border-r-2 border-solid border-green-400"></div>
    </div>
  );
};

export default SocialMediaLinks;
