import Header from "./Header.tsx";
import PageContainer from "./PageContainer.tsx";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </div>
  );
};

export default PageLayout;
