

import TutorDetails from "@/components/tutorDetails/TutorDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { cache } from "react";



// export async function generateMetadata({ params }) {
//   const { id } = await params;

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
//     {
//       cache: "no-store",
//     },
//   );

//   if (!res.ok) {
//     return {
//       title: "Tutor Not Found",
//       description: "Tutor details could not be found.",
//     };
//   }

//   const tutor = await res.json();

//   return {
//     title: `${tutor.name} | Tutor Details`,
//     description: tutor.about?.slice(0, 150),
//   };
// }


// const getTutor = cache( async (id)=>{
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`);
//    await res.json();
// })



const TutorDetailPage = async ({ params }) => {
  const { id } = await params;

  const {token} = await auth.api.getToken({
    headers: await headers()
  })


  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,{
    headers:{
      authorization: `Bearer ${token}`
    }
  });
  const tutor =  await res.json();
  // const tutor = await getTutor(id);

  return <TutorDetails tutor={tutor} />;
};

export default TutorDetailPage;



