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
                <Route exact path = "/" element={<Experience/>}/>
                <Route exact path = "/" element={<Education/>}/>
                <Route exact path = "/" element={<ContactDetails/>}/>
            </Routes>
        </Router>
    )
}

export default ProfileRouter;
