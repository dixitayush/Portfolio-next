export default function JsonLd() {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ayush Dixit',
        alternateName: 'Ayush Kumar',
        url: 'https://ayushdixit.work',
        image: 'https://ayushdixit.work/profile.png',
        jobTitle: 'Senior Java Full Stack Developer',
        worksFor: {
            '@type': 'Organization',
            name: 'HCL Software',
        },
        description:
            'Senior Software Engineer with 4.5+ years of experience in Java, Spring Boot, Microservices, React, Next.js, and cloud-native development. Based in India.',
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
            'Java',
            'Spring Boot',
            'Microservices',
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Docker',
            'Kubernetes',
            'AWS',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'GraphQL',
            'REST API',
            'Full Stack Development',
            'Cloud Native Development',
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
        </>
    );
}
