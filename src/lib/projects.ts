export type Phase = {
    label: string;
    status: "Live" | "In Progress";
    description: string;
};

export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    status: string;
    image: string;
    subtitle: string;
    phases: Phase[];
    role: { type: string; description: string };
    problemEyebrow: string;
    problemHeadline: string;
    problemBody: string;
    techStack: string[];
};

export const projects: Project[] = [
    {
        slug: "whatsapp-ai-receptionist",
        title: "WhatsApp AI Receptionist",
        description:
            "A 24/7 AI agent for appointment-based businesses. Handles bookings and customer queries via WhatsApp Business API.",
        tags: ["WhatsApp Business API", "Conversational AI", "SaaS"],
        status: "Building",
        image: "/Chat_UI.jpg",
        subtitle: "A 24/7 AI agent for appointment-based businesses.",
        phases: [
            {
                label: "Phase 1",
                status: "Live",
                description: "WhatsApp Business API integration",
            },
            {
                label: "Phase 2",
                status: "In Progress",
                description: "Automated scheduling",
            },
        ],
        role: {
            type: "Solo",
            description: "Product Design, Frontend/Backend Build, Deployment.",
        },
        problemEyebrow: "The Problem",
        problemHeadline:
            `Small businesses miss valuable
       bookings when they can't answer 
       the phone.`,
        problemBody:
            `When service providers are busy with clients, their phones ring out.
            Potential customers often move to the next business on their list rather
             than leaving a voicemail. This AI receptionist acts as an immediate, 
             intelligent responder directly on the platform customers prefer: WhatsApp.`,
        techStack: ["Conversational AI", "Node.js", "WhatsApp API", "Supabase"],
    },
    {
        slug: "household-money-manager",
        title: "Household Money Manager",
        description:
            "AI financial assistant for families. Features receipt scanning and natural language spending insights.",
        tags: ["Flutter", "Supabase", "Gemini AI"],
        status: "Launching Soon",
        image: "/Mobile_mockup.jpg",
        subtitle: "An AI financial assistant for families.",
        phases: [
            {
                label: "Phase 1",
                status: "Live",
                description: "AI Chat Assistant",
            },
            {
                label: "Phase 2",
                status: "In Progress",
                description: "Play Store Listing",
            },
        ],
        role: {
            type: "Solo",
            description: "Product Design, Frontend/Backend Build, Deployment.",
        },
        problemEyebrow: "The Problem",
        problemHeadline:
            `Families struggle to track expenses 
            across different members and 
            generations.`,
        problemBody:
            `Managing budgets, scanning receipts, and understanding spending patterns often
             feels like a full-time job. This Flutter mobile app acts as an AI financial assistant for
              families. It features automated expense tracking, budgets, AI receipt scanning, and
               a chat assistant that provides insights into spending data with specific modes
                tailored for parents, teens, and seniors.`,
        techStack: ["Flutter", "Riverpod", "Go Router", "Supabase", "Gemini/OpenAI"],
    },


    // For future projects adding use this template
    // {
    //     slug: "your-next-product",
    //     title: "Your Next Product",
    //     description: "Short description for the homepage card.",
    //     tags: ["Tech", "Stack", "Tags"],
    //     status: "Building",
    //     image: "/your-screenshot.jpg",
    //     subtitle: "One-line subtitle for the detail page header.",
    //     phases: [
    //         { label: "Phase 1", status: "Live", description: "What shipped first" },
    //     ],
    //     role: {
    //         type: "Solo",
    //         description: "Product Design, Frontend/Backend Build, Deployment.",
    //     },
    //     problemEyebrow: "The Problem",
    //     problemHeadline: "The core problem, as one punchy sentence.",
    //     problemBody: "The fuller paragraph explaining it.",
    //     techStack: ["Tech", "Stack", "Tags", "Etc"],
    // },


];

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}