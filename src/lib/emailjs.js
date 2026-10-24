import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  templates: {
    pooja: import.meta.env.VITE_EMAILJS_POOJA_TEMPLATE_ID,
    astrology: import.meta.env.VITE_EMAILJS_ASTROLOGY_TEMPLATE_ID,
  },
};

export async function sendFormEmail(formType, templateParams) {
  const templateConfig = {
    pooja: {
      id: EMAILJS_CONFIG.templates.pooja,
      envName: 'VITE_EMAILJS_POOJA_TEMPLATE_ID',
    },
    astrology: {
      id: EMAILJS_CONFIG.templates.astrology,
      envName: 'VITE_EMAILJS_ASTROLOGY_TEMPLATE_ID',
    },
  }[formType];

  if (!templateConfig) {
    throw new Error(`Unsupported EmailJS form type: ${formType}`);
  }

  const missingConfig = [
    ['VITE_EMAILJS_SERVICE_ID', EMAILJS_CONFIG.serviceId],
    ['VITE_EMAILJS_PUBLIC_KEY', EMAILJS_CONFIG.publicKey],
    [templateConfig.envName, templateConfig.id],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missingConfig.length > 0) {
    throw new Error(`Missing EmailJS configuration: ${missingConfig.join(', ')}`);
  }

  return emailjs.send(EMAILJS_CONFIG.serviceId, templateConfig.id, templateParams, {
    publicKey: EMAILJS_CONFIG.publicKey,
  });
}
