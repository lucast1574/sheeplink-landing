import type { ReactNode } from "react";
import { Icon } from "./LandingIcons";
export function MarketingButton({
  href,
  children,
  variant = "solid",
  arrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "light" | "quiet";
  arrow?: boolean;
}) {
  return (
    <a className={`marketing-button marketing-button--${variant}`} href={href}>
      {children}
      {arrow && <Icon name="arrow" size={19} />}
    </a>
  );
}
