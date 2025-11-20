import Image from 'next/image';

export default function ClientsSection() {
  const clients = [
    { name: 'Yokogawa', description: 'Industrial Automation', logo: '/images/Logos/yokogawa.jpeg' },
    { name: 'Lighthouse Canton', description: 'Wealth Management', logo: '/images/Logos/LC.png' },
    { name: 'GetCopayHelp', description: 'Patient Financial Assistance', logo: '/images/Logos/Getcopay.jpeg' },
    { name: 'To the New', description: 'Servicing Banking, Travel', logo: '/images/Logos/tothenew.jpeg' },
    { name: 'Credit Saison', description: 'NBFC, Loan & Credit Line', logo: '/images/Logos/creditsaison.png' },
    { name: 'Tata Sky', description: 'Entertainment', logo: '/images/Logos/Tata_Sky.webp' },
    { name: 'Milaap', description: 'Social Crowdfunding', logo: '/images/Logos/milaap.jpeg' },
    { name: 'Xperience Wave', description: 'Education, Health', logo: '/images/Logos/xw.png' },
    { name: 'Motus', description: 'Banking, Vehicle reimbursement', logo: '/images/Logos/motus.jpeg' },
    { name: 'Fortra', description: 'Data Security', logo: '/images/Logos/fortra.png' },
    { name: 'KredX', description: 'Supply chain finance', logo: '/images/Logos/kredx.jpeg' },
    { name: 'Westcon-Comstor', description: 'Servicing, IT distributor', logo: '/images/Logos/Westcon-Comstor.jpeg' },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5b3a8f] mb-8 md:mb-12 lg:mb-16">
            Worked with 20+ businesses
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-5 md:p-6 rounded-lg border-b-4 border-transparent hover:border-[#5b3a8f] transition-all duration-300 flex items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {client.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">{client.description}</p>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
