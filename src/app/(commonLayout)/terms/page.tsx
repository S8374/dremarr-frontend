"use client";

import { useLanguage } from "@/components/shared/language-provider";

export default function TermsPage() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-[1340px] mx-auto px-6 py-12">
    {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            <span className="text-[#6f8f84] dark:text-[#9cc3b6]">DreMarr</span> {isSpanish ? "Terminos de servicio y" : "Terms of Service &"}<br />{isSpanish ? "acuerdo de usuario" : "User Agreement"}
          </h1>
        </div>

        <div className="space-y-7 text-base text-gray-800 dark:text-gray-300 leading-relaxed [&_h2]:text-lg [&_h2]:text-gray-700 dark:[&_h2]:text-gray-200 [&_p]:text-gray-600 dark:[&_p]:text-gray-300 [&_ul]:text-gray-600 dark:[&_ul]:text-gray-300 [&_.font-semibold]:text-gray-800 dark:[&_.font-semibold]:text-gray-100">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "1. Proposito de la plataforma" : "I. Platform Purpose"}</h2>
            <p className="text-gray-500">
              DreMarr is an online platform designed to connect individuals who wish to exchange services or skills through barter or other mutually agreed arrangements.
            </p>
            <p className="mt-2 text-gray-500">
              DreMarr functions solely as a technology platform that allows users to discover, communicate with, and arrange service exchanges with one another.
            </p>
            <p className="mt-2 text-gray-500">
              DreMarr does not provide, perform, supervise, guarantee, or endorse any services offered by users on the Platform.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "2. Elegibilidad del usuario" : "2. User Eligibility"}</h2>
            <p className="text-gray-500">
              By creating an account and using DreMarr, you represent that:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2 text-gray-500">
              <li>You are at least 18 years old</li>
              <li>The information you provide is accurate and truthful</li>
              <li>You will comply with all applicable local, state, and federal laws</li>
            </ul>
            <p className="mt-2 text-gray-500">
              Users are responsible for maintaining the confidentiality of their account credentials.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "3. Acuerdos independientes entre usuarios" : "3. Independent Agreements Between Users"}</h2>
            <p className="text-gray-500">
              All service exchanges, barter arrangements, and agreements occur solely between the participating users.
            </p>
            <p className="mt-2 text-gray-500">
              DreMarr is not a party to any agreements made between users and does not negotiate, supervise, or enforce the terms of any barter arrangement.
            </p>
            <p className="mt-2 text-gray-500">
              Users are solely responsible for determining the value and terms of any service exchange.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "4. Verificacion e insignias" : "4. Verification and Badging"}</h2>
            <p className="text-gray-500">
              Users may have the option to upload licenses, certifications, or other documentation in order to receive certain badges or verification indicators on their profiles.
            </p>
            <p className="mt-2 text-gray-500">
              Badges are provided for informational purposes only and indicate that documentation has been submitted to the platform.
            </p>
            <p className="mt-2 text-gray-500">
              DreMarr does not independently verify the authenticity, validity, or current status of any licenses, certifications, or documents submitted by users unless otherwise stated.
            </p>
            <p className="mt-2 text-gray-500">
              Users should independently verify the credentials and qualifications of any individual before entering into a service agreement.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "5. Descargo de responsabilidad de la plataforma" : "5. Platform Disclaimer"}</h2>
            <p className="text-gray-500">
              DreMarr is not responsible for the actions, conduct, qualifications, services, or representations of any users on the Platform.
            </p>
            <p className="mt-2 text-gray-500">
              DreMarr does not guarantee the quality, safety, legality, reliability, or completion of any services exchanged between users.
            </p>
            <p className="mt-2 text-gray-500">
              Users interact with and exchange other members at their own risk.
            </p>
            <p className="mt-2 text-gray-500">
              DreMarr encourages users to exercise caution and perform their own due diligence before allowing services to be performed or entering into any agreements.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "6. Limitacion de responsabilidad" : "6. Limitation of Liability"}</h2>
            <p className="text-gray-500">
              To the fullest extent permitted by law, DreMarr, its owners, employees, affiliates, and partners shall not be liable for any damages, losses, injuries, theft, fraud, property damage, or other claims arising from:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2 text-gray-500">
              <li>Interactions between users</li>
              <li>Services exchanged through the Platform</li>
              <li>Barter agreements or negotiations</li>
              <li>Inaccurate user information</li>
              <li>Disputes between users</li>
            </ul>
            <p className="mt-2 text-gray-500">
              This includes situations where a user misrepresents their qualifications or engages in unlawful or harmful conduct.
            </p>
            <p className="mt-2 text-gray-500">
              Users acknowledge that DreMarr cannot control the behavior of its members and therefore cannot guarantee the safety or reliability of user interactions.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "7. Indemnizacion" : "7. Indemnification"}</h2>
            <p className="text-gray-500">
              Users agree to indemnify, defend, and hold harmless DreMarr, its owners, employees, affiliates, and partners from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorney's fees) arising out of or related to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2 text-gray-500">
              <li>Their use of the Platform</li>
              <li>Their interactions with other users</li>
              <li>Any service exchanges or agreements entered into through the Platform</li>
              <li>Violation of these Terms of Service</li>
              <li>Violation of any applicable laws or regulations</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "8. Responsabilidades del usuario" : "8. User Responsibilities"}</h2>
            <p className="text-gray-500">Users are responsible for:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2 text-gray-500">
              <li>Verifying the identity of other users</li>
              <li>Confirming professional licenses or qualifications where applicable</li>
              <li>Determining the value of services exchanged</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Exercising reasonable judgment when transacting with others</li>
            </ul>
            <p className="mt-2 text-gray-500">
              Users agree to use the Platform in a lawful and responsible manner. Users are responsible for evaluating the safety and suitability of any service exchange. DreMarr strongly urges users to take appropriate precautions when allowing individuals into their homes or workplaces.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "9. Impuestos y transacciones de trueque" : "9. Taxes and Barter Transactions"}</h2>
            <p className="text-gray-500">
              Barter transactions may be considered taxable income under federal, state, or local tax laws.
            </p>
            <p className="mt-2 text-gray-500">
              Users are solely responsible for determining and complying with any tax reporting obligations related to barter transactions conducted through the Platform.
            </p>
            <p className="mt-2 text-gray-500">
              DreMarr does not provide tax advice and does not report barter transactions unless required by law.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "10. Actividades prohibidas" : "10. Prohibited Activities"}</h2>
            <p className="text-gray-500">Users may not use the DreMarr platform for:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2 text-gray-500">
              <li>Illegal services</li>
              <li>Fraudulent or deceptive practices</li>
              <li>Harassment or abusive conduct</li>
              <li>Misrepresentation of qualifications or licenses</li>
              <li>Unsafe or dangerous activities</li>
            </ul>
            <p className="mt-2 text-gray-500">
              DreMarr reserves the right to remove or terminate user accounts that violate these rules.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "11. Suspension o cancelacion de cuenta" : "11. Account Suspension or Termination"}</h2>
            <p className="text-gray-500">
              DreMarr reserves the right to suspend or terminate user accounts at its discretion if users violate these Terms of Service or engage in conduct that harms the platform or other members.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "12. Disputas entre usuarios" : "12. Disputes Between Users"}</h2>
            <p className="text-gray-500">
              Any disputes arising from service exchanges or barter agreements must be reached directly between the involved users.
            </p>
            <p className="mt-2 text-gray-500">
              DreMarr is not responsible for mediating or resolving disputes between members.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "13. Aceptacion de terminos" : "13. Acceptance of Terms"}</h2>
            <p className="text-gray-500">
              By creating an account or using the DreMarr platform, you acknowledge that you have read, understood, and agree to these Terms of Service, User Agreement, and Platform Disclaimer.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "14. Membresia y politica de reembolso" : "14. Membership Fees and Refund Policy"}</h2>
            <p className="text-gray-500">
              DreMarr platform requires a paid membership subscription. By subscribing, you authorize DreMarr to charge your payment method on a recurring basis. Subscriptions automatically renew unless canceled prior to the next billing cycle.
            </p>
            <p className="mt-2 text-gray-500">
              Membership fees are charged in exchange for access to platform features, including the ability to post listings, respond to posts, communicate with other members, and participate in the DreMarr marketplace.
            </p>
            <p className="mt-2 text-gray-500">
              DreMarr does not participate in or process payments related to barter agreements between users. Because service exchanges occur directly between users, DreMarr cannot issue refunds, reimbursements, or compensation for any services that are unsatisfactory, incomplete, or disputed.
            </p>
            <p className="mt-2 text-gray-500">
              Membership fees are non-refundable, except where required by law. Canceling a membership will stop future billing but will not result in refunds for the current billing period.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "15. Politica de seguridad y antifraude" : "15. Safety and Anti-Fraud Policy"}</h2>
            <p className="text-gray-500">
              DreMarr is committed to creating a safe and trustworthy platform for individuals exchanging services. However, DreMarr cannot guarantee the behavior, honesty, or reliability of its users.
            </p>
            <p className="mt-2 text-gray-500">
              Users are responsible for exercising caution and good judgment when interacting with other members.
            </p>
            <p className="mt-2 text-gray-500">DreMarr strongly recommends that users:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2 text-gray-500">
              <li>Independently verify the identity of individuals they interact with</li>
              <li>Confirm licenses or certifications directly with the appropriate licensing authority when applicable</li>
              <li>Avoid sharing sensitive personal or financial information</li>
              <li>Communicate through the DreMarr platform whenever possible</li>
              <li>Meet in safe environments when services require in-person interaction</li>
              <li>Trust your instincts; if something seems too good to be true, it probably is</li>
            </ul>
            <p className="mt-2 text-gray-500">
              Users should never feel pressured to enter into a service exchange or barter agreement.
            </p>
            <p className="mt-2 font-semibold">{isSpanish ? "Reporte de actividad sospechosa" : "Reporting Suspicious Activity"}</p>
            <p className="mt-1 text-gray-500">
              If a user believes another member is engaging in fraudulent, unsafe, or inappropriate behavior, they should report the user through the platform.
            </p>
            <p className="mt-2 text-gray-500">
              DreMarr reserves the right to investigate reported activity and may suspend or remove accounts that violate platform rules or applicable laws.
            </p>
            <p className="mt-2 font-semibold">{isSpanish ? "Sin responsabilidad por conducta de usuarios" : "No Responsibility for User Conduct"}</p>
            <p className="mt-1 text-gray-500">
              While DreMarr may remove users who violate platform policies, DreMarr is not responsible for the actions, conduct, or behavior of any users of the platform.
            </p>
            <p className="mt-2 text-gray-500">
              Users acknowledge that they interact with other members and exchange services at their own risk.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "16. Sin relacion laboral" : "16. No Employment Relationship"}</h2>
            <p className="text-gray-500">
              Users are not employees, agents, or representatives of DreMarr. DreMarr does not employ or contract any service providers listed on the platform.
            </p>
          </section>

          {/* 17 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "17. Propiedad intelectual" : "17. Intellectual Property"}</h2>
            <p className="text-gray-500">
              DreMarr owns all rights to the platform, including branding, content, and design. Users grant DreMarr a non-exclusive, royalty-free license to use content uploaded to the platform for the purpose of operating and promoting the service.
            </p>
          </section>

          {/* 18 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "18. Privacidad" : "18. Privacy"}</h2>
            <p className="text-gray-500">
              Use of the platform is also governed by DreMarr's Privacy Policy.
            </p>
          </section>

          {/* 19 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "19. Ley aplicable" : "19. Governing Law"}</h2>
            <p className="text-gray-500">
              These Terms shall be governed by and interpreted in accordance with the laws of the Commonwealth of Virginia.
            </p>
          </section>

          {/* 20 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "20. Modificaciones de terminos" : "20. Modifications to Terms"}</h2>
            <p className="text-gray-500">
              DreMarr reserves the right to update or modify these terms at any time. Continued use of the platform constitutes acceptance of any changes.
            </p>
          </section>

          {/* 21 */}
          <section>
            <h2 className="text-base font-bold text-gray-600 mb-2">{isSpanish ? "21. Fuerza mayor" : "21. Force Majeure"}</h2>
            <p className="text-gray-500">
              DreMarr shall not be liable for any failure or delays resulting from causes beyond its reasonable control, including but not limited to natural disasters, outages, or other unforeseen events.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}