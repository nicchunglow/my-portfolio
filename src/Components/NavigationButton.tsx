import { useNavigate } from 'react-router-dom';

interface IButton {
  text: string;
  location: any;
}

const NavigationButton = ({ text, location }: IButton) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => navigate(location)}
    >
      {text}
    </button>
  );
};

export default NavigationButton;
