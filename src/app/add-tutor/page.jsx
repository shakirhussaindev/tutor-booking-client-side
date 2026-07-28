import TutorForm from "@/components/tutor/TutorForm";

export const metadata = {
  title: "Add Tutor | Smart Tutor",
};

const AddTutorPage = () => {
  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto w-11/12 max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Become a Tutor
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight lg:text-5xl">
            Share Your Knowledge
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Create your tutor profile and connect with students who are eager to
            learn from your expertise.
          </p>
        </div>

        <TutorForm />
      </div>
    </section>
  );
};

export default AddTutorPage;
