import type { MetaFunction } from "@remix-run/node";
import FlexiWork from "~/components/icons/FlexiWork";
import Logomark from "~/components/icons/Logomark";
import Form from "~/components/ui/form/Form";
import Input from "~/components/ui/form/Input";
import Label from "~/components/ui/form/Label";

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
      <Form onSubmit={() => {}}>
        <Label htmlFor="name">Name</Label>
        <Input type="name" id="name" name="name" onChange={() => {}} />
      </Form>
    </div>
  );
}
