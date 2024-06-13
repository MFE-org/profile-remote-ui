import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PersonalDetails from "../Components/PersonalDetails";
import Experience from "../Components/Experience";
import Education from "../Components/Education";
import ContactDetails from "../Components/ContactDetails";

function ProfileRouter() {
   
    return(
        <Router>
            <Routes>
                <Route exact path = "/" element={<PersonalDetails/>}/>
                <Route  path = "/experience" element={<Experience/>}/>
                <Route  path = "/education" element={<Education/>}/>
                <Route  path = "/contactDetails" element={<ContactDetails/>}/>
            </Routes>
        </Router>
    )
}

export default ProfileRouter;
