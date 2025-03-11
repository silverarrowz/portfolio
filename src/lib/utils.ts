import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Project } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const PROJECTS_RU: Array<Project> = [
  {
    id: 1,
    title: "Midori",
    slug: "midori",
    link: "https://midori-ecommerce.vercel.app/",
    github: 'https://github.com/silverarrowz/nextjs-ecommerce-midori',
    description:
      "Современный интернет-магазин, разработанный с помощью Next.js с подключенной системой управления контентом Payload CMS",
    images: ["/images/midori2.png", "/images/midori5.png", "/images/midori7.png", "/images/midori6.png", "/images/midori8.png", "/images/midori9.png"],
    stack: [
      { title: "Next.js 14", description: "Современный фреймворк, дополняющий React множеством новых полезных функций, таких как SSR и оптимизация изображений.",
        link: "https://nextjs.org/" ,
       },
      { title: "React 18", description: "Одна из популярнейших JS-библиотек, позволяющая создавать эффективные веб-приложения любой сложности.",
        link: "https://react.dev/" ,
       },
      { title: "PostgreSQL", description: "Реляционная база данных, идеально походящая для работы с интернет-магазином и его сложной логикой и взаимосвязями.",
        link: "https://www.postgresql.org/" ,
       },
      { title: "Payload CMS 3.0 (beta)", description: "Система управления контентом Payload Headless CMS в своей третьей версии представила множество совершенно новых возможностей.", link: "https://payloadcms.com/" ,
       },
     
    ],
  },
  {
    id: 2,
    title: "Гомбрайх",
    slug: "gombreich",
    link: "https://www.gombreich.ru/",
    github: "https://github.com/silverarrowz/nextjs-beauty-salon",
    
    description:
      "Сайт для салона красоты с возможностью онлайн-записи + панель управления для админов",
    images: ["/images/gombreich2.png", "/images/gombreich1.png", "/images/gombreich3.png", "/images/gombreich4.png", "/images/gombreich5.png"],
    stack: [
      { title: "React 18", description: "Одна из популярнейших JS-библиотек, позволяющая создавать эффективные веб-приложения любой сложности.", 
        link: "https://react.dev/" ,
       },
      { title: "Supabase", description: "Платформа Supabase предлагает богатый набор функций, разработанных для предоставления комплексного бэкэнд-решения - от надежной базы данных Postgres до синхронизации данных в реальном времени и аутентификации пользователей.", 
        link: "https://supabase.com/" ,
       },
      { title: "Tailwind CSS", description: "Tailwind - это “utility-first” (“полезность прежде всего”) CSS-фреймворк, предлагающий обширный каталог классов и инструментов для облегчения стилизации сайта или приложения.",
        link: "https://tailwindcss.com/" ,
       },
      { title: "TypeScript", description:  "Строго-типизированный язык программирования, который позволяет создавать код, который легко читается и поддерживается, а также компилируется в JavaScript.", link: "https://www.typescriptlang.org/" ,
       },
  
    ]
  }
];

export const PROJECTS_EN: Array<Project> = [
  {
    id: 1,
    title: "Midori",
    slug: "midori",
    link: "https://midori-ecommerce.vercel.app/",
    github: 'https://github.com/silverarrowz/nextjs-ecommerce-midori',
    description:
      "A modern online store built with Next.js, integrated with the Payload CMS content management system.",
    images: ["/images/midori2.png", "/images/midori5.png", "/images/midori7.png", "/images/midori6.png", "/images/midori8.png", "/images/midori9.png"],
    stack: [
      { title: "Next.js 14", description: "A modern framework that enhances React with many new useful features, such as SSR and image optimization.",
        link: "https://nextjs.org/" ,
       },
      { title: "React 18", description: "One of the most popular JavaScript libraries, enabling the creation of efficient web applications of any complexity.",
        link: "https://react.dev/" ,
       },
      { title: "PostgreSQL", description: "A relational database, perfectly suited for e-commerce applications with complex logic and relationships.",
        link: "https://www.postgresql.org/" ,
       },
      { title: "Payload CMS 3.0 (beta)", description: "Payload Headless CMS, in its third version, introduces many brand-new features.", link: "https://payloadcms.com/" ,
       },
     
    ],
  },
  {
    id: 2,
    title: "Gombreich",
    slug: "gombreich",
    link: "https://www.gombreich.ru/",
    github: "https://github.com/silverarrowz/nextjs-beauty-salon",
    
    description:
      "A beauty salon website with online booking + an admin panel.",
    images: ["/images/gombreich2.png", "/images/gombreich1.png", "/images/gombreich3.png", "/images/gombreich4.png", "/images/gombreich5.png"],
    stack: [
      { title: "React 18", description: "Одна из популярнейших JS-библиотек, позволяющая создавать эффективные веб-приложения любой сложности.", 
        link: "https://react.dev/" ,
       },
      { title: "Supabase", description: "Supabase is a platform offering a comprehensive backend solution, including a reliable Postgres database, real-time data synchronization, and user authentication.", 
        link: "https://supabase.com/" ,
       },
      { title: "Tailwind CSS", description: "Tailwind is a utility-first CSS framework that provides an extensive catalog of classes and tools to simplify website or application styling.",
        link: "https://tailwindcss.com/" ,
       },
      { title: "TypeScript", description:  "A strongly-typed programming language that helps create code that is easy to read, maintain, and compiles to JavaScript.", link: "https://www.typescriptlang.org/" ,
       },
  
    ]
  }
];