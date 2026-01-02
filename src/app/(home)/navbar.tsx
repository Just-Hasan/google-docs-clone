import Image from 'next/image'
import Link from 'next/link'
import SearchInput from './search-input'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="flex h-full w-full items-center justify-between gap-x-3">
      <div className="flex shrink-0 items-center gap-3 pr-6">
        <Link href={'/'}>
          <Image src={'/logo.svg'} alt="Logo" height={36} width={36} />
        </Link>
        <h3 className="text-xl">Docs</h3>
      </div>
      <SearchInput />
      <UserButton />
    </nav>
  )
}

export default Navbar
