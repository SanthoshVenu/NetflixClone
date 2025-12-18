import React ,{ useEffect} from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth"
import { NETFLIX_LOGO,BG_IMAGE,MY_IMAGE } from '../utils/constant';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    console.log("Current User in Header:", user);
    const handleSignOut = () => {
        signOut(auth).
            then(() => {
                // Sign-out successful.
                console.log("User signed out successfully");
            }).
            catch((error) => {
                // Handle errors here
                console.error("Error signing out:", error);
            });
    }
        useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                dispatch(addUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser(null));
                navigate("/");
            }
        });
        return () => unsubscribe();
    },[]);


return (
    <div className='w-screen bg-gradient-to-b from-black'>
        <div>
            <img className='absolute z-10 left-5 h-11 ' src={NETFLIX_LOGO} alt="Netflix Logo" style={{ width: '120px' }} />
            {!user && <img className='absolute inset-0 h-full w-full object-cover' src={BG_IMAGE} />}
        </div>

        <div className='flex'>
            <img className='absolute right-5 w-10' src={user?.photoURL || MY_IMAGE} ></img>
            <button className='absolute right-5 top-20' onClick={handleSignOut}>Sign Out</button>
        </div>
    </div>
)
}


export default Header