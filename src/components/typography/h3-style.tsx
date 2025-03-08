export const H3Style = ({ title }: { title: string }) => {
  return (
    <h3
      className={`text-rose-600 dark:text-rose-500 duration-300  lg:ml-2 text-nowrap text-base font-semibold `}
    >
      {title}
    </h3>
  );
};
