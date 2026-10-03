export default function Button({ href, variant = 'primary', children, ...props }) {
  const styles = variant === 'primary'
    ? 'bg-accent text-black hover:brightness-110'
    : 'border border-fg/25 text-fg hover:bg-fg/10'
  const cls = `inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition active:scale-95 ${styles}`
  return href
    ? <a href={href} className={cls} {...props}>{children}</a>
    : <button className={cls} {...props}>{children}</button>
}
