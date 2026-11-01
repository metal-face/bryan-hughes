import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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

// [name, simple-icons slug]
const SKILLS = [
	["TypeScript", "typescript"],
	["React", "react"],
	["Angular", "angular"],
	["Vue", "vuedotjs"],
	["C#", "dotnet"],
	["Rust", "rust"],
	["Bash", "gnubash"],
	["GitHub", "github"],
	["Git", "git"],
	["CI/CD", "githubactions"],
	["Docker", "docker"],
	["Kubernetes", "kubernetes"],
	["ChatGPT", "openai"],
	["Claude", "claude"],
];

function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<ThemeToggle />
			<section className="flex flex-1 flex-col items-center justify-center px-4 text-center">
				<h1 className="font-serif text-6xl tracking-tight sm:text-8xl">
					Bryan Hughes
				</h1>
				<p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
					Full Stack Software Developer
				</p>
				<nav className="mt-10 flex flex-wrap justify-center gap-3">
					{LINKS.map((l) => (
						<a
							key={l.label}
							href={l.href}
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition hover:border-zinc-900 hover:bg-zinc-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-zinc-700 dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-900"
						>
							{l.label}
						</a>
					))}
				</nav>
			</section>
			<Marquee />
		</main>
	);
}

function Marquee() {
	return (
		<section
			aria-label="Skills"
			className="marquee overflow-hidden border-t border-zinc-200 py-10 dark:border-zinc-800"
		>
			{/* Two identical lists; translating by -50% makes the loop seamless */}
			<div className="marquee-track flex w-max">
				{[false, true].map((hidden) => (
					<ul
						key={String(hidden)}
						aria-hidden={hidden}
						className="flex shrink-0 gap-14 pr-14"
					>
						{SKILLS.map(([name, slug]) => (
							<li
								key={slug}
								className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300"
							>
								<span
									className="size-7 bg-current"
									style={{
										mask: `url(https://cdn.jsdelivr.net/npm/simple-icons@15.0.0/icons/${slug}.svg) center/contain no-repeat`,
									}}
								/>
								<span className="whitespace-nowrap text-lg font-medium">
									{name}
								</span>
							</li>
						))}
					</ul>
				))}
			</div>
		</section>
	);
}

function ThemeToggle() {
	const [dark, setDark] = useState(() =>
		document.documentElement.classList.contains("dark"),
	);
	const toggle = () => {
		const next = !dark;
		document.documentElement.classList.toggle("dark", next);
		try {
			localStorage.setItem("theme", next ? "dark" : "light");
		} catch {}
		setDark(next);
	};
	return (
		<button
			type="button"
			onClick={toggle}
			aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
			className="fixed top-5 right-5 rounded-full border border-zinc-300 p-2.5 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
		>
			<svg
				viewBox="0 0 24 24"
				className="size-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				aria-hidden="true"
			>
				{dark ? (
					<>
						<circle cx="12" cy="12" r="4" />
						<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
					</>
				) : (
					<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
				)}
			</svg>
		</button>
	);
}
