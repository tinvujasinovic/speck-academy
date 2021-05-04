import { SearchBarWrapper, Input } from "./SearchBarStyle";

const SearchBar = ({
    placeholder,
    callback,
    disabled
}) => {
    return (
        <SearchBarWrapper>
            <Input
                placeholder={placeholder}
                onChange={(e) => callback(e.target.value)}
                disabled={disabled}
            />
        </SearchBarWrapper>
    );
}

export default SearchBar;