// Textes du site, en français et en anglais.

export const EMAIL = 'frederic.gaba@gmail.com'
export const SEGMENT = { fr: 'realisations', en: 'work' }

export const ui = {
  fr: {
    htmlLang: 'fr',
    locale: 'fr_CA',
    skip: 'Aller au contenu',
    brand: 'Solutions Quantilope',
    nav: { services: 'Services', work: 'Réalisations', method: 'Méthode', about: 'À propos' },
    cta: 'Prendre rendez-vous',
    menu: 'Menu',
    langLabel: 'Langue',
    mail: {
      subject: 'Demande de rendez-vous - Solutions Quantilope',
      body:
        'Bonjour,\n\nNous aimerions échanger au sujet d’un projet de formation en réalité virtuelle ou augmentée.\n\nOrganisation :\nSecteur :\nBesoin :\n\nMerci,',
    },
    home: {
      title: 'Solutions Quantilope | Simulations VR/AR pour la formation professionnelle',
      description:
        'Studio québécois de simulations en réalité virtuelle et augmentée pour former les équipes de la santé, de la sécurité publique, de la défense et de la maintenance technique.',
      hero: {
        kicker: 'Formation immersive VR / AR',
        h1: ['Entraînez vos équipes aux situations qu’elles ', 'ne peuvent pas rater', '.'],
        lede:
          'Nous concevons des simulations en réalité virtuelle et augmentée pour les métiers où une erreur a des conséquences graves : santé, sécurité publique, défense et maintenance technique.',
        cta2: 'Voir nos réalisations',
        sectors: ['Santé', 'Sécurité publique', 'Défense', 'Maintenance technique'],
        captionTag: 'Projet',
        captionTitle: 'Simulateur de maintenance Panther',
        captionOwner: 'Marine nationale',
      },
      proof: {
        label: 'Projets menés pour ou avec',
        names: ['Marine nationale', 'Octapharma', 'Aemulus-XR', 'Ownlabs'],
      },
      why: {
        eyebrow: 'Pourquoi l’immersion',
        h2: 'Former à l’erreur est coûteux, dangereux, ou impossible. Pas en simulation.',
        items: [
          {
            t: 'Sans exposer personne',
            d: 'Pratiquer des procédures critiques, y compris celles où une erreur réelle serait grave, sans mettre en danger les personnes ni le matériel.',
          },
          {
            t: 'Sans immobiliser le matériel',
            d: 'Former sans retirer un appareil ou un équipement du service. Le simulateur Panther en est l’illustration : l’hélicoptère reste disponible, l’élève s’exerce dessus en réalité virtuelle.',
          },
          {
            t: 'Autant de fois que nécessaire',
            d: 'Rejouer un scénario dans des conditions identiques, jusqu’à ce que la procédure soit maîtrisée.',
          },
        ],
      },
      services: {
        eyebrow: 'Services',
        h2: 'Ce que nous construisons',
        sub: 'Des simulations sur mesure, de la capture 3D à l’interaction temps réel sur casque.',
        example: 'Exemple',
        items: [
          {
            t: 'Simulateurs de procédures et de maintenance',
            d: 'Un équipement reproduit fidèlement, des pannes à diagnostiquer, une procédure à suivre pas à pas.',
            ex: 'panther',
          },
          {
            t: 'Scénarios médicaux et serious games',
            d: 'Des situations d’urgence jouables en VR, conçues avec des experts du domaine médical.',
            ex: 'immergency',
          },
          {
            t: 'Formation en réalité augmentée',
            d: 'Une instruction assistée par intelligence artificielle, appuyée sur des guides de pratique clinique.',
            ex: 'aemulus',
          },
          {
            t: 'Capture et modélisation 3D',
            d: 'Photogrammétrie, modélisation 3ds Max et personnages réalistes pour des environnements fidèles au terrain.',
          },
          {
            t: 'Développement XR sur mesure',
            d: 'Unreal Engine 5 et Unity, OpenXR, pour casques Meta Quest, Pico et PCVR.',
          },
        ],
      },
      work: {
        eyebrow: 'Réalisations',
        h2: 'Du cockpit à la salle d’urgence.',
        sub: 'Des projets menés pour ou avec des organisations de la défense, de la santé et de l’éducation.',
        open: 'Voir le projet',
        more: 'Autres projets',
        cols: { project: 'Projet', client: 'Client / porteur', status: 'Statut' },
      },
      method: {
        eyebrow: 'Méthode',
        h2: 'Une méthode en quatre temps',
        sub: 'Du besoin de formation au déploiement sur casque.',
        steps: [
          { t: 'Cadrage', d: 'Objectifs pédagogiques, procédures à enseigner, contraintes de matériel et de site.' },
          { t: 'Prototype', d: 'Un scénario clé jouable sur casque, pour valider l’approche avant de produire.' },
          { t: 'Production', d: 'Contenu 3D, interactions, scénarios et retours visuels, itérés avec vos équipes.' },
          { t: 'Déploiement', d: 'Installation sur les casques, prise en main par les formateurs, évolutions.' },
        ],
      },
      expertise: {
        eyebrow: 'Expertise',
        h2: 'Fiche technique',
        sub: 'Les outils que nous maîtrisons, tels qu’ils sont utilisés sur nos projets.',
        groups: [
          { k: 'Moteurs temps réel', v: ['Unreal Engine 5 (C++ et Blueprints)', 'Unity (C#)'] },
          {
            k: 'Interaction et matériel XR',
            v: ['OpenXR', 'XR Interaction Toolkit', 'Meta Quest 3', 'Pico 4 Enterprise', 'PCVR'],
          },
          { k: 'Contenu 3D', v: ['Photogrammétrie', '3ds Max', 'MetaHuman'] },
          { k: 'Savoir-faire', v: ['Serious games', 'Simulation temps réel', 'Conception de scénarios pédagogiques'] },
        ],
      },
      about: {
        eyebrow: 'À propos',
        h2: 'Un studio québécois, de la capture 3D au casque.',
        p: [
          'Solutions Quantilope conçoit et développe des simulations immersives pour la formation professionnelle, avec une spécialité : les métiers où l’erreur coûte cher.',
          'Notre fondateur a travaillé sur des projets de formation pour la défense et la santé, a contribué au développement d’Ownlabs, laboratoire scientifique virtuel primé aux Ericsson Innovation Awards 2018, et figure sur la page Team d’Aemulus-XR.',
        ],
        specs: [
          { k: 'Basé à', v: 'Québec, Canada' },
          { k: 'Langues', v: 'Français · English' },
          { k: 'Plateformes', v: 'PCVR · Meta Quest · Pico' },
        ],
      },
      final: {
        h2: 'Parlons de votre projet de formation.',
        body:
          'Décrivez-nous l’équipe à former et la situation à simuler. Nous vous répondons en français ou en anglais.',
        or: 'Ou écrivez-nous directement :',
      },
    },
    footer: {
      tagline: 'Simulations VR/AR pour la formation professionnelle.',
      copy: '© 2026 Solutions Quantilope. Québec, Canada.',
    },
    status: { delivered: 'Livré', partnership: 'Partenariat', 'in-development': 'En développement' },
    case: {
      crumb: 'Réalisations',
      tech: 'Technologies',
      visit: 'Visiter aemulus-xr.com',
      prev: 'Projet précédent',
      next: 'Projet suivant',
      ctaH: 'Un besoin comparable ?',
      ctaP: 'Parlons de la situation que vous voulez simuler.',
    },
  },

  en: {
    htmlLang: 'en',
    locale: 'en_CA',
    skip: 'Skip to content',
    brand: 'Solutions Quantilope',
    nav: { services: 'Services', work: 'Work', method: 'Method', about: 'About' },
    cta: 'Book a meeting',
    menu: 'Menu',
    langLabel: 'Language',
    mail: {
      subject: 'Meeting request - Solutions Quantilope',
      body:
        'Hello,\n\nWe would like to talk about a virtual or augmented reality training project.\n\nOrganization:\nSector:\nNeed:\n\nThank you,',
    },
    home: {
      title: 'Solutions Quantilope | VR/AR simulations for professional training',
      description:
        'Quebec-based studio building virtual and augmented reality simulations to train teams in healthcare, public safety, defense and technical maintenance.',
      hero: {
        kicker: 'Immersive VR / AR training',
        h1: ['Train your teams for the situations they ', 'can’t afford to get wrong', '.'],
        lede:
          'We build virtual and augmented reality simulations for professions where a mistake carries serious consequences: healthcare, public safety, defense and technical maintenance.',
        cta2: 'See our work',
        sectors: ['Healthcare', 'Public safety', 'Defense', 'Technical maintenance'],
        captionTag: 'Project',
        captionTitle: 'Panther Maintenance Simulator',
        captionOwner: 'French Navy',
      },
      proof: {
        label: 'Projects delivered for or with',
        names: ['French Navy', 'Octapharma', 'Aemulus-XR', 'Ownlabs'],
      },
      why: {
        eyebrow: 'Why immersion',
        h2: 'Training for mistakes is costly, dangerous, or impossible. Not in simulation.',
        items: [
          {
            t: 'Without exposing anyone',
            d: 'Practice critical procedures, including those where a real mistake would be serious, without endangering people or equipment.',
          },
          {
            t: 'Without grounding equipment',
            d: 'Train without taking an aircraft or machine out of service. The Panther simulator illustrates it: the helicopter stays available while the trainee practices on it in virtual reality.',
          },
          {
            t: 'As many times as needed',
            d: 'Replay a scenario under identical conditions until the procedure is mastered.',
          },
        ],
      },
      services: {
        eyebrow: 'Services',
        h2: 'What we build',
        sub: 'Tailor-made simulations, from 3D capture to real-time interaction on headset.',
        example: 'Example',
        items: [
          {
            t: 'Procedure and maintenance simulators',
            d: 'Faithfully reproduced equipment, failures to diagnose, a procedure to follow step by step.',
            ex: 'panther',
          },
          {
            t: 'Medical scenarios and serious games',
            d: 'Emergency situations playable in VR, designed with medical domain experts.',
            ex: 'immergency',
          },
          {
            t: 'Augmented reality training',
            d: 'AI-assisted instruction grounded in clinical practice guidelines.',
            ex: 'aemulus',
          },
          {
            t: '3D capture and modeling',
            d: 'Photogrammetry, 3ds Max modeling and realistic characters for environments true to the field.',
          },
          {
            t: 'Custom XR development',
            d: 'Unreal Engine 5 and Unity, OpenXR, for Meta Quest, Pico and PCVR headsets.',
          },
        ],
      },
      work: {
        eyebrow: 'Work',
        h2: 'From the cockpit to the emergency room.',
        sub: 'Projects carried out for or with defense, healthcare and education organizations.',
        open: 'View the project',
        more: 'More projects',
        cols: { project: 'Project', client: 'Client / owner', status: 'Status' },
      },
      method: {
        eyebrow: 'Method',
        h2: 'A four-step method',
        sub: 'From the training need to deployment on headset.',
        steps: [
          { t: 'Scoping', d: 'Learning objectives, procedures to teach, equipment and site constraints.' },
          { t: 'Prototype', d: 'A key scenario playable on headset, to validate the approach before producing.' },
          { t: 'Production', d: '3D content, interactions, scenarios and visual feedback, iterated with your teams.' },
          { t: 'Deployment', d: 'Installation on headsets, trainer onboarding, updates.' },
        ],
      },
      expertise: {
        eyebrow: 'Expertise',
        h2: 'Technical sheet',
        sub: 'The tools we master, as used on our projects.',
        groups: [
          { k: 'Real-time engines', v: ['Unreal Engine 5 (C++ and Blueprints)', 'Unity (C#)'] },
          {
            k: 'XR interaction and hardware',
            v: ['OpenXR', 'XR Interaction Toolkit', 'Meta Quest 3', 'Pico 4 Enterprise', 'PCVR'],
          },
          { k: '3D content', v: ['Photogrammetry', '3ds Max', 'MetaHuman'] },
          { k: 'Know-how', v: ['Serious games', 'Real-time simulation', 'Instructional scenario design'] },
        ],
      },
      about: {
        eyebrow: 'About',
        h2: 'A Quebec studio, from 3D capture to headset.',
        p: [
          'Solutions Quantilope designs and builds immersive simulations for professional training, with one specialty: professions where mistakes are expensive.',
          'Our founder has worked on training projects for defense and healthcare, contributed to the development of Ownlabs, a virtual science lab honored at the 2018 Ericsson Innovation Awards, and is listed on the Aemulus-XR Team page.',
        ],
        specs: [
          { k: 'Based in', v: 'Quebec, Canada' },
          { k: 'Languages', v: 'Français · English' },
          { k: 'Platforms', v: 'PCVR · Meta Quest · Pico' },
        ],
      },
      final: {
        h2: 'Let’s talk about your training project.',
        body: 'Tell us about the team to train and the situation to simulate. We reply in English or French.',
        or: 'Or write to us directly:',
      },
    },
    footer: {
      tagline: 'VR/AR simulations for professional training.',
      copy: '© 2026 Solutions Quantilope. Quebec, Canada.',
    },
    status: { delivered: 'Delivered', partnership: 'Partnership', 'in-development': 'In development' },
    case: {
      crumb: 'Work',
      tech: 'Technologies',
      visit: 'Visit aemulus-xr.com',
      prev: 'Previous project',
      next: 'Next project',
      ctaH: 'A similar need?',
      ctaP: 'Let’s talk about the situation you want to simulate.',
    },
  },
}

