import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import image from '../assets/language.jpeg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Home', href: '/home', current: true },
    { name: 'Rooms', href: '#', current: false },
    { name: 'Instruments', href: '#', current: false },
    { name: 'Notification', href: '#', current: false },
    {
        name: 'Admin', href: '#', current: false,
        subItems: [
            { nameEn: "Users", href: "/users", },
            { nameEn: "RoomsName", href: "/" },
            { nameEn: "To do tasks", href: "/" },
        ],
    },
]

export default function Navbar() {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);
    return (
        <Disclosure as="nav" className="bg-gray-300">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-shrink-0 items-center">
                        <img
                            alt="Logo"
                            src={logo}
                            className="w-auto h-40"
                        />
                    </div>
                    <div className={`flex flex-1 items-center justify-center `}>
                        <div className="absolute inset-y-0 flex items-center md:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">

                            <div className="hidden md:block">
                                <div className="flex gap-2">
                                    {navigation.map((item) => {

                                        return (
                                            <div
                                                key={item.name}
                                                className=" lg:pe-1 relative"
                                                data-twe-nav-item-ref
                                                onMouseEnter={() => setShowSubMenu(item.subItems ? true : false)}
                                                onMouseLeave={() => setShowSubMenu(false)}
                                            >
                                                {item.subItems ? (
                                                    <>
                                                        <Link
                                                            to={item.href}
                                                            className={classNames(
                                                                item.current ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                                                                'rounded-md px-3 py-2 text-sm font-medium',
                                                            )}
                                                            aria-current={item.current ? "page" : undefined}
                                                            data-twe-nav-link-ref
                                                        >
                                                            {item.name}
                                                        </Link>
                                                        {showSubMenu && (
                                                            <ul
                                                                className={`absolute z-[1000] mt-1 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-surface-dark `}
                                                                aria-labelledby="dropdownMenuButton2"
                                                            >
                                                                {item.subItems.map((subItem) => (
                                                                    <li key={subItem.nameEn}>
                                                                        <Link
                                                                            to={subItem.href}
                                                                            className={`block w-full bg-white px-4 py-2 text-sm font-normal hover:bg-primaryColor text-black hover:text-white`}
                                                                            data-twe-dropdown-item-ref
                                                                        >
                                                                            {subItem.nameEn}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Link
                                                        to={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium',
                                                        )}
                                                        aria-current={item.current ? "page" : undefined}
                                                        data-twe-nav-link-ref
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div className="flex items-center gap-3">
                                <div className="text-black font-bold">EN</div>
                                <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-7 w-7 rounded-full "
                                        src={image}
                                        alt=""
                                    />
                                </MenuButton>

                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        English
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Arabic
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="md:hidden">
                <div className="gap-2 px-2 pb-3 pt-2">
                    {navigation.map((item) => {
                        return (
                            <Link key={item.name} to={item.href}>
                                <DisclosureButton
                                    as="a"
                                    onClick={() => {
                                        if (item.subItems) {
                                            setShowMobileSubMenu(!showMobileSubMenu);
                                        }
                                    }}
                                    className={classNames(
                                        item.current ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-3 mt-2 text-base font-medium',
                                    )}
                                    aria-current={item.current ? "page" : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                                {item.subItems && showMobileSubMenu && (
                                    <div className="pl-2">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.nameEn}
                                                to={subItem.href}
                                                className={`block w-full bg-white px-4 py-2 text-sm font-normal hover:bg-primaryColor text-black hover:text-white `}
                                                data-twe-dropdown-item-ref
                                            >
                                                {subItem.nameEn}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </DisclosurePanel>

        </Disclosure>
    )
}
