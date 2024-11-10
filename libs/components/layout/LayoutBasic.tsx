import { Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";
import Footer from "../Footer";

const withLayoutBasic = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Core Mattress</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack id={"top"}>
            <Top />
          </Stack>
          <Stack 
            className={"header-basic"}
            style={{
              backgroundImage: "url('/img/banner/header2.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Stack className={"container"}>
              <strong>Product Search</strong>
              <span>Find the best product for you</span>
            </Stack>
          </Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack id={"footer"}>
            <Footer />
          </Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutBasic;
