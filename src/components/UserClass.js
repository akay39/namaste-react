import React from "react";


class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            //count2: 1,
            //count3,
            //count4,
            //count5,
            //count6,
        };

         console.log(this.props.name + " child constructor");
    }

    componentDidMount(){
        console.log(this.props.name + " Child Component Did Mount")

    }



    render(){
        const {name, location} = this.props;
        const {count} = this.state;
        console.log(this.props.name + " child render");

        return(
        <div className="user-card-1">
            <h1>Count :{count}</h1>
            <button onClick={()=>{
                //never update state variables directly.
                this.setState({
                    count: this.state.count + 1,
                    //count2: this.state.count2 +1,
                });

            }}
            >count increase</button>
            {/* <h1>Count :{count2}</h1> */}
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @akay39</h4>

    </div>
        );

    };
};
export default UserClass;

//firstly the constructor is called after that render is called.
//after that componentDidMounnt is called.



//React lifecycle diagram.

//  Parent constructor
//Parent Render


// Child First constructor
//child second render

// child scond constructor
// child second render

// child first componentDidMount
//child second componentDidMount

//Parent componentDidMount

