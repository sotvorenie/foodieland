import Image from "next/image";

import {links} from "@/data/links";

import Logo from "@/components/ui/Logo";
import NavLinks from "@/components/blocks/header/NavLinks";
import SocialLinks from "@/components/blocks/header/SocialLinks";

function Header() {
    return (
        <header className="border-b border-gray">
            <div className="container flex items-center gap-5 justify-between py-4 md:py-6 lg:py-10">
                <Logo/>

                <NavLinks links={links} className="hidden lg:block"/>

                <SocialLinks className="hidden lg:flex"/>

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