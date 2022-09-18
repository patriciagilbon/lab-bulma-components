import FormField from './formField';
import { Link } from "react-router-dom";
import CoolButton from './coolButton';

function SignUp(){
    return(
    <div>
    <div>
    <form name="SignUpForm"  method="post" required>
    <FormField name="Name " type="text" placeholder="e.g Alex Smith" />
    <FormField name="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <p>Don't have an account yet? Please go to <Link to="/login">login</Link> </p>
    <br></br>
    <CoolButton name='Signup' state ="button is-dark"/>
    </form>
    </div>
    </div>) 
}
export default SignUp;