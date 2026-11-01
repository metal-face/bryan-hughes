import { createFileRoute } from "@tanstack/react-router";
import { ScrambleTitle } from "#/components/ScrambleTitle";
import { SkillsMarquee } from "#/components/SkillsMarquee";
import { ThemeToggle } from "#/components/ThemeToggle";

export const Route = createFileRoute("/")({ component: Home });

const LINKS = [
	{ label: "GitHub", href: "https://github.com/metal-face" },
	// shortcut: points at the old site's copy, move the PDF into public/ before this site replaces it
	{
		label: "Resume",
		href: "https://bryan-hughes.com/BRYAN_HUGHES_RESUME_2024.pdf",
	},
	{ label: "Blog Builder", href: "https://blog-builder.com/" },
];

function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<ThemeToggle />
			<section className="flex flex-1 flex-col items-center justify-center px-4 text-center">
				<ScrambleTitle />
				<p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
					Full Stack Software Developer
				</p>
				<nav className="mt-10 flex flex-wrap justify-center gap-3">
					{LINKS.map(({ label, href }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noreferrer"
							className="btn-glow rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-white dark:text-zinc-900 dark:hover:text-white"
						>
							{label}
						</a>
					))}
				</nav>
			</section>
			<SkillsMarquee />
		</main>
	);
}
