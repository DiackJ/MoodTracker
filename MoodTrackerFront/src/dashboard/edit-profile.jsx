import { useState } from 'react';


function EditProfile(){
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleEdit = async () => {
        const formData ={
            newName,
            newEmail
        }
        try{
            const res = await fetch("http://localhost:8080/edit-profile", {
                method:"POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
        if(res === 200){
            setSuccess(true);
            }
        }catch (err){
            console.error("error: ", err);
        };
    };

    const handleDelete = async () => {
        const res = await fetch("http://localhost:8080/delete-account", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
        try{
            if(res === 200){
                console.log("account deleted successfully");
            }
        }catch (err){
            console.error("error: ", err);
        };
    }


    return(
        <div className="-ml-195 mt-20">
            <div className="absolute rounded-2xl px-10 py-5 border border-b-gray-400 h-fit w-fit bg-white z-100">
                <p>Edit name</p>
                <input type="text" className="pl-2 border border-gray-300 mb-5" onChange={(e) => setNewName(e.target.value)}></input>
                <p>Edit email</p>
                <input type="text" className="pl-2 border border-gray-300" onChange={(e) => setNewEmail(e.target.value)}></input>
                <div className="mt-10 flex justify-center">
                    <button onClick={handleEdit} type="submit" className="mr-5 hover:scale-110 hover:cursor-pointer border rounded-md px-2 py-2 font-bold border-indigo-500 bg-indigo-500 text-white">Edit Profile</button>
                    <button onClick={handleDelete} type="button" className="hover:scale-110 hover:cursor-pointer border rounded-md px-2 py-2 font-bold border-rose-700 bg-rose-700 text-white">Delete Account</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;