import "./Button.modules.css";

type Props = {
  children: string;
  color?: "primary" | "secondary";
  href?: string;
};

export function Button({ children, color = "primary", href }: Props) {
  const className = `btn btn--${color}`;

  return href ? (
    <a className={className} href={href}>
      {children}
    </a>
  ) : (
    <button className={className}>{children}</button>
  );
}
