import { SearchBarWrapper, Input } from "./SearchBarStyle";

const SearchBar = (
    props
) => {
    return (
        <SearchBarWrapper>
            <Input 
                placeholder={props.placeholder} 
                onChange={(e) => props.onValueChange (e.target.value)}
                disabled={props.disabled}
                />
        </SearchBarWrapper>
      );
}

export default SearchBar;