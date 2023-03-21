import classNames from 'classnames';

type BadgeProps = {
  str: string;
  badgeClasses: string[];
}

export default function Badge({str, badgeClasses}: BadgeProps): JSX.Element {
  return (
    <div className={classNames(badgeClasses)}>
      <span>{str}</span>
    </div>
  );
}
