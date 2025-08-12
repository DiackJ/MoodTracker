
function ExitButton({ closeForm }){
    return(
        <div className="absolute -top-2 -right-1 z-200">
            <i onClick={closeForm} className="fa-solid fa-xmark border text-gray-500 border-indigo-200 bg-indigo-200 text-xl rounded-full h-fit w-fit px-2.5 py-2 hover:cursor-pointer hover:text-white"></i>
        </div>
    )
}

export default ExitButton;