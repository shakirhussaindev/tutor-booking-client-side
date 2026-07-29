

import TutorDetails from "@/components/tutorDetails/TutorDetails";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return {
      title: "Tutor Not Found",
      description: "Tutor details could not be found.",
    };
  }

  const tutor = await res.json();

  return {
    title: `${tutor.name} | Tutor Details`,
    description: tutor.about?.slice(0, 150),
  };
}

const TutorDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`);

  if (!res.ok) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-2xl font-semibold text-red-500">Tutor not found</h2>
      </section>
    );
  }

  const tutor = await res.json();

  return <TutorDetails tutor={tutor} />;
};

export default TutorDetailPage;



