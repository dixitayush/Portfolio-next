import { portfolioData } from "../data/portfolio";

export default function JsonLd() {
    const projectsSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Projects by Ayush Dixit',
        itemListElement: portfolioData.projects.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'SoftwareSourceCode',
                name: p.name,
                description: p.description,
                codeRepository: p.github ?? undefined,
                url: p.demo ?? p.github ?? undefined,
                programmingLanguage: Object.keys(p.languages),
                keywords: p.techStack.join(', '),
                author: { '@type': 'Person', name: 'Ayush Dixit' },
                dateCreated: p.year,
            },
        })),
    };

    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ayush Dixit',
        alternateName: 'Ayush Kumar',
        url: 'https://ayushdixit.work',
        image: 'https://ayushdixit.work/profile.png',
        jobTitle: 'Senior Software Engineer',
        hasOccupation: [
            { '@type': 'Occupation', name: 'Senior Software Engineer' },
            { '@type': 'Occupation', name: 'Full Stack Developer' },
            { '@type': 'Occupation', name: 'MERN Stack Developer' },
            { '@type': 'Occupation', name: 'Java Full Stack Developer' },
        ],
        worksFor: {
            '@type': 'Organization',
            name: 'HCL Software',
        },
        description:
            'Senior Software Engineer and Full Stack Developer with ~5 years of experience building scalable products with the MERN stack (MongoDB, Express, React, Node.js), Java, Spring Boot, Microservices, Next.js, TypeScript, and cloud-native development. Based in India.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Noida',
            addressRegion: 'Uttar Pradesh',
            addressCountry: 'IN',
        },
        email: 'dixitayush284@gmail.com',
        sameAs: [
            'https://github.com/dixitayush',
            'https://linkedin.com/in/ayush-dixit-2316b4153',
        ],
        knowsAbout: [
            'Full Stack Development',
            'MERN Stack',
            'MongoDB',
            'Express.js',
            'React',
            'Node.js',
            'Java',
            'Spring Boot',
            'Microservices',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Rust',
            'Docker',
            'Kubernetes',
            'AWS',
            'PostgreSQL',
            'Redis',
            'GraphQL',
            'REST API',
            'Cloud Native Development',
            'System Design',
            'CI/CD',
            'DevOps',
        ],
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Ayush Dixit Portfolio',
        url: 'https://ayushdixit.work',
        description:
            'Portfolio website of Ayush Dixit — Senior Java Full Stack Developer specializing in Spring Boot, Microservices, and modern web development.',
        author: {
            '@type': 'Person',
            name: 'Ayush Dixit',
        },
    };

    const profilePageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
            '@type': 'Person',
            name: 'Ayush Dixit',
            url: 'https://ayushdixit.work',
        },
        dateCreated: '2025-11-22',
        dateModified: new Date().toISOString().split('T')[0],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
            />
        </>
    );
}
