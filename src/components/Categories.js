import { Box, Stack } from "@mui/system";
import { useContext } from "react";
import { myCategories } from "../App";

const Categories = ({ handleCategories }) => {
  const { categories, categoriesIsPending } = useContext(myCategories);

  return (
    <Box className="box" flexBasis="350px">
      <Box
        sx={{
          borderRadius: 3,
          maxWidth: "300px",
          py: 6,
          px: 2.5,
          mx: "auto",
        }}
        className="caragories"
      >
        <h3>Meeting Catgories</h3>
        <Stack
          component="ul"
          gap={1}
          my="10px"
          pl="10px"
          textTransform="capitalize"
        >
          {categoriesIsPending && (
            <li className="loading-category">Loading...</li>
          )}
          {categories?.map((ele, ind) => {
            return (
              <li data-category={ele} key={ind} onClick={handleCategories}>
                {ele}
              </li>
            );
          })}
        </Stack>
        <button className="main-button">All up comming meetings</button>
      </Box>
    </Box>
  );
};

export default Categories;
