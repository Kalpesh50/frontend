// modify the following code to display fname, lname, phone, email & photo file which is save as string type in mongodb atlas database:


// // modify below code to display fname, lname,phone, email, photo which stored using multer of login user

// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { LoginContext } from './ContextProvider/Context';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

// import Header from "./Header";


// const Dashboard = () => {

//     const { logindata, setLoginData } = useContext(LoginContext);

//     const [data, setData] = useState(false);


//     const history = useNavigate();

//     const DashboardValid = async () => {
//         let token = localStorage.getItem("usersdatatoken");

//         const res = await fetch("/validuser", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": token
//             }
//         });

//         const data = await res.json();

//         if (data.status == 401 || !data) {
//             history("*");
//         } else {
//             console.log("user verify");
//             setLoginData(data)
//             history("/dash");
//         }
//     }


//     useEffect(() => {
//         setTimeout(() => {
//             DashboardValid();
//             setData(true)
//         }, 2000)

//     }, [])

//     return (
//         <>
//             <Header />
//             {
//                 data ? <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                     <img src="./man.png" style={{ width: "200px", marginTop: 20 }} alt="" />
//                     <h1>User Email:{logindata ? logindata.ValidUserOne.email : ""}</h1>
//                 </div> : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
//                     Loading... &nbsp;
//                     <CircularProgress />
//                 </Box>
//             }

//         </>

//     )
// }

// export default Dashboard

// -----------------------------------  [Working code]  ----------------------------------------------------

// //  still this code isn't show photo modify & correct it
// // modify the below code to show the photo of that user which is loged in
// // write css file for following code
// modify the following code to add new fields such as dob, course, batch, gender, nationality by using className in div tag:
// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { LoginContext } from './ContextProvider/Context';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import Header from './Header';

// import './Dashboard.css';

// const Dashboard = () => {

//   const { logindata, setLoginData } = useContext(LoginContext);
//   const [data, setData] = useState(false);
//   const history = useNavigate();
//   const [photoUrl, setPhotoUrl] = useState('');

//   const DashboardValid = async () => {
//     let token = localStorage.getItem('usersdatatoken');
//     const res = await fetch('/validuser', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: token,
//       },
//     });
//     const data = await res.json();
//     if (data.status === 401 || !data) {
//       history('*');
//     } else {
//       console.log('user verify');
//       setLoginData(data);
//       setData(data);
//       const photoPath = data.ValidUserOne.photo;
//       const photoUrl = `${process.env.REACT_APP_PHOTO_PATH}/${photoPath}`;
//       setPhotoUrl(photoUrl);
//       history('/dash');
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       DashboardValid();
//       setData(true);
//     }, 2000);
//   }, []);

//   return (
//     <>
//       <Header />
//       {data ? (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {photoUrl && (
//             <img
//               src={photoUrl}
//               alt="Profile"
//               style={{ width: '200px', marginTop: 20 }}
//             />
//           )}
//           <h2>
//             User Name: {logindata ? logindata.ValidUserOne.fname + ' ' + logindata.ValidUserOne.lname : ''}
//           </h2>
//           <h2>User Phone Number: {logindata ? logindata.ValidUserOne.phone : ''}</h2>
//           <h2>User Email: {logindata ? logindata.ValidUserOne.email : ''}</h2>
//         </div>
//       ) : (
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//           Loading... &nbsp;
//           <CircularProgress />
//         </Box>
//       )}
//     </>
//   );
// };

// export default Dashboard;

// -------------------------------------- [Perfectly Working code] ----------------------------------------------------
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Header from './Header';

import './Dashboard.css';

const Dashboard = () => {

  const { logindata, setLoginData } = useContext(LoginContext);
  const [data, setData] = useState(false);
  const history = useNavigate();
  const [photoUrl, setPhotoUrl] = useState('');

  const DashboardValid = async () => {
    let token = localStorage.getItem('usersdatatoken');
    const res = await fetch('/validuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const data = await res.json();
    if (data.status === 401 || !data) {
      history('*');
    } else {
      console.log('user verify');
      setLoginData(data);
      setData(data);
      const photoPath = data.ValidUserOne.photo;
      console.log(data.ValidUserOne);
      console.log(photoPath);
      //const photoUrl = `${process.env.REACT_APP_PHOTO_PATH}/${photoPath}`;
      console.log(photoUrl);
      setPhotoUrl(photoPath);
      history('/dash');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true);
    }, 2000);
  }, []);

  return (
    <>
      <Header />
      {data ? (
        <div className="bucket">
          <h1>Examinee Details</h1>

          <nav>
            <div className="profile_data">
              <div className="profile-card">
                {photoUrl && (
                  <img
                    src={photoUrl}
                    alt="Profile"
                    className="profile-thumbnail"
                  />
                )}
                <div className="profile-info">
                  <h2>
                    Name: {logindata ? logindata.ValidUserOne.fname + ' ' + logindata.ValidUserOne.lname : ''}
                  </h2>

                  <p>Email: {logindata ? logindata.ValidUserOne.email : ''}</p>
                  <p>Course: {logindata ? logindata.ValidUserOne.course : ''}</p>
                </div>
              </div>
            </div>
          </nav>

{/* ----------------------- Table code ---------------------------------------------------- */}

          <div className='bucket1'>
            <nav1>
              <div className='profile-more'>
                <p>Phone Number:</p>
                <p>Date of Birth:</p>
                <p>Batch:</p>
                <p>Gender:</p>
                <p>Nationality:</p>
              </div>
              <div className='profile-more1'>
                <p>{logindata ? logindata.ValidUserOne.phone : ''}</p>
                <p>{logindata ? logindata.ValidUserOne.dob : ''}</p>
                <p>{logindata ? logindata.ValidUserOne.batch : ''}</p>
                <p>{logindata ? logindata.ValidUserOne.gender : ''}</p>
                <p>{logindata ? logindata.ValidUserOne.nationality : ''}</p>
              </div>
            </nav1>
          </div>

        </div>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Dashboard;
