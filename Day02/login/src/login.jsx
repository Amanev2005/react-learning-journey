
function Login(props) {

if(props.isLoggedIn){
    return(
        <>
        <h1>Welcome {props.name}</h1>
        <button>Logout</button>
        </>
       );
    }

else
    {
    return(
        <>
        <h1>Please login</h1>
        <button>Login</button>
        </>
        );
        
    }

}

export default Login