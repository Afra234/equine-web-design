// Define Article interface
export interface Article {
  id: number;
  title: string;
  slug: string;
  timestamp: number;
  summary: string;
  content: string;
  image: string;
  coverImage?: string;
  readTime?: string;
  author: string;
}

// Helper function to create slugs
export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

// Helper function to get current timestamp with offset
export const getTimestamp = (daysAgo: number): number => {
  return Date.now() - (daysAgo * 24 * 60 * 60 * 1000);
};

// Helper function to find an article by ID
export const findArticleById = (id: string): Article | undefined => {
  const numericId = parseInt(id, 10);
  return articles.find(post => post.id === numericId);
};

// Helper function to find an article by slug
export const findArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(post => post.slug === slug);
};

// Article data
export const articles: Article[] = [
  {
    id: 1,
    title: "Product Development: Using Mockups to Visualize Your Equine Products",
    slug: slugify("Product Development: Using Mockups to Visualize Your Equine Products"),
    timestamp: 0,
    summary: "Learn how to use mockups to visualize and refine your equine product designs before production. Discover tools and techniques for creating realistic product previews.",
    content: `# Product Development: Using Mockups to Visualize Your Equine Products

Creating a new equine product is exciting, but it can be challenging to visualize how it will look in real life. That's where mockups come in. They help you see your product before it exists, making it easier to refine and perfect your design.

## What Are Mockups?

Mockups are digital or physical representations of your product. They show how your product will look in real-world situations, helping you and potential customers visualize the final result.

## Benefits of Using Mockups

1. **Better Visualization**
   - See your product in context
   - Understand proportions and scale
   - Identify potential design issues

2. **Improved Communication**
   - Share your vision with manufacturers
   - Get feedback from potential customers
   - Present to investors or partners

3. **Cost Savings**
   - Catch design flaws early
   - Reduce prototyping costs
   - Minimize production mistakes

## Types of Mockups

### Digital Mockups
- 3D renderings
- Photoshop templates
- Online mockup generators

### Physical Mockups
- 3D printed prototypes
- Handmade samples
- Material swatches

## Creating Effective Mockups

1. **Start with Basic Shapes**
   - Focus on proportions
   - Consider ergonomics
   - Think about materials

2. **Add Details Gradually**
   - Include branding elements
   - Show different angles
   - Demonstrate functionality

3. **Test in Real Contexts**
   - Show product in use
   - Consider different environments
   - Test with target audience

## Tools for Creating Mockups

### Digital Tools
- Adobe Photoshop
- Blender
- SketchUp
- Canva
- Placeit

### Physical Tools
- 3D printers
- Foam core
- Cardboard
- Fabric samples

## Best Practices

1. **Keep It Simple**
   - Focus on key features
   - Avoid unnecessary details
   - Make it easy to understand

2. **Be Realistic**
   - Use accurate colors
   - Show proper scale
   - Consider materials

3. **Get Feedback**
   - Show to potential customers
   - Ask for honest opinions
   - Be open to changes

## Common Mistakes to Avoid

1. **Overcomplicating**
   - Too many details
   - Unrealistic features
   - Confusing presentation

2. **Poor Quality**
   - Low-resolution images
   - Inaccurate proportions
   - Unprofessional look

3. **Missing Context**
   - No scale reference
   - Unclear usage
   - Isolated presentation

## Next Steps

1. **Refine Your Design**
   - Make necessary adjustments
   - Test different versions
   - Get more feedback

2. **Prepare for Production**
   - Create technical drawings
   - Choose materials
   - Find manufacturers

3. **Plan Your Launch**
   - Create marketing materials
   - Build anticipation
   - Prepare for sales

## Conclusion

Mockups are a powerful tool in product development. They help you visualize, refine, and perfect your equine products before production. By using mockups effectively, you can save time, money, and ensure your product meets customer expectations.`,
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    coverImage: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: "8",
    author: "Equinology Team"
  },
  {
    id: 2,
    title: "Equine Website Design: Why Every Livery Yard and Riding School Needs a Professional Site",
    slug: slugify("Equine Website Design: Why Every Livery Yard and Riding School Needs a Professional Site"),
    timestamp: 0,
    summary: "Discover why professional equine web design is essential for your horse business. Learn how a well-designed website can help livery yards, riding schools, and equine professionals grow their business.",
    content: `# Equine Website Design: Why Every Livery Yard and Riding School Needs a Professional Site

In today's digital world, a professional website is essential for any equine business. Whether you run a livery yard, riding school, or offer equine services, a well-designed website can help you attract more clients and grow your business.

## Why You Need a Professional Website

1. **First Impressions Matter**
   - 94% of first impressions are design-related
   - Professional design builds trust
   - Good design reflects your business quality

2. **24/7 Business Presence**
   - Always available to potential clients
   - Showcase your facilities and services
   - Share important information

3. **Competitive Advantage**
   - Stand out from competitors
   - Show your professionalism
   - Demonstrate your expertise

## Key Features for Equine Websites

### Essential Pages
- Home page
- About us
- Services
- Facilities
- Contact
- Gallery

### Important Elements
- High-quality images
- Clear navigation
- Mobile responsiveness
- Contact forms
- Social media links

## Design Considerations

### Visual Appeal
- Professional photography
- Consistent branding
- Clean layout
- Easy readability

### User Experience
- Simple navigation
- Fast loading
- Mobile-friendly
- Clear calls-to-action

## Content Strategy

### What to Include
- Business information
- Services offered
- Pricing (if applicable)
- Testimonials
- Blog/news section

### Writing Tips
- Clear and concise
- Professional tone
- SEO-friendly
- Regular updates

## Technical Requirements

### Must-Have Features
- Responsive design
- Fast loading
- SEO optimization
- Security features
- Analytics tracking

### Optional Features
- Online booking
- Payment processing
- Member area
- Newsletter signup
- Social media integration

## Maintenance Tips

### Regular Updates
- Fresh content
- New images
- Updated information
- Blog posts

### Technical Maintenance
- Security updates
- Performance checks
- Backup systems
- Mobile testing

## Common Mistakes to Avoid

1. **Poor Design**
   - Cluttered layout
   - Difficult navigation
   - Slow loading
   - Unprofessional look

2. **Missing Information**
   - No contact details
   - Unclear services
   - Outdated content
   - Broken links

3. **Technical Issues**
   - Not mobile-friendly
   - Poor SEO
   - Security vulnerabilities
   - Slow performance

## Getting Started

1. **Plan Your Site**
   - Define goals
   - Identify audience
   - Plan content
   - Choose features

2. **Choose a Developer**
   - Check portfolio
   - Read reviews
   - Compare prices
   - Discuss needs

3. **Launch and Maintain**
   - Test thoroughly
   - Monitor performance
   - Update regularly
   - Gather feedback

## Conclusion

A professional website is an investment that pays off through increased visibility, credibility, and client engagement. It's an essential tool for growing your equestrian business in today's digital world.`,
    image: "https://images.pexels.com/photos/15923755/pexels-photo-15923755/free-photo-of-mouth-of-a-horse-standing-in-a-paddock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    coverImage: "https://images.pexels.com/photos/15923755/pexels-photo-15923755/free-photo-of-mouth-of-a-horse-standing-in-a-paddock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: "3",
    author: "Equinology Team"
  },
  {
    id: 3,
    title: "Branding for Equestrian Businesses What It Is and Why It Matters",
    slug: slugify("Branding for Equestrian Businesses What It Is and Why It Matters"),
    timestamp: 0,
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
    image: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
    coverImage: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
    readTime: "3",
    author: "Equinology Team"
  },
  {
    id: 4,
    title: "Equinology is Expanding to More Industries",
    slug: slugify("Equinology is Expanding to More Industries"),
    timestamp: 0,
    summary: "Discover how Equinology is broadening its expertise beyond equestrian businesses to help more industries with their digital transformation and branding needs.",
    content: `# Equinology is Expanding to More Industries

We're excited to announce that Equinology is expanding our services beyond the equestrian world to help more businesses achieve their digital potential. While our roots remain firmly in the equestrian industry, we're now bringing our expertise in web design, branding, and digital solutions to a wider range of sectors.

## Why We're Expanding

Our journey in the equestrian industry has taught us valuable lessons about:
- Building strong, memorable brands
- Creating user-friendly digital experiences
- Developing effective online strategies
- Crafting compelling visual identities

These principles are universal, and we're now applying them to help businesses across different industries.

## New Industries We're Serving

### Animal Care & Veterinary
- Veterinary clinics and practices
- Pet care services and grooming
- Animal shelters and rescue centres
- Pet product retailers

### Agriculture & Rural Businesses
- Farm and agricultural enterprises
- Rural tourism and accommodation
- Farm-to-table businesses
- Agricultural equipment suppliers

### Outdoor & Adventure
- Adventure tourism companies
- Outdoor equipment retailers
- Activity centres and clubs
- Nature-based tourism

### Professional Services
- Legal and financial services
- Consulting firms
- Educational institutions
- Healthcare providers

### Retail & E-commerce
- Specialty retail stores
- Online marketplaces
- Boutique businesses
- Service-based retailers

### Hospitality & Tourism
- Hotels and accommodations
- Restaurants and cafes
- Travel agencies
- Event venues

## What Stays the Same

While we're expanding our reach, our core values remain unchanged:
- Commitment to quality and excellence
- Focus on user experience
- Attention to detail
- Personalised service
- Results-driven approach

## Our Promise to New Clients

We bring the same level of dedication and expertise that has made us successful in the equestrian industry to every new sector we serve. Each industry has its unique challenges and requirements, and we're committed to understanding these nuances to deliver the best possible solutions.

---

Interested in learning more about how we can help your business? [Contact us](/contact) to discuss your digital needs.`,
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    coverImage: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: "4",
    author: "Equinology Team"
  },
  {
    id: 5,
    title: "WordPress vs Custom Web Development: Making the Right Choice",
    slug: slugify("WordPress vs Custom Web Development: Making the Right Choice"),
    timestamp: 0,
    summary: "A comprehensive analysis comparing WordPress and custom web development, exploring their benefits, limitations, and key considerations for businesses of all types.",
    content: `# WordPress vs Custom Web Development: Making the Right Choice

WordPress powers over 40% of all websites, but is it the right choice for your business? Let's compare WordPress with custom web development to help you make the best choice.

## WordPress vs Custom Web Development

### WordPress: Quick and Affordable
- **Cost:** Lower initial cost, many free themes and plugins
- **Setup:** Can be up and running in days
- **Updates:** Easy to update content yourself
- **Maintenance:** Regular updates needed for security
- **Customisation:** Limited by available themes and plugins

### Custom Design: Tailored to Your Needs
- **Cost:** Higher initial investment
- **Setup:** Takes longer to develop
- **Updates:** Usually requires developer help
- **Maintenance:** Less frequent, handled by professionals
- **Customisation:** Complete freedom to build exactly what you need

## When WordPress Works Well

### For Small Businesses
- Basic website needs
- Simple booking systems
- Photo galleries
- News updates
- Price lists

### For Quick Online Presence
- New businesses
- Seasonal promotions
- Event announcements
- Basic information sharing

## When Custom Design is Better

### For Complex Needs
- Specialised booking systems
- Custom management features
- Client portals
- Advanced scheduling
- Custom reporting tools

### For Growing Businesses
- Scalable solutions
- Unique features
- Better performance
- Enhanced security
- Professional support

## Key Points to Consider

1. **Your Budget**
   - WordPress: Lower cost to start, but add-ons can add up
   - Custom: Higher initial cost, but often better long-term value

2. **Technical Skills**
   - WordPress: Easy to learn, good for DIY updates
   - Custom: Requires professional help for changes

3. **Future Growth**
   - WordPress: Can be limiting as your business grows
   - Custom: Built to scale with your business

4. **Security**
   - WordPress: Needs regular updates and security plugins
   - Custom: More secure, less maintenance

5. **Performance**
   - WordPress: Can be slow with many plugins
   - Custom: Optimised for speed and efficiency

## Making the Right Choice

For many businesses, WordPress is a good starting point. It's affordable and easy to use. But if you need special features or expect to grow quickly, custom web development might be a better investment.

Think about:
- How much you can spend
- What features you really need
- How tech-savvy you are
- Your plans for growth
- How important security is to you

The best choice depends on your specific needs and goals. Some businesses start with WordPress and move to custom development later. Others go straight to custom for a more professional solution.`,
    image: "https://i.ibb.co/rPmRbqX/3ced2984-6435-48b1-8de8-a41fad0cd221.webp",
    coverImage: "https://i.ibb.co/rPmRbqX/3ced2984-6435-48b1-8de8-a41fad0cd221.webp",
    readTime: "5",
    author: "Equinology Team"
  }
].sort((a, b) => b.timestamp - a.timestamp); 