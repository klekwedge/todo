import { Tag } from '@chakra-ui/react';

const useCategoryTask = (taskCategory: string) => {
  switch (taskCategory) {
    case 'personal':
      return (
        <Tag variant='solid' colorScheme='teal'>
          Personal
        </Tag>
      );
    case 'work':
      return (
        <Tag variant='solid' colorScheme='purple'>
          Work
        </Tag>
      );
    case 'study':
      return (
        <Tag variant='solid' colorScheme='blue'>
          Study
        </Tag>
      );
    case 'other':
      return (
        <Tag variant='solid' colorScheme='orange'>
          Other
        </Tag>
      );
    default:
      return null;
  }
};

export default useCategoryTask;
