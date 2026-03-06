import { motion } from 'motion/react';
import { Award, Users, Camera } from 'lucide-react';
import aboutImg from "../assets/imgs/about.jpg";
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { icon: Camera, value: '10+', label: 'Années d\'expérience' },
  { icon: Users, value: '500+', label: 'Clients satisfaits' },
  { icon: Award, value: '10+', label: 'Récompenses' },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={aboutImg}
                alt="About photographer"
                className="w-full h-125 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black/10 rounded-lg -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">À propos de nous</h2>
            <p className="text-lg text-gray-600 mb-6">
             Dynamique Studio Photographie capture l’essence de chaque instant à travers 
             des images authentiques et intemporelles. 
            </p>
            <p className="text-lg text-gray-600 mb-8">
               Spécialisés dans la photographie professionnelle, nous accompagnons particuliers, 
                entreprises et marques dans la création de visuels percutants : portraits, shootings mode, 
                événements et projets artistiques. Chaque séance est soigneusement préparée afin de garantir 
                un rendu fidèle à votre identité et à vos objectifs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
