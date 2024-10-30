import { Disclosure } from '@headlessui/react'
import TypeWriter from './Typewriter';

const typeWriter = ["razielrodrigues.dev"];

export default function Navbar() {

  return (
    <Disclosure as="nav" className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center ">
              <TypeWriter data={typeWriter}></TypeWriter>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
