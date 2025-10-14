import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  private courses = [
    {
      name: 'Automota, Logic, and Computation',
      number: 'CS 422',
      semester: 'Fall 2025',
      type: 'Computer Science Elective',
      credits: '4 Credits',
      instructor: 'Dr. Vinayak Prabhu',
      description:
        'Explored topics in computing foundations such as finite-state automata, regular expressions, pushdown automata, context-free languages, Turing machines, decidability, reducibility, and logical theories.',
    },
    {
      name: 'Embedded Systems and Machine Learning',
      number: 'CS 528',
      semester: 'Fall 2025',
      type: 'Computer Science Elective',
      credits: '4 Credits',
      instructor: 'Dr. Sudeep Pasricha',
      description:
        'Learned how to optimize machine learning models for embedded computing systems at both the hardware and software level. Worked with concepts such as data reuse and sharing, memory and network design for machine learning acceleration, anomaly detection and adversarial learning, and advanced applications of machine learning in embedded applications. Will apply embedded system machine learning techniques for a final project on lip reading with machine learning.',
    },
    {
      name: 'Advanced Calculus I',
      number: 'MATH 417',
      semester: 'Fall 2025',
      type: 'Mathematics Core',
      credits: '3 Credits',
      instructor: 'Dr Phil Kopel',
      description:
        'Analysis on manifolds in $\\mathbb{R}^n$. Topics include topology of Euclidean space, continuity, differentiability and integration, calculus on manifolds, differential forms, closed and exact forms, generalized Stokes theorem and its applications',
    },
    {
      name: 'Combinatorics I',
      number: 'MATH 501',
      semester: 'Fall 2025',
      type: 'Mathematics Elective',
      credits: '3 Credits',
      instructor: 'Dr. Alexander Hulpke',
      description:
        'Fundamental concepts in combinatorics with an emphasis on combinatorial structures. Enumeration techniques such as bijections, inclusion-exclusion, binomial coefficients, and Stirling numbers; tools such as generating functions and recursions; topics such as graph theory, symmetric functions, partition theory, posets, and finite geometries.',
    },
    {
      name: 'Honors Thesis',
      number: 'HONR 499',
      semester: 'Fall 2025',
      type: 'Honors Core',
      credits: '3 Credits',
      instructor: 'Dr. Ravi Mangal',
      description:
        "Honors Thesis on mechanizing the Untyped Lambda Calculus in the Rocq Prover. Exploration of different mechanizations routes for Lambda Calculus and their drawbacks including named variables, De Bruijn Indicies, and locally-nameless representations. Using Barendregt's Substitution Lemma to show consistancy of the mechanized substitution implementation. Formal proof of the Church-Rosser Theorem using the mechanized untyped lambda calculus.",
    },
    {
      name: 'Chamber Music',
      number: 'HONR 397',
      semester: 'Fall 2025',
      type: 'Honors Elective',
      credits: '1 Credit',
      instructor: 'Dr. Megan Bellamy-Lanz',
      description:
        'Chamber music under the tutelade of Dr. Bellamy-Lanz working on a Cello Violin duet of Duo concertante No. 1 in F Major: I. Allegro by Josef Fiala.',
    },
    {
      name: 'Cello Lessons',
      number: 'MU 170P',
      semester: 'Fall 2025',
      type: 'Elective',
      credits: '1 Credit',
      instructor: 'Dr. Meredith Blecha-Wells',
      description:
        'Cello lessons under the tutelade of Dr. Blecha-Wells. Working on Danse Rustique by William Henry Squire.',
    },
    {
      name: 'Cello Ensemble',
      number: 'MU 408',
      semester: 'Fall 2025',
      type: 'Elective',
      credits: '1 Credit',
      instructor: 'Dr. Meredith Blecha-Wells',
      description: 'CSU Cello Ensemble under the leadership of Dr. Blecha-Wells.',
    },
    {
      name: 'Principles of Programming Languages',
      number: 'CS 454',
      semester: 'Spring 2025',
      type: 'Computer Science Capstone',
      credits: '4 Credits',
      instructor: 'Dr. Ravi Mangal',
      description:
        'Built an interpreter for the funtional programming language "Lettuce" while diving into functional programming design over the course of the semester. Lettuce featured procedures, functions, recursion, and types. Discussed how to implement objects but kept the language purly functional.',
    },
    {
      name: 'Post-Quantum Cryptography',
      number: 'MATH 463',
      semester: 'Spring 2025',
      type: 'Mathematics Elective',
      credits: '3 Credits',
      instructor: 'Dr. Jeffrey Achter',
      description:
        'Exploration of tactics to securily encrypt communication in a world with quantum computers. Looked at the quantum attacks on RSA and learned about other encryption patterns including lattice-based cryptogrpahic schemes such as learning with errors, ring learning with errors, and NTRU.',
    },
    {
      name: 'Euclidean and Non-Euclidean Geometry',
      number: 'MATH 470',
      semester: 'Spring 2025',
      type: 'Mathematics Elective',
      credits: '3 Credits',
      instructor: 'Dr. Renzo Cavalieri',
      description:
        'Exploration of various Euclidean and Non-Euclidean spaces and their geodesics. The spaces explored were $\\mathbb{R}^n$, spherical space, cylindrical space, projective space, and hyperbolic space.',
    },
    {
      name: 'Mathematics and Music',
      number: 'MATH 380A5',
      semester: 'Spring 2025',
      type: 'Mathematics Elective',
      credits: '3 Credits',
      instructor: 'Dr. Rick Miranda and Dr. Joel Bacon',
      description:
        'An exploration of the deep connections between mathematics and music starting from the time of the Ancient Greeks. Explored tuning models, rhythms, and harmony.',
    },
    {
      name: 'Honors Pre-Thesis',
      number: 'HONR 399',
      semester: 'Spring 2025',
      type: 'Honors Core',
      credits: '1 Credit',
      instructor: 'Dr. Ravi Mangal',
      description:
        'Developed an idea and plan for the Honors Thesis including preliminary research.',
    },
    {
      name: 'Cello Lessons',
      number: 'MU 170P',
      semester: 'Spring 2025',
      type: 'Elective',
      credits: '1 Credit',
      instructor: 'Dr. Meredith Blecha-Wells',
      description:
        "Cello lessons under the tutelade of Dr. Blecha-Wells. Worked on Minuet I and Minuet II from Bach's first cello suite.",
    },
    {
      name: 'Cello Ensemble',
      number: 'MU 408',
      semester: 'Spring 2025',
      type: 'Elective',
      credits: '1 Credit',
      instructor: 'Dr. Meredith Blecha-Wells',
      description: 'CSU Cello Ensemble under the leadership of Dr. Blecha-Wells.',
    },
    {
      name: 'Computer Networks and the Internet',
      number: 'CS 457',
      semester: 'Fall 2024',
      type: 'Computer Science Elective',
      credits: '4 Credits',
      instructor: 'Dr. Kyle Haefner',
      description:
        'Principles of communication, local area networks, communication protocols, TCP/IP, and the Internet. Developed a multiplayer trivia game in python with networking capabilities as the final project.',
    },
    {
      name: 'C++ Fundamentals',
      number: 'CT 301',
      semester: 'Fall 2024',
      type: 'Computer Science Core',
      credits: '2 Credits',
      instructor: 'Logan Seabolt',
      description: 'Introduction to fundamental concepts in programming in C++.',
    },
    {
      name: 'Advanced Calculus of One Variable',
      number: 'MATH 317',
      semester: 'Fall 2024',
      type: 'Mathematics Core',
      credits: '3 Credits',
      instructor: 'Dr Phil Kopel',
      description:
        'Analysis of single variable functions. Covered convergence of sequences and series, limits, continuity, differentiation, and integration.',
    },
    {
      name: 'Writing in the Disciplines: Sciences',
      number: 'CO 301B',
      semester: 'Fall 2024',
      type: 'AUCC',
      credits: '3 Credits',
      instructor: 'Dr. Alyson Welker',
      description:
        'Developed skills for communication science to various audiences of both experts and non-experts.',
    },
    {
      name: 'Chamber Music',
      number: 'HONR 495',
      semester: 'Fall 2024',
      type: 'Honors Elective',
      credits: '1 Credit',
      instructor: 'Dr. Megan Bellamy-Lanz',
      description:
        'Chamber music under the tutelade of Dr. Bellamy-Lanz where we worked on a violin, cello, and saxaphone trio.',
    },
    {
      name: 'Operating Systems',
      number: 'CS 370',
      semester: 'Summer 2024',
      type: 'Computer Science Core',
      credits: '3 Credits',
      instructor: 'Dr.  Shrideep Pallickara',
      description:
        'Instroduction to operating systems, memory management, I/O, threading, and resource management.',
    },
    {
      name: 'Software Engineering',
      number: 'CS 314',
      semester: 'Spring 2024',
      type: 'Computer Science Core',
      credits: '3 Credits',
      instructor: 'Dave Matthews',
      description:
        'Principles of developing complex software in a team. Worked under the SCRUM process to develop a map website.',
    },
    {
      name: 'Algorithms-Theory and Practice',
      number: 'CS 320',
      semester: 'Spring 2024',
      type: 'Computer Science Core',
      credits: '3 Credits',
      instructor: 'Dr. Craig Partridge',
      description: 'Analysis, design, and implementation of algorithms.',
    },
    {
      name: 'Introduction to Number Theory',
      number: 'MATH 405',
      semester: 'Spring 2024',
      type: 'Mathematics Elective',
      credits: '3 Credits',
      instructor: 'Dr. Jamie Juul',
      description:
        'Explored the topics of diophantine equations, distribution of primes, finite fields, and quadratic reciprocity.',
    },
    {
      name: 'Information and Coding Theory',
      number: 'MATH 460',
      semester: 'Spring 2024',
      type: 'Mathematics Elective',
      credits: '3 Credits',
      instructor: 'Dr. Jeff Shriner',
      description:
        'Explored entropy, mutual information, channel capacity, channel coding theorem, and syndrome decoding from the perspective of a mathematician.',
    },
    {
      name: 'Software Development',
      number: 'CS 214',
      semester: 'Fall 2023',
      type: 'Computer Science Core',
      credits: '3 Credits',
      instructor: 'Sam Blanchard',
      description:
        'Learned how to design quality large systems while using standard software engineering tools.',
    },
    {
      name: 'Computer Systems Foundations',
      number: 'CS 250',
      semester: 'Fall 2023',
      type: 'Computer Science Core',
      credits: '4 Credits',
      instructor: 'Russell Wakefield',
      description:
        'Foundations of computers systems including processor architecture, networks, storage, and computing frameworks.',
    },
    {
      name: 'Honors Seminar - Knowing in the Sciences',
      number: 'HONR 292A',
      semester: 'Fall 2023',
      type: 'Honors Core',
      credits: '3 Credits',
      instructor: 'Dr. Justin Reeves',
      description:
        'Learned how to read and interpret scientific sources and learned about animal behavior.',
    },
    {
      name: 'Abstract Algebra I',
      number: 'MATH 466',
      semester: 'Fall 2023',
      type: 'Mathematics Core',
      credits: '3 Credits',
      instructor: 'Dr. Renzo Cavalieri',
      description: 'Introduction to groups, rings, and fields culminating with galois theory.',
    },
    {
      name: 'Linear Algebra',
      number: 'MATH 560',
      semester: 'Fall 2023',
      type: 'Mathematics Elective',
      credits: '3 Credits',
      instructor: 'Dr. James Wilson',
      description:
        'Explored finite dimensional vector spaces, inner products, dual spaces, transformations, projections, norms, eigenvalues, and eigenvectors.',
    },
    {
      name: 'Data Structures',
      number: 'CS 165',
      semester: 'Spring 2023',
      type: 'Computer Science Core',
      credits: '4 Credits',
      instructor: 'Sam Blanchard',
      description:
        'Implemented common data structures in Java including stacks, heaps, and B+ Trees.',
    },
    {
      name: 'Ethical Computing Systems',
      number: 'CS 201',
      semester: 'Spring 2023',
      type: 'Computer Science Core',
      credits: '3 Credits',
      instructor: 'Elisa Cundiff and Dr. Eric Easley',
      description:
        'Discussed ethical systems and applied them to various issues within the world of information technology.',
    },
    {
      name: 'Discrete Structures and their Applications',
      number: 'CS 220',
      semester: 'Spring 2023',
      type: 'Computer Science Core',
      credits: '4 Credits',
      instructor: 'Vidya Gaddy',
      description:
        'Learned about propositions, predicates, sets, functions, proofs, induction, counting, and complexity.',
    },
    {
      name: 'Mathematics of Information Security',
      number: 'MATH 360',
      semester: 'Spring 2023',
      type: 'Mathematics Core',
      credits: '3 Credits',
      instructor: 'Dr. Cigole Thomas',
      description: 'Explored codes and ciphers including Diffie-Hellman Key Exchange and RSA.',
    },
    {
      name: 'Intro to Theory and Practice of Statistics',
      number: 'STAT 315',
      semester: 'Spring 2023',
      type: 'Computer Science Core',
      credits: '3 Credits',
      instructor: 'Dr. Aaron Nielsen',
      description:
        'Learned about descriptive statistics and probability theory with hypothesis testing, confidence intervals, ANOVA, and sinple and multiple regression. Used R to analyze data sets.',
    },
    {
      name: 'Python for STEM',
      number: 'CS 152',
      semester: 'Fall 2022',
      type: 'Computer Science Core',
      credits: '2 Credits',
      instructor: 'Dr. Marcia Moraes',
      description:
        'Learned the basics of Python Programming with topics including variables, types, functions, loops, and control flow.',
    },
    {
      name: 'Introduction to Java Programming',
      number: 'CS 162',
      semester: 'Fall 2022',
      type: 'Computer Science Core',
      credits: '2 Credits',
      instructor: 'Dr. Marcia Moraes',
      description:
        'Learned the basics of Java Programming with topics including objects and classes.',
    },
    {
      name: 'Honors First Year Seminar',
      number: 'HONR 192',
      semester: 'Fall 2022',
      type: 'Honors Core',
      credits: '4 Credits',
      instructor: 'Dr. Mary Elkins',
      description: 'Honors first year seminar on the myths surrounding the American West.',
    },
    {
      name: 'Calculus III',
      number: 'MATH 261',
      semester: 'Fall 2022',
      type: 'Mathematics Core',
      credits: '4 Credits',
      instructor: 'Dr. Baohua Chen',
      description:
        "Learned about multivariable calculus, vector functions, partial differentiation, multiple integrals, line integrals, Green's theorem.",
    },
    {
      name: 'Linear Algebra I',
      number: 'MATH 369',
      semester: 'Fall 2022',
      type: 'Mathematics Core',
      credits: '4 Credits',
      instructor: 'Dr. Iuliana Oprea',
      description:
        'Learned about linear systems, matrices, vector spaces, linear transformations in vector spaces, eigenvalues, and eigenvectors.',
    },
  ];

  jobs = [
    {
      name: 'Student IT',
      employer: 'Colorado State University Honors Department',
      years: 'Spring 2023 - Present',
    },
    {
      name: 'Intern',
      employer: 'Colorado State University High Performance Computing Department',
      years: 'Summer 2025 - Present',
    },
    {
      name: 'Undergraduate Research Assistant',
      employer: 'Colorado State University Computer Science Department',
      years: 'Summer 2023',
    },
    {
      name: 'Intern',
      employer: 'Epsilon Technolgy Corporation',
      years: 'Summer 2022',
    },
  ];

  education = [
    {
      school: 'Colorado State Unviersity',
      major: 'Computer Science',
      level: 'Bachelors of Science',
      years: 'August 2022 - Expected May 2026',
    },
    {
      school: 'Colorado State Unviersity',
      major: 'Mathematics',
      level: 'Bachelors of Science',
      years: 'August 2022 - Expected May 2026',
    },
    {
      school: 'Jackson Hole High School',
      major: '',
      level: 'High School Diploma',
      years: 'August 2018 - June 2022',
    },
  ];

  projects = [
    {
      name: 'Lambda Calculus Mechanization',
      type: 'Honors Thesis',
      time: 'May 2025 - Present',
      techs: ['Rocq Proof Assistant'],
    },
    {
      name: 'Portfolio Website',
      type: 'Personal Project',
      time: 'Fall 2025',
      techs: ['Angular', 'Typescript', 'HTML', 'CSS'],
    },
  ];

  constructor() {}

  getCourses(): {
    name: string;
    number: string;
    semester: string;
    type: string;
    credits: string;
    instructor: string;
    description: string;
  }[] {
    return this.courses;
  }

  getJobs(): {
    name: string;
    employer: string;
    years: string;
  }[] {
    return this.jobs;
  }

  getEducation(): {
    school: string;
    major: string;
    level: string;
    years: string;
  }[] {
    return this.education;
  }

  getProjects(): {
    name: string;
    type: string;
    time: string;
    techs: string[];
  }[] {
    return this.projects;
  }
}
