const ExternalLink = ({ href, children, size = "md" }) => {
  const sizeClasses = {
    sm: "w-4 h-4 ml-1",
    md: "w-6 h-6 ml-1.5",
    lg: "w-8 h-8 ml-2",
    xl: "w-10 h-10 ml-2",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="items-center group duration-300 hover:text-blue-700"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 2 20 20"
        fill="currentColor"
        className={`${sizeClasses[size]} inline-flex transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5`}
      >
        <path
          fillRule="evenodd"
          d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
};

export default ExternalLink;
