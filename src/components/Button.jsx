const Button = ({ label, image, backgroundColor, textColor, borderColor }) => {
  return (
    <button
      className={`mt-2  ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} border `
          : 'bg-coral-red text-white hover:bg-red-700 '
      }rounded-2xl leading-3 font-montserrat  transition-colors ease-in px-7 py-3 mb-3 text-md  `}>
      {label}

      {image && (
        <img src={image} alt='foward arrow icon' className='inline pl-2' />
      )}
    </button>
  );
};

export default Button;
