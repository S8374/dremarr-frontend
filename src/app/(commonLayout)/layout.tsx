import PublicFooter from "@/components/shared/PublicFooter";
import PublicNavbar from "@/components/shared/PublicNavbar";
import { LanguageProvider } from "@/components/shared/language-provider";

const CommonLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <LanguageProvider>
            <PublicNavbar/>
            {children}
            <PublicFooter/>
        </LanguageProvider>
    );
};

export default CommonLayout;