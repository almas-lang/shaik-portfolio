export default function ClientsSection() {
  const clients = [
    { name: 'Yokogawa', description: 'Industrial Automation' },
    { name: 'Lighthouse Canton', description: 'Wealth Management' },
    { name: 'GetCopayHelp', description: 'Patient Financial Assistance' },
    { name: 'To the New', description: 'Servicing Banking, Travel' },
    { name: 'Credit Saison', description: 'NBFC, Loan & Credit Line' },
    { name: 'Tata Sky', description: 'Entertainment' },
    { name: 'Milaap', description: 'Social Crowdfunding' },
    { name: 'Xperience Wave', description: 'Education, Health' },
    { name: 'Motus', description: 'Banking, Vehicle reimbursement' },
    { name: 'Fortra', description: 'Data Security' },
    { name: 'KredX', description: 'Supply chain finance' },
    { name: 'Westcon-Comstor', description: 'Servicing, IT distributor' },
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
                className="bg-white p-5 md:p-6 rounded-lg border-b-4 border-transparent hover:border-[#5b3a8f] transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {client.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
