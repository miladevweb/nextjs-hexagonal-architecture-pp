import styles from './index.module.css'

export function Navbar() {
  return (
    <nav className="bg-[#d71f00] h-8 flex justify-center items-center font-bold gap-x-1 select-none">
      <span className={styles.bullet}>&#x2022;</span> <span>Hexagonal Architecture</span>
    </nav>
  )
}
