import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Cultural', 'Urban Planning'];

  const projects = [
    {
      id: 1,
      title: 'Skyline Residences',
      category: 'Residential',
      year: '2024',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A 45-story luxury residential tower featuring sustainable design and breathtaking city views.',
    },
    {
      id: 2,
      title: 'Green Valley Office Park',
      category: 'Commercial',
      year: '2023',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A LEED Platinum certified office complex with integrated green spaces and natural ventilation.',
    },
    {
      id: 3,
      title: 'Lakeside Cultural Center',
      category: 'Cultural',
      year: '2023',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A modern arts venue combining performance spaces, galleries, and public gathering areas.',
    },
    {
      id: 4,
      title: 'Urban Loft Apartments',
      category: 'Residential',
      year: '2024',
      location: 'Brooklyn, NY',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Industrial-chic apartments preserving historic character while adding modern amenities.',
    },
    {
      id: 5,
      title: 'Tech Innovation Hub',
      category: 'Commercial',
      year: '2023',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/2412606/pexels-photo-2412606.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A collaborative workspace designed for technology startups with flexible, adaptive spaces.',
    },
    {
      id: 6,
      title: 'Riverside Public Library',
      category: 'Cultural',
      year: '2022',
      location: 'Portland, OR',
      image: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A community learning center featuring sustainable materials and abundant natural light.',
    },
    {
      id: 7,
      title: 'Downtown Master Plan',
      category: 'Urban Planning',
      year: '2024',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Comprehensive urban redesign prioritizing walkability, green spaces, and mixed-use development.',
    },
    {
      id: 8,
      title: 'Harbor View Residences',
      category: 'Residential',
      year: '2023',
      location: 'Boston, MA',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Waterfront condominiums designed to maximize views and natural light in every unit.',
    },
    {
      id: 9,
      title: 'Central Shopping District',
      category: 'Commercial',
      year: '2022',
      location: 'Los Angeles, CA',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A mixed-use retail and dining destination integrating indoor and outdoor spaces.',
    },
    {
      id: 10,
      title: 'Waterfront Park Pavilion',
      category: 'Cultural',
      year: '2024',
      location: 'Miami, FL',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'An open-air structure providing shelter and gathering space for coastal events and activities.',
    },
    {
      id: 11,
      title: 'Transit-Oriented Development',
      category: 'Urban Planning',
      year: '2023',
      location: 'Denver, CO',
      image: 'https://images.pexels.com/photos/1214259/pexels-photo-1214259.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'A sustainable neighborhood design centered around public transportation and pedestrian access.',
    },
    {
      id: 12,
      title: 'Mountain View Estates',
      category: 'Residential',
      year: '2022',
      location: 'Boulder, CO',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Luxury homes designed to harmonize with the natural landscape and mountain vistas.',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Projects</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Explore our portfolio of innovative architectural solutions
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-sm uppercase tracking-wider font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative h-80 overflow-hidden rounded-sm mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight
                      size={32}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-gray-500">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to hear about your vision and explore how we can bring it to life
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-sm font-semibold uppercase tracking-wider hover:bg-gray-800 transition-all group"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
