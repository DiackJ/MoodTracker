import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EditProfile from './edit-profile';
import InputOverlay from '../reusable/input-overlay';
import ProfileOverlay from '../reusable/profile-overlay';



function ProfilePopup({ userName, userEmail, updateUser }){
  const navigate = useNavigate();
  const [edit, showEdit] = useState(false);

  const handleEdit = () => {
    showEdit(prev => !prev);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try{
      const res = await fetch("http://localhost:8080/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" 
        },
        credentials: "include"
      });
      if(res.status === 200){
        console.log("navigating...")
        navigate("/");
      }else{
        const err = (await res).text();
        console.error("error logging out: ", err);
      }
    }catch (err){
      console.error("network error: ", err);
    }
  };

    return(
        <div className="mt-1 absolute border border-violet-50 h-fit w-fit px-3 py-3 bg-white rounded-xl shadow-md font-[Nunito] font-medium">
          <p className="text-indigo-950">{userName}</p>
          <p className="text-gray-400">{userEmail}</p>
          <div id="edit-profile" className="inline text-sm hover:cursor-pointer hover:text-indigo-500">
            <i className="fa-regular fa-pen-to-square mt-3"></i>
            <p onClick={handleEdit} className="-mt-5 mb-2 ml-5">Edit profile</p>
          </div>
          <div>
            {edit && (
              <ProfileOverlay edit={handleEdit} updateUser={updateUser}/>
            )}
          </div>
          <p className="border-b-1"></p>
          <div id="logout" className="inline text-sm hover:cursor-pointer hover:text-indigo-500">
            <i className="fa-solid fa-arrow-right-from-bracket mt-3"></i>
            <p onClick={handleLogout} className="-mt-5.5 ml-5">logout</p>
          </div>
        </div>
    )
}

export default ProfilePopup;

//{userName}
//{userEmail}