
import * as React from "react";
import './Htmlcs.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const Htmlcss=()=>{

    return (<>
         <div className="container">
            <div className="form-box login">
               <form action="">
                <h1>login</h1>
                <div className="input-box">
                    <input type="text"  placeholder="Username"  required/>
                    <i ><PersonIcon/></i>
                </div>
                <div className="input-box">
                    <input type="text"  placeholder="Username"  required/>
                    <i ><PersonIcon/></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="password"  required/>
                    <i><LockIcon/></i>
                </div>
                <div className="forgot-link">
                    <a href="ma1">Forget password</a>
                </div>
                <button type="submit" className="btn">submit</button>
                 <p>or login wih social platforms</p>
                 <div className="social-icons">
                    <a href="ma"><GoogleIcon/></a>
                    <a href="ma"><FacebookIcon/></a>
                    <a href="ma"><GitHubIcon/></a>
                    <a href="ma"><GoogleIcon/></a>
                 </div>
               </form>
            </div>





            <div className="form-box register">
               <form action="">
                <h1>register</h1>
                <div className="input-box">
                    <input type="text"  placeholder="Username"  required/>
                    <i ><PersonIcon/></i>
                </div>
                <div className="input-box">
                    <input type="text"  placeholder="Username"  required/>
                    <i ><PersonIcon/></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="password"  required/>
                    <i><LockIcon/></i>
                </div>
                <div className="forgot-link">
                    <a href="ma1">Forget password</a>
                </div>
                <button type="submit" className="btn">register</button>
                 <p>or login wih social platforms</p>
                 <div className="social-icons">
                    <a href="ma"><GoogleIcon/></a>
                    <a href="ma"><FacebookIcon/></a>
                    <a href="ma"><GitHubIcon/></a>
                    <a href="ma"><GoogleIcon/></a>
                 </div>
               </form>
            </div>




        <div className="toggle-box">
            <div className="toggle-panel toggle-left">
                <h1>Hello welcome</h1>
                <p>dont have an account</p>
                <button className="btn register-btn">Register</button>
            </div>
            <div className="toggle-panel toggle-right">
                <h1> welcome back</h1>
                <p>already have an account</p>
                <button className="btn register-btn">Register</button>
            </div>
        </div>



         </div>
    </>)
}

export default Htmlcss;