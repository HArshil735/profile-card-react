const ProfileCode = () => {
    return (
        <div className="w-screen min-h-screen min-w-screen bg-blue-400 flex items-center justify-center">
            <div className="bg-black w-80 p-6 rounded-2xl justify-center shadow-lg text-center transition-transform duration-300 hover:scale-105">

                <img src="/images/dk.jpg"
                    alt="ME"
                    className="w-45 h-45 mx-auto rounded-full  mb-4">
                </img>
                <h2 className="text-xl font-semibold text-white">
                    Gondaliya Harshil
                </h2><br />
                <p className="text-sm font-semibold text-white">B.tech CSE student</p><br />
                <p className="text-sm font-semibold text-white">Learning React.js and Tailwind CSS. Passionate about clean UI and frontend development.</p>
                <br />
                <div className="flex justify-center gap-4">
                    <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white hover:border duration-300 transition">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCode;