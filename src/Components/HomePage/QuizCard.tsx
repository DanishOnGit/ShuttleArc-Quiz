import { Box, Heading } from "@chakra-ui/layout";
import { Quiz } from "../../Database/quiz.type";
import { Link } from "react-router-dom";

type QuizCardProps = {
  item: Quiz;
};

export function QuizCard({ item }: QuizCardProps) {

  const QuizCardStyleProps = {
    minHeight:"10rem",
    backgroundImage:`url(${item.image})`,
    backgroundSize:"100% 100%",
    
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    borderRadius:"1rem",
    border:"2px",
    borderColor:"gray.200",
    boxShadow:"xs",
    p:"0.5rem",
  }
  return (
    <>
      <Link to={`quiz/${item._id}`}>
        <Box
        {...QuizCardStyleProps}
          // minHeight="10rem"
          // backgroundImage={`url(${item.image})`}
          // backgroundSize="100% 100%"
          
          // backgroundPosition="center"
          // backgroundRepeat="no-repeat"
          // borderRadius="1rem"
          // border="2px"
          // borderColor="gray.200"
          // boxShadow="xs"
          // p="0.5rem"
        >
          <Heading as="h3">{item.categoryName}</Heading>
        </Box>
      </Link>
    </>
  );
}
