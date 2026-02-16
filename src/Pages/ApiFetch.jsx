import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    setLoading(true);     // ✅ FIX
    setError(null);

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);  // ✅ FIX
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mt-6   bg-linear-to-r from-indigo-800 via-purple-800  shadow-lg p-4 sm:p-6 rounded-2xl">

      {/* Header */}
      <div className="mb-4 bg-blue-700 text-white rounded-lg p-3 text-center">
        <h1 className="font-bold text-xl sm:text-2xl underline">
          API Data Fetch App
        </h1>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-lg font-medium">Loading...</p>
      )}

      {/* Error */}
      {error && (
        <div className="text-center space-y-3">
          <p className="text-red-600 font-semibold">{error}</p>
          <button
            onClick={fetchApi}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      )}

      {/* Data */}
      {!loading && !error && (
        <ul className="space-y-4 max-h-[70vh] overflow-auto">
          {users.map(user => (
            <li
              key={user.id}
              className="bg-pink-100  p-4 rounded-lg shadow"
            >
              <h2 className="font-bold text-lg text-gray-800 mb-1">
                {user.title}
              </h2>
              <p className="text-gray-600">{user.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiFetch;






//  const Api = () => {

// const [data, setData] = useState([])
// const [loading, setLoading] = useState(false)
// const [error,setError] = useState(null)

// const fetchdata = async() =>{
//   setLoading(true)
//   setError(null)

//   try{
//     const response = await axios.get("kshif");
//     setData(response.data)
//   }catch(error) {
//     setError("data not fetched")
//   }finally{
//     setLoading(false)
//   }

//   useEffect(()=> {
//    fetchdata();
//   },[])

// }

// return(
//   <div>
//     {/* <button onClick={fetchdata}></button> */}

//     {loading && (
//       <p>Loading</p>
//     )}

//     {error&&(
//       <div>
//   <p>{error}</p>

//       <button onClick={fetchdata}>retry</button>
//       </div>
    
//     )}


//     {!loading && !error (
//       <div>
//         {data.map((item, index)=> (
//           <ul>{item.name}</ul>
//         ))}
//       </div>
//     )}
//   </div>
// )

//  }

