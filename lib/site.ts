export const site = {
  name: "Netwitcher",
  legalName: "Netwitcher UG (haftungsbeschränkt)",
  slogan: "Magic in Every Click",
  claim: "Digital Agency & Content-Studio in Berlin",
  // Verifizierte Unternehmensdaten (Impressum/Handelsregister)
  url: "https://netwitcher.com",
  email: "info@netwitcher.com",
  phone: "017673247186",
  phoneHref: "tel:017673247186",
  whatsappNumber: "4917673247186",
  city: "Berlin",
  country: "Deutschland",
  street: "Kochhannstraße 6",
  zip: "10249",
  hrb: "HRB 256419 B",
  registerCourt: "Amtsgericht Charlottenburg",
  representative: "Mhd Anas Sadek",
  vatId: "DE364219286",
  calendlyUrl: "https://calendar.app.google/wuaBBFtxvHvxJSga6",
  facebook: "https://www.facebook.com/netwitcher.de",
  instagram: "https://www.instagram.com/netwitcher",
  linkedin: "https://www.linkedin.com/company/netwitcher",
  tiktok: "https://www.tiktok.com/@netwitcher",
} as const;

export const whatsappHref = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;

export const defaultWhatsappText =
  "Hallo Netwitcher! Ich interessiere mich für Content & Marketing und hätte gern ein kostenloses Erstgespräch.";

/** Vier offizielle Social-Links für Header/Footer (beide nutzen dieselbe
 *  Liste statt sie zu duplizieren, siehe SocialIcon in components/icons.tsx).
 *  Labels bewusst nicht lokalisiert — Plattformnamen bleiben in beiden
 *  Sprachen gleich. */
export const socialLinks = [
  { id: "facebook", href: site.facebook, ariaLabel: "Netwitcher auf Facebook" },
  { id: "tiktok", href: site.tiktok, ariaLabel: "Netwitcher auf TikTok" },
  { id: "instagram", href: site.instagram, ariaLabel: "Netwitcher auf Instagram" },
  { id: "whatsapp", href: whatsappHref(), ariaLabel: "Netwitcher auf WhatsApp" },
] as const;
