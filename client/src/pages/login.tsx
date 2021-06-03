import React from 'react'

const login = () => {


    const submitLogin = (e:any) =>{
        e.preventDefault();
        console.log("submit!!");
    }

    return (
        <div className="wrapper">
        <div className="loginContainer">
                <div className="loginForm">
                    <div className = "internalContainer">
                        <h3 className="pleaseLogin">Please Login</h3>
                        <form onSubmit={ submitLogin } className = "inputForm">
                            <div className="emailField">
                                <label htmlFor="inputEmail3" className="emailLabel" >
                                    Email
                                </label>
                
                                <div className="emailLine">
                                    <input className = "inputBox" type="text" />
                                </div>
                                

                                <label htmlFor="inputEmail3" className="emailLabel" >
                                    Password
                                </label>

                                <div className="passwordLine">
                                    <input className = "inputBox" type="password" />
                                </div>


                                <button type="submit" className="btn btn-primary">Login</button>

                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div >
    )
}

export default login
