import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useState } from 'react';
import { X } from 'lucide-react';
import portraitImg from "../assets/imgs/photo60.jpg";
import portraitImg2 from "../assets/imgs/photo57.jpg";
import portraitImg3 from "../assets/imgs/photo59.jpeg";


const galleryImages = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772813420/photo1_amivyw.jpg',
    alt: 'Portrait en studio avec éclairage doux',
    category: 'Portrait',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772813907/photo.2_hkbfnq.jpg',
    alt: 'Portrait d\'une jeune femme',
    category: 'Portrait',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814109/photo2_i8ab0v.jpg',
    alt: 'Portrait d\'une femme elegante',
    category: 'Portrait',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814071/photo6_m1zstp.jpg',
    alt: 'Portrait eclairage noir et blanc',
    category: 'Portrait',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814150/photo20_kuallu.jpg',
    alt: 'Jeune homme en studio',
    category: 'Portrait',
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814088/photo11_qwec9o.jpg',
    alt: 'Portrait fille souriante',
    category: 'Portrait',
  },
  {
    id: 7,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814190/photo16_epbsyv.jpg',
    alt: 'Portrait d\'une femme eclairage naturel',
    category: 'Portrait',
  },
  {
    id: 8,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814155/photo15_kqerbz.jpg',
    alt: 'portrait d\'une femme au bord de la piscine',
    category: 'Portrait',
  },
  {
    id: 9,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814180/photo22_x2efoh.jpg',
    alt: 'Portrait d\'une femme avec au studio avec un fond blanc et un éclairage doux',
    category: 'Portrait',
  },
  {
    id: 10,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814155/photo21_ucsxv0.jpg',
    alt: 'modèle masculin en studio',
    category: 'Portrait',
  },
  {
    id: 11,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815047/photo41_x86iac.jpg',
    alt: 'jeune enfant en studio avec un éclairage doux',
    category: 'Portrait',
  },
  {
    id: 12,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815090/photo48_uu8lk1.jpg',
    alt: 'Couple de mariés apres la cérémonie de mariage',
    category: 'Mariage',
  },
  {
    id: 13,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815070/photo42_ek2qcj.jpg',
    alt: 'Deux mannequins posant pour une séance de mode a la plage',
    category: 'Mode',
  },
  {
    id: 14,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815039/photo30_bg8a8r.jpg',
    alt: 'Mannequin posant pour une séance de mode',
    category: 'Mode',
  },
  {
    id: 15,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815174/photo64_rl4kab.jpg',
    alt: 'mannequin à la plage pour une séance de mode',
    category: 'Mode',
  },
  {
    id: 16,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815035/photo29_sylrtf.jpg',
    alt: 'Modèle masculin posant pour une séance de mode en studio',
    category: 'Mode',
  },
  {
    id: 17,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772813958/photo4_vdtiin.jpg',
    alt: 'modèle féminin posant pour une séance de mode en studio avec un éclairage doux',
    category: 'Portrait',
  },
  {
    id: 18,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815128/photo47_php9or.jpg',
    alt: 'Mariés posant pour une séance de photos de mariage en extérieur avec un éclairage naturel',
    category: 'Mariage',
  },
  {
    id: 19,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815131/photo62_wnqcu2.jpg',
    alt: 'Photographe capturant des moments lors d\'un événement avec un éclairage naturel',
    category: 'Événement',
  },
  {
    id: 20,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815123/photo39_n5btuq.jpg',
    alt: 'Jeune dame posant avec son enfant au studio',
    category: 'Famille',
  },
  {
    id: 21,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814950/photo31_y0rhnx.jpg',
    alt: 'Deux jeunes dames posant pour une séance de photos',
    category: 'Famille',
  },
  {
    id: 22,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814966/photo34_xhuh7x.jpg',
    alt: '',
    category: 'Portrait',
  },
  {
    id: 23,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814153/photo9_rvyo9b.jpg',
    alt: 'Jeunes dames en hijab posant pour une séance de mode en studio avec un éclairage doux',
    category: 'Portrait',
  },
   {
    id: 24,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814948/photo32_vwimgc.jpg',
    alt: 'Jeunes posant au studio',
    category: 'Portrait',
  },
   {
    id: 25,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772814206/photo23_rwz3av.jpg',
    alt: 'Fashion shoot en studio avec un modèle féminin portant une tenue élégante',
    category: 'Mode',
  },
   {
    id: 26,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815130/photo50_o6oxgp.jpg',
    alt: 'Model féminin posant pour une séance de mode en studio avec un éclairage doux',
    category: 'Portrait',
  },
  {
    id: 27,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815157/photo53_gtjahq.jpg',
    alt: 'Modele feminin posant à l\'extérieur avec une éclairage naturel',
    category: '',
  },
  {
    id: 28,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815029/photo36_h7tebm.jpg',
    alt: 'Jeunes dames posant au studio',
    category: 'Famille',
  },
  {
    id: 29,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772827560/IMG_0298_qhh9su.jpg',
    alt: 'Petite fille posant pour une séance de photos en studio avec un éclairage doux',
    category: 'Famille',
  },
  {
    id: 30,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772827579/IMG_0391_fmpsmf.jpg',
    alt: 'Jeune homme posant dans un bureau pour une séance de photos corporate avec un éclairage professionnel',
    category: 'Corporate',
  },
  {
    id: 31,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772826780/photo52_syl4fy.jpg',
    alt: 'Deux mannequins posant pour une séance de mode à la plage avec un éclairage naturel',
    category: 'Mode',
  },
  {
    id: 32,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772827567/IMG_0386_nntq0n.jpg',
    alt: 'Jeune femme posant pour une séance de portrait en studio avec un éclairage doux',
    category: 'Portrait',
  },
  {
    id: 33,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772827566/IMG_0387_bg7l2g.jpg',
    alt: 'Jeune homme posant pour une séance de portrait en studio avec un éclairage doux',
    category: 'Portrait',
  },
  {
    id: 34,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772827607/IMG_0411_pypcg0.jpg',
    alt: 'Jeune homme posant avec des fruits pour une séance de portrait en studio avec un éclairage doux',
    category: 'Portrait',
  },
  {
    id: 35,
    src: portraitImg,
    alt: 'Grand pere posant pour une séance de portrait à l\'extérieur avec un éclairage naturel',
    category: 'portrait',
  },
  {
    id: 36,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772815151/photo51_j5vvhx.jpg',
    alt: 'Jeune femme posant pour une photo en naturel',
    category: 'Portrait',
  },
  {
    id: 37,
    src: portraitImg2,
    alt: 'Jeune femme posant dans la nature avec une éclairage naturel ',
    category: 'Portrait',
  },
  {
    id: 38,
    src: portraitImg3,
    alt: 'Jeune artiste posant pour une séance de portrait ',
    category: 'Portrait',
  },
  {
    id: 39,
    src: 'https://res.cloudinary.com/deoyusg94/image/upload/v1772827603/IMG_0442_aqnp64.jpg',
    alt: 'Portrait d\'une jeune femme posant pour une séance de portrait en studio avec un éclairage doux',
    category: 'Portrait',
  },
  {
    id: 40,
    src:'https://res.cloudinary.com/deoyusg94/image/upload/v1772814964/photo26_txjcrp.jpg',
    alt: 'Jeune femme posant pour une séance de portrait en studio avec un éclairage doux',
    category: 'Mode',
  },
];

const categories = [
  'Tous',
  'Mariage',
  'Portrait',
  'Famille',
  'Corporate',
  'Mode',
  'Événement',
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === 'Tous'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Galerie Photo</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explorez notre collection de photos réalisées lors de différents événements et sessions
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
            <Masonry gutter="16px">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">{image.category}</span>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Fermer"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
              <ImageWithFallback
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {filteredImages[selectedImage].alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
