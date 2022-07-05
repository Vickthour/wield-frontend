import { useEffect, useState } from "react";
import { useLg, useMd, useMid, useSm, useXl } from "./hooks/useMediaQuery";

interface ResponsiveVariantProps<T> {
  "@initial": T;
  "@sm"?: T;
  "@md"?: T;
  "@mid"?: T;
  "@lg"?: T;
  "@xl"?: T;
}
type keyTypes = "@initial" | "@sm" | "@md" | "@mid" | "@lg" | "@xl";

export const ResponsiveVariant =<T> (responsive: ResponsiveVariantProps<T>) => {
  const [variant, setVariant] = useState(responsive["@initial"]);
  const sm = useSm();
  const md = useMd();
  const mid = useMid();
  const lg = useLg();
  const xl = useXl();
  useEffect(() => {
    const reshooks = {
      "@initial": true,
      "@sm": sm,
      "@md": md,
      "@mid": mid,
      "@lg": lg,
      "@xl": xl,
    };

  
    if (reshooks['@xl']&&responsive['@xl']) {
      
      setVariant(responsive['@xl']);
    }
    else if (reshooks['@lg']&&responsive['@lg']) {
      
      setVariant(responsive['@lg']);
    }
    else if (reshooks['@mid']&&responsive['@mid']) {
      
      setVariant(responsive['@mid']);
    }
    else if (reshooks['@md']&&responsive['@md']) {
      
      setVariant(responsive['@md']);
    }
    else{
      setVariant(responsive['@initial']);
    }

    
  }, [sm, md, mid, lg, xl, responsive]);
  return variant;
};
