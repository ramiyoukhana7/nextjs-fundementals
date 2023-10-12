import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {/*We navigate with Link instead of an Anchor tag to increase website performance.
      We only replace the content area
      and not redownloading the font, css and javaScript files*/}
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
