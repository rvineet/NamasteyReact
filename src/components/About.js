import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return(
        <div>
            <h1>About us</h1>
            <h1>This is Namastey React by ME!</h1>
            {/* <User name="Vineet (Functional)"/> */}
            <UserClass name="Vineet (Class)" location="Gurgaon Class"/>

        </div>
    )
}
export default About;