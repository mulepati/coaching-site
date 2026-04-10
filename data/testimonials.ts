export type TestimonialCategory =
  | "1:1 Coaching"
  | "Group Facilitation"
  | "Retreat Facilitation";

export type Testimonial = {
  name: string;
  role?: string;
  href?: string;
  quote: string;
  category: TestimonialCategory;
  featured?: boolean;
};

export type TestimonialMedia = {
  id: string;
  type: "audio" | "video";
  name: string;
  context: TestimonialCategory;
  title?: string;
  quote?: string;
  transcript?: string;
  src: string;
  poster?: string;
};

export const testimonialMedia: TestimonialMedia[] = [
  {
    id: "dennis-xiao-audio",
    type: "audio",
    name: "Dennis Xiao",
    context: "1:1 Coaching",
    title: "Dennis Xiao",
    src: "/testimonials/audio/dennis-xiao.m4a",
  },
  {
    id: "kurren-audio",
    type: "audio",
    name: "Kurren",
    context: "1:1 Coaching",
    title: "Kurren",
    src: "/testimonials/audio/kurren.opus",
  },
  {
    id: "ulisse-audio",
    type: "audio",
    name: "Ulisse",
    context: "1:1 Coaching",
    title: "Ulisse",
    src: "/testimonials/audio/ulisse.opus",
  },
  {
    id: "viraj-audio",
    type: "audio",
    name: "Viraj",
    context: "1:1 Coaching",
    title: "Viraj",
    src: "/testimonials/audio/viraj.opus",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Justin Donaldson",
    href: "https://x.com/JDonaldson_art",
    category: "1:1 Coaching",
    featured: true,
    quote:
      "Samek was brilliant. We talked through some issues I had been struggling with, and he guided me through letting go of some big things. He asked questions I wouldn't have asked myself, which led to real insight. Most importantly, I felt safe being vulnerable in the way I needed to be.",
  },
  {
    name: "Ulisse Mini",
    href: "https://uli.rocks/",
    category: "1:1 Coaching",
    featured: true,
    quote:
      "Coaching with Samek is by far the highest value thing I have done for my emotional unfolding so far. Every call accelerates me months of what I could do on my own at least. He has my highest recommendation!",
  },
  {
    name: "Kurren Sandhu",
    href: "https://www.drkurrensandhu.com/",
    category: "1:1 Coaching",
    featured: true,
    quote:
      "My conversations with Samek have been life altering. I bring decisions that I've been wrestling with for weeks that seem to get made within 15 minutes. His grounded nature and courage to ask the scary questions bring clarity, joy and calmness.",
  },
  {
    name: "Akaash Prasad",
    href: "https://www.linkedin.com/in/akaash-prasad",
    category: "1:1 Coaching",
    featured: true,
    quote:
      "Samek showed an incredible ability to pick up nuances in our coaching calls. He doesn't force or fix. He listens with presence and allow the right thing to say to arise. Both calls felt natural, unforced, and exactly what was needed in that moment, even if I didn't realize it.",
  },
  {
    name: "Moein Pahlavan Yali",
    href: "https://www.linkedin.com/in/moeinpy/",
    category: "1:1 Coaching",
    featured: true,
    quote:
      "Samek brings a gentle and active presence that makes you feel seen and heard both intellectually and emotionally. He helped me have a breakthrough with an emotional hold-up and as a result I feel a lot more openness around decisions that bring up that pattern.",
  },
  {
    name: "Lucas",
    category: "1:1 Coaching",
    quote:
      "I did three sessions in three weeks. In the first, my body released more than it had in the previous month. In the second, I felt expansion, bliss, and silence. That allowed us to explore pathways for growth in the third.\n\nWhat stands out most is how Samek holds space in a way I don't think I've experienced before. About four weeks later, my relationships are better, mostly because it's easier to allow myself space to understand how far I want to go and when I need space.",
  },
  {
    name: "Morgan",
    category: "1:1 Coaching",
    quote:
      "Within like 3 minutes of meeting Samek we were already feeling our way through sadness, fear, grief, without much need for long explanations or backstories. Samek's warmth and openness is rare, surprising, and welcome. I trusted Samek right from the start, and he rolled smoothly with everything I managed to come up with.",
  },
  {
    name: "Matthew",
    category: "1:1 Coaching",
    quote:
      "50 minutes of HIIT for emotions! You helped me tap into feelings that I've only touched on before. Incredibly grateful.",
  },
  {
    name: "James",
    category: "1:1 Coaching",
    quote:
      "Samek held an open and warm space for us to talk. He answered my questions gently with clarity... gave me confidence to go and work on it.",
  },
  {
    name: "Anonymous (H.N.)",
    category: "1:1 Coaching",
    quote:
      "My experience was very moving... playful yet deeply empathetic energy. Problems felt hard, yes, but not complicated.",
  },
  {
    name: "Anonymous (I.K.)",
    category: "1:1 Coaching",
    quote:
      "Samek's presence felt like a safe space for me to feel my emotions and feelings. Samek was a really great guide for emotional inquiry. They were able to discern when I was too in my head, and they asked questions and offered prompts that helped me feel my emotions more clearly. I also got value from the experiments Samek suggested when I tried them.",
  },
  {
    name: "Anonymous (T.)",
    category: "1:1 Coaching",
    quote:
      "Samek gave me a space to feel and ask questions to my feelings. He was patient with me when I talked and trailed off. His responses were short, but not unthoughtful. I felt listened to.\n\nA simple message that stayed with me was: 'What's wrong with aimlessness in this moment? Does it feel good?'",
  },
  {
    name: "Aaron",
    category: "Group Facilitation",
    quote:
      "I didn't know what to expect, only that I wanted to move forward in my coaching journey and not do it alone.\n\nI feel honored to have been part of this group. I learned how to hold a container, how deep this work goes, and how sacred each person is, including me.\n\nI stepped into my empowerment here. I now know there's not only room for me in the world, there's a need for me. I wouldn't have seen that without this group.",
  },
  {
    name: "Wes",
    category: "Group Facilitation",
    quote:
      "This was a beautifully held container with high-quality people. I felt deeply supported even though I didn't know most of the group at first. There was space for all of me, and I loved being able to hold others, too.",
  },
  {
    name: "Aaditya",
    category: "Group Facilitation",
    quote:
      "I felt received with an intensity I've never experienced before. The love, attention, and presence in this group showed me what I don't yet accept in myself. It felt like a mirror for my real desires, not what I thought I wanted. I left feeling grateful, energized, and deeply touched.",
  },
  {
    name: "Adam",
    category: "Group Facilitation",
    quote:
      "The container went far deeper than I expected. The collaborative structure and shared vision created a level of connection I haven't felt in other groups. This is the most loved I've ever felt in a group setting. It was intense, and exactly what I wanted.",
  },
  {
    name: "Weichen",
    category: "Group Facilitation",
    quote:
      "I didn't expect to leave each session feeling energized and inspired. The group presence was loving and accountable at the same time. I felt unstuck, creative, and supported in ways that really mattered.",
  },
  {
    name: "Rustam",
    category: "Group Facilitation",
    quote:
      "I've never felt so seen and welcomed in a group. It went far beyond starting a coaching business and touched something much deeper. And somehow, it still profoundly changed how I see my work and how I want to offer it.",
  },
  {
    name: "Braden",
    role: "Samek as a facilitator",
    category: "Retreat Facilitation",
    quote:
      "Being in Samek's presence brings a sense of safety and confidence to everyone around him. He has a deeply grounded energy that allows people to rest more into the present moment.\n\nThere is a lot of unconditional love in Samek's eyes. At no point did I feel he was out of his depth or unable to handle what was happening. I appreciated the clarity in his system and his ability to express his truth simply and clearly.",
  },
  {
    name: "Nicholas",
    role: "Samek as a facilitator",
    category: "Retreat Facilitation",
    quote:
      "Samek was a great facilitator... Samek stepped in as needed and was instrumental in a lot of the behind-the-scenes work, including securing the retreat center.",
  },
  {
    name: "Matthew",
    role: "Samek as a facilitator",
    category: "Retreat Facilitation",
    quote:
      "Knowledgeable, friendly, vulnerable, and clear in both love and boundaries. Samek is well practiced in the Art of Accomplishment craft, and throughout the retreat he practiced what he preached.",
  },
  {
    name: "Braden",
    role: "Retreat experience",
    category: "Retreat Facilitation",
    quote:
      "The Attunement Residency was an experiment in loving and accepting myself more fully. I had many incredibly vulnerable and honest conversations with people who fully accepted and loved me for who I am.\n\nIt felt like a pressure cooker of awareness. With no distractions, I could really examine my beliefs, emotions, and moment-to-moment experience. It was like being with a group of people gently holding up mirrors to who I thought I was, giving me chance after chance to lovingly question that idea.\n\nI clearly saw emotional and behavioral patterns I've held for a long time and explored them deeply in a safe environment. After the retreat, I've carried a greater sense of safety and lived in a more authentic and embodied way.",
  },
  {
    name: "Nicholas",
    role: "Retreat experience",
    category: "Retreat Facilitation",
    quote:
      "This retreat rocked. There were so many insights and so many precious moments. I went in worried I might run out of social energy, but instead I felt energized to do five or more inquiry swaps a day.\n\nWhat surprised me most was the lasting change. I felt more safe and comfortable being myself with people in general, and I had a sense of 'infinite social energy' that lasted at least a week afterward.\n\nThis retreat showed me that people can actually be there for you. You can ask to talk and be listened to, to sit in silence, to receive compliments, or to name what you need. Conflicts became opportunities for mutual growth.\n\nI've noticed what feels like a permanent shift in being more comfortable asking for what I want, without fear of being judged or rejected, and I'm getting a lot of yeses.",
  },
  {
    name: "Matthew",
    role: "Retreat experience",
    category: "Retreat Facilitation",
    quote:
      "Overall I really enjoyed the retreat. There was a strong bond between all of us that allowed for vulnerability and success in the VIEW sessions.\n\nWhat I would tell someone is: if you're interested in personal growth and enjoying your life more, do this program. You live together, cook and eat together, and immerse yourself with others who want to grow.\n\nThe impact was profound. I did healing on several fronts, some new, some familiar, and I gained clarity on how I close down emotionally and how I can open up more.",
  },
];

export const testimonialCategories: TestimonialCategory[] = [
  "1:1 Coaching",
  "Group Facilitation",
  "Retreat Facilitation",
];
