import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
const SearchUser = ({ FriendsActions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // .filter((movie) =>
  //       movie.title.toLowerCase().includes(filterTerm.toLowerCase())
  //     );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);
  return (
    <>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={(e) =>
          e.key === "Enter"
            ? dispatch(FriendsActions.searchUser(searchTerm))
            : null
        }
        type="text"
        placeholder="Search user..."
      />
    </>
  );
};

export default SearchUser;
