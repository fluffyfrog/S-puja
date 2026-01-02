import { MemberCard } from "./components/MemberCard";
import { EventCard } from "./components/EventCard";
import {
  Calendar,
  Users,
  BookOpen,
  Sparkles,
  Facebook,
  Instagram,
  Palette,
  Hammer,
} from "lucide-react";

export default function App() {
  const committeeMembers = [
    {
      name: "Rajesh Kumar",
      role: "President",
      contact: "+91 98765 43210",
    },
    {
      name: "Priya Sharma",
      role: "Vice President",
      contact: "+91 98765 43211",
    },
    {
      name: "Amit Patel",
      role: "Treasurer",
      contact: "+91 98765 43212",
    },
    {
      name: "Sunita Devi",
      role: "Secretary",
      contact: "+91 98765 43213",
    },
    {
      name: "Vikram Singh",
      role: "Cultural Head",
      contact: "+91 98765 43214",
    },
    {
      name: "Meera Reddy",
      role: "Decoration Head",
      contact: "+91 98765 43215",
    },
  ];

  const events = [
    {
      day: "Day 1",
      date: "Jan 21",
      time: "6:00 AM - 9:00 PM",
      title: "Ribbon cutting ceremony",
      description:
        "Installation of the idol with traditional rituals and prayers. The beginning of our sacred celebration.",
    },
    {
      day: "Day 2",
      date: "Jan 22",
      time: "7:00 AM - 10:00 PM",
      title: "Grand puja day",
      description:
        "Special puja ceremonies throughout the day, in the evening featuring music.",
    },
    {
      day: "Day 3",
      date: "Jan 23",
      time: "6:00 AM - 11:00 PM",
      title: "Bhog Distribution",
      description:
        "Distributing bhog throughout the neighbourhood.",
    },
    {
      day: "Day 4",
      date: "Jan 24",
      time: "6:00 AM - 11:00 PM",
      title: "Idol immersion",
      description: "Grand idol immersion with dance and dhak.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Fade */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.discordapp.com/attachments/701515904575340624/1456586331571491043/Picsart_26-01-02_15-23-15-772.png?ex=6958e73b&is=695795bb&hm=e789d42fb1c856bb161cb08eaadb8cad367b675b0ac9ab75fbda85656b039140&')`,
        }}
      />

      {/* Gradient Overlay for Better Readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-white/40 via-orange-50/50 to-amber-50/45 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white py-12 px-4 shadow-2xl">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 animate-pulse" />
              <h1 className="text-4xl md:text-5xl">
                Saraswati Puja 2026
              </h1>
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>

            <p className="text-xl md:text-2xl mb-2">
              Community Celebration
            </p>
            <p className="text-lg opacity-90">
              January 21 - January 24, 2026
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 py-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-blue-600 hover:text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 text-gray-700"
            aria-label="Facebook"
          >
            <Facebook className="w-10 h-10" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 text-gray-700"
            aria-label="Instagram"
          >
            <Instagram className="w-10 h-10" />
          </a>
        </div>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
          {/* Our Theme Section */}
          <section className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-orange-500">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-8 h-8 text-orange-600" />
              <h2 className="text-orange-800">Our Theme</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                This year's Saraswati Puja celebration embraces
                the theme of{" "}
                <strong className="text-orange-800">
                  "Divine Wisdom and Knowledge"
                </strong>
                , honoring Goddess Saraswati as the embodiment
                of learning, arts, and enlightenment. Our pandal
                design reflects the sacred connection between
                spirituality and education.
              </p>
              <p>
                The decorative theme features traditional
                elements of books, veenas (musical instruments),
                and white lotus flowers symbolizing purity and
                wisdom. The color palette combines pristine
                whites, soft yellows, and vibrant oranges to
                create an atmosphere of serenity and devotion.
              </p>
              <p>
                Our artisans have incorporated intricate Bengali
                alpana (traditional floor art) designs
                throughout the celebration space, depicting
                symbols of knowledge and prosperity. The
                lighting design uses soft white and amber hues
                to create a peaceful ambiance that invites
                contemplation and prayer.
              </p>
            </div>
          </section>

          {/* Idol Maker Section */}
          <section className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-amber-500">
            <div className="flex items-center gap-3 mb-6">
              <Hammer className="w-8 h-8 text-amber-600" />
              <h2 className="text-orange-800">Idol Maker</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-orange-800">
                  Master Artisan: Shri Kartik Pal
                </strong>
              </p>
              <p>
                For the past 15 years, we have been honored to
                work with renowned idol maker{" "}
                <strong>Shri Kartik Pal</strong> from Kumartuli,
                Kolkata - the legendary artist quarter famous
                for its clay idol craftsmanship. With over 30
                years of experience, Shri Pal represents the
                third generation of master sculptors in his
                family.
              </p>
              <p>
                His exquisite craftsmanship brings Goddess
                Saraswati to life with intricate details - from
                the delicate features of her serene face to the
                ornate decorations on her white saree. Each idol
                is handcrafted using traditional methods,
                utilizing eco-friendly clay, natural dyes, and
                sustainable materials that honor both artistry
                and our environment.
              </p>
              <p>
                Shri Pal begins working on our idol three months
                before the celebration, meticulously sculpting
                every detail with devotion and precision. His
                work has been featured in numerous cultural
                exhibitions and has won several awards for
                traditional Bengali idol-making artistry.
              </p>
              <div className="mt-6 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border-l-4 border-orange-600">
                <p className="text-gray-700">
                  <strong className="text-orange-800">
                    Contact the Artist:
                  </strong>{" "}
                  For inquiries about custom idol commissions or
                  to appreciate the craftsmanship, please
                  contact through our organizing committee.
                </p>
              </div>
            </div>
          </section>

          {/* Committee Members Section */}
          <section className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-orange-500">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-orange-600" />
              <h2 className="text-orange-800">
                Organizing Committee
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committeeMembers.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
            <div className="mt-8 text-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong className="text-orange-800">
                  Venue:
                </strong>{" "}
                Community Cultural Center, 123 Main Street, New
                Delhi
              </p>
              <p className="text-gray-700">
                <strong className="text-orange-800">
                  For inquiries:
                </strong>{" "}
                contact@durgapuja2024.org
              </p>
            </div>
          </section>

          {/* Schedule Section */}
          <section className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-amber-500">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-amber-600" />
              <h2 className="text-orange-800">
                Festival Schedule
              </h2>
            </div>
            <div className="space-y-4">
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
            {/* <div className="mt-8 p-6 bg-orange-100 rounded-lg border-l-4 border-orange-600">
              <h4 className="text-orange-900 mb-2">
                Additional Activities
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Free community meals (Bhog) served daily at
                  1:00 PM and 8:00 PM
                </li>
                <li>
                  • Cultural performances every evening from
                  7:00 PM onwards
                </li>
                <li>
                  • Children's activities and competitions
                  throughout the festival
                </li>
                <li>
                  • Traditional Bengali market (Mela) with
                  handicrafts and food stalls
                </li>
                <li>
                  • Photography sessions with the beautifully
                  decorated pandal
                </li>
              </ul>
            </div> */}
          </section>

          {/* About Section */}
          <section className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-orange-500">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-orange-600" />
              <h2 className="text-orange-800">
                About Our Celebration and Club History
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Durga Puja is one of the most significant
                festivals in Hindu culture, celebrating the
                victory of Goddess Durga over the demon
                Mahishasura, symbolizing the triumph of good
                over evil. This ten-day festival honors the
                divine feminine energy and brings communities
                together in devotion, joy, and celebration.
              </p>
              <p>
                Our community has been celebrating Durga Puja
                for over 25 years, bringing together families
                from all backgrounds to experience the spiritual
                richness and cultural vibrancy of this sacred
                festival. What started as a small gathering of
                20 families in 1999 has grown into a grand
                celebration attended by over 500 devotees
                annually.
              </p>
              <p>
                Each year, we handcraft a magnificent idol of
                Goddess Durga with her children - Lakshmi,
                Saraswati, Ganesh, and Kartikeya. Our artisans
                spend months creating intricate designs that
                honor traditional Bengali craftsmanship while
                incorporating modern artistic elements. The
                pandal (temporary structure) is decorated with
                thousands of lights, flowers, and traditional
                motifs creating a divine ambiance.
              </p>
              <p>
                Beyond the religious ceremonies, our celebration
                includes cultural programs featuring classical
                dance performances, devotional music,
                traditional Bengali cuisine, and children's
                activities. This festival is a time for renewal,
                community bonding, and passing our rich heritage
                to the next generation.
              </p>
            </div>
          </section>

          {/* Footer Message */}
          <div className="text-center py-8">
            <div className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-6 rounded-xl shadow-lg">
              <p className="text-xl mb-2">
                🙏 Bhagabati Bharati Devi Namastute 🙏
              </p>
              <p className="text-lg">
                All Are Welcome to Seek the Blessings of Maa
                Saraswati
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}