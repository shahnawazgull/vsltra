import whiteArrow from '/public/assets/images/btn-arrow.svg';
import organgeArrow from '/public/assets/images/arrow-orange.svg';
import '/public/tailwind.css';

const Button = ({ btnTxt, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <>
      <button className='btns' onClick={handleClick}>
        {btnTxt}
        <img className='white' src={whiteArrow} alt='arrow' />
        <img className='orange' src={organgeArrow} alt='arrow' />
      </button>
    </>
  );
};
export default Button;
