import { useEffect, useState } from "react";

const NAME = "Bryan Hughes";
const GLYPHS = "!<>-_\\/[]{}=+*^?#$%&@0123456789ABCDEF";

const FRAME_MS = 70;
const LEAD_IN_FRAMES = 12; // frames before the first letter can settle
const FRAMES_PER_LETTER = 5;
const JITTER_FRAMES = 8;

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

export function ScrambleTitle() {
	const [chars, setChars] = useState(() =>
		[...NAME].map((c) => (reduceMotion || c === " " ? c : randomGlyph())),
	);

	useEffect(() => {
		if (reduceMotion) return;
		// Letters settle left to right, each with a little jitter
		const settleAt = [...NAME].map(
			(_, i) =>
				LEAD_IN_FRAMES +
				i * FRAMES_PER_LETTER +
				Math.floor(Math.random() * JITTER_FRAMES),
		);
		const lastFrame = Math.max(...settleAt);
		let frame = 0;
		const id = setInterval(() => {
			frame++;
			setChars(
				[...NAME].map((c, i) =>
					c === " " || frame >= settleAt[i] ? c : randomGlyph(),
				),
			);
			if (frame >= lastFrame) clearInterval(id);
		}, FRAME_MS);
		return () => clearInterval(id);
	}, []);

	return (
		<h1
			aria-label={NAME}
			className="font-mono text-4xl font-medium tracking-tight whitespace-pre sm:text-7xl lg:text-8xl"
		>
			<span aria-hidden="true">{chars.join("")}</span>
			<span
				aria-hidden="true"
				className="cursor ml-2 inline-block h-[0.75em] w-[0.25em] bg-linear-to-b from-sky-400 via-violet-500 to-fuchsia-500"
			/>
		</h1>
	);
}
