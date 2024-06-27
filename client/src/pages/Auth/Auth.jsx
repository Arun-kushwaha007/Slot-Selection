import React,{ useState} from 'react'
import './Auth.css';
import icon from '../../Assets/icon.png';
import Aboutauth from './Aboutauth';


const Auth = () => {
    const [issignup, setsignup] = useState(false);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handlesubmit = (e)=>{
        e.preventDefault();
        if(!email && !password){
            alert("Enter email and password")
        }
        if(issignup){
            if(!name){
                alert("Enter a name to continue")
            }
            console.log(name, email, password);
        }else{
                console.log(email,password);
            }
        
    }
    const handleswitch= ()=>{
        setsignup(!issignup);
        setemail("");
        setname("");
        setpassword("");
    }

  return (
    <section className="auth-section">
        {issignup && <Aboutauth/>}
        <div className="auth-container-2">
            <img src={icon} className='login-logo' alt="" />
            <form onSubmit={handlesubmit}>
                {issignup && (
                    <label htmlFor="name">
                        <h4>Display Name</h4>
                        <input type="text"  id='name' name='name' value={name} onChange={(e)=>{
                            setname(e.target.value);
                        }}/>
                    </label>
                )}
                <label htmlFor="email">
                <h4>Email</h4>
                        <input type="email"  id='email' name='email' value={email} onChange={(e)=>{
                            setemail(e.target.value);
                        }}/>
                </label>
                <label htmlFor="password">
                    <div style={{display:"flex" , justifyContent:"space-between"}}>
                        <h4>Password</h4>
                        {!issignup && (
                            <p style={{color:"#007ac6" , fontSize: "13px"}}>
                                Forget Password?
                            </p>
                        )}
                    </div>
                    <input type="password" name='password' id='password' value={password} onChange={(e)=>{
                        setpassword(e.target.value)
                    }} />
                </label>
                <button type='submit' className='auth-btn'>
                    {issignup ? "Sign up" : "Log in"}
                </button>
            </form>
            <p>
                {issignup ? "Already have an account?": "Don't have an account ?"}
                <button type='button' className='handle-switch-btn' onClick={handleswitch}>
                    {
                        issignup ? "Log in" :"Sign up "
                    }
                </button>
            </p>
        </div>
    </section>
  )
}

export default Auth