// import React, { useState, useEffect } from "react";
// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   TablePagination,
//   TextField
// } from "@material-ui/core";

// function App() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortedField, setSortedField] = useState("");
//   const [isAscending, setIsAscending] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const json = await response.json();
//     setData(json);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setPage(0);
//   };

//   const handleSortClick = (field) => {
//     setSortedField(field);
//     setIsAscending(!isAscending);
//     setPage(0);
//   };

//   const filteredData = data.filter((row) =>
//     Object.values(row).some((value) =>
//       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   const sortedData = filteredData.sort((a, b) => {
//     if (a[sortedField] > b[sortedField]) {
//       return isAscending ? 1 : -1;
//     } else if (a[sortedField] < b[sortedField]) {
//       return isAscending ? -1 : 1;
//     }
//     return 0;
//   });

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div>
//       <TextField
//         label="Search"
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell onClick={() => handleSortClick("name")}>Name</TableCell>
//             <TableCell onClick={() => handleSortClick("email")}>
//               Email
//             </TableCell>
//             <TableCell onClick={() => handleSortClick("phone")}>
//               Phone
//             </TableCell>
//             <TableCell onClick={() => handleSortClick("website")}>
//               Website
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {sortedData
//             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             .map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.name}</TableCell>
//                 <TableCell>{row.email}</TableCell>
//                 <TableCell>{row.phone}</TableCell>
//                 <TableCell>{row.website}</TableCell>
//               </TableRow>
//             ))}
//         </TableBody>
//       </Table>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={filteredData.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//       />
//     </div>
//   );
// }

// export default App;
