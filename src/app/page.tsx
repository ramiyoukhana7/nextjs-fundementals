import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Metadata } from "next";
import { useState } from "react";

/*const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading ..</p>,
}); */

export default function Home() {
  //Had to remove Async because client component can not be Async

  const [isVisiable, setIsVisiable] = useState(false);

  return (
    <main>
      <button
        onClick={async () => {
          const x = (await import("lodash")).default;
          //const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          //const sorted = _.orderBy(users, ["name"]);
        }}
      >
        Show
      </button>
      {/*We navigate with Link instead of an Anchor tag to increase website performance.
      We only replace the content area
      and not redownloading the font, css and javaScript files*/}
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}

export const metadata: Metadata = {
  title: " overwriting homepage title",
  description: "description title",
};
