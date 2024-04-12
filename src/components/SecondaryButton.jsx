export const SecondaryButton = (props) => {
  const buttonText = props.text;
  return (
    <div>
      <button
        type="button"
        className="bg-white border-black border-2 px-4 py-2 text-xs font-semibold text-black shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SecondaryButton;
