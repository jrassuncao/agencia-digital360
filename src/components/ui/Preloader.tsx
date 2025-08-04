import { cn } from "@/lib/utils";

interface PreloaderProps {
  isLoading: boolean;
}

export function Preloader({ isLoading }: PreloaderProps) {
  return (
    <div
      className={cn(
        "preloader-container",
        !isLoading && "preloader-hidden"
      )}
    >
      <div className="rings-container">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
      </div>
    </div>
  );
}
