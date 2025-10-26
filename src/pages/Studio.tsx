import { Target, Eye, Heart, Award } from 'lucide-react';

export default function Studio() {
  const team = [
    {
      name: 'Alexandra Rivera',
      title: 'Principal Architect',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'With over 20 years of experience, Alexandra leads our design vision with a focus on sustainable and innovative architecture. Her work has been recognized internationally for its bold yet functional approach.',
    },
    {
      name: 'Michael Chen',
      title: 'Senior Designer',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Michael specializes in urban planning and mixed-use developments. His expertise in integrating green spaces into urban environments has transformed numerous cityscapes.',
    },
    {
      name: 'Sophia Martinez',
      title: 'Interior Design Lead',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Sophia brings spaces to life with her keen eye for detail and mastery of contemporary interior design. She seamlessly blends aesthetics with functionality in every project.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description:
        'We push boundaries and embrace cutting-edge technologies to create spaces that define the future of architecture.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description:
        'Our designs are guided by a clear vision that balances aesthetic excellence with practical functionality.',
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description:
        'Environmental responsibility is at the core of our practice, ensuring every project contributes to a better future.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We maintain the highest standards in every aspect of our work, from initial concept to final execution.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Studio</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            A team of passionate architects and designers committed to shaping the built environment
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2010, Urban Homes has established itself as a leading architecture firm
                specializing in innovative, sustainable design. Our multidisciplinary team brings
                together expertise in architecture, urban planning, interior design, and green building
                technologies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe that great architecture has the power to transform lives and communities. Every
                project we undertake is an opportunity to create spaces that inspire, function beautifully,
                and respect the environment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our portfolio spans residential, commercial, cultural, and institutional projects, each one
                reflecting our commitment to design excellence and our clients' unique visions.
              </p>
            </div>

            <div className="relative h-[600px]">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Studio workspace"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-900 rounded-full mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our talented professionals bring diverse expertise and a shared passion for creating
            exceptional architecture
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-96 overflow-hidden rounded-sm mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">{member.title}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We believe in a collaborative, client-centered design process that begins with listening and
              understanding. Our approach combines rigorous research, creative exploration, and technical
              expertise to deliver solutions that exceed expectations.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              From concept to completion, we work closely with our clients, consultants, and builders to
              ensure every detail is executed to perfection. Sustainability, innovation, and timeless
              design are woven into everything we create.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">35+</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Awards Won</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">14</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
