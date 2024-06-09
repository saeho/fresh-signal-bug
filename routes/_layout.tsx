import { PageProps } from '$fresh/server.ts';

/**
 * Layout
 */

const MainLayout = (p: PageProps) => {
  const { Component } = p;
  return <>
    <Component />
    <div>
      <p>
        This is a test layout
      </p>
    </div>
  </>;
};

export default MainLayout;
