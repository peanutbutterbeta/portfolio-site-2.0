// All projects live here. The Work page, the homepage folders and every
// case study page (case-study.html?p=SLUG) are built from this list.
//
// Fields:
//   slug          short id used in the case study link
//   categories    one or more of CATEGORIES below (drives the Work page tabs)
//   featured      true = shows as a folder on the homepage (keep it to 4)
//   draft         true = hidden everywhere until you set it to false
//   cover         big image at the top of the case study
//   thumbnail     optional crop for the Work page card (falls back to cover)
//   featuredImage optional image for the homepage folder (falls back to thumbnail, then cover)
//   highlights    sections of the case study; images lay out in 1, 2 or 3 columns
//   video         optional Vimeo embed URL inside a highlight
//
// Order in this list = order on the site.

window.CATEGORIES = [
  "All Projects",
  "Branding & Design Systems",
  "Event Branding",
  "Iconography",
  "FinTech",
  "Influencers",
  "Web Design"
];

window.PROJECTS = [
  {
    "slug": "hyundai",
    "title": "Hyundai USA",
    "role": "Digital Team",
    "categories": [
      "Web Design",
      "Iconography",
      "Branding & Design Systems"
    ],
    "featured": true,
    "summary": "Design system, iconography, and motion graphics work on HyundaiUSA.com since 2018.",
    "cover": "images/work/hyundai-hwk4y/01-Hyundai-Vehicle-Landing-Page.png",
    "thumbnail": "images/work/hyundai-hwk4y/00-Hyundai-Thumbnail.png",
    "featuredImage": "images/work/hyundai-hwk4y/FeaturedImage-Hyundai.png",
    "intro": [
      "Hyundai USA's website is designed and managed by Innocean USA.",
      "Since 2018, I've been working on the launch of the redesigned Hyundai website. I started this work helping to sell the new site design by creating motion graphics that showed the potential interactions of a new site in presentations to Hyundai Executives around the world. While Accenture was hired to do the redesign, our internal team was making updates to 1.0 to assist in the transition. I also worked on providing creative direction on assets to the Accenture team or, in some cases, created the asset. Once 2.0 was complete, we began flowing content into the new website design."
    ],
    "myRole": [
      "I work with a copywriter, UX, and my creative director to answer client requests to create new pages, update existing pages, create new components, and customize content for HyundaiUSA.com.",
      "Internally, I increased efficiency and productivity by developing a design system in Sketch for the Hyundai website. I tested and improved the system based on feedback from my team."
    ],
    "responsibilities": [
      "User Interface",
      "Iconography Design",
      "Motion Graphics",
      "Art Direction",
      "CG Art Direction"
    ],
    "highlights": [
      {
        "heading": "Hyundai Kona all-wheel drive animation",
        "body": [
          "Hyundai Kona is a subcompact crossover SUV with all-wheel drive. To highlight this unique feature, we created an animation that shows the benefit of all-wheel drive in winter, spring, summer, and fall. I worked closely with my Creative Director and in-house developer to create a proof of concept for our client and reference for the CG agency. We worked closely with the CG agency to create a realistic Kona driving through the elements!"
        ],
        "images": [
          {
            "src": "images/work/hyundai-hwk4y/02-Hyundai-CG-Vehicles.png",
            "alt": "Hyundai Kona CG vehicle renders"
          }
        ],
        "columns": 1,
        "video": "https://player.vimeo.com/video/375779837?h=d934ead987"
      },
      {
        "heading": "Website updates",
        "body": [
          "A majority of the work for HyundaiUSA.com is updating the content on the Homepage, creating new Model Pages and updating content or creating or improving components.",
          "Below is a Model year page I created using a library of components, images, and copy to tell the sporty story of the Elantra GT."
        ],
        "images": [
          {
            "src": "images/work/hyundai-hwk4y/03-Hyundai-VLP-Specs-Gallery.png",
            "alt": "Hyundai vehicle landing page specs gallery"
          }
        ],
        "columns": 1
      },
      {
        "heading": "250+ custom icons",
        "body": [
          "I created over 250+ icons for HyundaiUSA.com. Each icon in the set depicts a feature of a Hyundai vehicle."
        ],
        "images": [
          {
            "src": "images/work/hyundai-hwk4y/04-Hyundai-Iconography-Example.png",
            "alt": "Hyundai iconography example in use"
          },
          {
            "src": "images/work/hyundai-hwk4y/05-Hyundai-Iconography.png",
            "alt": "Hyundai custom icon set"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Homepage hero breakpoint refinements",
        "body": [
          "Worked on refining the homepage hero by defining device-specific breakpoints, adjusting logo proportions for better hierarchy, and establishing safe-area guidelines that ensured images and messaging rendered cleanly across all screen sizes."
        ],
        "images": [
          {
            "src": "images/work/hyundai-hwk4y/06-Hyundai-Homepage-Breakpoints.png",
            "alt": "Hyundai homepage hero breakpoints"
          },
          {
            "src": "images/work/hyundai-hwk4y/07-Hyundai-Homepage-Breakpoints-Detail.png",
            "alt": "Hyundai homepage hero breakpoint detail"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Pixel perfect hand-off",
        "body": [
          "Across each project, I took a detail-oriented approach to ensure every component behaved correctly across devices and aligned with system standards. I worked closely with developers throughout the process clarifying edge cases, refining responsive rules, and preparing clean, annotated files to streamline handoff. This collaborative workflow helped reduce friction in implementation, improve design accuracy in build, and ensure that final experiences matched the intended visual and UX direction."
        ],
        "images": [
          {
            "src": "images/work/hyundai-hwk4y/08-Hyundai-Pixel-Perfect-Handoff.png",
            "alt": "Hyundai pixel perfect hand-off documentation"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Sketch components",
        "body": [
          "Our team was running into consistency issues because each designer was using a different set of assets. To fix this, I created a unified Sketch component library, built before cloud sharing or responsive auto-layout tools existed, with clear notes and usage guidelines. It quickly became our shared source of truth, improving consistency, reducing mistakes, and making our workflow faster and more efficient."
        ],
        "images": [
          {
            "src": "images/work/hyundai-hwk4y/09-Hyundai-Sketch-Templates.png",
            "alt": "Hyundai Sketch component templates"
          }
        ],
        "columns": 1
      }
    ],
    "draft": false
  },
  {
    "slug": "valid8",
    "title": "Valid8",
    "role": "Brand Refresh",
    "categories": [
      "Branding & Design Systems",
      "FinTech"
    ],
    "featured": true,
    "summary": "Building the Valid8 brand from a few assets and an outdated palette into a full identity system.",
    "cover": "images/work/valid8/01-Valid8-Hero-Image-v1@2x.png",
    "thumbnail": "images/work/valid8/00-Valid8-Thumbnail-v1@2x.png",
    "featuredImage": "images/work/valid8/FeaturedImage-Valid8.png",
    "intro": [
      "Valid8 is an industry leader in large-scale auditing. They are one of the only companies able to transform raw banking evidence and accounting data into verifiable evidential proof — showing exactly where all assets are — that's complete, accurate, and ready for the courtroom in just hours instead of weeks."
    ],
    "myRole": [
      "As the brand designer, I was responsible for taking a few brand assets, an outdated color palette, and building out the Valid8 brand. I worked closely with the Marketing VP to ensure all visual communications and messaging aligned with our brand values, and differentiated us from the competition.",
      "My role began with an urgent investor presentation that needed new branding before I had begun to create any of the new brand materials. My initial design for the investor deck was approved with no changes and was used in the creation and expansion of the rest of the brand materials."
    ],
    "responsibilities": [
      "Brand Audit",
      "Brand Guidelines",
      "Documents",
      "Templates",
      "Digital Ads",
      "Event Materials"
    ],
    "highlights": [
      {
        "heading": "Brand guidelines",
        "body": [],
        "images": [
          {
            "src": "images/work/valid8/02-Valid8-Brand-Guidelines-v1@2x.png",
            "alt": "Valid8 brand guidelines"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Documents",
        "body": [
          "Templates created in Canva to take 20+ existing reports and quickly convert them to the new layout via a Claude Code workflow."
        ],
        "images": [
          {
            "src": "images/work/valid8/03-Valid8-White-Papers-v1@2x.png",
            "alt": "Valid8 white papers"
          }
        ],
        "columns": 1
      },
      {
        "heading": "LinkedIn templates",
        "body": [],
        "images": [
          {
            "src": "images/work/valid8/04-Valid8-Linkedin-Templates-v1@2x.png",
            "alt": "Valid8 LinkedIn templates"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Illustrations",
        "body": [
          "Illustrations created for an infographic."
        ],
        "images": [
          {
            "src": "images/work/valid8/05-Valid8-Icons-v1@2x.png",
            "alt": "Valid8 icon illustrations for infographic"
          }
        ],
        "columns": 1
      }
    ],
    "draft": false
  },
  {
    "slug": "karat",
    "title": "Karat",
    "role": "Visual Designer",
    "categories": [
      "Web Design"
    ],
    "featured": true,
    "summary": "QA'd Karat's blog redesign, resized 100+ resource graphics, and built an After Effects system for social ads.",
    "cover": "images/work/karat/01-Karat-Blog-QA.jpg",
    "thumbnail": "images/work/karat/00-Karat-Thumbnail.png",
    "intro": [
      "Karat is the only end-to-end solution for companies looking to improve the quality, efficiency, and equity of their technical hiring. Karat accelerates hiring through their predictive and fair interview process. Karat collaborates with an engineering team to build their interview rubric then interviews candidates on a company's behalf, saving their engineering team time and resources."
    ],
    "myRole": [
      "I worked directly with the Brand Designer, VP of Marketing, and other heads of departments. I was brought on because of my technical knowledge of web and animation. I led QA of Karat's new blog design created by the agency Turtle.design. I ensured the new design was implemented correctly on the Karat website and worked with the Brand Designer to resize and redesign over 100 blog and resource thumbnails to conform to the redesign requirements. We did this alongside continuing to create all marketing materials for Karat across digital and print.",
      "I also designed social ads to drive Interview Engineer hiring funnel engagement. I worked closely with the Digital Ads team to create more dynamic content without increasing cost. Ads were used across many social platforms so I developed a system in After Effects to work efficiently. We would review the data weekly and create new graphics based on key insights of what were the highest performers. The new animated content led to more engagement and increased click-through rate."
    ],
    "responsibilities": [
      "Website QA",
      "Blog Graphics",
      "Thumbnails",
      "Animation",
      "Digital Ads",
      "Documents",
      "Presentations",
      "Social Posts"
    ],
    "highlights": [
      {
        "heading": "Resized and redesigned over 100 blog and resource graphics",
        "body": [
          "Along with resizing and redesigning blog and resource assets for the new blog design, I also worked to maintain and update the blog. I worked with a copywriter to create and publish the blog posts in WordPress and also created additional graphics for inline content and advertising on LinkedIn."
        ],
        "images": [
          {
            "src": "images/work/karat/01-Karat-Blog-QA.jpg",
            "alt": "Karat blog QA"
          },
          {
            "src": "images/work/karat/02-Karat-Blog-Asset-Conversion.jpg",
            "alt": "Karat blog asset conversion"
          },
          {
            "src": "images/work/karat/03-Karat-Blog-Resource-Manual-Resize-Assets.jpg",
            "alt": "Karat blog resource manual resize assets"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Virtual summit sizzle reel",
        "body": [
          "Karat hosted a virtual summit with leading tech and talent executives and academics about how to accelerate technical hiring and also how to launch or expand initiatives to increase diversity in software engineers — making tech hiring efficient, effective, and equitable."
        ]
      },
      {
        "heading": "Industry leaders",
        "body": [
          "Karat is an industry leader in efficient and fair hiring practices. We created a high volume of documents needed for interview candidates, industry reports, and ebooks."
        ],
        "images": [
          {
            "src": "images/work/karat/04-Karat-Documents.png",
            "alt": "Karat industry documents"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Digital ads",
        "body": [
          "I designed social ads to drive Interview Engineer hiring funnel engagement. I worked closely with the Digital Ads team to create more dynamic content without increasing cost. Ads were used across many social platforms so I developed a system in After Effects to work efficiently. The new animated content led to more engagement and increased click-through rate."
        ],
        "images": [
          {
            "src": "images/work/karat/05-Karat-Digital-Ads.jpg",
            "alt": "Karat digital ads"
          }
        ],
        "columns": 1
      }
    ],
    "draft": false
  },
  {
    "slug": "mrh",
    "title": "Madeleine Raiford-Holland",
    "role": "Brand Extension",
    "categories": [
      "Branding & Design Systems",
      "Influencers",
      "Iconography"
    ],
    "featured": true,
    "summary": "Expanded the Madeleine Raiford-Holland/MHM brand — typography, palette, guidelines, and ongoing digital and print assets.",
    "cover": "images/work/mrh/01-MRH-Hero@2x.png",
    "thumbnail": "images/work/mrh/00-MRH-Thumbnail@2x.png",
    "intro": [
      "Madeleine Raiford-Holland is the founder of MHM Luxury Properties, a 7-figure boutique short term rental investor, and entrepreneur. Since originally starting as a lifestyle influencer in 2016 she has grown her reach, but narrowed her focus to short term rental and real estate investing. She offers mentorship programs, guides, and templates."
    ],
    "myRole": [
      "I was brought in to bring cohesion and expand the MRH brand. I started by defining new typography, refined the color palette, built brand guidelines, and created assets that aligned with the new direction. I continue to work with the marketing team and Madeleine to create visuals across digital and print."
    ],
    "responsibilities": [
      "Brand Extension",
      "Iconography Design",
      "Website Design",
      "Deck Design",
      "Event Materials",
      "Digital Ads",
      "Canva Templates",
      "PDF Resources"
    ],
    "highlights": [
      {
        "heading": "Brand guidelines",
        "body": [
          "One of the urgent needs was to create brand guidelines to send out to partners. Within a week or two of starting to work, I refined the color palette, found new brand fonts, and created the brand guidelines."
        ],
        "images": [
          {
            "src": "images/work/mrh/02-MRH-Brand-Guidelines@2x.png",
            "alt": "MRH brand guidelines"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Consistency across programs & courses",
        "body": [
          "When we started working together, Madeleine had two programs for her clients. The team liked the geometric look of the original logos, but they were not balanced or consistent. Madeleine knew she would create many more courses, self-guided programs, and boot camps. I redesigned these logos in a way that we could build a system for future programs and courses offered."
        ],
        "images": [
          {
            "src": "images/work/mrh/03-MRH-Brand-Logo-Consistency@2x.png",
            "alt": "MRH brand logo consistency"
          },
          {
            "src": "images/work/mrh/04-Brand-Logo-Consistency-2@2x.png",
            "alt": "MRH brand logo consistency, additional examples"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Digital guides, templates, and documentation",
        "body": [
          "I've created dozens of guides, templates, internal documents, and sales collateral for the team."
        ],
        "images": [
          {
            "src": "images/work/mrh/05-MRH-Documents@2x.png",
            "alt": "MRH documents"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Social media posts & templates",
        "body": [
          "Each social post is 5 to 10 slides. I created templates the team can quickly update so they're able to post multiple times a week while keeping costs low."
        ],
        "images": [
          {
            "src": "images/work/mrh/06-MRH-Social-Posts@2x.png",
            "alt": "MRH social media posts"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Podcast cover design",
        "body": [
          "I designed Madeleine's podcast cover art after an agency sent over their comps. The goal was to show Madeleine's professionalism and create an elevated design that was on brand."
        ],
        "images": [
          {
            "src": "images/work/mrh/07-MRH-Podcast@2x.png",
            "alt": "MRH podcast cover design"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Iconography",
        "body": [
          "I created a unique set of icons to use across materials. A few icons were created for retreat email newsletters."
        ],
        "images": [
          {
            "src": "images/work/mrh/08-MRH-Icons@2x.png",
            "alt": "MRH iconography"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Social platform graphics",
        "body": [
          "I designed banners for LinkedIn, YouTube, and Facebook that are formatted to work across desktop and mobile."
        ],
        "images": [
          {
            "src": "images/work/mrh/09-MRH-Linkedin@2x.png",
            "alt": "MRH LinkedIn banner"
          }
        ],
        "columns": 1
      }
    ],
    "draft": false
  },
  {
    "slug": "hostcon",
    "title": "HostCon",
    "role": "Event Branding",
    "categories": [
      "Event Branding",
      "Influencers"
    ],
    "featured": false,
    "summary": "Visual content across digital and print for HostCon, Robuilt's course and mentorship community for short-term rental hosts.",
    "cover": "images/work/hostcon-nx67s/hero.jpg",
    "intro": [
      "Robuilt is a youtuber with over 264K+ followers known for everything Airbnb, Short Term Rentals, Rental Arbitrage, glamping and beyond. He's also the creator of Host Camp which specializes in courses and mentorship programs for beginners to experienced hosts. He's created a huge community with a unique culture of transparency and support."
    ],
    "myRole": [
      "I work closely with the marketing team and sales team to create all visual content across digital and print. I collaborate to ensure all visuals and messaging in marketing materials and templates are optimized for use and success — a fast-paced environment requiring skills in branding, design, animation, and marketing strategy."
    ],
    "responsibilities": [
      "Branding",
      "Website Design",
      "Presentations",
      "Event Materials",
      "Digital Ads",
      "Email Newsletters"
    ],
    "highlights": [
      {
        "heading": "Banners, step & repeat, and table throw",
        "body": []
      },
      {
        "heading": "Badge",
        "body": []
      },
      {
        "heading": "Buttons",
        "body": []
      },
      {
        "heading": "Posters",
        "body": []
      },
      {
        "heading": "Website",
        "body": []
      },
      {
        "heading": "Custom icons",
        "body": []
      }
    ],
    "gallery": [
      {
        "src": "images/work/hostcon-nx67s/banners.jpg",
        "alt": "HostCon banners, step & repeat, and table throw"
      },
      {
        "src": "images/work/hostcon-nx67s/badge.jpg",
        "alt": "HostCon event badge"
      }
    ],
    "draft": true
  },
  {
    "slug": "payzen",
    "title": "PayZen",
    "role": "Brand Designer",
    "categories": [
      "Branding & Design Systems",
      "FinTech"
    ],
    "featured": false,
    "summary": "Built the PayZen brand from initial assets — guidelines, digital ads, trade show materials, and marketing collateral.",
    "cover": "images/work/payzen-564jp/01-PayZen-Hero-Image-v1.png",
    "thumbnail": "images/work/payzen-564jp/00-PayZen-Thumbnail@2x.png",
    "featuredImage": "images/work/payzen-564jp/FeaturedImage-PayZen.png",
    "intro": [
      "PayZen fights healthcare inequity by addressing affordability at the point of payment. PayZen uses Affordability Financing to create a more positive customer experience that gives patients 0% interest on long-term loan options to help them manage medical bills."
    ],
    "myRole": [
      "As the brand designer, I was responsible for taking a few brand assets and building out the PayZen brand. I worked closely with the marketing team to ensure that all visual communications and messaging aligned with our brand values, and that they effectively reach and engage with our target audience.",
      "My role involved a wide range of skills, from creating our initial folder structure and templates, to creating visual content for digital ads, website, and marketing collateral including trade show booth designs, rack cards, print ads, presentations, and marketing emails."
    ],
    "responsibilities": [
      "Brand Guidelines",
      "B2B Digital PDFs",
      "Digital Ads",
      "Website/Blog Graphics",
      "Email Newsletters",
      "Event Materials"
    ],
    "highlights": [
      {
        "heading": "Brand guidelines",
        "body": [],
        "images": [
          {
            "src": "images/work/payzen-564jp/04-PayZen-Brand-Guidelines-v1.png",
            "alt": "PayZen brand guidelines"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Rack card",
        "body": [],
        "images": [
          {
            "src": "images/work/payzen-564jp/05-PayZen-Rack-Card-v1.png",
            "alt": "PayZen rack card"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Print ad",
        "body": [],
        "images": [
          {
            "src": "images/work/payzen-564jp/06-PayZen-Print-Ads-v1.png",
            "alt": "PayZen print ad"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Digital PDFs",
        "body": [],
        "images": [
          {
            "src": "images/work/payzen-564jp/07-PayZen-Digital-White-Paper-v1.png",
            "alt": "PayZen digital white paper"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Digital ads",
        "body": [],
        "images": [
          {
            "src": "images/work/payzen-564jp/08-PayZen-Digital-Ads-v1.png",
            "alt": "PayZen digital ads"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Blog thumbnails",
        "body": [],
        "images": [
          {
            "src": "images/work/payzen-564jp/09-PayZen-Blog-Images-v1.png",
            "alt": "PayZen blog thumbnails"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Email newsletters",
        "body": [],
        "images": [
          {
            "src": "images/work/payzen-564jp/10-PayZen-Email-Design-v1.png",
            "alt": "PayZen email newsletter design"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Examples of graphics",
        "body": [],
        "images": [
          {
            "src": "images/work/payzen-564jp/11-PayZen-Graphic1@2x.png",
            "alt": "PayZen graphic example 1"
          },
          {
            "src": "images/work/payzen-564jp/11-PayZen-Graphic2@2x.png",
            "alt": "PayZen graphic example 2"
          },
          {
            "src": "images/work/payzen-564jp/11-PayZen-Graphic3@2x.png",
            "alt": "PayZen graphic example 3"
          },
          {
            "src": "images/work/payzen-564jp/11-PayZen-Graphic4@2x.png",
            "alt": "PayZen graphic example 4"
          },
          {
            "src": "images/work/payzen-564jp/11-PayZen-Graphic5@2x.png",
            "alt": "PayZen graphic example 5"
          },
          {
            "src": "images/work/payzen-564jp/11-PayZen-Graphic6@2x.png",
            "alt": "PayZen graphic example 6"
          }
        ],
        "columns": 3
      }
    ],
    "draft": false
  },
  {
    "slug": "logos",
    "title": "Logos & Bits",
    "role": "Icon & Logo Design",
    "categories": [
      "Branding & Design Systems",
      "Iconography"
    ],
    "featured": false,
    "summary": "A collection of logo design work.",
    "cover": "images/work/logos-zwx7n/hero.jpg",
    "intro": [
      "A collection of logo design work."
    ],
    "myRole": [],
    "responsibilities": [],
    "highlights": [],
    "gallery": [
      {
        "src": "images/work/logos-zwx7n/logos-1.jpg",
        "alt": "Logo design collection"
      }
    ],
    "draft": true
  },
  {
    "slug": "host-camp",
    "title": "Host Camp",
    "role": "Web Design",
    "categories": [
      "Web Design",
      "Influencers"
    ],
    "featured": false,
    "summary": "Website design, event materials, and ongoing marketing content for Robuilt's Host Camp community.",
    "cover": "images/work/the-robuilt-channel-pl3c3/hero.jpg",
    "intro": [
      "Robuilt is a youtuber with over 264K+ followers known for everything Airbnb, Short Term Rentals, Rental Arbitrage, glamping and beyond. He's also the creator of Host Camp which specializes in courses and mentorship programs for beginners to experienced hosts. He's created a huge community with a unique culture of transparency and support."
    ],
    "myRole": [
      "I work closely with the marketing team and sales team to create all visual content across digital and print. I collaborate to ensure all visuals and messaging in marketing materials and templates are optimized for use and success — a fast-paced environment requiring skills in branding, design, animation, and marketing strategy."
    ],
    "responsibilities": [
      "Branding",
      "Website Design",
      "Downloadable PDFs",
      "Presentations",
      "Event Materials",
      "Digital Ads",
      "Email Newsletters"
    ],
    "highlights": [
      {
        "heading": "Website design — before and after",
        "body": []
      },
      {
        "heading": "Offer sheets, digital downloads, workbooks",
        "body": []
      },
      {
        "heading": "Event banners and table cloth",
        "body": []
      },
      {
        "heading": "Email creation and content organization",
        "body": [
          "Created and organized the content library with a dozen hero image assets. We achieved our goal of creating a consistent brand experience and also creating a sustainable workflow for our email manager."
        ]
      }
    ],
    "gallery": [
      {
        "src": "images/work/the-robuilt-channel-pl3c3/website-before-after.jpg",
        "alt": "Host Camp website design before and after"
      },
      {
        "src": "images/work/the-robuilt-channel-pl3c3/event-banners.jpg",
        "alt": "Host Camp event banners and table cloth"
      }
    ],
    "draft": true
  },
  {
    "slug": "foxtales",
    "title": "FoxTales",
    "role": "Experiential",
    "categories": [
      "Event Branding",
      "Iconography"
    ],
    "featured": false,
    "summary": "120+ branded experiential marketing activations in one year for clients including Microsoft, Disney, NFL, and Canon.",
    "cover": "images/work/foxtales-experiential-photo-marketing-8adg4/hero.jpg",
    "intro": [
      "120+ experiences in one year.",
      "FoxTales was an experiential marketing company focused on creating completely branded experiences. Every activation uses a fully integrated design built from the ground up. The result is uniquely branded content that encourages sharing."
    ],
    "myRole": [
      "My role was to work with the clients in developing the right solution to fit their activation. I would use existing and custom created assets to seamlessly integrate the photo booth into their campaign. Ultimately, I created backdrops, banners, UI/UX, and all other elements of the kiosk to guide the user experience from physical signage to the email they received with their content delivery."
    ],
    "responsibilities": [
      "Campaign Designs",
      "Internal Organization",
      "Email Newsletters",
      "Documentation",
      "Pitch Decks",
      "Website Updates",
      "Icon Design",
      "Case Studies"
    ],
    "highlights": [
      {
        "heading": "Clients",
        "body": [
          "We worked consistently with Microsoft, Disney, NFL, Nike, Facebook, Comedy Central, and Canon to name a few. We worked like a small agency, not just delivering a place for people to take pictures, but an entire branded experience from top to bottom that worked within every unique campaign activation."
        ]
      },
      {
        "heading": "Iconography",
        "body": [
          "We built out a visual system along with diagrams to show how each experience worked."
        ]
      },
      {
        "heading": "Content examples",
        "body": [
          "Some of my favorite content."
        ]
      },
      {
        "heading": "Monthly newsletters",
        "body": [
          "We designed a unique newsletter with gifs and content from the most notable events along with upcoming events."
        ]
      },
      {
        "heading": "Awards & recognition",
        "body": [
          "BizBash — Best Use of Video, BizBash Event Style Awards.",
          "CES — Featured a visionary company at Canon's 2017 CES booth showcasing imaging innovation.",
          "CNN Politics — \"Like, Share, Elect\" Museum Exhibit at Newseum.",
          "Event Marketer — Best Consumer Environment, Experience Design & Technology Award; Best Mobile Experience, Experience Design & Technology Awards.",
          "The 2017 EX Awards — Best Use of Events for Content.",
          "Facebook Developer Conference — Facebook Live API launch partner.",
          "GoPro — One of only 5 launch partners.",
          "Hashtag Sports — Invited by Microsoft to showcase our platform for major national news media, highlighting innovations in fan engagement technology.",
          "2017 Edward R. Murrow Awards — Excellence in Social Media, Presidential Campaign 2016.",
          "Office 365 — FoxTales was filmed for a feature showcasing our innovations in experiential marketing and how we used Office 365.",
          "Provenue Exchange — Breakout session on \"Leveraging Visual Experiences as a Fan Engagement Tool,\" invited by Tickets.com."
        ]
      }
    ],
    "gallery": [
      {
        "src": "images/work/foxtales-experiential-photo-marketing-8adg4/content-examples.jpg",
        "alt": "FoxTales content examples"
      },
      {
        "src": "images/work/foxtales-experiential-photo-marketing-8adg4/newsletter.jpg",
        "alt": "FoxTales monthly newsletter design"
      }
    ],
    "draft": true
  },
  {
    "slug": "rise",
    "title": "RISE",
    "role": "Event Design",
    "categories": [
      "Event Branding"
    ],
    "featured": false,
    "summary": "Redesigned RISE's event activation — bolder branding, a refined color palette, and designed overlays in place of handheld signs.",
    "cover": "images/work/rise-mlscup-experience-ezznl/01-Foxtales-RISE-Cover-v1.png",
    "intro": [
      "Ross Initiative in Sports for Equality (RISE) uses sports to address racism, champion social justice, and unify the nation. RISE came to us wanting to increase their presence at events with stronger branding on-site and on shareable content. Their booth looked more like an official sign-up station than an engaging brand experience. I redesigned the activation, refined the color palette, made important messaging bigger and bolder, and replaced their handheld signs with designed overlays. The result was a more engaging booth with bold brand elements that were later incorporated into their overall branding."
    ],
    "myRole": [],
    "responsibilities": [
      "Concept",
      "Design",
      "Event Materials",
      "Activation Footprint & Design"
    ],
    "highlights": [
      {
        "heading": "The experience",
        "body": [
          "The old footprint was a step-and-repeat with pull-up banners — easy to walk past. The redesign built the pledge itself into the structure: full-height walls carrying the RISE pledge in large type, the logo and hashtag mounted overhead on truss, and the photo kiosk placed inside the footprint rather than off to one side."
        ],
        "images": [
          {
            "src": "images/work/rise-mlscup-experience-ezznl/02-Foxtales-RISE-Setup-v1.png",
            "alt": "Side-by-side comparison of the old RISE booth branding and the redesigned activation footprint"
          }
        ],
        "columns": 1
      },
      {
        "heading": "On site",
        "body": [
          "The activation ran outside BMO Field at the MLS Cup final, where the pledge wall and the kiosk sat together in the fan plaza."
        ],
        "images": [
          {
            "src": "images/work/rise-mlscup-experience-ezznl/03-Foxtales-RISE-Kiosk-v1.png",
            "alt": "A guest selecting their content on the RISE kiosk, with the pledge wall behind her"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Kiosk flow",
        "body": [
          "Guests chose between a portrait and a GIF, then picked one of four overlays — including a matchup design built from the two competing clubs' colors and crests. Six screens from engage to thank you, with a retake step before anything was sent."
        ],
        "images": [
          {
            "src": "images/work/rise-mlscup-experience-ezznl/04-Foxtales-RISE-Kiosk-UI-Flow-v1.png",
            "alt": "The six-screen RISE kiosk interface flow: engage, content select, overlay select, content preview, content review, email entry, and thank you"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Content examples",
        "body": [
          "These overlays replaced the handheld signs the booth had been using. Each one carried a RISE message and MLS Cup branding, so what guests posted did the work the signs were meant to do — and looked like it belonged on a feed."
        ],
        "images": [
          {
            "src": "images/work/rise-mlscup-experience-ezznl/05a-Foxtales-RISE-Captured-Content1-v1.png",
            "alt": "Split blue and red club matchup overlay with two fans facing away from each other"
          },
          {
            "src": "images/work/rise-mlscup-experience-ezznl/05b-Foxtales-RISE-Captured-Content2-v1.png",
            "alt": "Two fans with the \"Equality is a winning play\" overlay"
          },
          {
            "src": "images/work/rise-mlscup-experience-ezznl/05c-Foxtales-RISE-Captured-Content3-v1.png",
            "alt": "A fan with the \"I rise to end discrimination\" overlay"
          },
          {
            "src": "images/work/rise-mlscup-experience-ezznl/05d-Foxtales-RISE-Captured-Content4-v1.png",
            "alt": "A group of four fans with the \"I rise to end discrimination\" overlay"
          },
          {
            "src": "images/work/rise-mlscup-experience-ezznl/05e-Foxtales-RISE-Captured-Content5-v1.png",
            "alt": "Two fans with the \"Rise for equality\" overlay"
          },
          {
            "src": "images/work/rise-mlscup-experience-ezznl/05f-Foxtales-RISE-Captured-Content6-v1.png",
            "alt": "Fans from both clubs celebrating, split across the blue and red matchup overlay"
          }
        ],
        "columns": 3
      },
      {
        "heading": "Content delivery",
        "body": [
          "The delivery email carried the same dark and gold treatment as the booth, thanked guests for taking the pledge, and pointed them to the gallery to share and tag."
        ],
        "images": [
          {
            "src": "images/work/rise-mlscup-experience-ezznl/06-Foxtales-RISE-Content-Delivery-v1.png",
            "alt": "Two phones showing the RISE delivery email and the mobile gallery with social sharing options"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Event highlights",
        "body": [
          "Fans from both sides of the final stopped at the pledge wall — which was the point of making the messaging the structure rather than the signage."
        ],
        "images": [
          {
            "src": "images/work/rise-mlscup-experience-ezznl/07-Foxtales-RISE-Event-Photography-v1.png",
            "alt": "Large #MLSCUP letters outside BMO Field on the day of the final"
          },
          {
            "src": "images/work/rise-mlscup-experience-ezznl/08-Foxtales-RISE-Event-Photography-v1.png",
            "alt": "A fan beside the RISE kiosk and the pledge wall in the fan plaza"
          },
          {
            "src": "images/work/rise-mlscup-experience-ezznl/09-Foxtales-RISE-Event-Photography-v1.png",
            "alt": "Two guests standing in front of the full-height RISE pledge wall"
          }
        ],
        "columns": 3
      }
    ],
    "draft": false
  },
  {
    "slug": "canon-ces",
    "title": "Canon CES",
    "role": "Event Design",
    "categories": [
      "Event Branding"
    ],
    "featured": false,
    "summary": "An animated photo experience for Canon at CES 2017, created with artist Aaron Kai.",
    "cover": "images/work/canon-ces-experience-yz64e/01-FoxTales-Canon-v1.png",
    "intro": [
      "FoxTales was featured by Canon at CES in 2017. We partnered with artist Aaron Kai to create an unexpected photo experience. Aaron Kai created a unique work for the event which I broke into layers and animated in After Effects. I worked directly with our lead developer to push our application to export smoother sequenced animation and export high quality content."
    ],
    "myRole": [],
    "responsibilities": [
      "UI Design",
      "Art Animation"
    ],
    "highlights": [
      {
        "heading": "The setup",
        "body": [
          "Aaron Kai's artwork was printed as a floor-level platform rather than a backdrop, so the camera looked down and guests became part of the illustration. The camera was housed in the overhead frame between two content feeds — one at eye level for the guest, one above for the crowd walking past."
        ],
        "images": [
          {
            "src": "images/work/canon-ces-experience-yz64e/02-FoxTales-Canon-Setup-v1.png",
            "alt": "Diagram of the Canon activation, labeled: live content feed, camera housed between content feeds, and the custom backdrop artwork by Aaron Kai"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Kiosk UI flow",
        "body": [
          "I designed the on-screen experience around Canon's \"Visionaries\" campaign — six screens from the idle engage screen through capture, preview, review with the option to retake, email entry, and a thank you screen that resets after seven seconds."
        ],
        "images": [
          {
            "src": "images/work/canon-ces-experience-yz64e/03-FoxTales-Canon-Kiosk-UI-Flow-v1.png",
            "alt": "The six-screen Canon kiosk interface flow: engage, content select, content preview, content review, email entry, and thank you"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Captured content",
        "body": [
          "The capture dropped guests into Aaron Kai's illustration, framed and color-matched to the artwork they were lying on. Guests reviewed the result on the kiosk screen before sending it to themselves."
        ],
        "images": [
          {
            "src": "images/work/canon-ces-experience-yz64e/10-FoxTales-Canon-Event-Photo-v1.png",
            "alt": "A guest's finished content on the kiosk review screen, showing them composited into Aaron Kai's illustration"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Content delivery",
        "body": [
          "Content arrived in a Canon-branded email carrying the campaign's \"Visionaries Welcome\" message, linked to a mobile gallery where guests could share straight to social."
        ],
        "images": [
          {
            "src": "images/work/canon-ces-experience-yz64e/05-FoxTales-Canon-Content-Delivery-v1.png",
            "alt": "Two phones showing the Canon delivery email and the mobile gallery with social sharing options"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Event photography",
        "body": [
          "The activation ran inside Canon's CES booth as one of their featured Visionaries."
        ],
        "images": [
          {
            "src": "images/work/canon-ces-experience-yz64e/06-FoxTales-Canon-Event-Photo-v1.png",
            "alt": "The activation inside the Canon CES booth, with the printed artwork platform under the camera frame"
          },
          {
            "src": "images/work/canon-ces-experience-yz64e/07-FoxTales-Canon-Event-Photo-v1.png",
            "alt": "Two guests standing on the artwork platform under the camera frame"
          },
          {
            "src": "images/work/canon-ces-experience-yz64e/08-FoxTales-Canon-Event-Photo-v1.png",
            "alt": "A film crew recording on the CES show floor beside the activation"
          },
          {
            "src": "images/work/canon-ces-experience-yz64e/09-FoxTales-Canon-Event-Photo-v1.png",
            "alt": "A guest lying across the printed artwork while being photographed from above"
          }
        ],
        "columns": 2
      }
    ],
    "draft": false
  },
  {
    "slug": "oakley-pga",
    "title": "Oakley PGA",
    "role": "Experience Design",
    "categories": [
      "Event Branding"
    ],
    "featured": false,
    "summary": "A custom photo experience for Oakley at the PGA show, built around Bubba Watson's jetpack.",
    "cover": "images/work/foxtales-oakley-pga-experience-gbsg6/01-FoxTales-Oakley-v1.png",
    "intro": [
      "Oakley approached FoxTales to create a unique photo experience for guests attending the PGA show in Orlando. Using inspiration, assets, and Bubba Watson's actual jetpack, we concepted, designed, and coded a custom solution that integrated seamlessly with the Oakley brand."
    ],
    "myRole": [],
    "responsibilities": [
      "Concept",
      "Design",
      "Animation",
      "Backdrop Design + PreFlight"
    ],
    "highlights": [
      {
        "heading": "The activation",
        "body": [
          "The booth was built around one idea — put the guest in the jetpack. The real jetpack sat on a green screen stage under a branded backdrop, with the photo kiosk in front of it and a live content feed running on a screen beside it so people walking the show floor could see what was being made."
        ],
        "images": [
          {
            "src": "images/work/foxtales-oakley-pga-experience-gbsg6/02-FoxTales-Oakley-Setup-v1.png",
            "alt": "The Oakley booth layout, labeled: live content feed, FoxTales photo kiosk, and branded backdrop with green screen behind the jetpack"
          }
        ],
        "columns": 1
      },
      {
        "heading": "The photo kiosk",
        "body": [
          "The kiosk was designed to carry the Oakley brand rather than sit next to it — the octagon silhouette, the ring light, and the logo mark all pulled from Oakley's own design language. Guests ran the entire experience themselves, from starting a session to sending their content."
        ],
        "images": [
          {
            "src": "images/work/foxtales-oakley-pga-experience-gbsg6/03-FoxTales-Oakley.png",
            "alt": "The Oakley-branded photo kiosk design, showing the octagonal housing, ring light, and touchscreen"
          },
          {
            "src": "images/work/foxtales-oakley-pga-experience-gbsg6/03-FoxTales-Oakley-Kiosk-v1.png",
            "alt": "A guest using the kiosk touchscreen on the show floor to enter their email"
          }
        ],
        "columns": 2
      },
      {
        "heading": "Kiosk interface",
        "body": [
          "Six screens, start to finish: an engage screen that idles when no one is at the kiosk, content select, a preview of the green screen capture, a review step with the option to retake, email entry, and a thank you screen that resets the kiosk after seven seconds."
        ],
        "images": [
          {
            "src": "images/work/foxtales-oakley-pga-experience-gbsg6/04-FoxTales-Oakley-Kiosk-UI-Flow-v1.png",
            "alt": "The six-screen kiosk interface flow: engage, content select, content preview, content review, email entry, and thank you"
          }
        ],
        "columns": 1
      },
      {
        "heading": "The jetpack moment",
        "body": [
          "The green screen capture was composited into an aerial shot of a packed tournament hole, so guests came away with a photo of themselves flying the jetpack over the crowd — the shot the booth promised on the backdrop."
        ],
        "images": [
          {
            "src": "images/work/foxtales-oakley-pga-experience-gbsg6/05-FoxTales-Oakley.png",
            "alt": "The finished photo output: a guest composited into Bubba Watson's jetpack, flying above an aerial view of a packed tournament hole"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Animation",
        "body": [
          "The still photo was only the first frame. I animated the output so a golf ball flies into the shot, shatters, and resolves into Oakley's PRIZM lens message — turning each guest's photo into a short piece of branded content worth sharing."
        ],
        "images": [
          {
            "src": "images/work/foxtales-oakley-pga-experience-gbsg6/06-FoxTales-Oakley-Animation-Stills.png",
            "alt": "Five stills from the animation: the jetpack photo, a golf ball entering frame, the ball shattering, and the closing PRIZM lens technology message"
          }
        ],
        "columns": 1
      },
      {
        "heading": "Content delivery",
        "body": [
          "Guests entered their email at the kiosk and their content arrived in a branded Oakley email, linked to a mobile gallery where they could save it or share it straight to social."
        ],
        "images": [
          {
            "src": "images/work/foxtales-oakley-pga-experience-gbsg6/07-FoxTales-Oakley-Content-Delivery-v1.png",
            "alt": "Two phones showing the branded Oakley delivery email and the mobile gallery with social sharing options"
          }
        ],
        "columns": 1
      },
      {
        "heading": "At the show",
        "body": [
          "The activation drew a line for most of the show, pulled press coverage on the floor, and held a crowd through a live performance at the booth."
        ],
        "images": [
          {
            "src": "images/work/foxtales-oakley-pga-experience-gbsg6/08-FoxTales-Oakley-Event-Photography-v1.png",
            "alt": "Guests gathered at the booth watching someone being photographed in the jetpack"
          },
          {
            "src": "images/work/foxtales-oakley-pga-experience-gbsg6/09-FoxTales-Oakley-Event-Photography-v1.png",
            "alt": "A television crew filming an interview in front of the green screen stage"
          },
          {
            "src": "images/work/foxtales-oakley-pga-experience-gbsg6/10-FoxTales-Oakley-Event-Photography-v1.png",
            "alt": "A crowd packed around the booth during a live performance beside the jetpack"
          }
        ],
        "columns": 3
      }
    ],
    "draft": false
  },
  {
    "slug": "hurley",
    "title": "Hurley",
    "role": "Digital Team",
    "categories": [
      "Web Design",
      "Iconography"
    ],
    "featured": false,
    "summary": "Selected from 2,000 applicants for a 10-week intensive design internship at Hurley, Nike's surf apparel category.",
    "cover": "images/work/hurley-f33ry/hero.jpg",
    "intro": [
      "Selected out of 2,000 applicants to participate in a full-time 10 week intensive, project-based internship at Hurley, the surf apparel category of Nike. Projects are presented to representatives from Hurley and Nike at the culmination of the internship. All interns also worked departments and were managed and directed by a Hurley team member."
    ],
    "myRole": [],
    "responsibilities": [
      "Photo Editing",
      "Icon Design",
      "Website Graphics",
      "HSS Motion Graphic"
    ],
    "highlights": [],
    "gallery": [
      {
        "src": "images/work/hurley-f33ry/website-graphics.jpg",
        "alt": "Hurley website graphics"
      }
    ],
    "draft": true
  },
  {
    "slug": "innocean",
    "title": "Website Redesign: Innocean USA",
    "role": "Web Design",
    "categories": [
      "Web Design"
    ],
    "featured": false,
    "summary": "Website redesign work for Innocean USA.",
    "cover": "images/work/new-page-1-k6aes/hero.jpg",
    "intro": [
      "Website redesign work for Innocean USA."
    ],
    "myRole": [],
    "responsibilities": [],
    "highlights": [],
    "gallery": [
      {
        "src": "images/work/new-page-1-k6aes/hero.jpg",
        "alt": "Innocean USA website redesign"
      }
    ],
    "draft": true
  },
  {
    "slug": "make-a-baby",
    "title": "Make a Baby On Purpose Challenge",
    "role": "Art Direction",
    "categories": [
      "Branding & Design Systems"
    ],
    "featured": false,
    "summary": "Campaign for the Thousand Dollar Shave Society, honored with Communication Arts, Adweek, and New York Festivals awards.",
    "cover": "images/work/make-a-baby-on-purpose-challenge-edks6/hero.jpg",
    "intro": [
      "The Thousand Dollar Shave Society is an online retailer of ultra-luxury shaving products for men. We created the ultra challenge for men (and their female counterparts): the Make a Baby on Purpose Challenge."
    ],
    "myRole": [],
    "responsibilities": [
      "Campaign Ideation",
      "Logo Concept",
      "Social Content Creation"
    ],
    "highlights": [
      {
        "heading": "Awards & recognition",
        "body": [
          "Communication Arts Ad Annual 2015",
          "Adweek Watch Awards 2015",
          "New York Festivals — 1x Gold, 1x Bronze, 3x Finalist",
          "Radio Mercury Awards — 2x Finalist"
        ]
      },
      {
        "heading": "Press",
        "body": [
          "Adweek — \"Dollar Shave Club Trolled by Thousand Dollar Shave Society, For Guys who 'Make Babies on Purpose'\"",
          "Adweek — \"These 16 Videos Are Each a Case Study in Nailing the Right Tone for the Right Audience\"",
          "DigiDay — \"The Thousand Dollar Shave Society wants you to make a baby.\""
        ]
      }
    ],
    "gallery": [
      {
        "src": "images/work/make-a-baby-on-purpose-challenge-edks6/logo-concept.jpg",
        "alt": "Make a Baby On Purpose Challenge logo concept"
      }
    ],
    "draft": true
  },
  {
    "slug": "tractor-soda",
    "title": "Tractor Soda Co",
    "role": "Branding + UI/UX",
    "categories": [
      "Branding & Design Systems",
      "Web Design"
    ],
    "featured": false,
    "summary": "Logo, packaging, and web design for Tractor Soda Co., an organic and non-GMO soda company.",
    "cover": "images/work/branding-uiux-tractor-soda-co-4lm48/hero.jpg",
    "intro": [
      "Tractor Soda Co. is an all organic and non-GMO soda company in California. Originally, worked under the direction of Ryan Jacobs, a Freelance Creative Director in San Diego. Together, we worked to update the initial identity of Tractor Soda Co. After the initial logo and website launched, Ryan moved on while I continued to work with Tractor Soda creating new flavors, marketing materials, and branding other Tractor products."
    ],
    "myRole": [],
    "responsibilities": [
      "Logo Design",
      "Pattern Design",
      "Website UI",
      "Marketing Materials"
    ],
    "highlights": [
      {
        "heading": "Logo exploration",
        "body": [
          "Client wanted to move away from a \"Coca-Cola\" feel while keeping all existing words/elements in the original design."
        ]
      },
      {
        "heading": "Flavor designs",
        "body": [
          "Each drink pattern is inspired by the unique ingredients in the drinks.",
          "These labels are displayed on the Tractor Soda fountain machine."
        ]
      },
      {
        "heading": "POS designs",
        "body": [
          "Print materials, tap handle designs, and presentations, digital and printed."
        ]
      },
      {
        "heading": "Illustrations",
        "body": [
          "Simple vector illustrations for use on the website, posters, marketing materials, and packaging."
        ]
      }
    ],
    "gallery": [
      {
        "src": "images/work/branding-uiux-tractor-soda-co-4lm48/flavor-designs.jpg",
        "alt": "Tractor Soda Co flavor pattern designs"
      },
      {
        "src": "images/work/branding-uiux-tractor-soda-co-4lm48/pos-designs.jpg",
        "alt": "Tractor Soda Co POS designs"
      }
    ],
    "draft": true
  }
];
