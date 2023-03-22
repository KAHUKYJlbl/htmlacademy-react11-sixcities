import classNames from 'classnames';

type BadgeProps = {
  title: string;
  badgeClasses: string[];
}

export default function Badge({title, badgeClasses}: BadgeProps): JSX.Element {
  return (
    <div className={classNames(badgeClasses)}>
      <span>{title}</span>
    </div>
  );
}
