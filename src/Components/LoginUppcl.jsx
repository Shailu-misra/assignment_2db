import React,{useRef} from 'react'
import './Loginlogo.css'
import axios from "axios";
import { useNavigate} from 'react-router-dom';


function LoginUppcl(props) {
 
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const checkBoxRef = useRef(null);

  let navigate = useNavigate()
  
 
  const login =  async (e)=>{
      e.preventDefault();

      let API_URL = "http://localhost:8080"


      let phoneNumber = phoneRef.current.value
      let password = passwordRef.current.value
      
     // alert(phoneNumber)
      let response = await axios.post(API_URL, {
          phoneNumber,
          password
          
      }).catch((res)=> {
          alert(res.response.data.message)
          console.log(res.response.data.message)
      })

      if(response && response.status === 200) {
          alert("User "+ response.data.name +" logged in")
          console.log(response.data)
          localStorage.setItem('UPPCL_USER', JSON.stringify(response.data));
          navigate("/")
      }
  }
 

  return (
    <section className="h-100 gradient-form bg-dark " id="loginsec" >
  <div className="container  py-5 h-150">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center" id="back1">
                  
                 
                </div>

                <form>
                  <p><strong>Login to your account</strong></p>

                  <div className="form-outline mb-4 d-flex align-items-center">
                  <label className="form-label px-3" htmlFor="form2Example11">User</label>
                    <input type="tel" ref={phoneRef} pattern="[0-9]{10}" name="phoneno"id="form2Example11" className="form-control" 
                    
                      placeholder="Enter your user ID" required/>
                     
                  </div>

                  <div className="form-outline mb-4 d-flex align-items-center ">
                    <label className="form-label px-3" htmlFor="form2Example22">Password</label>
                    <input type="password" ref={passwordRef} name="password=" id="form2Example22" className="form-control" />
                    
                  </div>
               

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" onClick={login} type="button">Log
                      in</button>
                    
                  </div>

              
                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2" id="s2">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default LoginUppcl