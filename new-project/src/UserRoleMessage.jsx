const User = (props) => {
return(
    <div>
     {props.role =='Admin' ? <h2>Welcome Admin</h2> :
    props.role == 'User' ? <h2>Welcome User</h2> :
     <h2>Welcome Guest</h2>}
    
    

    </div>

)
}

export default User