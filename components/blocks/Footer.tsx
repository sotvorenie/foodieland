import {links} from "@/data/links";

import Logo from "@/components/ui/Logo";
import NavLinks from "@/components/blocks/NavLinks";
import SocialLinks from "@/components/blocks/SocialLinks";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="border-b border-gray pb-4 lg:pb-6 lg:pb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                    <div className="flex flex-col gap-4">
                        <Logo/>

                        <span className="text-dark-60">Lorem ipsum dolor sit amet, consectetuipisicing elit, </span>
                    </div>

                    <NavLinks links={links.slice(0, links.length)} listClassName="flex-col !gap-4 md:!gap-10 md:flex-row"/>
                </div>

                <div className="flex gap-5 items-center justify-between flex-col-reverse md:flex-row py-4 md:py-6 lg:py-12">
                    <span className="hidden lg:block"/>

                    <div className="text-base md:text-lg">
                        <span className="text-dark-60">© {new Date().getFullYear()} Flowbase. Powered by </span>
                        <a href="#" className="text-accent">Webflow</a>
                    </div>

                    <SocialLinks/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;