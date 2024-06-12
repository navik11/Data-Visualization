import Button from './Button';
import InputText from './InputText';
import './NavBar.css'

interface NavBarProps {
    loaderFunc: (event: any) => void;
    onInputChange: (event: any) => void;
}

function NavBar({loaderFunc, onInputChange}: NavBarProps) {

    return (
        <nav className="navBar">
        <h1>Data Visualization</h1>
        <ul>
            <InputText text="Load data from folder .." onChange={onInputChange}/>
            <Button text="Visualize" func={loaderFunc}/>
        </ul>
        </nav>
    );
}

export default NavBar;