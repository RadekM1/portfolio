interface titleProps {
  title: string;
}

export const SectionTitle = ({ title }: titleProps) => {
  return (
    <h2 className="text-5xl z-10 my-16 bg-gradient-to-b text-center dark:from-white dark:to-slate-600 from-gray-700 to-slate-900 bg-clip-text text-transparent">
      {title}
    </h2>
  );
};
