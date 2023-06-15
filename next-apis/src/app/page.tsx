// "use client";

// import { Key, useEffect, useState } from "react";

// export default function Home() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("/api/characters");
//       const jsonData = await response.json();

//       setData(jsonData);
//     }

//     fetchData();
//   }, []);

//   if (!data) {
//     return <p>Loading...</p>
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       {data.map((item: any, index: Key | null | undefined) => {
//         <div key={index}>
//           <h3>item.name</h3>
//         </div>
//       })}
//     </main>
//   );
// }
