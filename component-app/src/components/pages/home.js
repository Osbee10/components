import Button from '../appcomponents/button';
import Navbar from '../appcomponents/navbar';
import InputField from '../appcomponents/inputfield';
import RadioButton from '../appcomponents/radiobutton';
import CheckBox from '../appcomponents/checkbox';
import Typography from '../appcomponents/typography';
import TextArea from '../appcomponents/textarea';
import SelectOption from '../appcomponents/selectoption';


function Home() {


    return(
        <div>
            <Navbar text="Whizzy Academy" color="#1e88e5"/>
            <h1>My Components</h1>
            <Button text="Clear" color="#d50000"/>
            <Button text="Login" color="#1e88e5"/>
            <Button text="Cancel" color="#880e4f"/>
            <Button text="Submit" color="#003300"/>
           
            <InputField text="Type" color="blue"/>
            <RadioButton text="Check" color="gold"/>
            <CheckBox text="Tick" color="yellowbrown"/>
            <Typography text="Style"color="violet"/>
            <TextArea text="Write" color="purple"/>
            <SelectOption text="Select" color="green"/>

        </div>
    )
}

export default Home;