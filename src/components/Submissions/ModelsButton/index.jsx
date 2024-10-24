const ModelsButton = ({ label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="border border-primary flex flex-row px-6 py-1 rounded-[10px] text-primary font-semibold gap-2 text-nowrap"
    >
      {label} <img src="/src/assets/images/prime_arrow-right.svg" alt="arrow" />
    </a>
  );
};

export default ModelsButton;
