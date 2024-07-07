import TextCloud from "@/registry/components/snippet/text-cloud";

const slugs = [
    "Tailwind",
    "SCSS",
    "Axios",
    "Tanstack",
    "Cloudinary",
    "Redux",
    "Zustand",
    "Zod",
    "Bootstrap",
    "React Native",
    "Next",
    "MongoDB",
    "Mongoose",
    "MySQL",
    "Postgres",
    "Prisma",
    "Firebase",
    "Git",
    "cPanel",
    "Heroku",
    "JSON",
    "VS Code",
    "REST API",
    "Stripe",
];

export default function TextCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <TextCloud iconSlugs={slugs} />
    </div>
  );
}