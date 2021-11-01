export default function login() {
  // element.preventDefault();
  // props.setLogedIn(true)


return (
  <div>
      <form onSubmit={(element)=> login(element)}>  
          <div className="container">   
              <label>Username : </label>   
              <input type="text" placeholder="Enter Username" name="username" required/>
              <label>Password : </label>   
              <input type="password" placeholder="Enter Password" name="password" required/>
              <button type="submit">Login</button>   
          
              Forgot <a href="#"> password? </a>   
          </div>   
      </form>     
  </div>
)
 
}