
import Link from "next/link";

export default async function Page() {


  return (
    <div className="bg-background">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-24">
          <div className="text-center">
            <Link href="/docs">Docs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}