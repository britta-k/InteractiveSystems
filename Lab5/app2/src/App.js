import logo from './logo.svg';
import About from './About';
import './App.css';

function TestingComponent()
{
  return (
    <button>Click Me</button>
  );
}

function SignUp()
{
  return (
    <button>Sign Up</button>
  );
}

function LogIn()
{
  return (
    <button>Log In</button>
  );
}

let isNewUser = true;
let content;
/*
if(isNewUser)
{
  content = <SignUp/>;
}
else {
  content = <LogIn/>;
}
*/

function App() {
  return (
    <div>
      <h1>Hello to our first app</h1>
      <p>This is a test for paragraph</p>
      <TestingComponent/>
      <About/>
      {isNewUser?<SignUp/>:<LogIn/>}
    </div>
  );
}

export default App;
