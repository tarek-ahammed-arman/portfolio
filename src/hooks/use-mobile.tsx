import * as React from "react";

//  CONFIG  //
// Breakpoint (in pixels) at which the layout is considered mobile
const MOBILE_BREAKPOINT = 768;

/**
 * Custom hook to determine if the current viewport is considered "mobile".
 * Returns a boolean indicating whether the screen width is below MOBILE_BREAKPOINT.
 */
export function useIsMobile() {
  // Track mobile status; undefined initially until effect runs
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Create a MediaQueryList to observe viewport changes
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Handler updates state whenever viewport crosses the breakpoint
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Listen for viewport changes
    mql.addEventListener("change", onChange);

    // Set initial value immediately on mount
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Cleanup listener on unmount
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Coerce undefined to boolean, ensuring the hook always returns true/false
  return !!isMobile;
}
