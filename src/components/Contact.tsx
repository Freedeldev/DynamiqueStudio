import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message envoyé avec succès !");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Erreur lors de l'envoi du message.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-nous
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prêt à capturer vos moments précieux ? Contactez-nous dès aujourd'hui
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 gap-12">


          {/* CONTACT INFO */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Informations de contact
              </h3>

              <p className="text-gray-600 mb-8">
                N'hésitez pas à nous contacter pour toute question ou demande
                de devis. Nous sommes là pour vous aider.
              </p>
            </div>


            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Téléphone</h4>
                  <p className="text-gray-600">
                    +229 0196571070
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">
                    frejusdery@gmail.com
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Adresse</h4>
                  <p className="text-gray-600">
                    Bénin, Cotonou
                  </p>
                </div>
              </div>

            </div>

          </motion.div>


          {/* CONTACT FORM */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
            >

              <div className="space-y-6">


                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  />
                </div>


                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  />
                </div>


                <div>
                  <label className="block text-sm font-medium mb-2">
                    Téléphone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  />
                </div>


                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black resize-none"
                  />
                </div>


                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </button>

              </div>

            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
}