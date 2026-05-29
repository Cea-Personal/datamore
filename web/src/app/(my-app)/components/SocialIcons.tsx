export function SocialIcon({ name }: { name: string }) {
  return (
    <span className="material-symbols-outlined text-on-primary-container/70 hover:text-on-primary-container transition-opacity cursor-pointer">
    {name}
    </span>
  )
}