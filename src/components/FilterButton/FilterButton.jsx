import React from 'react';
import { Button } from '@chakra-ui/react';
import './FilterButton.scss';

function FilterButton({
  label, buttonColorScheme, filterRule, setFilterTasks,
}) {
  return (
    <Button colorScheme={buttonColorScheme} size="sm" onClick={() => setFilterTasks(filterRule)}>
      {label}
    </Button>
  );
}

export default FilterButton;
