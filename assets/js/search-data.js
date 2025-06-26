// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-won-the-student-paper-competition-for-natural-covariate-adjusted-gaussian-graphical-regression-at-the-wnar-ims-annual-meeting-2024-in-fort-collins-colorado",
          title: 'Won the student paper competition for “Natural Covariate-adjusted Gaussian Graphical Regression” at the...',
          description: "",
          section: "News",},{id: "news-presented-a-convex-formulation-of-covariate-adjusted-gaussian-graphical-models-via-natural-parametrization-at-cfe-cmstatistics-2024-in-london-uk",
          title: 'Presented “A convex formulation of covariate-adjusted Gaussian graphical models via natural parametrization” at...',
          description: "",
          section: "News",},{id: "news-estimation-of-the-error-structure-in-multivariate-response-linear-regression-models-was-published-in-wiley-computational-statistics",
          title: '“Estimation of the error structure in multivariate response linear regression models” was published...',
          description: "",
          section: "News",},{id: "news-presented-a-mixed-model-of-regional-functional-connectivity-from-voxel-level-bold-signals-at-the-wnar-ims-annual-meeting-2025-in-whistler-bc-canada",
          title: 'Presented “A mixed model of regional functional connectivity from voxel-level BOLD signals” at...',
          description: "",
          section: "News",},{id: "projects-cma-es",
          title: 'CMA-ES',
          description: "Comparing the performance of two blackbox or &quot;derivative-free&quot; optimization methods.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cmaes/";
            },},{id: "projects-soft-thresh",
          title: 'Soft-thresh',
          description: "Visualizing the LASSO solution",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vizlasso/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