export const projects = [
  {
    slug: 'panther',
    status: 'delivered',
    featured: true,
    image: { name: 'panther', w: 1600, h: 1067 },
    fr: {
      title: 'Simulateur de maintenance Panther',
      tagline: 'Simulateur VR de maintenance de l’hélicoptère Dauphin-Panther',
      summary: 'Diagnostiquer et réparer des pannes sur un hélicoptère reproduit à l’identique, sans l’immobiliser au sol.',
      owner: 'Marine nationale (S.I.T.)',
      imageAlt: 'Un militaire équipé d’un casque VR dans le cockpit virtuel de l’hélicoptère Panther',
      specs: [
        { k: 'Client', v: 'Marine nationale, Service d’Instruction Technique (S.I.T.)' },
        { k: 'Secteur', v: 'Industrie et défense' },
        { k: 'Plateforme', v: 'PCVR · Pico 4 Enterprise' },
      ],
      sections: [
        {
          k: 'Contexte',
          t: 'Former des techniciens à la maintenance de l’hélicoptère Dauphin-Panther suppose d’immobiliser un appareil réel au sol, ce qui représente un coût d’exploitation élevé pour le S.I.T.',
        },
        {
          k: 'Le projet',
          t: 'Un simulateur VR qui reproduit l’hélicoptère à l’identique grâce à la photogrammétrie. L’élève affronte plusieurs scénarios de pannes qu’il doit diagnostiquer, puis réparer en suivant la procédure de maintenance adéquate.',
        },
      ],
      stack: ['PCVR', 'Pico 4 Enterprise', 'Unity', 'C#', 'OpenXR', 'XR Interaction Toolkit', '3ds Max', 'Photogrammétrie'],
    },
    en: {
      title: 'Panther Maintenance Simulator',
      tagline: 'VR maintenance simulator for the Dauphin-Panther helicopter',
      summary: 'Diagnose and repair failures on a faithfully reproduced helicopter, without grounding it.',
      owner: 'French Navy (S.I.T.)',
      imageAlt: 'A service member wearing a VR headset inside the virtual cockpit of the Panther helicopter',
      specs: [
        { k: 'Client', v: 'French Navy, Technical Training Unit (S.I.T.)' },
        { k: 'Sector', v: 'Industry and defense' },
        { k: 'Platform', v: 'PCVR · Pico 4 Enterprise' },
      ],
      sections: [
        {
          k: 'Context',
          t: 'Training technicians on Dauphin-Panther maintenance means grounding a real aircraft, which carries a high operating cost for the training unit.',
        },
        {
          k: 'The project',
          t: 'A VR simulator that reproduces the helicopter faithfully through photogrammetry. Trainees face several failure scenarios that they must diagnose, then repair by following the correct maintenance procedure.',
        },
      ],
      stack: ['PCVR', 'Pico 4 Enterprise', 'Unity', 'C#', 'OpenXR', 'XR Interaction Toolkit', '3ds Max', 'Photogrammetry'],
    },
  },

  {
    slug: 'immergency',
    status: 'delivered',
    featured: true,
    image: { name: 'immergency', w: 1600, h: 900 },
    fr: {
      title: 'Immergency',
      tagline: 'Serious games VR pour la formation aux urgences médicales',
      summary: 'Entraîner les services d’urgence à de nouveaux processus de diagnostic, directement en réalité virtuelle.',
      owner: 'Octapharma',
      imageAlt: 'Une soignante équipée d’un casque VR prend en charge un patient dans une chambre d’hôpital virtuelle',
      specs: [
        { k: 'Client', v: 'Octapharma, entreprise pharmaceutique suisse' },
        { k: 'Secteur', v: 'Santé' },
        { k: 'Format', v: 'Serious games en réalité virtuelle' },
      ],
      sections: [
        {
          k: 'Contexte',
          t: 'Octapharma voulait se différencier auprès des hôpitaux avec une offre de formation médicale en VR. Or les chefs de service hospitaliers sont peu disponibles, ce qui complique l’installation d’une relation durable.',
        },
        {
          k: 'Le projet',
          t: 'À partir de nouveaux processus de diagnostic d’urgence conçus avec des Key Opinion Leaders (leaders d’opinion médicaux), des serious games en VR forment les services d’urgence à ces processus et travaillent la relation médecin-patient.',
        },
      ],
      stack: [],
    },
    en: {
      title: 'Immergency',
      tagline: 'VR serious games for emergency medical training',
      summary: 'Train emergency departments on new diagnostic processes, directly in virtual reality.',
      owner: 'Octapharma',
      imageAlt: 'A nurse wearing a VR headset treats a patient in a virtual hospital room',
      specs: [
        { k: 'Client', v: 'Octapharma, Swiss pharmaceutical company' },
        { k: 'Sector', v: 'Healthcare' },
        { k: 'Format', v: 'Virtual reality serious games' },
      ],
      sections: [
        {
          k: 'Context',
          t: 'Octapharma wanted to stand out with hospitals through a VR medical training offer. But hospital department heads have little availability, which makes a lasting relationship hard to build.',
        },
        {
          k: 'The project',
          t: 'Based on new emergency diagnostic processes designed with Key Opinion Leaders, VR serious games train emergency departments on these processes and work on the doctor-patient relationship.',
        },
      ],
      stack: [],
    },
  },

  {
    slug: 'ownlabs',
    status: 'delivered',
    image: null,
    fr: {
      title: 'Ownlabs',
      tagline: 'Laboratoire scientifique virtuel : un smartphone et un casque VR d’entrée de gamme',
      owner: 'Équipe Ownlabs, Dakar',
      imageAlt: '',
      specs: [
        { k: 'Porteur', v: 'Équipe Ownlabs (École Supérieure Polytechnique de Dakar et Université de Ziguinchor)' },
        { k: 'Secteur', v: 'Éducation' },
        { k: 'Lieu', v: 'Dakar, Sénégal (créé en 2017)' },
      ],
      sections: [
        {
          k: 'Contexte',
          t: 'Ownlabs est un laboratoire scientifique virtuel (physique, chimie, biologie) créé en 2017 par Abdou Khadre Diop et une équipe d’étudiants. Il vise à pallier le manque de laboratoires physiques dans les écoles sénégalaises, avec un simple smartphone et un casque VR d’entrée de gamme.',
        },
        {
          k: 'Notre contribution',
          t: 'Le fondateur de Solutions Quantilope a participé au développement technique du produit.',
        },
        {
          k: 'Distinctions',
          t: 'Lauréat des Ericsson Innovation Awards 2018 (grand prix de la région Afrique–Moyen-Orient, puis international) et finaliste du Prix Orange de l’Entrepreneur Social en Afrique et au Moyen-Orient 2017.',
        },
      ],
      stack: [],
    },
    en: {
      title: 'Ownlabs',
      tagline: 'A virtual science lab on a smartphone and a low-cost VR headset',
      owner: 'Ownlabs team, Dakar',
      imageAlt: '',
      specs: [
        { k: 'Owner', v: 'Ownlabs team (École Supérieure Polytechnique de Dakar and University of Ziguinchor)' },
        { k: 'Sector', v: 'Education' },
        { k: 'Location', v: 'Dakar, Senegal (founded in 2017)' },
      ],
      sections: [
        {
          k: 'Context',
          t: 'Ownlabs is a virtual science lab (physics, chemistry, biology) created in 2017 by Abdou Khadre Diop and a team of students. It aims to fill the gap left by the lack of physical labs in Senegalese schools, using just a smartphone and a low-cost VR headset.',
        },
        {
          k: 'Our contribution',
          t: 'The founder of Solutions Quantilope took part in the product’s technical development.',
        },
        {
          k: 'Recognition',
          t: 'Winner of the 2018 Ericsson Innovation Awards (grand prize for the Middle East & Africa region, then internationally) and finalist for the 2017 Orange Social Entrepreneur Prize in Africa and the Middle East.',
        },
      ],
      stack: [],
    },
  },

  {
    slug: 'aemulus',
    status: 'partnership',
    image: null,
    link: 'https://aemulus-xr.com',
    fr: {
      title: 'Aemulus-XR',
      tagline: 'Formation en réalité augmentée avec instruction par IA',
      owner: 'Aemulus-XR, États-Unis',
      imageAlt: '',
      specs: [
        { k: 'Partenaire', v: 'Aemulus-XR (États-Unis)' },
        { k: 'Secteur', v: 'Médecine militaire et d’urgence' },
        { k: 'Plateforme', v: 'Réalité augmentée · Meta Quest 3' },
      ],
      sections: [
        {
          k: 'Le produit',
          t: 'Aemulus-XR, compagnie fondée par Sam Gebhardt et Paul Bernal, développe de la formation en réalité augmentée pour les soins préhospitaliers. Une intelligence artificielle y joue le rôle d’instructeur, à partir des Clinical Practice Guidelines (CPG). La plateforme repose sur MetaHuman et Unreal Engine, pour casque Meta Quest 3.',
        },
        {
          k: 'Marchés visés',
          t: 'Selon Aemulus-XR : formation médicale militaire (TCCC : Tactical Combat Casualty Care, paliers 1 à 4), formation médicale des forces de l’ordre (TECC-LEO), services médicaux d’urgence civils (EMS), examens cliniques structurés objectifs (OSCE) et téléconsultation.',
        },
        {
          k: 'Notre rôle',
          t: 'Aemulus-XR reste le porteur du produit. Le fondateur de Solutions Quantilope figure sur la page Team d’Aemulus-XR comme ingénieur logiciel, avec une solide expérience en développement de jeux vidéo et en technologies immersives, aux côtés des cofondateurs Sam Gebhardt et Paul Bernal, de James King et de Walter Engle (Chief Medical Officer).',
        },
      ],
      stack: ['Unreal Engine', 'MetaHuman', 'Meta Quest 3', 'Instructeur IA'],
    },
    en: {
      title: 'Aemulus-XR',
      tagline: 'Augmented reality training with AI instruction',
      owner: 'Aemulus-XR, United States',
      imageAlt: '',
      specs: [
        { k: 'Partner', v: 'Aemulus-XR (United States)' },
        { k: 'Sector', v: 'Military and emergency medicine' },
        { k: 'Platform', v: 'Augmented reality · Meta Quest 3' },
      ],
      sections: [
        {
          k: 'The product',
          t: 'Aemulus-XR, a company founded by Sam Gebhardt and Paul Bernal, builds augmented reality training for pre-hospital care. An AI acts as the instructor, drawing on Clinical Practice Guidelines (CPGs). The platform is built on MetaHuman and Unreal Engine, for the Meta Quest 3 headset.',
        },
        {
          k: 'Target markets',
          t: 'According to Aemulus-XR: military medical training (TCCC: Tactical Combat Casualty Care, tiers 1 to 4), law-enforcement medical training (TECC-LEO), civilian emergency medical services (EMS), Objective Structured Clinical Examinations (OSCE) and telehealth.',
        },
        {
          k: 'Our role',
          t: 'Aemulus-XR remains the owner of the product. The founder of Solutions Quantilope is listed on the Aemulus-XR Team page as a software engineer with a strong background in video game development and immersive technologies, alongside co-founders Sam Gebhardt and Paul Bernal, James King and Walter Engle (Chief Medical Officer).',
        },
      ],
      stack: ['Unreal Engine', 'MetaHuman', 'Meta Quest 3', 'AI instructor'],
    },
  },

  {
    slug: 'vrpatients',
    status: 'in-development',
    page: false,
    image: null,
    fr: {
      title: 'VRPatients',
      tagline: 'Produit propriétaire en développement, première version. Nous faisons partie des deux premiers développeurs.',
      owner: 'Produit propriétaire',
    },
    en: {
      title: 'VRPatients',
      tagline: 'In-house product in development, first version. We are among the first two developers.',
      owner: 'In-house product',
    },
  },
]
