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
    <div className="relative p-10 rounded-lg border bg-background">
      <TextCloud iconSlugs={slugs} />
    </div>
  );
}