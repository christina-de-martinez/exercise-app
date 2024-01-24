import type { MetaFunction } from "@remix-run/node";
import FlexiWork from "~/components/icons/FlexiWork";
import Logomark from "~/components/icons/Logomark";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="nav-wrapper">
        <FlexiWork />
        <Logomark />
      </div>
      <h1>Welcome to Remix</h1>
    </div>
  );
}
