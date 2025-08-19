import { useTheme } from "@/hooks/use-theme";
import { useAudioClip } from "@/hooks/useAudioClip";
import { Sun, Moon } from "./Icons";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const play = useAudioClip("/click.wav");

  return (
    <button
      className="cursor-pointer hover:text-current/70 transition-colors"
      aria-label="Toggle dark mode"
      onClick={() => {
        play();
        toggleTheme();
      }}
    >
      {theme === "dark" ? (
        <Sun className="w-[2.29rem] h-[2.29rem]" />
      ) : (
        <Moon className="w-[2.29rem] h-[2.29rem]" />
      )}
    </button>
  );
}
