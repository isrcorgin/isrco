import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const innovationTopics = [
  { title: 'Sustainable Development', description: 'Projects that focus on creating solutions for sustainable living and environmental conservation.', imageUrl: '/img/ino/2.png' },
  { title: 'Smart Cities', description: 'Innovations aimed at improving urban living through smart technologies and IoT.', imageUrl: '/img/ino/3.png' },
  { title: 'Healthcare', description: 'Developments in medical technology, healthcare systems, and solutions that enhance patient care and health services.', imageUrl: '/img/ino/5.png' },
  { title: 'Agriculture and Food Security', description: 'Projects that address challenges in agriculture, farming techniques, and food production to ensure food security.', imageUrl: '/img/ino/9.png' },
  { title: 'Education and Learning', description: 'Innovations that enhance educational systems, learning methodologies, and access to education.', imageUrl: '/img/ino/7.png' },
  { title: 'Energy Solutions', description: 'Renewable energy projects and technologies aimed at efficient energy use and management.', imageUrl: '/img/ino/6.png' },
  { title: 'Robotics and Automation', description: 'Advancements in robotics, automation, and AI for various applications.', imageUrl: '/img/ino/4.png' },
  { title: 'Transport and Mobility', description: 'Solutions that improve transportation systems, reduce traffic congestion, and promote sustainable mobility.', imageUrl: '/img/ino/1.png' },
  { title: 'Disaster Management', description: 'Technologies and systems that aid in disaster prediction, management, and recovery.', imageUrl: '/img/ino/8.png' },
];

const InnovationTopics = () => {
  return (
    <>
      <Head>
        <style>{`
          .card-hover {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }
          .card-hover:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
          }
          .card-hover .card-img-top {
            height: 200px;
            object-fit: cover;
            border-radius: 8px 8px 0 0;
          }
          h2 {
            color: #FF2D55;
            font-weight: 700;
            text-align: center;
            margin-bottom: 30px;
          }
          .card-title {
            font-weight: 600;
          }
          .container {
            margin-top: 50px;
          }
          .outer-card {
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease-in-out;
          }
          .outer-card:hover {
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </Head>
      <div className="container my-5">
        <div className="row">
        <h2 className='text-center'>Innovation Topics</h2>
          <div className="col-md-12">
            <div className="card outer-card shadow-sm">
              <div className="card-body">
                <div className="row">
                  {innovationTopics.map((topic, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                      <div className="card shadow-sm h-100 card-hover">
                        <Image src={topic.imageUrl} className="card-img-top" alt={topic.title} width={300} height={200} />
                        <div className="card-body">
                          <h5 className="card-title">{topic.title}</h5>
                          <p className="card-text">{topic.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnovationTopics;
