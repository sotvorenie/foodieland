import Image from "next/image";
import Link from "next/link";

import {links} from "@/data/links";
import {socials} from "@/data/socials";

function Header() {
    return (
        <header className="border-b border-gray">
            <div className="container flex items-center gap-5 justify-between py-6 lg:py-10">
                <Link href="/">
                    <Image src="/images/logo.svg"
                           alt="Foodieland"
                           width={110}
                           height={30}
                    />
                </Link>

                <nav className="hidden lg:block ml-6">
                    <ul className="flex gap-15">
                        {links.map(link => (
                            <li key={link.label}>
                                <Link href={link.href}
                                      className="font-medium"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <ul className="hidden lg:flex gap-10">
                    {socials.map(social => (
                        <li key={social.label} className="recolor-svg">
                            <Link href={social.href}
                                  aria-label={social.label}
                            >
                                <img src={social.icon} alt={social.label}/>
                            </Link>
                        </li>
                    ))}
                </ul>

                <button className="block lg:hidden" type="button">
                    <Image src="/icons/burger-menu.svg"
                           alt=""
                           width={30}
                           height={30}
                    />
                </button>
            </div>
        </header>
    )
}

export default Header;