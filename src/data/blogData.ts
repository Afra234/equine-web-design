// Define BlogPost interface
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  summary: string;
  content: string;
  image: string;
  coverImage?: string; // Optional cover image
  readTime?: string; // Optional read time
  author: string;
}

// Helper function to create slugs
export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

// Helper function to get formatted date strings
export const getFormattedDate = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Helper function to find a blog post by ID
export const findBlogPostById = (id: string): BlogPost | undefined => {
  const numericId = parseInt(id, 10);
  return blogPosts.find(post => post.id === numericId);
};

// Helper function to find a blog post by slug
export const findBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Blog post data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Equestrian Logo Design Tips for UK Horse Businesses",
    slug: slugify("Equestrian Logo Design Tips for UK Horse Businesses"),
    date: getFormattedDate(1),
    summary: "Discover how to design a strong, professional equestrian logo that reflects your horse business. Practical advice tailored for UK-based stables, yards, and equine brands.",
    content: `A well-designed logo helps your horse business stand out while staying true to who you are. Whether you run a yard, a shop, or provide equine services, your logo should feel like a natural extension of your brand.

---

## Keep it Clear and Versatile

A strong equestrian logo is simple, recognisable, and easy to use across formats.

> **Key Takeaway:** Your logo must work effectively everywhere, from a tiny website favicon to large stable signage.

### Consider These Formats:
- Stable signs & vehicle livery
- Numnahs & rugs
- Social media profiles
- Website headers

## Avoid the Canva Trap

While templates are quick, they often miss what makes your business unique. A custom design makes your brand more memorable and avoids looking generic.

## Think About Practical Use

Logos need to scale up and down without losing detail.

### Key Practicalities:
- **Embroidery:** Complex gradients or tiny details don't embroider well.
- **Print:** Ensure high-resolution versions are available.
- **Mobile Display:** Check visibility on small screens.

## Subtle Equestrian Cues Go a Long Way

You don't always need an obvious horse graphic. Use type, colour, and layout to reflect the equestrian world in a refined way. Sometimes abstract shapes or elegant typography speak volumes.

---

A smart equestrian logo doesn't just look good — it works hard behind the scenes, every day.`,
    image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    coverImage: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    readTime: "4",
    author: "Equinology Team"
  },
  {
    id: 2,
    title: "Why Every UK Livery Yard and Riding School Needs a Website",
    slug: slugify("Why Every UK Livery Yard and Riding School Needs a Website"),
    date: getFormattedDate(3),
    summary: "Learn why a professional website is essential for UK equestrian businesses — from livery yards to instructors and saddle fitters. Mobile-friendly tips included.",
    content: `Social media can be useful — but it's not a full digital presence. A professional website helps your equestrian business grow, look more credible, and serve your clients better.

---

## Your Website Is Your Digital Yard Gate

Potential clients want to see who you are, what you offer, and how to contact you — quickly and clearly. First impressions count!

## Make the Most of Your Photos

You don't need a professional photographer constantly. Even good quality, authentic photos taken on a phone can shine with the right layout and website design. Show off your facilities and happy horses!

## Mobile Friendly for Life on the Yard

Most people visit your site on their phones while out and about. It *needs* to be fast, responsive, and simple to navigate on smaller screens.

## Add Useful Features

Consider adding features that genuinely help your clients and reduce your admin:

### Potential Features:
- Lesson and clinic booking forms
- Downloadable price lists
- Clear photo galleries (facilities, events, horses for sale)
- Integrated contact forms with maps
- FAQs section to answer common questions

---

A good website doesn't just look the part — it makes your day-to-day easier and more professional.`,
    image: "https://images.unsplash.com/photo-1598056600024-43c18ef3c6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    coverImage: "https://images.unsplash.com/photo-1598056600024-43c18ef3c6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    readTime: "3",
    author: "Equinology Team"
  },
  {
    id: 3,
    title: "Branding for UK Equestrian Businesses What It Is and Why It Matters",
    slug: slugify("Branding for UK Equestrian Businesses What It Is and Why It Matters"),
    date: getFormattedDate(5),
    summary: "Understand equestrian branding for UK-based businesses. From saddle fitters to riding schools, learn how good branding builds trust and recognition.",
    content: `Branding is more than just a logo. For horse businesses, it's about building trust, consistency, and a clear identity across everything you do.

---

## Branding Helps People Understand You

Your brand should reflect your tone, values, and style — whether you're laid-back and local or sharp and professional. It communicates your unique selling points.

## Beyond the Logo

A strong equestrian brand is a complete package:

### Key Brand Elements:
- **Logo:** The visual cornerstone.
- **Colours:** Evoke specific feelings and associations.
- **Fonts:** Contribute to the overall tone (e.g., traditional serif vs. modern sans-serif).
- **Tone of Voice:** How you communicate in writing (e.g., formal, friendly, expert).
- **Imagery:** The style of photos and graphics you use.

## Consistency Builds Recognition

When your website, social media profiles, print materials, and even stable signage all align visually and tonally, you look organised, professional, and dependable. This builds trust over time.

## Keep It Authentic

Horse people can often spot when something feels inauthentic. Your branding should feel real — like it comes from someone who genuinely understands early starts, muddy boots, and quiet moments in the stable. Don't try to be something you're not.

---

Your brand doesn't need to be fancy or expensive. It just needs to be consistently and authentically yours.`,
    image: "https://images.pexels.com/photos/2928178/pexels-photo-2928178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    coverImage: "https://images.pexels.com/photos/2928178/pexels-photo-2928178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: "5",
    author: "Equinology Team"
  }
]; 