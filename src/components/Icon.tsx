interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fill?: string;
  strokeWidth?: number;
}

export function Icon({ name, size = 24, className = '', fill, strokeWidth }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      className={className}
      fill={fill || 'none'}
      stroke={fill ? 'none' : 'currentColor'}
      strokeWidth={fill ? undefined : (strokeWidth ?? 2)}
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
}
