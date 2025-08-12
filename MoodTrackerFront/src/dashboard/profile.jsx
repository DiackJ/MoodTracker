import { useState, useEffect } from 'react';
import ProfilePopup from './ProfilePopup';

function Profile({ userName, userEmail }){
    const [profilePopup, setProfilePopup] = useState(false);

    const handlePopup = () => {
        setProfilePopup(prev => !prev); //toggle the current state by making it the opposite of what it was
    };

    return(
        <div>
            <div id="profile-icon-container">
                <i className="fa-solid fa-circle-user mr-50  mt-10 text-3xl text-indigo-800 hover:cursor-pointer pt-0" onClick={handlePopup}></i>
                {profilePopup && ( //if popup is true, render whats inside the ( ) 
                    <div>
                        <ProfilePopup userName={userName} userEmail={userEmail} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Profile;