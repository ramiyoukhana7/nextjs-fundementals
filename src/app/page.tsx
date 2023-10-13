import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      {/*We navigate with Link instead of an Anchor tag to increase website performance.
      We only replace the content area
      and not redownloading the font, css and javaScript files*/}
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
