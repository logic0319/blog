import Link from 'next/link'
import Image from 'next/image'
import { css } from '@emotion/react'

const name = 'HELLO WORLD'
const menus = [
  {
    title: 'BLOG',
    path: '/',
  },
  {
    title: '알고리즘',
    path: '/algorithm',
  },
]

const menuStyle = css`
  cursor: pointer;
`

function Menu({ title, path }) {
  return (
    <Link href={path}>
      <span
        className="text-lg font-bold dark:text-white text-black"
        css={menuStyle}
      >
        {title}
      </span>
    </Link>
  )
}

function Header({ home }) {
  return (
    <>
      <div className="p-4 mb-6">
        <div className="flex items-center justify-between">
          <nav className="grid grid-flow-col gap-4">
            {menus.map(({ title, path }) => (
              <Menu key={title} title={title} path={path} />
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-col items-center mb-6">
        {home ? (
          <>
            <Image
              className="rounded-full mb-4"
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt=""
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                className="rounded-full mb-4"
                priority
                src="/images/profile.jpg"
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2>
              <Link href="/">{name}</Link>
            </h2>
          </>
        )}
      </div>
    </>
  )
}

export default Header
