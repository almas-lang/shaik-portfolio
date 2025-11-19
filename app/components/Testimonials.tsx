import Link from 'next/link';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Divya Srinivas',
      title: 'From Architect to a UX Designer',
      image: '/images/divya.svg',
      linkedin: 'https://www.linkedin.com/in/divya-srinivas-designs/',
    },
    {
      name: 'Kritika Singh',
      title: 'Onto Design Leadership',
      image: '/images/kritika.svg',
      linkedin: 'https://www.linkedin.com/in/kritikasinghchauhan/',
    },
    {
      name: 'Rishik Jha',
      title: '0:1 AI Powered Mentor',
      image: '/images/rishik.svg',
      linkedin: 'https://www.linkedin.com/in/rishik-jha/',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#5b3a8f] mb-10 md:mb-16 text-right">
            Real people. Real growth
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {testimonials.map((person, index) => (
              <Link
                key={index}
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-3/2 relative overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                      {person.name}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 font-medium">
                      {person.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="https://senja.io/p/linkedin-5Of/h1GwVy"
              className="inline-block bg-[#E63A46] text-white px-8 py-3 md:px-10 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#d12835] transition-colors"
            >
              Read more stories →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
