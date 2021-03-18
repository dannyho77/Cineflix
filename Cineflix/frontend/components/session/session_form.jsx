import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
            <div>
                Hello
            </div>
        );
    }
}

export default SessionForm;