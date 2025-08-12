import EditProfile from "../dashboard/edit-profile";
import ExitButton from "./exit-button";

function ProfileOverlay({ edit }){
    return(
        <div>
            <div className="fixed inset-0 bg-black opacity-65 min-h-full min-w-full z-1"></div>
            <EditProfile />
            <div className="">
                <ExitButton closeForm={edit} /> 
            </div>
        </div>
    )
}

export default ProfileOverlay;