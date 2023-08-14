import { Badge } from '@chakra-ui/react';

const useCategoryTask = (taskCategory: string) => {
  switch (taskCategory) {
    case 'personal':
      return (
        <Badge colorScheme="green" padding="5px" color="black">
          Personal
        </Badge>
      );
    case 'work':
      return (
        <Badge colorScheme="red" padding="5px" color="black">
          Work
        </Badge>
      );
    case 'study':
      return (
        <Badge colorScheme="purple" padding="5px" color="black">
          Study
        </Badge>
      );
    case 'other':
      return (
        <Badge colorScheme="blue" padding="5px" color="black">
          Other
        </Badge>
      );
    default:
      return (
        <Badge colorScheme="green" padding="5px" color="black">
          Personal
        </Badge>
      );
  }
};

export default useCategoryTask;
