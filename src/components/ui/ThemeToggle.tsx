import { useTheme } from "../../context/ThemeProvider";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 items-center justify-center rounded-full border border-outline-variant bg-surface-container text-on-surface transition hover:border-primary hover:text-primary"
            aria-label="Toggle theme"
        >
            <span className="material-symbols-outlined text-xl">
                {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
        </button>
    )
}

export default ThemeToggle;