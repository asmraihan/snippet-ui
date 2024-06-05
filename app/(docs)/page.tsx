
import { IntroFadeIn } from "@/components/IntroFadeIn";
import { Button } from "@/components/ui/button";
import { getGithubStars } from "@/lib/fetchers/githubStar";
import Link from "next/link";

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
            <IntroFadeIn githubStars={githubStars} />
          </div>
        </div>
      </div>
    </div>
  );
}