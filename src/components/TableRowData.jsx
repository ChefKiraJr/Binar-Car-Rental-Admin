function TableRowData({ cars, index }) {
  return (
    <tr className="bg-blue-200 border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{index + 1}</td>
      <td className="px-6 py-4">{cars.User.email}</td>
      <td className="px-6 py-4">{cars.Car.name}</td>
      <td className="px-6 py-4">{cars.start_rent_at}</td>
      <td className="px-6 py-4">{cars.finish_rent_at}</td>
      <td className="px-6 py-4">{cars.total_price}</td>
      <td className="px-6 py-4">{cars.Car.category}</td>
    </tr>
  );
}

export default TableRowData;
