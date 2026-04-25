import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface ProjectCardProps {
  name: string;
  client?: string;
  logo?: string;
  description?: string;
  href?: string;
  externalLink?: string;
  externalLinkLabel?: string;
}

export default function ProjectCard({ name, client, logo, description, href, externalLink, externalLinkLabel }: ProjectCardProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const card = (
    <div className={`flex flex-col rounded-xl border border-slate-200 overflow-hidden transition-all bg-white h-full ${href ? "hover:border-blue-300 hover:shadow-md cursor-pointer" : "hover:border-blue-300 hover:shadow-md"}`}>
      <div className="h-36 flex items-center justify-center bg-slate-50 border-b border-slate-100 px-6">
        {logo ? (
          <div className="relative w-full h-full">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain p-4"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold select-none">
            {initials}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-slate-900 mb-0.5">{name}</h3>
        {client && <p className="text-xs text-slate-400 mb-1">{client}</p>}
        {description && <p className="text-sm text-slate-500 flex-1">{description}</p>}
        {href && (
          <span className="mt-3 text-sm font-semibold text-blue-600">
            View Projects →
          </span>
        )}
        {externalLink && (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
          >
            {externalLinkLabel ?? "Visit →"}
          </a>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {card}
      </Link>
    );
  }

  return card;
}
