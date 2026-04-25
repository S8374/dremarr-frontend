import avatarImg from "@/assets/images/hero/users/electrician_user_hd.png";

export const profileData = {
  id: 1,
  name: "Killan James",
  avatar: avatarImg.src,
  title_en: "Electrician",
  title_es: "Electricista",
  rating: 5.0,
  isVerified: true,
  isGold: true,
  isPro: true,
  about_en: "Professional electrician providing safe and reliable electrical services for homes and businesses. Skilled in wiring, installations, repairs, and troubleshooting. I focus on quality work, safety, and customer satisfaction to ensure every job is done right.",
  about_es: "Electricista profesional que brinda servicios eléctricos seguros y confiables para hogares y empresas. Especializado en cableado, instalaciones, reparaciones y resolución de problemas. Me enfoco en el trabajo de calidad, la seguridad y la satisfacción del cliente.",
  location: "Miami, FL",
  memberSince_en: "2/10/2024",
  memberSince_es: "2/10/2024",
  skills_en: ["Electrical Wiring", "Circuit Installation", "Electrical Repair", "Troubleshooting", "Lighting Installation"],
  skills_es: ["Cableado Eléctrico", "Instalación de Circuitos", "Reparación Eléctrica", "Resolución de Problemas", "Instalación de Iluminación"],
  needs_en: ["Electrical Wiring", "Circuit Installation", "Electrical Repair", "Troubleshooting", "Lighting Installation"],
  needs_es: ["Cableado Eléctrico", "Instalación de Circuitos", "Reparación Eléctrica", "Resolución de Problemas", "Instalación de Iluminación"],
  providedServices: [
    {
      id: 101,
      title_en: "I will fix plumbing issues and install pipes professionally",
      title_es: "Arreglaré problemas de plomería e instalaré tuberías profesionalmente",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=400",
    }
  ],
  portfolio: [
    "https://images.unsplash.com/photo-1558444458-5cd899262da3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
  ],
  reviews: [
    {
      id: 1,
      user: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
      rating: 5,
      date_en: "Jan 20, 2024",
      date_es: "20 Ene, 2024",
      comment_en: "Amazing experience working with this electrician! He quickly diagnosed the issue and explained everything clearly before starting the work. The job was completed efficiently with great attention to detail. Everything is now working perfectly. Highly professional and reliable—definitely recommended!",
      comment_es: "¡Increíble experiencia trabajando con este electricista! Diagnosticó rápidamente el problema y explicó todo claramente antes de comenzar el trabajo."
    },
    {
      id: 2,
      user: "James Carter",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      rating: 4,
      date_en: "Jan 08, 2024",
      date_es: "08 Ene, 2024",
      comment_en: "Very satisfied with the service. Communication was smooth from start to finish, and he arrived right on time. The work was done safely and neatly, with no mess left behind.",
      comment_es: "Muy satisfecho con el servicio. La comunicación fue fluida de principio a fin, y llegó justo a tiempo."
    },
    {
      id: 3,
      user: "Daniel Roberts",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100",
      rating: 4,
      date_en: "Jan 02, 2024",
      date_es: "02 Ene, 2024",
      comment_en: "Top-quality service! He handled a complex electrical issue with ease and made sure everything was fully tested before finishing. Very honest, skilled, and dedicated to his work.",
      comment_es: "¡Servicio de primera calidad! Manejó un problema eléctrico complejo con facilidad."
    }
  ]
};
