// import React, { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";

// const App = () => {
//   const [apiData, setApiDAta] = useState([]);
//   const apiCall = async () => {
//     await axios
//       .get(`https://fakestoreapi.com/products`)
//       .then((response) => {
//         setApiDAta(response.data);
//         console.log(response.data);
//       })
//       .catch((err) => console.log(err));
//   };
//   useEffect(() => {
//     apiCall();
//   },);

//   return (
//     <div className="card"  >
  
    
//         {apiData.map((ele) => {
//           return( 
//           <form  key={ele.id}>
//             <h1>{ele.id}</h1>,
//             <h2>{ele.title}</h2>,
//             <h3>{ele.price}</h3>
//             <img src={ele.image} alt="" className="img" />
//           </form>)

//         })}
     
//     </div>
//   );
// };

// export default App;
