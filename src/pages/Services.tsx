import { Building2, Home, TreePine, Ruler, Pencil, FileText } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Architecture Design',
      description:
        'Comprehensive architectural design services from initial concept through construction documentation. We create innovative, functional spaces that respond to site conditions, program requirements, and client aspirations.',
      features: [
        'Conceptual Design',
        'Schematic Design',
        'Design Development',
        'Construction Documents',
        'Construction Administration',
      ],
    },
    {
      icon: Home,
      title: 'Interior Design',
      description:
        'Complete interior design solutions that harmonize with architectural vision. We craft spaces that are both beautiful and livable, paying meticulous attention to materials, lighting, and spatial flow.',
      features: [
        'Space Planning',
        'Material Selection',
        'Custom Furniture Design',
        'Lighting Design',
        'Color Consultation',
      ],
    },
    {
      icon: TreePine,
      title: 'Green Building',
      description:
        'Sustainable design strategies that minimize environmental impact while maximizing performance and comfort. We integrate energy efficiency, renewable materials, and healthy indoor environments into every project.',
      features: [
        'LEED Certification',
        'Energy Modeling',
        'Sustainable Materials',
        'Passive Design Strategies',
        'Green Roof Systems',
      ],
    },
    {
      icon: Ruler,
      title: 'Urban Planning',
      description:
        'Strategic planning for neighborhoods, districts, and communities. We design vibrant, walkable places that foster social interaction and economic vitality while respecting existing context and character.',
      features: [
        'Master Planning',
        'Mixed-Use Development',
        'Transit-Oriented Design',
        'Public Space Design',
        'Zoning Analysis',
      ],
    },
    {
      icon: Pencil,
      title: 'Renovation & Adaptive Reuse',
      description:
        'Breathing new life into existing structures through thoughtful renovation and adaptive reuse. We preserve historic character while introducing modern functionality and contemporary aesthetics.',
      features: [
        'Historic Preservation',
        'Building Assessment',
        'Code Compliance',
        'Structural Analysis',
        'Modern Integration',
      ],
    },
    {
      icon: FileText,
      title: 'Consultancy',
      description:
        'Expert architectural consultation for developers, institutions, and property owners. We provide feasibility studies, design reviews, and strategic guidance to ensure project success.',
      features: [
        'Feasibility Studies',
        'Site Analysis',
        'Budget Planning',
        'Design Review',
        'Code Consultation',
      ],
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'We begin by listening to understand your vision, requirements, and constraints. Site analysis and programming establish project foundations.',
    },
    {
      number: '02',
      title: 'Concept',
      description:
        'Through sketches and models, we explore design ideas that respond to your needs. Collaborative feedback refines the direction.',
    },
    {
      number: '03',
      title: 'Development',
      description:
        'Design concepts are developed in detail, addressing materials, systems, and construction methods. Coordination with engineers ensures feasibility.',
    },
    {
      number: '04',
      title: 'Documentation',
      description:
        'Comprehensive construction documents and specifications provide clear direction for builders. Permit applications are prepared and submitted.',
    },
    {
      number: '05',
      title: 'Construction',
      description:
        'We provide construction administration, reviewing submittals, answering questions, and observing progress to ensure design intent is realized.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Comprehensive design solutions tailored to your unique needs
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Urban Homes provides a full spectrum of architectural services, from initial concept to
              final construction. Our integrated approach ensures seamless coordination and exceptional
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-sm mb-6 group-hover:bg-gray-800 transition-colors">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              A systematic approach that guides projects from vision to reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-gray-700 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px]">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Design process"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Urban Homes
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We work closely with clients, consultants, and builders to ensure everyone is aligned
                    and working toward shared goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Design Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our award-winning team brings creativity, technical expertise, and attention to detail
                    to every project.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Focus</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Environmental responsibility guides our design decisions, creating buildings that
                    perform better and last longer.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With over 150 completed projects and 35 industry awards, we have demonstrated
                    consistent excellence in architectural design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how our services can help you achieve your goals
          </p>
          <a
            href="#contact"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-sm font-semibold uppercase tracking-wider hover:bg-gray-800 transition-all"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
