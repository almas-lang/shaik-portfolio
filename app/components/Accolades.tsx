import Image from 'next/image';

export default function Accolades() {
  const awards = [
    {
      title: 'Best Innovator Award',
      organization: 'Xperience Wave - For pioneering UX strategies and programs',
      image: '/images/accolade1.svg',
    },
    {
      title: 'Top Mentor 2024',
      organization: 'For guiding designers to career success',
      image: '/images/accolade2.svg',
    },
    {
      title: 'Best Speaker Award 2023',
      organization: 'GA2023 - For impactful design talks and sessions',
      image: '/images/accolade3.svg',
    },
    {
      title: 'Guest Faculty Recognition',
      organization: 'LetsUpgrade - Contributions to design education',
      image: '/images/accolade4.svg',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-16 text-left">
            Accolades
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 md:mb-6 flex justify-center">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={200}
                    height={200}
                    className="w-auto h-auto object-contain"
                  />
                </div>
                {/* <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{award.title}</h3> */}
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed px-2">
                  {award.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
