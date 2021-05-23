import { Box, Heading } from "@chakra-ui/layout";
import { colors } from "../../Database";
import { Category } from "../../Database/quiz.type";

type CategoryCardProps = {
  item: Category;
};
export function CategoryCard({ item }: CategoryCardProps) {
  return (
    <>
      <Box
        backgroundImage={`url(${item.image})`}
        // backgroundSize="100% 100%"
        backgroundSize="contain"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius="1rem"
        border="2px" borderColor="gray.200"
        
        boxShadow="xs" p="0.5rem"
      >
        <Heading as="h3" >
          {item.categoryName}
        </Heading>
      </Box>
    </>
  );
}
