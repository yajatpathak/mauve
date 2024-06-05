import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

function SortSelector({ onSelectSortOrder, sortOrder }: SortSelectorProps) {
  const sortOrders = [
    { value: "", lable: "Relevance" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release Date" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average Rating" },
  ];

  const sortOrderLable = sortOrders.find(
    (order) => order.value === sortOrder
  )?.lable;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {sortOrderLable}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
          >
            {order.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
