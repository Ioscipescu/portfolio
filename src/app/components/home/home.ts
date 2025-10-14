import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Typewriter } from '../typewriter';
import { Shared } from '../../shared';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Typewriter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(private shared: Shared) {}

  courses: {
    name: string;
    number: string;
    semester: string;
    type: string;
    credits: string;
    instructor: string;
  }[] = [];

  jobs: {
    name: string;
    employer: string;
    years: string;
  }[] = [];

  education: {
    school: string;
    major: string;
    level: string;
    years: string;
  }[] = [];

  projects: {
    name: string;
    type: string;
    time: string;
    techs: string[];
  }[] = [];

  Math = Math;

  typewriterContent: string[] = ['Developer.', 'Mathematician.', 'Problem Solver.', 'Nerd.'];

  typewriteStatic: string = "I'm a";

  currentVimMode: string = 'normal';

  contentLines = [
    { type: 'static', text: "Hi, I'm Ben Blount." },
    { type: 'typewriter' },
    { type: 'static', text: '' },
    {
      type: 'static',
      text: "I'm a senior at Colorado State University and a Computer Science and Mathematics dual major.",
    },
    {
      type: 'static',
      text: 'I’m passionate about exploring the intersection of theory and practice: from algorithm design to cryptography I love being at the cutting edge.',
    },
    { type: 'static', text: '' },
    {
      type: 'static',
      text: 'My experience spans Full Stack Development, High-Performance Computing, Artificial Intelligence Training and Design, Embedded Systems, and Algorithm Design and Analysis.',
    },
    {
      type: 'static',
      text: 'I enjoy building efficient solutions to complex problems and am always eager to learn new tools, frameworks, and ideas.',
    },
  ];

  currentLineIndex = 1;

  get lineNumbers(): { display: string; isCurrent: boolean }[] {
    return this.contentLines.map((line, index) => {
      if (index === this.currentLineIndex) {
        return { display: (index + 1).toString(), isCurrent: true };
      } else {
        const distance = Math.abs(index - this.currentLineIndex);
        return { display: distance.toString(), isCurrent: false };
      }
    });
  }

  currentIndex = 0;

  onTypewriterModeChange(newMode: 'normal' | 'insert' | 'visual'): void {
    this.currentVimMode = newMode;
  }

  onTypewriterIndexChange(index: number): void {
    this.currentIndex = index;
  }

  ngOnInit(): void {
    this.courses = this.shared.getCourses();
    this.courses = this.courses.filter((c) => c.semester === 'Fall 2025');
    this.jobs = this.shared.getJobs();
    this.jobs = this.jobs.filter((c) => c.years.includes('Present'));
    this.education = this.shared.getEducation();
    this.education = this.education.filter((c) => c.years.includes('Expected'));
    this.projects = this.shared.getProjects();
  }
}
