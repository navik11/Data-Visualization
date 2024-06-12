import "./Button.css"

interface ButtonProps {
    text: string;
    func?: (event: any) => void;
}

function Button({text, func} : ButtonProps) {
  return (<button className="btn" onClick={func}>{text}
  </button>);
}

export default Button;