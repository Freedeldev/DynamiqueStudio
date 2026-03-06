import { Camera, Heart, Building2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Heart,
    title: 'Mariages',
    description: 'Immortalisez le plus beau jour de votre vie avec des photos exceptionnelles qui racontent votre histoire.',
  },
  {
    icon: Camera,
    title: 'Portraits',
    description: 'Des portraits professionnels qui capturent votre personnalité unique et votre essence.',
  },
  {
    icon: Building2,
    title: 'Événements d\'entreprise',
    description: 'Couverture photographique complète de vos événements professionnels et corporatifs.',
  },
  {
    icon: Sparkles,
    title: 'Occasions spéciales',
    description: 'Anniversaires, baptêmes, et tous vos moments précieux capturés avec professionnalisme.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services photographiques pour tous vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
