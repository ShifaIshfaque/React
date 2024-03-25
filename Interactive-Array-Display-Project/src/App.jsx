import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const items = ['Apple', 'Banana', 'Orange', 'Grapes'];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <h1>List of Fruits</h1>
      <ul>
      {/* This code maps over each item in the items array. For each item, it generates a list item (<li>) with a unique key based on the item itself. Inside each list item, it displays the item's name and a button labeled "Select". When the button is clicked, it sets the selected item to the current item. */}
        {items.map(item => (
          <li key={item}>
            {item}
            <button onClick={() => setSelectedItem(item)}>Select</button>
          </li>
        ))}
      </ul>
      <p>Selected Item: {selectedItem}</p>
    </div>
  );
}

export default App;








//  THIS BLOCK OF CODE IS ALSO RIGHT
//Certainly! In the first code snippet, each list item is given a unique identifier based on the item itself (like 'Apple', 'Banana', etc.). In the second code snippet, each list item is given a unique identifier based on its position in the array (index). Both approaches provide the same visual output, but they differ in how they assign these unique identifiers to each list item.
// function App() {
//   const items = ['Apple', 'Banana', 'Orange', 'Grapes'];
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//   };

//   return (
//     <div>
//       <h1>List of Items</h1>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => handleItemClick(item)}>Select</button>
            
//           </li>
//         ))}
//       </ul>
//       <p>Selected Item: {selectedItem}</p>
//     </div>
//   );
// }

// export default App;