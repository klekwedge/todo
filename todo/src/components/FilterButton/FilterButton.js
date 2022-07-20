import "./FilterButton.scss";
import { Button } from "@chakra-ui/react";

function FilterButton({
  label,
  buttonColorScheme,
  filterRule,
  setFilterTasks,
}) {
  return (
    <Button
      colorScheme={buttonColorScheme}
      size="xs"
      onClick={() => setFilterTasks(filterRule)}
    >
      {label}
    </Button>
  );
}

export default FilterButton;
