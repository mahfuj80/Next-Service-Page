import Image from "next/image";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <Button text="Click Me" className="bg-green-500 hover:bg-green-600" />
    </>
  );
}
