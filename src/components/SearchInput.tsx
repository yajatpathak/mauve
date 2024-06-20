import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../stores/gameQueryStore";
import { useLocation, useNavigate } from "react-router-dom";
import useGameStore from "../stores/gameStore";
import usePublisherStore from "../stores/publisherStore";

interface SearchInputProp {
  setLenErr: (value: boolean) => void;
}

function SearchInput({ setLenErr }: SearchInputProp) {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQuery((s) => s.setSearchText);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const clearGameQuery = useGameQuery((s) => s.clearGameQuery);
  const clearGame = useGameStore((s) => s.clearGame);
  const clearPublisher = usePublisherStore((s) => s.clearPublisher);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();

        if (!ref.current) return;
        let value = ref.current.value.trim();

        if (value.length < 3 && value.length !== 0) setLenErr(true);
        else {
          if (pathname !== "/") {
            clearGameQuery();
            navigate("/");
            clearGame();
            clearPublisher();
          }
          setLenErr(false);
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
