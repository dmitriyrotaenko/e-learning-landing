import Section from '@/layout/Section';
import Button from '@/components/Button';

const coursesData = [
  {
    title: 'Web Design Fundamentals',
    description: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    meta: {
      duration: '4 Weeks',
      level: 'Beginner',
      author: 'John Doe'
    }
  },
  {
    title: 'UI/UX Design',
    description: 'Master the art of user experience design, creating intuitive and engaging interfaces that enhance user satisfaction and satisfaction.',
    meta: {
      duration: '4 Weeks',
      level: 'Beginner',
      author: 'John Doe'
    }
  },
  {
    title: 'Web Development',
    description: 'Learn the fundamentals of web development, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    meta: {
      duration: '4 Weeks',
      level: 'Beginner',
      author: 'John Doe'
    }
  },
  {
    title: 'Digital Marketing',
    description: 'Learn the fundamentals of digital marketing, including SEO, PPC, and social media marketing. Develop the skills to create visually appealing and user-friendly websites.',
    meta: {
      duration: '4 Weeks',
      level: 'Beginner',
      author: 'John Doe'
    }
  },
  {
    title: 'Content Marketing',
    description: 'Learn the fundamentals of content marketing, including SEO, PPC, and social media marketing. Develop the skills to create visually appealing and user-friendly websites.',
    meta: {
      duration: '4 Weeks',
      level: 'Beginner',
      author: 'John Doe'
    }
  },
  {
    title: 'Frontend Development',
    description: 'Learn the fundamentals of frontend development, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    meta: {
      duration: '4 Weeks',
      level: 'Beginner',
      author: 'John Doe'
    }
  }
];

const Courses = () => {
  return (
    <Section
      title="Our courses"
      description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
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
            const { title, description, meta } = course;

            return (
              <li className="course-card" key={index}>
                <div className="course-card__image"></div>
                <div className="course-card__meta">
                  <span className="course-card__duration">{meta.duration}</span>
                  <span className="course-card__level">{meta.level}</span>
                  <span className="course-card__author">{meta.author}</span>
                </div>
                <div className="course-card__content">
                  <h3 className="course-card__title">{title}</h3>
                  <p className="course-card__description">{description}</p>
                </div>
              </li>
            );
          })
        }
      </ul>
    </Section>
  );
};

export default Courses;
