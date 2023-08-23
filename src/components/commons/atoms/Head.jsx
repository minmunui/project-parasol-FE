import { Helmet } from "react-helmet-async";

export const Head = ({ title, description }) => {
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
    </Helmet>
  );
};
