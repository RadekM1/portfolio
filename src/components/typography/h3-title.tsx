export const H3Title = ({ title }: { title: string }) => {
  return (
    <h3
      className={`text-rose-600 dark:text-rose-500 duration-300 text-nowrap text-base font-semibold `}
    >
      {title}
    </h3>
  );
};
