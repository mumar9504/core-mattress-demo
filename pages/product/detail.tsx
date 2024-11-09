import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container} from "@mui/material";
import { NextPage } from "next";

const ProductDetail: NextPage = () => {
  return (
    <>
      <Container>PRODUCT DETAIL</Container>
    </>
  );
    
};

export default withLayoutBasic(ProductDetail);