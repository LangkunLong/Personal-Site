import Hero from '@/components/hero';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/button';
import Footer from '@/components/footer';
import ProjectSection from '@/components/projectSection';
import { getProjectsData } from "@/lib/projects"

export const metadata = {
  title: 'Larry Long',
  icons: {
    icon: '/logo.png',
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
}

export default async function Home() {
  const projectsData = await getProjectsData();
  return (
    <div>
      <Hero />
      <section className='py-10 bg-gray-200 dark:bg-gray-800'>
        <div className='flex flex-col items-center text-center gap-4'>
          <h2 className='text-3xl font-bold'>Some of My Projects</h2>
          <Button text="View All My Projects 👨‍💻" href='/projects' />
        </div>


        {
          projectsData.slice(0, 3).map((projectData, index) => (<ProjectSection key={projectData.name} data={projectData} left={index % 2} />))
        }
      </section>
      <section className='py-10 bg-gradient-to-t from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>

        <div className='container mx-auto px-2 flex items-center content-between flex-col md:flex-row gap-4'>
          <Image
            className="rounded h-[400px] w-auto object-cover md:mr-auto "
            width={500}
            height={500}
            src="/Profile pic.png"
            alt="Me, myself, and I"
          />
          <div className='md:w-2/3 lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-2'>What's up!</h2>
            <p className='mb-2'>Hi All, I just recently finished my B.A.Sc. in Computer Engineering at the University of Toronto, and started my M.E.Sc at Western University. My research focus is on using game theoretic applications of Large Language Models as trajectory planners for Autonomous Vehicles, focusing on improved safety and contextual reasoning!</p>
            <p className='mb-2'>Over the summer I interned at Criteo as a software intern working on backend development using C#., ASP.NET, and RESTApi.</p>
            <p className='mb-2'>My other experiences include working at Huawei Technologies as a co-op student where I worked on Redis and KeyDB design verifications on the Distributed Caching team, and working with LLM prompting and RAG on the ROMA AI team.</p>
            <p className='mb-2'>I love to play basketball! If you have an open court, feel free to let me know and let's get some hoops in!</p>
            <Button text="View My Resume 📄" href='/resume' />

          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

