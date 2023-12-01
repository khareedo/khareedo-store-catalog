// import React from 'react';
// import Dropdown from 'react-dropdown';

// const Dropdown = ({ options, onSelect }) => {
//   const [selectedOption, setSelectedOption] = React.useState(null);

//   return (
//     <Dropdown
//       options={options}
//       value={selectedOption}
//       onChange={(e) => setSelectedOption(e.value)}
//     >
//       <Dropdown.Toggle>
//         <i className="fas fa-chevron-down" />Categories
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         {options.map((option) => (
//           <Dropdown.Item key={option.value} value={option.value}>
//             {option.label}
//           </Dropdown.Item>
//         ))}
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// };

// export default Dropdown;