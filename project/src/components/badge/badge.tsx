type BadgeProps = {
  str: string;
}

export default function Badge({str}: BadgeProps): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>{str}</span>
    </div>
  );
}
