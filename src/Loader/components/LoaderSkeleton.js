import React from "react";
import ContentLoader from "react-content-loader";

function LoaderSkeleton(props) {
  return (
    <ContentLoader
      speed={2.3}
      width={'100%'}
      viewBox="0 0 1020 600"
      backgroundColor="#f3f3f3"
      foregroundColor="#1e6091"
      {...props}
    >
      <rect x="6" y="100" rx="0" ry="0" width="100%" height="60" />
      <rect x="6" y="200" rx="0" ry="0" width="100%" height="60" />
      <rect x="6" y="300" rx="0" ry="0" width="100%" height="60" />
      <rect x="6" y="400" rx="0" ry="0" width="100%" height="60" />
      <rect x="6" y="500" rx="0" ry="0" width="100%" height="60" />
    </ContentLoader>
  );
};

export { LoaderSkeleton };