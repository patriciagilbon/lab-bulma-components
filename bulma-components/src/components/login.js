import FormField from './formField';
import { Link } from "react-router-dom";
import CoolButton from './coolButton';

function Login(){
    return(
    <div>
    <div>
    <FormField name="Name " type="text" placeholder="e.g Alex Smith" />
    <FormField name="Email " type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField name="Password " type="password" placeholder="********" />
    </div>
    <p>Already have an account? Please go to <Link to="/signup">signup</Link></p> 
    <br></br>
    <CoolButton name='Login' link={"/signup"} state ="button is-success"/>
    </div>) 
}
export default Login;