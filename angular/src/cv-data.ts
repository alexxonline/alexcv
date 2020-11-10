export const data = {
  firstLine: 'I am',
  name: 'Alex Saez',
  title: 'Full Stack Developer',
  location: 'Córdoba, Argentina',
  contactText: 'alexsaez.net/contact',
  contactLink: 'https://alexsaez.net/contact',
  websiteText: 'protecno.io/authors/alex-saez/',
  websiteLink: 'https://protecno.io/authors/alex-saez/',
  linkedInUrl: 'https://linkedin.com/in/alexsaez',
  brief: [
    `There's no thing I love as much as I love learning. I'm constantly learning new things.`,
    `Anyone who works with me is not only getting a developer or their team. but also a
     peer educator who is willing to share his knowledge in order to make
     the business grow.`,
    `I also enjoy looking for better ways of doing things
     so you are getting an asset whose value increases in time.`,
  ],
  education: [
    { timeframe: 'From 2001 to 2006', description: 'Highschool - Completed' },
    {
      timeframe: 'From 2007',
      description: 'Information Systems Engineer - In Progress',
    },
    {
      timeframe: 'From 2007',
      description: `More than 30 courses from
      Pluralsight and books from O'Reilly Safari
      and several other sources.`,
      links: [
        { text: 'Pluralsight', link: 'https://www.pluralsight.com' },
        { text: 'O\'Reilly Safari', link: 'https://www.oreilly.com/' },
      ],
    },
  ],
  experience: [
    {
      title: 'Tech Lead',
      company: 'Incluit',
      timeframe: 'From 2020',
      items: [
      `Tech Lead at Origination squad at Naranja. The functions for the role are managing the IT Team of the Squad to ensure business objectives are met. 
      Coaching and give feedback to the It team. To ensure the team is following the best practices from the company. 
      Technologies used are Angular, TypeScript, NodeJs, Express, AWS Lambda, AWS Api Gateway, AWS EKS, AWS Dynamodb.`
      ],
    },
    {
      title: 'Senior Front-End Developer',
      company: 'Incluit',
      timeframe: 'From 2019',
      items: [
        `Advanced Front-End developer programming work for Naranja using Angular, rxjs, Ngrx, NativeScript,
        Android and iOS development, GitLab CI, AWS.`,
        `Implementation of a Google Optimize experiment over an Angular app to make changes and have metrics of their effects`,
        `Teaching of programming classes about JavaScript and React`,
        `Speaker at Incluit talks`
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'C&C Computación S.A.',
      timeframe: 'From 2011 to 2019',
      items: [
        `Implementation of a pharmacy software using ASP.NET Winforms,
          Webforms, MVC3, AngularJS and SQL Server.`,
        `Also worked with backend services using MongoDb, Azure Functions, data
          movement using Azure Data Factory, Log collection in Azure Storage.`,
        `Implementation of a system for a social security using ASP.NET Web
          Api, AngularJs, Azure SQL Database, Azure CosmosDb`,
        `Implementation of a software update system using Windows Services`,
        `Implementation of a system for importing product prices from various
          datasources (txt, Excel, etc).`,
        `Implementation of a continuos integration pipeline using Azure DevOps`,
        `Implementation of a Rowa Vmax robot interface using .NET Core`,
      ],
    },
    {
      title: 'Technical Content Author',
      company: 'Conexión Efectiva',
      timeframe: 'From 2014',
      items: [
        `Writing of programming articles at the site ProTecno.io`,
        `Authoring of an Adobe XD course (view in Youtube)`,
        `Speaker at WebConf conference, my talk was about web components`,
        `Writing of a book that is published on Amazon`,
      ],
      links: [
        {
          itemIndex: 0,
          text: 'ProTecno.io',
          link: 'https://protecno.io',
        },
        {
          itemIndex: 1,
          text: '(view in Youtube)',
          link: 'https://www.youtube.com/watch?v=wi77WUdSD4I',
        },
        {
          itemIndex: 2,
          text: 'WebConf',
          link: 'https://webconf.tech',
        },
        {
          itemIndex: 3,
          text: 'Amazon',
          link:
            'https://www.amazon.com/Introducci%C3%B3n-ASP-NET-Core-2-2-Spanish-ebook/dp/B07S5F9GSN/ref=sr_1_1',
        },
      ],
    },
    {
      title: 'Developer',
      company: 'Freelance',
      timeframe: 'From 2013',
      items: [
        `Implementation of a Wordpress plugin using PHP and MySql`,
        `Migration of an application from using WPF and SQL Server to using UWP
          and Sqlite`,
        `Implementation of a store app with server side rendering using VueJS,
          Nuxt and Bootstrap 4`,
        `Implementation of a Orchard App using ASP.NET Core MVC Web API, SQL
          Server, Angular 7, Xamarin, Discourse and ElasticSearch`,
        `The making of this resume using Bootstrap 4 and Angular 9. View Source`,
        `Review of book manuscripts, book proposals and course proposals for Manning publishing.`
      ],
      links: [
        {
          itemIndex: 4,
          text: 'View Source',
          link: 'https://github.com/alexxonline/alexcv',
        },
        {
          itemIndex: 5,
          text: 'Manning publishing',
          link: 'https://www.manning.com',
        }
      ],
    },
  ],
  languages: [
    'Spanish - Native',
    'English - Advanced Level With First Certificate',
    'Portuguese - Basic',
  ],
  skills: [
    '.NET',
    'C#',
    'Azure',
    'Xamarin',
    'HTML 5',
    'CSS3',
    'Javascript',
    'AngularJS',
    'Angular',
    'RxJS',
    'React',
    'React Native',
    'Vue',
    'NativeScript',
    'SQL Server',
    'Adobe XD',
    'Adobe CC Suite',
    'Technical Writing',
    'Azure DevOps',
  ],
};
