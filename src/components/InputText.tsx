import "./InputText.css"

interface InputProps {
    text: string;
    onChange?: (event: any) => void;
}

function InputText({text, onChange} : InputProps) {
  return (
    <input className="inputText" type="text" placeholder={text} onChange={onChange} />);
}

export default InputText;