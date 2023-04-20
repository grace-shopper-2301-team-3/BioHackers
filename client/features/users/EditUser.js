// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { fetchSingleUser, updateUser } from './userSlice';

// const EditUser = () => {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     // const { userId } = useParams();

//     ////
//     //seems like problem updating the User due to auth need to figure out!!!!!!!!
//     const id = useSelector((state) => state.auth.me.id);
//     const { firstName, lastName, email, isAdmin, username, password } = useSelector((state) => state.auth.me);


//     useEffect(() => {
//         dispatch(fetchSingleUser(userId));
//     }, [dispatch]);

//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         dispatch(updateUser({ id: userId, firstName: firstName, lastName: lastName, email: email }))
//             .then(() => {
//                 handleReset();
//                 dispatch(fetchUser(userId));
//                 navigate(`/users/${userId}`);
//             })
//     };

//     const handleReset = () => {
//         setFirstName('');
//         setLastName('');
//         setEmail('');
//     };

//     return (
//             <div>
//                 <h3>Edit Usert</h3>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="firstName">
//                             <small>First Name:</small>
//                         </label>
//                         <input name="firstName" type="text" />
//                     </div>
//                     <div>
//                         <label htmlFor="lastName">
//                             <small>Last Name:</small>
//                         </label>
//                         <input name="lastName" type="text" />
//                     </div>
//                     <div>
//                         <label htmlFor="email">
//                             <small>Email:</small>
//                         </label>
//                         <input name="email" type="email" />
//                     </div>
//                     <div>
//                         <label htmlFor="username">
//                             <small>Username</small>
//                         </label>
//                         <input name="username" type="text" />
//                     </div>
//                     <div>
//                         <label htmlFor="password">
//                             <small>Password</small>
//                         </label>
//                         <input name="password" type="password" />
//                     </div>
//                     <div>
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>
//     );
// };

// export default EditUser;