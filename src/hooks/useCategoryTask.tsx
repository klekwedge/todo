import { Badge } from '@mantine/core';

const useCategoryTask = (taskCategory: string) => {
  switch (taskCategory) {
    case 'personal':
      return (
        <Badge color='teal'>
          Personal
        </Badge>
      );
    case 'work':
      return (
        <Badge color='purple'>
          Work
        </Badge>
      );
    case 'study':
      return (
        <Badge color='blue'>
          Study
        </Badge>
      );
    case 'other':
      return (
        <Badge color='orange'>
          Other
        </Badge>
      );
    default:
      return null;
  }
};

export default useCategoryTask;
