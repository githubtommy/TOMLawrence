import * as React from 'react';
import styles from '../exampleReactButton/styles.module.scss';

// const data = [
//   {name: 'Apple Corp', city: "Atlanta", amount: "$3,123,000", date: 'June 1, 20123'},
//   {name: 'Bacon Corp', city: "Boise", amount: "$3,123,000", date: 'June 1, 20123'},
//   {name: 'Corn Corp', city: "Columbus", amount: "$3,123,000", date: 'June 1, 20123'},
//   {name: 'Donut Inc.', city: "Dartmouth", amount: "$3,123,000", date: 'June 1, 20123'},
//   {name: 'Eggplant Industries', city: "Eagleton", amount: "$3,123,000", date: 'June 1, 20123'},
// ]
const data = [
  {claimNumber: '111111', provider: 'National Park Medical Center', tin: '12345678', status: 'APPROVED'},
  {claimNumber: '222222', provider: 'Christian Northeast Hospital', tin: '12345678', status: 'DENIED'},
  {claimNumber: '333333', provider: 'Rocky Mouintain Holdings LLC', tin: '12345678', status: 'PENDING'},
  {claimNumber: '444444', provider: 'Alton Memorial Hospital', tin: '12345678', status: 'ON HOLD'},
]

const handleRowClick = (vendorName) => {
  console.log('TOMTOM: handleRowClick:', vendorName);
}

const DashboardTable = () => {
  return (
    <>
      <div>
        <table className={styles.simpleTable}>
          <tbody>
            <tr>
              <th>CLAIM NUMBER</th>
              <th>PROVIDER</th>
              <th>TIN</th>
              <th>STATUS</th>
            </tr>
            {data.map((vendor) =>
              <tr key={vendor.claimNumber} onClick={() => handleRowClick(vendor.name)}>
                <td>{vendor.claimNumber}</td>
                <td>{vendor.provider}</td>
                <td>{vendor.tin}</td>
                <td>{vendor.status}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


    </>
  );
};

export default DashboardTable;