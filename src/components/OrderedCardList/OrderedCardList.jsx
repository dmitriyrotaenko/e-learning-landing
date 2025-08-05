import Button from '../Button';
import './OrderedCardList.scss';

const listData = [
  {
    title: 'Flexible Learning Schedule',
    description: 'Fit your coursework around your existing commitments and obligations.'
  },
  {
    title: 'Expert Instruction',
    description: 'Learn from industry experts who have hands-on experience in design and development.'
  },
  {
    title: 'Diverse Course Offerings',
    description: 'Explore a wide range of design and development courses covering various topics.'
  },
  {
    title: 'Updated Curriculum',
    description: 'Access courses with up-to-date content reflecting the latest trends and industry practices.'
  },
  {
    title: 'Practical Projects and Assignments',
    description: 'Develop a portfolio showcasing your skills and abilities to potential employers.'
  },
  {
    title: 'Interactive Learning Environment',
    description: 'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.'
  }
];

const OrderedCardList = () => {
  return (
    <ol className="ordered-card-list">
      {
        listData.map((item, index) => {
          const { title, description } = item;

          return (
            <li className="ordered-card-list__item" key={index}>
              <div className="ordered-card-list__content">
                <h3 className="ordered-card-list__title">{title}</h3>
                <p className="ordered-card-list__description">{description}</p>
              </div>
              <Button 
                className="ordered-card-list__button"
                isLabelVisible={false}
                href="/"
                mode="white-99"
                iconName="learn-more"
                hasFill
              />
            </li>
          );
        })
      }
    </ol>
  );
};

export default OrderedCardList;