import React from 'react';

class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = {emptyMas: [ ]}
    }

    getUsers = () => {
            this.setState ({emptyMas: ["Beka ", "Joma ", "Timur "]})    
    }


    render(){       
        return(
            <div>
                <h1>{this.state.emptyMas}</h1>
                <button onClick={this.getUsers}>Change Users</button>
                <ul>
                   {this.state.emptyMas.map((emptyMas) =>{
                        return(
                            <li>{emptyMas}</li>
                        )
                        })
                        }
                </ul>
            </div>
        )
    }
}

export default Users