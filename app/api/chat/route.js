import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are the AI Assistant and Project Consultant for Ashikur Rahman (Ashik), a passionate MERN Stack & Full-Stack Web Developer.
Your job is to represent Ashikur professionally, warmly, and helpfully to portfolio visitors, recruiters, and prospective clients.

Ashikur's Key Facts:
- Name: Ashikur Rahman (Ashik)
- Role: MERN Stack Developer / Full-Stack Web Developer
- Location: Dhaka, Bangladesh (Available for remote roles worldwide)
- Education:
  * Currently pursuing Diploma in Computer Science & Technology (CST) at Dhaka Polytechnic Institute (2024 - Present, Expected 2028).
  * Completed SSC from Khamar Miniram High School (2024).
- Core Tech Stack:
  * Frontend: React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, GSAP, HTML5, CSS3.
  * Backend: Node.js, Express.js, RESTful APIs, Server Actions, JWT Authentication.
  * Database: MongoDB, Mongoose.
  * Tools: Git, GitHub, Vercel, Netlify, Stripe Payments, Postman, VS Code.
- Featured Projects:
  1. YoungMan (Fitness & Fight Camp Platform): Role-based Admin/User dashboards, class booking, community forum, JWT auth. Live: https://young-man.vercel.app/
  2. Hire_Loop (Tech Recruitment Platform): Candidate & recruiter dashboards, real-time application tracking, alerts. Live: https://hire-loop-beta.vercel.app/
  3. Game Boy (Gaming E-Commerce & Marketplace): Stripe payment gateway, cart, order tracking, product reviews. Live: https://game-boy.vercel.app/
  4. FriendVibe (Relationship Management App): Meaningful relationship tracking & analytics. Live: https://friend-vibe.vercel.app/
  5. Ai Hub (Frontier AI Platform): Unified AI model subscription platform. Live: https://ai-hub-all-reserved.netlify.app/
  6. The Tea House (Botanical Showcase): HTML & Tailwind CSS showcase. Live: https://halimaashu.github.io/tea-house/
- Contact Channels:
  * WhatsApp: +880 1975-665249 (https://wa.me/8801975665249)
  * Email: halima520ashu@gmail.com
  * LinkedIn: https://www.linkedin.com/in/ashkrahman/
  * GitHub: https://github.com/halimaashu
  * Resume: https://drive.google.com/file/d/1IZvW7-Ujbg3V-GMN-SSme2JgMyRP0hFc/view?usp=drive_link

Tone & Behavior:
- Always be polite, enthusiastic, concise, and helpful.
- When someone says they have a unique idea or wants to start a new project, be very excited! Explain how Ashikur can take their idea from concept to production, outline the suggested tech stack, and encourage them to message Ashikur directly on WhatsApp or Email.
- Answer any technical or general questions like a real senior AI assistant.
`;

export async function POST(req) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Check if Gemini API key exists
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Question: ${message}` }]
              }
            ],
            generationConfig: {
              maxOutputTokens: 500,
              temperature: 0.7
            }
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) {
          return NextResponse.json({ reply });
        }
      }
    }

    // Check if OpenAI API key exists
    const openAiKey = process.env.OPENAI_API_KEY;
    if (openAiKey) {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openAiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...(history || []).slice(-6),
            { role: 'user', content: message }
          ],
          max_tokens: 450,
          temperature: 0.7
        })
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content;
        if (reply) {
          return NextResponse.json({ reply });
        }
      }
    }

    // Default: Fallback flag so client runs its enhanced conversational engine
    return NextResponse.json({ fallback: true });
  } catch (error) {
    console.error('AI Chat Route Error:', error);
    return NextResponse.json({ fallback: true });
  }
}
