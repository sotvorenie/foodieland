import Link from "next/link";

import {LinkType} from "@/types/link";


interface Props {
    links: LinkType[]
    className?: string
    listClassName?: string
}

function NavLinks({links, className, listClassName}: Props) {
    return (
        <nav className={className}>
            <ul className={`flex gap-10 ${listClassName}`}>
                {links.slice(1, links.length).map(link => (
                    <li key={link.label}>
                        <Link href={link.href} className="font-medium text-nowrap">{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavLinks;