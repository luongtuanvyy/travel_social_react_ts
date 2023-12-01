const Eye = (prop: { size?: number }) => {
  const { size } = prop;
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9201 11.6C19.9001 6.91 16.1001 4 12.0001 4C7.90007 4 4.10007 6.91 2.08007 11.6C2.025 11.7262 1.99658 11.8623 1.99658 12C1.99658 12.1377 2.025 12.2738 2.08007 12.4C4.10007 17.09 7.90007 20 12.0001 20C16.1001 20 19.9001 17.09 21.9201 12.4C21.9751 12.2738 22.0036 12.1377 22.0036 12C22.0036 11.8623 21.9751 11.7262 21.9201 11.6ZM12.0001 18C8.83007 18 5.83007 15.71 4.10007 12C5.83007 8.29 8.83007 6 12.0001 6C15.1701 6 18.1701 8.29 19.9001 12C18.1701 15.71 15.1701 18 12.0001 18ZM12.0001 8C11.2089 8 10.4356 8.2346 9.77779 8.67412C9.11999 9.11365 8.6073 9.73836 8.30455 10.4693C8.0018 11.2002 7.92258 12.0044 8.07693 12.7804C8.23127 13.5563 8.61223 14.269 9.17164 14.8284C9.73105 15.3878 10.4438 15.7688 11.2197 15.9231C11.9956 16.0775 12.7999 15.9983 13.5308 15.6955C14.2617 15.3928 14.8864 14.8801 15.3259 14.2223C15.7655 13.5645 16.0001 12.7911 16.0001 12C16.0001 10.9391 15.5786 9.92172 14.8285 9.17157C14.0783 8.42143 13.0609 8 12.0001 8ZM12.0001 14C11.6045 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3037 13.1308 10.1523 12.7654C10.0009 12.3999 9.96133 11.9978 10.0385 11.6098C10.1157 11.2219 10.3061 10.8655 10.5859 10.5858C10.8656 10.3061 11.2219 10.1156 11.6099 10.0384C11.9978 9.96126 12.4 10.0009 12.7654 10.1522C13.1309 10.3036 13.4432 10.56 13.663 10.8889C13.8828 11.2178 14.0001 11.6044 14.0001 12C14.0001 12.5304 13.7894 13.0391 13.4143 13.4142C13.0392 13.7893 12.5305 14 12.0001 14Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Eye;
