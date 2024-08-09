import { WORKING_TIME } from "$lib/constants";

export const LANGUAGES = {
  en: 'Ensglish',
  es: 'Español',
  ca: 'Català',
};

export const DEFAULT_LANGUAGE = 'es';

export const UI = {
  es: {
    meta: {
      title: 'Pol Cortés | Desarrollador Web Frontend',
      description: `Desarrollador Web Frontend Junior, localizado a pocos minutos de Barcelona centro y apasionado por la UX y el SEO. ${ WORKING_TIME() }`,
      keywords: 'desarrollador web, frontend, junior, barcelona, ux, seo, html, css, tailwind, javascript, jquery, astro, svelte, responsive, performance',
    },
    navbar: {
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
      options: 'Opciones',
      optionsTitle: 'Opciones',
      optionsDescription: 'Selecciona tu idioma',
      goUp: 'Volver al inicio',
    },
    hero: {
      title: 'Pol Cortés',
      subtitle: 'Desarrollador Web Frontend - ',
      description1: [
        'Apasionado por la ',
        'UX',
        ' y el ',
        'SEO',
      ],
      description2: [
        'Experiencia en ',
        'agencia de diseño',
        ' y desarrollo de una ',
        'ERP'
      ],
      amIWorking: 'Trabajando actualmente'
    },
    experience: {
      title: 'Experiencia',
      jobs: [
        {
          company: 'Industry Labs',
          time: 'Marzo 2024 - Actualmente',
          description: [
            "Actualmente trabajo en Industry Labs como ",
            "desarrollador Frontend",
            " para el desarrollo de una ",
            "ERP en la web",
            "."
          ]
        },
        {
          company: 'Several.pro',
          time: 'Octubre 2023 - Enero 2024',
          description: [
            "Trabajé en Several el último trimestre de 2023, donde mis principales funciones fueron: ",
            "maquetar páginas",
            " para diversas empresas con ",
            "Wordpress utilizando los plugins Elementor y WPBakery",
            ", añadir y corregir bloques de la pagina principal de la empresa y ",
            "mejorar el SEO de esta misma hasta un 50%",
            " mejorando la semántica del DOM, añadiendo scripts específicos de schema.org y creando meta descripciones coherentes para cada página."
          ]
        }
      ]
    },
    projects: {
      title: "Proyectos",
      projects: [
        {
          title: "F5 Futsal",
          description: "Landing sencilla hecha con Wordpress y Elementor",
          link: "https://f5futsal.com",
          linkTitle: "Enlace a la landing de F5 Futsal",
          github: null,
          githubTitle: null,
          img: "https://pol-cortes.netlify.app/imgs/projects/f5-futsal.webp",
          imgAlt: "Captura de la landing de F5 Futsal",
          imgTitle: "Landing de F5Futsal",
          techs: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "Wordpress", "Elementor"]
        },
        {
          title: "Several.pro",
          description: "Mejoré el SEO de la página principal de Several.pro usando Schema.org, mejorando descripciones y títulos y arreglando la semántica del HTML. Además también implementé y corregí algunas secciones de la página.",
          link: "https://several.pro",
          linkTitle: "Enlace a Several.pro",
          github: null,
          githubTitle: null,
          img: "https://pol-cortes.netlify.app/imgs/projects/several.webp",
          imgAlt: "Captura de la página de Several.pro",
          imgTitle: "Página de Several.pro",
          techs: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "Wordpress", "Elementor"]
        }
      ]
    }
  },
  en: {
    meta: {
      title: 'Pol Cortés | Frontend Developer',
      description: `Junior Frontend Developer, located a few minutes from downtown Barcelona and passionate about UX and SEO. ${ WORKING_TIME() }`,
      keywords: 'web developer, frontend, junior, barcelona, ux, seo, html, css, tailwind, javascript, jquery, astro, svelte, responsive, performance',
    },
    navbar: {
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      options: 'Options',
      optionsTitle: 'Options',
      optionsDescription: 'Select your language',
      goUp: 'Go back to the top',
    },
    hero: {
      title: 'Pol Cortés',
      subtitle: 'Frontend Web Developer - ',
      description1: [
        'Passionate about ',
        'UX',
        ' and ',
        'SEO',
      ],
      description2: [
        'Experience in ',
        'design agency',
        ' and development of an ',
        'ERP'
      ],
      amIWorking: 'Currently working'
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          company: 'Industry Labs',
          time: 'March 2024 - Currently',
          description: [
            "Currently working at Industry Labs as a ",
            "Frontend Developer",
            " for the development of a ",
            "ERP on the web",
            "."
          ]
        },
        {
          company: 'Several.pro',
          time: 'October 2023 - January 2024',
          description: [
            "I worked at Several in the last quarter of 2023, where my main functions were: ",
            "layout pages",
            " for various companies with ",
            "Wordpress using the Elementor and WPBakery plugins",
            ", add and correct blocks of the company's homepage and ",
            "improve the SEO of this one up to 50%",
            " improving the semantics of the DOM, adding specific schema.org scripts and creating coherent meta descriptions for each page."
          ]
        }
      ]
    },
    projects: {
      title: "Projects",
      projects: [
        {
          title: "F5 Futsal",
          description: "Simple landing made with Wordpress and Elementor",
          link: "https://f5futsal.com",
          linkTitle: "Link to F5 Futsal's landing",
          github: null,
          githubTitle: null,
          img: "https://pol-cortes.netlify.app/imgs/projects/f5-futsal.webp",
          imgAlt: "Screenshot of F5 Futsal's landing",
          imgTitle: "F5Futsal's landing",
          techs: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "Wordpress", "Elementor"]
        },
        {
          title: "Several.pro",
          description: "I improved the SEO of Several.pro's homepage using Schema.org, improving descriptions and titles and fixing the HTML semantics. I also implemented and corrected some sections of the page.",
          link: "https://several.pro",
          linkTitle: "Link to Several.pro",
          github: null,
          githubTitle: null,
          img: "https://pol-cortes.netlify.app/imgs/projects/several.webp",
          imgAlt: "Screenshot of Several.pro's page",
          imgTitle: "Several.pro's page",
          techs: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "Wordpress", "Elementor"]
        }
      ]
    }
  },
  ca: {
    meta: {
      title: 'Pol Cortés | Desenvolupador Web Frontend',
      description: `Desenvolupador Web Frontend Junior, localitzat a pocs minuts del centre de Barcelona i apassionat per la UX i el SEO. ${ WORKING_TIME() }`,
      keywords: 'desenvolupador web, frontend, junior, barcelona, ux, seo, html, css, tailwind, javascript, jquery, astro, svelte, responsive, performance',
    },
    navbar: {
      experience: 'Experiència',
      projects: 'Projectes',
      contact: 'Contacte',
      options: 'Opcions',
      optionsTitle: 'Opcions',
      optionsDescription: 'Selecciona el teu idioma',
      goUp: 'Tornar a dalt',
    },
    hero: {
      title: 'Pol Cortés',
      subtitle: 'Desenvolupador Web Frontend - ',
      description1: [
        'Apassionat per la ',
        'UX',
        ' i el ',
        'SEO'
      ],
      description2: [
        'Experiència en ',
        'agència de disseny',
        ' i desenvolupament d\'un ',
        'ERP'
      ],
      amIWorking: 'Treballant actualment'
    },
    experience: {
      title: 'Experiència',
      jobs: [
        {
          company: 'Industry Labs',
          time: 'Març 2024 - Actualment',
          description: [
            "Actualment treballo a Industry Labs com a ",
            "desenvolupador Frontend",
            " per al desenvolupament d'un ",
            "ERP a la web",
            "."
          ]
        },
        {
          company: 'Several.pro',
          time: 'Octubre 2023 - Gener 2024',
          description: [
            "Vaig treballar a Several l'últim trimestre de 2023, on les meves principals funcions van ser: ",
            "maquetar pàgines",
            " per a diverses empreses amb ",
            "Wordpress utilitzant els plugins Elementor i WPBakery",
            ", afegir i corregir blocs de la pàgina principal de l'empresa i ",
            "millorar el SEO d'aquesta mateixa fins a un 50%",
            " millorant la semàntica del DOM, afegint scripts específics de schema.org i creant meta descripcions coherents per a cada pàgina."
          ]
        }
      ]
    },
    projects: {
      title: "Projectes",
      projects: [
        {
          title: "F5 Futsal",
          description: "Landing senzilla feta amb Wordpress i Elementor",
          link: "https://f5futsal.com",
          linkTitle: "Enllaç a la landing de F5 Futsal",
          github: null,
          githubTitle: null,
          img: "https://pol-cortes.netlify.app/imgs/projects/f5futsal.webp",
          imgAlt: "Captura de la landing de F5 Futsal",
          imgTitle: "Landing de F5Futsal",
          techs: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "Wordpress", "Elementor"]
        },
        {
          title: "Several.pro",
          description: "Vaig millorar el SEO de la pàgina principal de Several.pro utilitzant Schema.org, millorant descripcions i títols i arreglant la semàntica de l'HTML. A més també vaig implementar i corregir algunes seccions de la pàgina.",
          link: "https://several.pro",
          linkTitle: "Enllaç a Several.pro",
          github: null,
          githubTitle: null,
          img: "https://pol-cortes.netlify.app/imgs/projects/several.pro.webp",
          imgAlt: "Captura de la pàgina de Several.pro",
          imgTitle: "Pàgina de Several.pro",
          techs: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "Wordpress", "Elementor"]
        }
      ]
    }
  },
}
