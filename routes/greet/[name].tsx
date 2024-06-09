import { PageProps, RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};

export default function Greet(props: PageProps) {
  return <div>
    <p>
      Hello {props.params.name}
    </p>

    <p>
      Click the link below
    <a href='/'>
      Click here to go back!
    </a>
    </p>
  </div>;
}
