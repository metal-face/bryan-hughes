import { useState } from "react";

// The initial theme is applied before paint by the script in index.html
export function ThemeToggle() {
	const [dark, setDark] = useState(() =>
		document.documentElement.classList.contains("dark"),
	);

	const toggle = () => {
		const next = !dark;
		document.documentElement.classList.toggle("dark", next);
		try {
			localStorage.setItem("theme", next ? "dark" : "light");
		} catch {
			// Storage blocked (e.g. private mode): the toggle still works for this visit
		}
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
