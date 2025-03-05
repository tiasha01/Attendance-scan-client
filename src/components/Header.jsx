function Header(props){
    return(
        <>
            <div className="bg-sky-950 text-white p-4 flex justify-between items-center">
                <h1 className="text-lg font-bold">Attendance Scanner</h1>
                <div className="flex items-center gap-4">
                <span className="text-white font-semibold">{props.username}</span>
                <button className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-blue-600"onClick={props.onLogout}>Logout
                </button>
                </div>
            </div>
        </>  
    );
};

export default Header;