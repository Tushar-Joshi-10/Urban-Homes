import { ArrowRight, Award, Users, Building2 } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const featuredProjects = [
    {
      id: 1,
      title: 'Skyline Residences',
      category: 'Residential',
      year: '2024',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Modern high-rise living in the heart of the city',
    },
    {
      id: 2,
      title: 'Green Valley Office Park',
      category: 'Commercial',
      year: '2023',
      image: 'https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Sustainable workspace design with natural integration',
    },
    {
      id: 3,
      title: 'Lakeside Cultural Center',
      category: 'Cultural',
      year: '2023',
      image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Contemporary arts and community gathering space',
    },
    {
      id: 4,
      title: 'Urban Loft Apartments',
      category: 'Residential',
      year: '2024',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Sophisticated urban living with industrial aesthetics',
    },
  ];

  const stats = [
    { icon: Building2, value: '150+', label: 'Projects Completed' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Award, value: '35+', label: 'Awards Won' },
  ];

  const testimonials = [
    {
      quote: 'Urban Homes transformed our vision into reality. Their attention to detail and innovative approach exceeded all expectations.',
      author: 'Sarah Mitchell',
      role: 'CEO, TechCorp',
    },
    {
      quote: 'The team\'s commitment to sustainability and modern design made our office space both beautiful and functional.',
      author: 'James Rodriguez',
      role: 'Founder, GreenStart',
    },
    {
      quote: 'Working with Urban Homes was a seamless experience. They delivered a stunning residential project on time and within budget.',
      author: 'Emily Chen',
      role: 'Property Developer',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Building Modern
            <br />
            Urban Spaces
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Innovative architectural design meets sustainable practices to create inspiring environments
          </p>
          <button
            onClick={() => onNavigate('projects')}
            className="bg-white text-gray-900 px-8 py-4 rounded-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-all inline-flex items-center space-x-2 group"
          >
            <span>View Our Work</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon size={48} className="mx-auto mb-4 text-gray-900" />
                  <div className="text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Creating Spaces That Inspire
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Urban Homes is a forward-thinking architecture firm dedicated to designing innovative,
              sustainable, and functional spaces. Our approach combines cutting-edge technology with
              timeless design principles to create buildings that enhance communities and stand the test
              of time.
            </p>
            <button
              onClick={() => onNavigate('studio')}
              className="mt-8 text-gray-900 font-semibold uppercase tracking-wider inline-flex items-center space-x-2 group hover:text-gray-600 transition-colors"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Projects</h2>
            <button
              onClick={() => onNavigate('projects')}
              className="hidden md:flex text-gray-900 font-semibold uppercase tracking-wider items-center space-x-2 group hover:text-gray-600 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden bg-gray-100"
                onClick={() => onNavigate('projects')}
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm uppercase tracking-wider text-gray-500">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="md:hidden mt-8 mx-auto flex text-gray-900 font-semibold uppercase tracking-wider items-center space-x-2 group hover:text-gray-600 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-sm">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-700 pt-6">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your architectural vision to life
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gray-900 text-white px-8 py-4 rounded-sm font-semibold uppercase tracking-wider hover:bg-gray-800 transition-all inline-flex items-center space-x-2 group"
          >
            <span>Get In Touch</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
