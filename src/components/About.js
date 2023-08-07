import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// const About = () => {
//     return(
//         <div>
//             <h1>About us</h1>
//             <h1>This is Namastey React by ME!</h1>
//             {/* <User name="Vineet (Functional)"/> */}
//             <UserClass name="Vineet (Class)" location="Gurgaon Class"/>

//         </div>
//     )
// }

class About extends React.Component {
    constructor(props){
        super(props)
        // console.log("parent constructor is called")
    }
    componentDidMount(){
        // console.log("parent componentDidMount is called")
      }
  render() { 
    // console.log("parent render is called")
    return (
      <div>
        <h1>About us</h1>
        <h1>This is Namastey React by ME!</h1>
        {/* <User name="Vineet (Functional)"/> */}
        <UserClass name="first" location="Gurgaon Class" />
        {/* <UserClass name="second" location="Gurgaon Class" /> */}
      </div>
    );
  }
}
export default About;

/* 
-parent constructor is called
-parent render is called

   -firstchild constructor is called
   -firstchild render is called
   -secondchild constructor is called
   -secondchild render is called


   <***DOM Updated in SINGLE BATCH***> (COMMIT PHASE)

   -firstchild componentDidMount is called
   -secondchild componentDidMount is called
-parent componentDidMount is called
*/