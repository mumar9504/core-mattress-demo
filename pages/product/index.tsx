import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container} from "@mui/material";
import { NextPage } from "next";


const ProductList: NextPage = () => {
  return (
    <>
      <Container>PRODUCT LIST</Container>
    </>
  );
};

export default withLayoutBasic(ProductList);