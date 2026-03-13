export interface TeamMember {
    name: string;
    role: string;
    image: string;
    shortBio: string;
    fullBio: string[];
}

export const teamMembers: TeamMember[] = [
    {
        name: "Bonani Siko",
        role: "CEO / Executive Director",
        image: "/images/team-img2.jpg",
        shortBio: "Bonani Siko is a qualified Mining Engineer with a National Diploma in Coal Mining, a National Higher Diploma in Coal Mining, a B-Tech in Mining Engineering at the University of Johannesburg (UJ), as well as a certificate from an executive development program with the University of Cape Town (UCT). He further has a mine manager's certificate of competency with South Africa's Department of Mining Resources (DMR).",
        fullBio: [
            "He is currently a director at Siko Mining Services (SMS), and has been a general manager at Wescoal Holdings Pty Ltd, heading their mining operations (appointed under Section 4.1 of the Mine Health and Safety Act) for almost 4 years. Aside from the general manager role, Bonani also served as a director at Wescoal Mining Pty Ltd and Aztolinx Pty Ltd.",
            "Bonani has extensive experience in the coal mining space and mining in general. He had the opportunity to complete the total coal mining value chain through Eskom's primary energy division, a role he served as their Senior Manager of Coal Operations, in support of coal supply agreements between Eskom's coal-fired power stations, and the mining houses. Additionally, Bonani acted as Divisional Executive at Eskom's primary energy division, and CEO at Wescoal Mining.",
            "Bonani is an active member of the South African Colliery Managers Association (SACMA), and the Institute of Directors Southern Africa (IoDSA). He has more than 30 years experience in the mining industry.",
        ],
    },
    {
        name: "Lusito Mthethwa",
        role: "Finance Director",
        image: "/images/lusito.jpeg",
        shortBio: "Lusito Mthethwa is the Finance Director at Siko Mining and Founder and CEO at Dispersive Consulting, specializing in Accounting, Tax, and Advisory services.",
        fullBio: [
            "He is a Certified Business Accountant in Practice (SA) through CIBA, bringing deep expertise in business accounting and financial management.",
            "Lusito is a registered General Tax Practitioner (SA) with SAIT, providing comprehensive tax planning and compliance services.",
            "He also holds certification as a Certified Labour Practitioner through the Department of Labour, giving him a well-rounded understanding of business operations, compliance, and workforce regulations.",
        ],
    },
    {
        name: "Mzoxolo Beqezi",
        role: "Technology Consultant",
        image: "/images/mzoxolo.png",
        shortBio: "Mzoxolo Beqezi is a Technology Consultant with over 20 years of experience in Information Technology, specializing in supporting complex IT systems for the mining industry for more than 12 years.",
        fullBio: [
            "He has extensive experience working with platinum and coal mining operations, having supported one of South Africa’s top three platinum mines and a major coal mine, delivering IT support, system administration, and infrastructure management to ensure reliable and secure technology operations.",
            "Mzoxolo is the founder of NMAS INNOVATIONS (Pty) Ltd and holds professional certifications in enterprise architecture, cloud computing, and cybersecurity, including TOGAF from The Open Group, CISSP from ISC2, and AWS Certified Solutions Architect – Associate.",
            "His expertise also extends to Microsoft Azure technologies and industrial cybersecurity aligned with ISA/IEC 62443 standards. Throughout his career, he has provided critical technical assistance in complex mining and industrial environments.",
            "At Siko Mining, he plays a key role in maintaining reliable IT systems, supporting operational technology, and ensuring secure and efficient technology operations across all mining processes.",
        ],
    },
];
