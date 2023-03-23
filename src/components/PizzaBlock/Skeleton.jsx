import React from "react"
import ContentLoader from "react-content-loader";

export const PizzaBlockSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={315}
    height={480}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" />
    <rect x="-1" y="268" rx="7" ry="7" width="280" height="20" />
    <rect x="0" y="301" rx="16" ry="16" width="280" height="88" />
    <rect x="0" y="408" rx="6" ry="6" width="121" height="35" />
    <rect x="148" y="402" rx="20" ry="20" width="125" height="44" />
  </ContentLoader>
);
