import Image from 'next/image';
import Footer from '@/components/footer';

export const metadata = {
    title: 'Resume - Larry Long',
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

export default function Resume() {
    const resume = [
        {
            "company": "Criteo",
            "dates": "May - Aug 2025",
            "role": "Software Engineer Intern",
            "location": "Toronto, ON",
            "image": "/logos/criteo.png",
            "bullets": [

            ]
        },
        {
            "company": "Huawei Technologies Canada",
            "dates": "Aprl - Aug 2024",
            "role": "ML Research Intern, ROMA AI",
            "location": "Toronto, ON",
            "image": "/logos/huawei.png",
            "bullets": [

            ]
        },
        {
            "company": "Huawei Technologies Canada",
            "dates": "May 2023 - Mar 2024",
            "role": "Software Engineer Intern, Distributed Caching System",
            "location": "Toronto, ON",
            "image": "/logos/huawei.png",
            "bullets": [

            ]
        },
        {
            "company": "Western University",
            "dates": "Sept 2025 - Present",
            "role": "Teaching Assistant - Electronics Lab",
            "location": "London, ON",
            "image": "/logos/western.png",
            "bullets": [
            ]
        }
    ];


    return (
        <div>
            <div className='bg-gradient-to-b from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>
                <div className="container mx-auto px-2 py-32">
                    <h1 className='text-5xl font-extrabold text-center'>
                        My Resume 📄
                    </h1>
                </div>
            </div>
            <section className='bg-gradient-to-t from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>
                <div className="container mx-auto py-4 px-2">
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EDUCATION 👨‍🎓
                        </h2>
                        <Experience data={{
                            "company": "Georgia Institute of Technology",
                            "dates": "Aug 2024 - Apr 2026",
                            "role": "Master's of Science in Computer Science, Specialization: Computing Systems",
                            "location": "Atlanta, GA",
                            "image": "/logos/GT.png",
                        }} ><p>
                                <span className="font-bold">Coursework:</span> Computer Networks, Data Center Networks & Systems, Software Hardware Co-Design for ML, ML Security, Blockchain, Algorithms, Tech Policy & Privacy Law, Online Communities
                            </p></Experience>
                        <Experience data={{
                            "company": "University of Michigan",
                            "dates": "Aug 2020 - May 2024",
                            "role": "Bachelor of Science in Engineering in Data Science summa cum laude, Math Minor, Linguistics Minor - 3.90/4.00 GPA",
                            "location": "Ann Arbor, MI",
                            "image": "/logos/michigan.png",

                        }} ><p>
                                <span className="font-bold">Coursework:</span> Machine Learning, Software Engineering, Data Structure & Algorithms, Web Systems, Computer Organization, Natural Language Processing, Applied Regression Analysis, Probability, Combinatorics & Graph Theory, Reinforcement Learning, Quantum Computing, Information Retrieval
                            </p></Experience>
                    </div>
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EXPERIENCE 👷‍♂️
                        </h2>
                        <div className="divider my-0"></div>
                        {resume.map((experience) => <Experience key={experience.company} data={experience} />)}
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    );
}

function Experience({ data, children }) {

    return (
        <div className='p-4 border border-slate-700 dark:border-white my-6 rounded-lg' >

            <div className="resume-grid mb-3">
                <Image className="w-[56px] h-[56px] mr-2 object-cover rounded row-span-2" width={56} height={56} src={data?.image} alt={data.company + " logo"} />
                <h3 className='font-bold'>{data.company}</h3>
                <span>{data.dates}</span>
                <span className=''>{data.role}</span>
                <span className='italic md:justify-self-end'>{data.location}</span>
            </div>
            {data?.bullets && <ul className='pl-4 list-disc'>
                {data.bullets.map((bullet, index) => {
                    return <li className='mb-1' key={index} >{bullet}</li>
                })}
            </ul>}
            {children}
        </div>
    )
}