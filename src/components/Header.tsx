'use client'
import { Button, Dropdown, Navbar, useTheme } from 'react-daisyui'

export default function Header({
  dataTheme,
  ...args
}: {
  dataTheme?: string
  [key: string]: unknown
}) {
  const {
    theme,
    setTheme
  } = useTheme()
  const DEFAULT_THEMES = ['light', 'dark', 'cupcake']

  return (<Navbar className="my-32 px-2 font-sans bg-base-300 rounded-box" dataTheme={dataTheme}>
    <Navbar.Start className="px-2 lg:flex-none">
      <span className="text-lg font-bold">daisyUI</span>
    </Navbar.Start>
    <Navbar.End>
      <Button color="ghost" dataTheme={dataTheme}>
        Button
      </Button>
      <div>
        <h4 className="mb-4">Current Theme: {theme}</h4>
        <div className="flex flex-wrap gap-4">
          ...
        </div>
      </div>
      <Dropdown {...args} dataTheme={dataTheme}>
        <Dropdown.Toggle className="btn btn-ghost rounded-btn" button={false}>
          Dropdown
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-52 mt-4">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar.End>
  </Navbar>)
}
