import React from "react";
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
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const committeeMembers = [
    {
      name: "Madan Mitra",
      role: "Chairman",
    },
    {
      name: "Amit Mitra",
      role: "President",
    },
    {
      name: "Debasish Bose",
      role: "Secretary",
    },
    {
      name: "Soumen Dutta Roy",
      role: "Working president",
    },
    {
      name: "Shibayan Nandy",
      role: "Convenor",
    },
    {
      name: "Abhijit Ghosh",
      role: "Convenor",
    },
    {
      name: "Suvojit Chandra",
      role: "Convenor",
    },
    {
      name: "Krishanu Halder",
      role: "Convenor",
    },
    {
      name: "Bablu Singh & Papiya Singh",
      role: "Chief guest",
    },
  ];

  const organizingCommitteeMembers = [
    {
      name: "Debdeep Dutta",
      role: "Organizing Committee",
    },
    {
      name: "Debayan Chakraborty",
      role: "Organizing Committee",
    },
    {
      name: "Sudipta Sadhukhan",
      role: "Organizing Committee",
    },
  ];

  const leads = [
    {
      name: "Sreenjoy Kumar Dey",
      role: "Social Media Head",
    },
    {
      name: "Aditya Chatterjee",
      role: "Creative Head",
    },
    {
      name: "Aryan Nandan",
      role: "Fund Manager",
    },
    {
      name: "Sayon Banerjee",
      role: "Supervisor",
    },
    {
      name: "Roni Nandi",
      role: "Supervisor",
    },
    {
      name: "Tanmay Sadhukhan",
      role: "Supervisor",
    },
    {
      name: "Sayan Roy Choudhury",
      role: "Event management head (puja)",
    },
    {
      name: "Akshit Chandra",
      role: "Event management head (puja)",
    },
    {
      name: "Chirag Agarwal",
      role: "Event management head (puja)",
    },
    {
      name: "Ramik Mukherjee",
      role: "Technical Head",
    },
    {
      name: "Sourab Chakraborty",
      role: "Bhog Commitee Head",
    }
  ];

  const events = [
    {
      day: "Day 1",
      date: "Jan 22",
      title: "Inauguration ceremony of Saraswati Puja 2026"
    },
    {
      day: "Day 2",
      date: "Jan 23",
      title: "Puja",
    },
    {
      day: "Day 3",
      date: "Jan 24",
      title: "Bhog Distribution",
    },
    {
      day: "Day 4",
      date: "Jan 25",
      title: "Grand Immersion"
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Fade */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://finzmetadata.s3.ap-south-1.amazonaws.com/bgimage.png')`,
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
              January 22 - January 25, 2026
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 py-8">
          <a
            href="https://www.facebook.com/trtp.sd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-blue-600 hover:text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 text-gray-700"
            aria-label="Facebook"
          >
            <Facebook className="w-10 h-10" />
          </a>
          <a
            href="https://www.instagram.com/turf_road?igsh=eXhpdjZ6c2RsaWd2"
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
              This year’s Saraswati Puja celebration embraces the theme of{" "}
                <strong className="text-orange-800">
                  "Let the Cute Light of Knowledge Bloom Even in Little Minds."
                </strong>
                , A child’s mind is filled with curiosity, innocence, and a natural desire to learn—these are the seeds from which the first light of knowledge emerges.
              </p>
              <p>
              In today’s world, where education is often burdened by pressure, competition, and excessive dependence on technology, children sometimes lose the joy of learning. Through this theme, we wish to convey that knowledge is not a burden but a joyful journey that grows through play, imagination, and curiosity. In small hands holding books and pens, in eyes filled with dreams and minds full of questions, lies the gentle glow of future wisdom.
              </p>
              <p>
              Here, Goddess Saraswati is not only the goddess of learning but also a compassionate guide for children—one who ignites the light of knowledge with love, care, and joy. The decorations, colors, and symbolic elements of the pandal reflect childlike simplicity and softness, allowing every visitor to reconnect, even briefly, with their own childhood.
              </p>
              <p>
              Through this Saraswati Puja, we pray—
              May every little mind be illuminated by the light of knowledge,
              May learning be joyful,
              And may the future be enlightened with humanity and wisdom.
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
                  Shri Dipankar Paul
                </strong>
              </p>
              <p>
              Dipankar Paul is a prominent artist and sculptor from Kumortuli, Kolkata, known for his innovative approach to traditional idol-making. He gained widespread attention for creating a viral “cutest” idol, which introduced a fresh, charming aesthetic to Kolkata’s Puja culture. Alongside this trend, his creations often reflect contemporary social and current events, blending tradition with modern expression. Through his unique artistic vision, Dipankar Paul has contributed to redefining idol aesthetics while staying rooted in the rich heritage of Kumortuli craftsmanship
              </p>
            </div>
          </section>

          {/* Committee Members Section */}
          <section className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-orange-500">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-orange-600" />
              <h2 className="text-orange-800">
                Personage
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committeeMembers.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </section>

          <div className="flex items-center justify-center gap-6 py-8">
            <h1 className="text-orange-800 text-2xl font-bold text-center md:text-5xl">Now to the Workforce</h1>
        </div>
        <section className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-orange-500">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <h2 className="text-orange-800 text-lg font-bold text-center md:text-3xl">
                Made possible with
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizingCommitteeMembers.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
            
          </section>

          <section className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-orange-500">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-orange-600" />
              <h2 className="text-orange-800">
                Leads
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leads.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
            <div className="mt-8 text-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong className="text-orange-800">
                  Venue:
                </strong>{" "}
                24 Turf Road, Bhowanipore, Kolkata - 700025
              </p>
              <p className="text-gray-700">
                <strong className="text-orange-800">
                  For inquiries:
                </strong>{" "}
                 8777362900
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
              Our Puja Journey: From Little Steps to Big Dreams
              </p>
              <p>
              Our Saraswati Puja journey began in 2021 with a small yet sincere effort and a big dream. With limited resources but unlimited passion, we took our first step into organising Saraswati Puja by introducing a creative and eco-conscious theme made entirely from plastic spoons. What seemed like a simple material became a powerful symbol of innovation, teamwork, and determination.
              </p>
              <p>
              Over the years, each celebration has marked a new milestone. From a modest setup to more structured planning, stronger coordination, and richer thematic concepts, our journey has been one of continuous learning and growth. Every year, we have aimed to improve—not just in scale, but in creativity, responsibility, and community involvement.
              </p>
              <p>
              What started as a small initiative has now evolved into a confident stride toward bigger visions. Each Puja reflects our collective effort, dedication, and the belief that even little steps can lead to meaningful transformations. As we move forward, we remain rooted in our values while embracing new ideas and bigger dreams.
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
          <div className="flex items-center justify-center gap-6 py-2">
            <h1 className="text-orange-800 text-lg font-bold text-center md:text-2xl">Support Us by donating</h1>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-lg">
            <img src="https://finzmetadata.s3.ap-south-1.amazonaws.com/Screenshot+from+2026-01-08+01-37-04.png" alt="UPI" className="w-50 h-50 rounded-lg" />
        </div>
        </div>
      </div>
      <Analytics />
    </div>
  );
}
