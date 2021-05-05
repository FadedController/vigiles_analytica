const Quote = (): JSX.Element => {
  return (
    <div className="quote-bg flex items-center justify-center">
      <div className="max-w-6xl py-32 px-5 flex flex-col space-y-10">
        <h1 className="text-center text-4xl text-gray-100">"Anticipate"</h1>
        <p className="text-center font-light text-gray-200 text-2xl">
          We identify and evaluate all threats and vulnerabilities to be
          perfectly positioned to get ahead of emerging risks. Our team of
          experts is ready to help you determine the security and risk
          management path that’s right for you to keep you up-to-date on the
          latest security threats in your area.
        </p>
      </div>
    </div>
  );
};

export default Quote;
