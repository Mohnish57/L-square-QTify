import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { useAutocomplete } from "@mui/material";

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "#fff"};
  border: 1px solid ${theme.palette.mode === "#fff"};
  color: ${theme.palette.mode === "#fff"};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };
  
  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `
);

export default function Search({ placeholder, searchData }) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();
  const onSubmit = (e, value) => {
    e.preventDefault();
    navigate(`/album/${value.slug}`);
  };
  return (
    <div className={styles.searchBar}>
      <form
        onSubmit={(e) => {
          onSubmit(e, e.target.value);
        }}
        className={styles.form}
      >
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.searchInput}
            placeholder={placeholder}
            {...getInputProps()}
          />
        </div>
        <div>
          <button className={styles.searchBtn} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const artists = option.songs.reduce((acc, currentVal) => {
              acc.push(...currentVal.artists);
            }, []);
            return (
              <li {...getOptionProps({ option, index })}>
                <div>
                  <p>{option.title}</p>
                  <p>{artists}</p>
                </div>
              </li>
            );
          })}
        </Listbox>
      ) : null}
    </div>
  );
}
