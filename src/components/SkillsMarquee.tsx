const ICON_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@15.0.0/icons";

// icon: a Simple Icons slug (https://simpleicons.org)
const SKILLS = [
	{ name: "TypeScript", icon: "typescript" },
	{ name: "React", icon: "react" },
	{ name: "Angular", icon: "angular" },
	{ name: "Vue", icon: "vuedotjs" },
	{ name: "C#", icon: "dotnet" },
	{ name: "Rust", icon: "rust" },
	{ name: "Bash", icon: "gnubash" },
	{ name: "GitHub", icon: "github" },
	{ name: "Git", icon: "git" },
	{ name: "CI/CD", icon: "githubactions" },
	{ name: "Docker", icon: "docker" },
	{ name: "Kubernetes", icon: "kubernetes" },
	{ name: "ChatGPT", icon: "openai" },
	{ name: "Claude", icon: "claude" },
];

export function SkillsMarquee() {
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
						{SKILLS.map(({ name, icon }) => (
							<li
								key={icon}
								className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300"
							>
								{/* The SVG is used as a mask so the icon takes the text color */}
								<span
									className="size-7 bg-current"
									style={{
										mask: `url(${ICON_CDN}/${icon}.svg) center/contain no-repeat`,
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
