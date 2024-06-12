import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../gameQueryStore";

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQuery((s) => s.setSearchText);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
          onChange={() => {
            if (ref.current)
              if (ref.current.value.length < 3) setSearchText("");
              else setSearchText(ref.current.value);
          }}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
