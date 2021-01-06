import React, { useState } from "react";

////////////////////////////////////
// this is the code with hooks
///////////////////////////////////
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  //  moved to inline line 24
  // const onInputChange = (event) => {
  //   setTerm(event.target.value );
  // };
  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
////////////////////////////////////
// this is the code without hooks
///////////////////////////////////
// class SearchBar extends React.Component {

//replaced by line 7  const [term, setTerm] = useState('');
// state = { term: "" };

//replaced with line 9 to 15 made them variables
// onInputChange = (event) => {
//   this.setState({ term: event.target.value });
// };
// onFormSubmit = (event) => {
//   event.preventDefault();
//   this.props.onFormSubmit(this.state.term);
// };
// render() {

//replaced inside function component
// return (
//   <div className="ui segment search-bar">
//     <form onSubmit={this.onFormSubmit} className="ui form">
//       <div className="field">
//         <label>Video Search</label>
//         <input
//           type="text"
//           value={this.state.term}
//           onChange={this.onInputChange}
//         />
//       </div>
//     </form>
//   </div>
// );
//   }
// }

export default SearchBar;
