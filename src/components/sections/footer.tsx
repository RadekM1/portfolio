const footerContent = [
  {
    url: "https://www.facebook.com/radek.morong",
    alt: "Facebook",
    title: "Facebook",
    src: "vector/icon_facebook.svg",
  },
  {
    url: "https://www.linkedin.com/in/radek-morong",
    alt: "LinkedIn",
    title: "LinkedIn",
    src: "vector/icon_linkedin.svg",
  },
  {
    url: "https://github.com/RadekM1",
    alt: "Github",
    title: "Github",
    src: "vector/icon_github.svg",
  },
];

const Footer = () => {
  return (
    <section className="w-full flex flex-col pb-16 pt-16 justify-center items-center border-t-[1px] border-t-gray-300 dark:border-t-gray-700 dark:bg-black bg-white z-10">
      <div className="flex-col flex gap-8 ">
        <div className="flex w-full max-w-[1000px] flex-row gap-6 items-center justify-between my-5">
          {footerContent.map((item, i) => {
            return (
              <div key={i} className="flex justify-center">
                <a
                  className="hover:opacity-80 transition-opacity"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.title}
                >
                  <img src={item.src} alt="Facebook" className="h-12" />
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center sm:justify-end">
          <a href="tel:+420725912857">
            <img src="vector/kontaktTel.svg" alt="Telefon" className="h-12" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Footer;
