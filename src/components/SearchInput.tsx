import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../gameQueryStore";
import { useNavigate } from "react-router-dom";

interface SearchInputProp {
  setLenErr: (value: boolean) => void;
}

function SearchInput({ setLenErr }: SearchInputProp) {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQuery((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();

        if (!ref.current) return;
        let value = ref.current.value.trim();

        if (value.length < 3 && value.length !== 0) setLenErr(true);
        else {
          setLenErr(false);
          navigate("/");
          setSearchText(value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
