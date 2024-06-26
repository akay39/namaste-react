import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";

class About extends Component{
    constructor(props) {
        super(props);


      //  console.log("Parent constructor");

    }

    componentDidMount(){
    //    console.log("Parent Component Did Mount.")
        //API call over here.
    }

    render()  {
      //  console.log("Parent Render");
        return(
            <div>
                <h1>About</h1>
                <div>
            
            <UserContext.Consumer>
            {({loggedInUser})=>( <h1 className="text-xl font-extrabold">{loggedInUser}</h1>)}
            </UserContext.Consumer>
                </div>
                
                <h2>This is Namaste React web series.</h2>
                 <UserClass name={"first"} location={"ALIGARH CLASS"}/>
               
            </div>
        ); 
    };
};


// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React web series.</h2>
//             <User name={"Akshay sharma (function)"} location={"Aligarh (function)"}/>

//             <UserClass name={"AKSHAY SHARMA (class)"} location={"ALIGARH CLASS"}/>
//         </div>
//     );
// };

export default About;