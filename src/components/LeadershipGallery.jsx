import React, { useEffect, useState } from 'react';
import { Images, Users } from 'lucide-react';

const galleryPhotos = [
  { src: '/images/im1.jpg', alt: 'Team integration session'},
  { src: '/images/im2.jpg', alt: 'Team project showcase'},
  { src: '/images/im3.jpg', alt: 'Collaborative project work'},
  { src: '/images/im4.jpg', alt: 'Project achievement'},
  { src: '/images/im5.jpg', alt: 'Team engineering activity'},
];

export default function LeadershipGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || reducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryPhotos.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const getPosition = (index) => {
    let position = index - activeIndex;
    const midpoint = Math.floor(galleryPhotos.length / 2);
    if (position > midpoint) position -= galleryPhotos.length;
    if (position < -midpoint) position += galleryPhotos.length;
    return position;
  };

  return (
    <section aria-labelledby="gallery-title" className="pb-16 md:pb-20 relative overflow-hidden">
      <div className="mb-8">
        <span className="pill-badge pill-badge-cyan mb-3">
          <Users className="w-3.5 h-3.5" />
          People, Purpose & Moments
        </span>
        <h2 id="gallery-title" className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Life in <span className="gradient-text">Motion</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
          A collection of teams, experiences, and memories from the journey.
        </p>
      </div>

      <div
        className="gallery-panorama"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {galleryPhotos.map((photo, index) => {
          const position = getPosition(index);
          const distance = Math.abs(position);
          return (
            <figure
              className={`gallery-card gallery-card-${distance === 0 ? 'active' : distance === 1 ? 'near' : 'far'}${position === 2 ? ' gallery-card-reset' : ''}`}
              key={photo.src}
              style={{ '--gallery-position': position }}
              onClick={() => setActiveIndex(index)}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>
                <Images className="w-3.5 h-3.5" />
                {photo.caption}
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="gallery-dots" aria-label="Choose gallery image">
        {galleryPhotos.map((photo, index) => (
          <button
            type="button"
            key={photo.src}
            className={index === activeIndex ? 'is-active' : ''}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show image ${index + 1}: ${photo.caption}`}
          />
        ))}
      </div>
    </section>
  );
}
