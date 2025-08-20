import EditProfile from "../dashboard/edit-profile";
import ExitEditorButton from "./exit-editor-button";

function ProfileOverlay({ edit, updateUser }){
    return(
        <div>
            <div className="fixed inset-0 bg-black opacity-65 min-h-full min-w-full z-1"></div>
            <EditProfile />
            <div className="">
                <ExitEditorButton closeForm={edit} updateUser={updateUser}/> 
            </div>
        </div>
    )
}

export default ProfileOverlay;