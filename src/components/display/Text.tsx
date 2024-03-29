import React, { useMemo } from "react";
import { useClassNames } from "hooks/useClassNames";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "button"
  | "caption";

export interface TextProps extends React.HTMLAttributes<HTMLElement>, Exotic {
  variant?: TextVariant;
}

const Text = React.forwardRef(
  ({ variant = "body1", as, className, ...props }: TextProps, ref: React.Ref<HTMLElement>) => {
    const renderElement: React.ElementType = useMemo(() => {
      if (as) return as;
      if (variant === "body1" || variant === "body2") return "p";
      if (variant === "button" || variant === "caption") return "span";
      return variant;
    }, [as, variant]);

    const classNames = useClassNames(() => {
      const base = "";
      let variantClass = "";
      switch (variant) {
        case "h1":
          variantClass = `${base} text-6xl font-semibold md:text-7xl tracking-tighter`;
          break;
        case "h2":
          variantClass = `${base} text-3xl md:text-4xl tracking-tight font-semibold text-neutral-600 dark:text-neutral-400`;
          break;
        case "h3":
          variantClass = `${base} text-2xl md:text-2xl tracking-tight font-medium `;
          break;
        case "h4":
          variantClass = `${base} text-lg font-base `;
          break;
        case "h5":
          variantClass = `${base} text-base font-medium`;
          break;
        case "h6":
          variantClass = `${base} text-xs font-medium text-gray-600 dark:text-white/80 uppercase tracking-wide`;
          break;
        case "body1":
          variantClass = `${base} text-lg text-gray-600 dark:text-white/80`;
          break;
        case "body2":
          variantClass = `${base} text-base text-gray-700 dark:text-white/80`;
          break;
        case "caption":
          variantClass = `${base} text-xl md:text-2xl`;
          break;
        case "button":
          variantClass = `${base} text-base font-medium`;
          break;
        default:
          variantClass = `${base} text-base`;
          break;
      }
      return [base, variantClass, className];
    }, [className, variant]);

    return React.createElement(renderElement, {
      ref,
      className: classNames,
      ...props,
    });
  }
);

Text.displayName = "Text";

export { Text };