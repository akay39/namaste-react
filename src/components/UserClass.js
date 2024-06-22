import React from "react";


class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        userInfo: {
            name: "dummy",
            location: "ocation dummy",
            avtar_url: "dummy-photo",
        }
        };

    //     console.log(this.props.name + " child constructor");
    }

    async componentDidMount(){
    //    console.log(this.props.name + " Child Component Did Mount")

        const data = await fetch(" https://api.github.com/users/akay39");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }
    componentDidUpdate(){
       // console.log("Component Did Update")
    }
    componentWillUnmount(){
        // clean up
        // unmount will be called when we go to the another page or stop showing the data.
        // we need to unmount things because of single oage application and the code -
        //-at the back is running continiously which make a alot of effiency loss.
    }



    render(){
        const {name, location} = this.state.userInfo;
        // const {count} = this.state;
     //   console.log(this.props.name + " child render");

        return(
        <div className="user-card-1">
          
            
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @akay39</h4>

    </div>
        );

    };
};
export default UserClass;
// Constructor(dummy)
//Render(dummy)
//      <HTML> dummy data
//Component Did Mount
//      <API call> 
//      <this.setState> -> state variable is uploaded

//-----UPDATE
//
//      render(API data)
//      <HTML> (new API data)
// componentDidUpdate
