import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    // submitLogin(e) {}

    render() {
        return (
            <React.Fragment>
                <header>
                    <h1>Daily Square</h1>
                </header>

                <div className="login-container container">
                <div className="form-title">
                    <p>login</p>
                </div>
                <form>
                    <div className="form-group row">
                        <label for="email" className="col-xs col-md-4 col-form-label offset-1">user</label>
                        <div className="col-xs col-md-5">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="password" className="col-xs col-md-4 col-form-label offset-1">password</label>
                        <div className="col-xs col-md-5">
                            <input type="password" className="form-control" id="password" />
                        </div>
                    </div>
                    <div className="form-group row btn-row justify-content-center">
                        <div className="col-4">
                            <a href=""><button type="button" className="btn typ-btn">create profile</button></a>
                        </div>
                        <div className="col-3">
                            <a href=""><button type="button" className="btn typ-btn">enter</button></a>
                        </div>
                    </div>
                </form>
                </div>
            </React.Fragment>
        );
    }

}

export default Login;
