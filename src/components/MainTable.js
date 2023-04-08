import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TextField,
} from "@mui/material";
import Recteangle from "../assets/Rectangle9.png";
// import useDataTable from "../store/datatable";

function MainTable() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedField, setSortedField] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  // const { dataTable, fetch } = useDataTable((state) => state);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=car_name%3Aasc&page=1&pageSize=50",
      {
        headers: {
          access_token: localStorage.access_token,
        },
      }
    );
    const json = await response.json();
    console.log(json, "ini api dataTable");
    setData(json.orders);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleSortClick = (field) => {
    setSortedField(field);
    setIsAscending(!isAscending);
    setPage(0);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortedField] > b[sortedField]) {
      return isAscending ? 1 : -1;
    } else if (a[sortedField] < b[sortedField]) {
      return isAscending ? -1 : 1;
    }
    return 0;
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {/* {dataTable} */}
      {/* <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      /> */}
      <div className="justify-self-end">
        <div className="font-semibold text-md text-left mr-10 pt-4">
          Dashboard
        </div>
        <div className="flex flex-wrap gap-3 ml-3 mt-10">
          <div className="justify-self-end">
            <img className="w-5 h-10 md:max-xl:flex" src={Recteangle} alt="" />
          </div>
          <div className="justify-self-start">
            <div className="font-semibold">List Order</div>
          </div>
        </div>
        <div>
          <Table className="mt-10 sm:overflow-x-auto bg-slate-200">
            <TableHead className="text-xs text-gray-700 uppercase bg-[#CFD4ED] dark:bg-gray-700 dark:text-gray-400">
              <TableRow>
                <TableCell onClick={() => handleSortClick("number")}>
                  No
                </TableCell>
                <TableCell onClick={() => handleSortClick("email")}>
                  user email
                </TableCell>
                <TableCell onClick={() => handleSortClick("phone")}>
                  Car
                </TableCell>
                <TableCell onClick={() => handleSortClick("website")}>
                  Start Rent
                </TableCell>
                <TableCell onClick={() => handleSortClick("website")}>
                  Finish Rent
                </TableCell>
                <TableCell onClick={() => handleSortClick("website")}>
                  Price
                </TableCell>
                <TableCell onClick={() => handleSortClick("website")}>
                  Category
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.User.email}</TableCell>
                    <TableCell>{row.Car.name}</TableCell>
                    <TableCell>{row.start_rent_at.split("T")[0]}</TableCell>
                    <TableCell>{row.finish_rent_at.split("T")[0]}</TableCell>
                    <TableCell>{row.Car.price}</TableCell>
                    <TableCell>{row.Car.category}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 25, 50, { label: "All", value: -1 }]}
          colSpan={3}
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}

export default MainTable;
