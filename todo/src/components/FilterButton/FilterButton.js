import "./FilterButton.scss";
import { Button } from "@chakra-ui/react";

function FilterButton({label, buttonColorScheme}) {
  return <Button colorScheme={buttonColorScheme} size='xs'>{label}</Button>;
}

export default FilterButton;
