
import { Button } from "@/components/ui/button";
import { getGithubStars } from "@/lib/fetchers/githubStar";
import Link from "next/link";
// import { IntroFadeIn } from "./component/IntroFadeIn";

export default async function Page() {

  const githubStarsPromise = getGithubStars()

  const [githubStars] = await Promise.all([
    githubStarsPromise,
  ])


  return (
    <div className="bg-background">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-24">
          <div className="text-center">
            <Link className="text-red-700" href="/docs">Docs</Link>
            {/* <IntroFadeIn githubStars={githubStars} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}