interface IButton {
  text: string;
}
const Button = ({ text }: IButton) => {
  return <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">{text}</button>;
};

export default Button;
