"use client";

import { useLanguage } from "@/components/shared/language-provider";

export default function PrivacyPage() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-zinc-950">
      <div className="max-w-[1340px] mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-[#6f8f84] dark:text-[#9cc3b6] tracking-tight">
            {isSpanish ? "Privacidad" : "Privacy"} <span className="font-bold text-gray-900 dark:text-gray-100">{isSpanish ? "y Politica" : "& Policy"}</span>
          </h1>
        </div>

        <div className="space-y-8 text-base text-gray-800 dark:text-gray-300 leading-relaxed [&_h2]:text-lg [&_h2]:text-gray-700 dark:[&_h2]:text-gray-200 [&_p]:text-gray-600 dark:[&_p]:text-gray-300 [&_ul]:text-gray-600 dark:[&_ul]:text-gray-300">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "1. Acerca de Dremarr" : "1. About Dremarr"}</h2>
            <p className="text-gray-500">
              {isSpanish
                ? "Dremarr es un mercado en linea que conecta profesionales (proveedores de habilidades) con clientes (buscadores) para intercambiar habilidades y servicios. Dremarr no es empleador ni contratista. Servimos como una plataforma para que proveedores y buscadores se conecten, se comuniquen y realicen intercambios."
                : "Dremarr is an online marketplace connecting professionals (Skill Providers) with clients (Seekers) to exchange skills and services. Dremarr is not an employer or contractor. We serve as a platform for Skill Providers and Seekers to connect, communicate, and transact."}
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "2. Elegibilidad" : "2. Eligibility"}</h2>
            <ul className="list-disc list-inside space-y-1 pl-2 text-gray-500">
              <li>{isSpanish ? "Los usuarios deben tener al menos 18 anos." : "Users must be at least 18 years old."}</li>
              <li>{isSpanish ? "Los proveedores de habilidades deben demostrar dominio en las habilidades publicadas." : "Skill Providers must demonstrate proficiency in their listed skills."}</li>
              <li>{isSpanish ? "Los buscadores deben proporcionar detalles precisos del proyecto." : "Seekers must provide accurate project details."}</li>
              <li>{isSpanish ? "La informacion falsa puede resultar en la cancelacion de la cuenta." : "Misrepresentation may result in account termination."}</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "3. Registro de cuenta" : "3. Account Registration"}</h2>
            <p className="text-gray-500">
              {isSpanish ? "Al crear una cuenta, aceptas:" : "By creating an account, you agree to:"}
            </p>
            <div className="mt-1 space-y-0.5">
              <p className="text-gray-500">{isSpanish ? "Proporcionar informacion veraz y actualizada." : "Provide truthful and current information."}</p>
              <p className="text-gray-500">{isSpanish ? "Proteger las credenciales de tu cuenta." : "Protect your account credentials."}</p>
              <p className="text-gray-500">{isSpanish ? "Aceptar responsabilidad por toda actividad en tu cuenta." : "Accept responsibility for all account activities."}</p>
              <p className="text-gray-500">{isSpanish ? "Dremarr se reserva el derecho de administrar cuentas a su discrecion." : "Dremarr reserves the right to manage accounts at its discretion."}</p>
            </div>
          </section>

          {/* 4 */}
          
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "4. Responsabilidades del proveedor" : "4. Skill Provider Responsibilities"}</h2>
            <p className="text-gray-500">{isSpanish ? "Los proveedores aceptan:" : "Skill Providers agree to:"}</p>
            <div className="mt-1 space-y-0.5 text-gray-500">
              <p>{isSpanish ? "Describir con precision sus habilidades y experiencia." : "Accurately describe their skills and experience."}</p>
              <p>{isSpanish ? "Establecer precios justos para sus servicios." : "Set fair prices for their services."}</p>
              <p>{isSpanish ? "Entregar los servicios segun lo prometido." : "Deliver services as promised."}</p>
              <p>{isSpanish ? "Mantener una conducta profesional." : "Maintain professional conduct."}</p>
              <p>{isSpanish ? "Responder con rapidez a los buscadores." : "Respond promptly to Seekers."}</p>
              <p>{isSpanish ? "Dremarr puede eliminar publicaciones que violen estos terminos." : "Dremarr may remove listings violating these terms."}</p>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "5. Responsabilidades del buscador" : "5. Seeker Responsibilities"}</h2>
            <p className="text-gray-500">{isSpanish ? "Los buscadores aceptan:" : "Seekers agree to:"}</p>
            <div className="mt-1 space-y-0.5 text-gray-500">
              <p>{isSpanish ? "Proporcionar requisitos claros del proyecto." : "Provide clear project requirements."}</p>
              <p>{isSpanish ? "Respetar la experiencia del proveedor." : "Respect Skill Provider expertise."}</p>
              <p>{isSpanish ? "Cumplir con los terminos acordados." : "Adhere to agreed-upon terms."}</p>
              <p>{isSpanish ? "Comunicarse con respeto." : "Communicate respectfully."}</p>
              <p>{isSpanish ? "Dar retroalimentacion oportuna." : "Provide timely feedback."}</p>
              <p>{isSpanish ? "El mal uso de la plataforma puede restringir el acceso." : "Platform misuse may lead to access restrictions."}</p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "6. Proyectos y pagos" : "6. Projects & Payments"}</h2>
            <ul className="list-disc list-inside space-y-1 pl-2 text-gray-500">
              <li>{isSpanish ? "Todas las transacciones ocurren a traves de la plataforma Dremarr." : "All transactions occur via the Dremarr platform."}</li>
              <li>{isSpanish ? "Los terminos de pago son transparentes antes de confirmar." : "Payment terms are transparent before confirmation."}</li>
              <li>{isSpanish ? "Dremarr puede cobrar tarifas de servicio." : "Dremarr may charge service fees."}</li>
              <li>{isSpanish ? "Los pagos se procesan de forma segura." : "Payments are securely processed."}</li>
              <li>{isSpanish ? "Dremarr facilita transacciones seguras, pero no garantiza resultados de proyectos." : "Dremarr facilitates secure transactions but does not guarantee project outcomes."}</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "7. Cancelaciones y reembolsos" : "7. Cancellations & Refunds"}</h2>
            <ul className="list-disc list-inside space-y-1 pl-2 text-gray-500">
              <li>{isSpanish ? "Las politicas de cancelacion son especificas por proyecto y las define cada proveedor." : "Cancellation policies are project-specific and set by Skill Providers."}</li>
              <li>{isSpanish ? "Los buscadores deben revisar los terminos antes de contratar." : "Seekers must review terms before engagement."}</li>
              <li>{isSpanish ? "La elegibilidad de reembolso depende de la politica acordada." : "Refund eligibility depends on the agreed policy."}</li>
              <li>{isSpanish ? "Las tarifas de servicio de Dremarr pueden no ser reembolsables." : "Dremarr's service fees may be non-refundable."}</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "8. Comunicacion" : "8. Communication"}</h2>
            <ul className="list-disc list-inside space-y-1 pl-2 text-gray-500">
              <li>{isSpanish ? "La comunicacion inicial debe realizarse por la mensajeria de Dremarr." : "Initial communication must use Dremarr's messaging."}</li>
              <li>{isSpanish ? "Se desaconseja compartir datos de contacto antes de concretar un intercambio." : "Sharing contact details before engagement is discouraged."}</li>
              <li>{isSpanish ? "Se prohibe la comunicacion abusiva o enganosa." : "Abusive or misleading communication is prohibited."}</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "9. Verificacion y confianza" : "9. Verification & Trust"}</h2>
            <ul className="list-disc list-inside space-y-1 pl-2 text-gray-500">
              <li>{isSpanish ? "Los proveedores pueden pasar por verificacion de identidad y habilidades." : "Skill Providers may undergo identity and skill verification."}</li>
              <li>{isSpanish ? "La verificacion no garantiza la calidad del servicio." : "Verification does not guarantee service quality."}</li>
              <li>{isSpanish ? "Los buscadores deben hacer preguntas antes de contratar." : "Seekers should ask questions before engaging."}</li>
              <li>{isSpanish ? "Dremarr promueve la confianza, pero recomienda criterio personal." : "Dremarr fosters trust but advises personal judgment."}</li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "10. Actividades prohibidas" : "10. Prohibited Activities"}</h2>
            <p className="text-gray-500">{isSpanish ? "Los usuarios no pueden:" : "Users may not:"}</p>
            <div className="mt-1 space-y-0.5 text-gray-500">
              <p>{isSpanish ? "Publicar informacion falsa o enganosa." : "Post false or misleading information."}</p>
              <p>{isSpanish ? "Usar la plataforma para actividades ilegales." : "Use the platform for illegal activities."}</p>
              <p>{isSpanish ? "Acosar o discriminar a otros." : "Harass or discriminate against others."}</p>
              <p>{isSpanish ? "Evitar los pagos dentro de la plataforma." : "Bypass platform payments."}</p>
              <p>{isSpanish ? "Hacer mal uso de datos o sistemas." : "Misuse data or systems."}</p>
              <p>{isSpanish ? "Las violaciones pueden resultar en eliminacion de la cuenta." : "Violations may result in account removal."}</p>
            </div>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "11. Disponibilidad de la plataforma" : "11. Platform Availability"}</h2>
            <p className="text-gray-500">{isSpanish ? "Dremarr busca servicio continuo, pero:" : "Dremarr aims for continuous service but:"}</p>
            <div className="mt-1 space-y-0.5 text-gray-500">
              <p>{isSpanish ? "No puede garantizar disponibilidad ininterrumpida." : "Cannot guarantee uninterrupted availability."}</p>
              <p>{isSpanish ? "Puede realizar mantenimiento." : "May perform maintenance."}</p>
              <p>{isSpanish ? "No es responsable por interrupciones o perdida de datos." : "Is not liable for disruptions or data loss."}</p>
            </div>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "12. Limitacion de responsabilidad" : "12. Limitation of Liability"}</h2>
            <p className="text-gray-500">{isSpanish ? "Dremarr no es responsable por:" : "Dremarr is not liable for:"}</p>
            <div className="mt-1 space-y-0.5 text-gray-500">
              <p>{isSpanish ? "Disputas entre usuarios." : "Disputes between users."}</p>
              <p>{isSpanish ? "Resultados de proyectos." : "Project outcomes."}</p>
              <p>{isSpanish ? "Perdidas durante los intercambios." : "Losses during engagements."}</p>
              <p>{isSpanish ? "Los usuarios interactuan bajo su propio riesgo." : "Users interact at their own risk."}</p>
            </div>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "13. Privacidad y proteccion de datos" : "13. Privacy & Data Protection"}</h2>
            <ul className="list-disc list-inside space-y-1 pl-2 text-gray-500">
              <li>{isSpanish ? "Los datos de usuarios se gestionan segun nuestra Politica de Privacidad." : "User data is managed per our Privacy Policy."}</li>
              <li>{isSpanish ? "Cumplimos con las leyes de proteccion de datos." : "We comply with data protection laws."}</li>
              <li>{isSpanish ? "Los usuarios deben proteger la informacion compartida." : "Users protect shared information."}</li>
            </ul>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-lg font-bold text-gray-600 mb-2">{isSpanish ? "14. Cambios en los terminos" : "14. Changes to Terms"}</h2>
            <p className="text-gray-500">{isSpanish ? "Dremarr puede actualizar estos terminos." : "Dremarr may update these Terms."}</p>
            <p className="text-gray-500">{isSpanish ? "El uso continuo implica aceptacion." : "Continued use implies acceptance."}</p>
          </section>

        </div>
      </div>
    </div>
  );
}