import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

/**
 * @function SearchBook
 * @description A component to search for books either by title or by author.
 * @param {function} search - a function that takes two parameters: search type (title or author) and search value.
 * @returns {JSX.Element}
 */
const SearchBook = ({ search }) => {
    const [searchType, setSearhType] = useState("title");
    const [curFilter, setCurFilter] = useState("");

    /**
     * Handles the form submit event by calling the search function
     * with the current search type and filter value. Prevents the
     * default form submission.
     * @param {Event} e - the form submit event
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        search(searchType, curFilter);
    };

    return (
        <div>
            <form
                style={{
                    display: "flex",
                    gap: "10px",
                    margin: "10px 0",
                    alignItems: "center",
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="searchType">
                    <input
                        type="radio"
                        name="st"
                        value="title"
                        checked={searchType === "title"}
                        onChange={(e) => setSearhType(e.target.value)}
                    ></input>
                    <span onClick={() => setSearhType("title")}>By Title</span>
                </label>
                <label htmlFor="searchType">
                    <input
                        type="radio"
                        name="st"
                        value="author"
                        checked={searchType === "author"}
                        onChange={(e) => setSearhType(e.target.value)}
                    ></input>
                    <span onClick={() => setSearhType("author")}>
                        By Author
                    </span>
                </label>
                <input
                    style={{ width: "200px", height: "26px" }}
                    type="text"
                    name="searchValue"
                    onChange={(e) => setCurFilter(e.target.value)}
                    placeholder="Enter search value"
                    value={curFilter}
                />
                <button
                    type="submit"
                    disabled={curFilter === ""}
                    title={
                        curFilter === "" ? "Please enter a search value" : ""
                    }
                    style={{
                        display: "flex",
                        border: "1px solid black",
                        borderRadius: "20px",
                        padding: "5px 10px",
                        backgroundColor: "#f2f2f2",
                        cursor: curFilter === "" ? "not-allowed" : "pointer",
                        color: "black",
                        fontWeight: "bold",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        gap: "5px",
                        opacity: curFilter === "" ? "0.5" : "1",
                    }}
                >
                    <FaSearch size={20} />
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBook;
