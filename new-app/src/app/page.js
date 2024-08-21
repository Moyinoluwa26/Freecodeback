import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>The New App</div>
      <div>Welcome to recipe App</div>
      <Link href={"recipe-list"}>Explore Recipe</Link>
    </main>
  );
}
