import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { UserAvtar } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col justify-between md:flex-row">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          <button
            onClick={handleGptSearch}
            className="py-2 px-4 mx-4 my-4 bg-purple-800 rounded-lg"
          >
            {showGptSearch ? "HOME" : "GPT Search"}
          </button>

          {showGptSearch && (
            <select
              className="py-2 px-4 mx-4 my-4 bg-gray-900 text-white  rounded-lg "
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lan) => (
                <option key={lan.identifier} value={lan.identifier}>
                  {lan.name}
                </option>
              ))}
            </select>
          )}

          <img className=" hidden  md:w-12 h-12 rounded md:block" alt="usericon" src={UserAvtar} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
