import "../components/Button.modules.css";

type Props = {
  children: string;
};

export function Button({ children }: Props) {
  return <button className="btn">{children}</button>;
}
