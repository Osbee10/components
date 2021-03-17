import ButtonComponent from "./button";
import CheckboxComponent from "./checkbox";
import DropdownComponent from "./dropdown";
import InputfieldComponent from "./inputfield";
import NavbarComponent from "./navbar";
import TextareaComponent from "./textarea";
import TypographyComponent from "./typography";
import RadiobuttonComponent from "./radiobutton";

function HomeComponent(props){
    return(
        <div class='home'>
            <NavbarComponent />
            <TypographyComponent />
            <CheckboxComponent />
            <DropdownComponent />
            <InputfieldComponent />
            <RadiobuttonComponent />
            <TextareaComponent />
            <div class='btn'>
            <ButtonComponent color='green' name='why' />
            <ButtonComponent color='yellow' name='why' />
            <ButtonComponent color='violet' name='why' />
            </div>


        </div>
    )
}
export default HomeComponent 