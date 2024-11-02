import upload from "/src/assets/images/upload.svg";

const SubmissionButton = ({ label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      type="submit"
      className="bg-primary flex flex-row px-6 py-4 rounded-[15px] text-bg gap-2 font-semibold"
    >
      {label} <img src={upload} alt="arrow" />
    </a>
  );
};

export default SubmissionButton;
