// import { Button } from "@chakra-ui/react";
import './FilterButton.scss';

interface FilterButtonProps {
  label: string;
  buttonColorScheme: string;
  filterRule: string;
  setFilterTasks: (filterRule: string) => void;
}

function FilterButton({ label, buttonColorScheme, filterRule, setFilterTasks }: FilterButtonProps) {
  return null;

  // return (
  //   <Button
  //     colorScheme={buttonColorScheme}
  //     size="sm"
  //     onClick={() => setFilterTasks(filterRule)}
  //   >
  //     {label}
  //   </Button>
  // );
}

export default FilterButton;
