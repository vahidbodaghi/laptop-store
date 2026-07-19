const SectionTitle = ({
  text = "Section Title",
  description,
  accentColor = "bg-orange-500",
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span
          className={`h-7 w-1.5 rounded-full ${accentColor}`}
        />

        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          {text}
        </h2>
      </div>

      {description && (
        <p className="max-w-2xl text-sm leading-6 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
