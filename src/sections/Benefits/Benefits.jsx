import Button from '@/components/Button';
import './Benefits.scss';
import Section from '@/layout/Section';


const Benefits = () => {
  return (
    <Section
      title="Benefits"
      description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      actions={(
        <Button
          label="View all"
          href="/"
          mode="white"
          className="benefits__action"
        />
      )}
    >
      <div className="benefits">

      </div>
    </Section>
  );
};

export default Benefits;