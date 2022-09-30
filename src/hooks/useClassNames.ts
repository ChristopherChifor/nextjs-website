import { useMemo } from "react";
import { overrideTailwindClasses } from "tailwind-override";

export const cx = (...classNames: Array<string | undefined | false>) => {
  return overrideTailwindClasses(classNames.filter(Boolean).join(" "));
};

export const useClassNames = (fn: () => Array<string | undefined | false>, deps: any[]) => {
  const classNames = useMemo(() => {
    const classes = fn();
    // filter out undefined values
    const classList = classes.filter(Boolean).join(" ");
    return overrideTailwindClasses(classList);
  }, deps);

  return classNames;
};
