import {Form,FormControl,Button} from 'react-bootstrap'
import  './login.css';
function Login (){
    return (
        
        <div>
        
        <header> </header>
        <section>
        <div className="hello">
          <Form> 
          <h1> Login Page</h1>
          <div className="espace"></div>
         
          <FormControl type="text" placeholder="enter your name" />
          <div className="espace"></div>
          <FormControl type="text" placeholder="enter your password" />
          <div className="espace"></div>
          <Button>Sign up</Button>
          <div className="espace"></div>
          <div className="espace"></div>
          <div className="espace"></div>
          <div class="text-center p-t-115">
						<span class="txt1">
							Don’t have an account?
						</span>
						<a href='hello.com'>
							Sign Up
						</a>
					</div>
          </Form>
          
        </div>
        </section>
        <footer>  </footer>
      </div>
    )
}
export default Login
