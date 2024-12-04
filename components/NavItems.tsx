import { Bell, BriefcaseBusiness, Home, MessageCircleMore, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const navItems = [
    {
        src: "/home",
        icons: <Home />,
        text: "Home",
    },
    {
        src: "/networks",
        icons: <User />,
        text: "My Network",
    },
    {
        src: "/job",
        icons: <BriefcaseBusiness />,
        text: "Jobs",
    },
    {
        src: "/message",
        icons: <MessageCircleMore />,
        text: "Messaging",
    },
    {
        src: "/notification",
        icons: <Bell />,
        text: "Notifications",
    },
]

function NavItems() {
  return (
    <div className='flex gap-8'>
        {
            navItems.map((navItems, index) => {
                return (
                    <div key={index} className='flex flex-col items-center cursor-pointer text-[#666666]'>
                        <span>{navItems.icons}</span>
                        <Link className='text-sm' href={navItems.src}>{navItems.text}</Link>
                    </div>
                )
            }) 

        }
    </div>
  )
}

export default NavItems