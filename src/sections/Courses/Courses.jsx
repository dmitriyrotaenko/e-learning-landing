import './Courses.scss';
import Section from '@/layout/Section';
import Button from '@/components/Button';
import { Image } from 'minista';

const coursesData = [
  {
    title: 'Web Design Fundamentals',
    description: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    meta: {
      duration: '4 Weeks',
      level: 'Beginner',
      author: 'John Doe'
    },
    img: '1.png'
  },
  {
    title: 'UI/UX Design',
    description: 'Master the art of user experience design, creating intuitive and engaging interfaces that enhance user satisfaction and satisfaction.',
    meta: {
      duration: '6 Weeks',
      level: 'Intermediate',
      author: 'Emily Johnson'
    },
    img: '2.png'
  },
  {
    title: 'Web Development',
    description: 'Learn the fundamentals of web development, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    meta: {
      duration: '8 Weeks',
      level: 'Beginner',
      author: 'David Brown'
    },
    img: '3.png'
  },
  {
    title: 'Digital Marketing',
    description: 'Learn the fundamentals of digital marketing, including SEO, PPC, and social media marketing. Develop the skills to create visually appealing and user-friendly websites.',
    meta: {
      duration: '4 Weeks',
      level: 'Beginner',
      author: 'John Doe'
    },
    img: '4.png'
  },
  {
    title: 'Content Marketing',
    description: 'Learn the fundamentals of content marketing, including SEO, PPC, and social media marketing. Develop the skills to create visually appealing and user-friendly websites.',
    meta: {
      duration: '4 Weeks',
      level: 'Beginner',
      author: 'John Doe'
    },
    img: '5.png'
  },
  {
    title: 'Frontend Development',
    description: 'Learn the fundamentals of frontend development, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    meta: {
      duration: '10 Weeks',
      level: 'Advanced',
      author: 'Michael Adams'
    },
    img: '6.png'
  }
];

const Courses = () => {
  return (
    <Section
      title="Our courses"
      description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      className="courses"
      actions={
        <Button
          label="View all"
          href="/courses"
          mode="white"
          className="courses_action"
        />
      }
    >
      <ul className="courses__list">
        {
          coursesData.map((course, index) => {
            const { title, description, meta, img } = course;

            return (
              <li className="courses-card" key={index} aria-labelledby={`courses-card-${index}`}> 
                <div className="courses-card__image-wrapper">
                  <Image src={`/src/assets/images/courses/${img}`} alt="" />
                </div>
                <div className="courses-card__meta">
                  <div className="courses-card__labels">
                    <span className="courses-card__duration">{meta.duration}</span>
                    <span className="courses-card__level">{meta.level}</span>
                  </div>
                  <span className="courses-card__author">By {meta.author}</span>
                </div>
                <div className="courses-card__content">
                  <h3 className="courses-card__title h3" id={`courses-card-${index}`}>{title}</h3>
                  <p className="courses-card__description">{description}</p>
                </div>
                <Button
                  label="Get it now"
                  href="/"
                  mode="white-97"
                  className="courses-card__button"
                />
              </li>
            );
          })
        }
      </ul>
    </Section>
  );
};

export default Courses;
