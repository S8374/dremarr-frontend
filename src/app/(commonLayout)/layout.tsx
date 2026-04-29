import PublicFooter from "@/components/shared/PublicFooter";
import PublicNavbar from "@/components/shared/PublicNavbar";
import { LanguageTransition } from "@/components/shared/language-provider";
import SmoothScrollProvider from "@/components/shared/SmoothScroll";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SmoothScrollProvider>
            <LanguageTransition>
                <div className="">
                    <PublicNavbar />
                    <div className="">
                        {children}
                    </div>
                    <PublicFooter />
                </div>
            </LanguageTransition>
        </SmoothScrollProvider>
    );
};

export default CommonLayout;