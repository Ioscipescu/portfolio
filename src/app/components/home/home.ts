import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Typewriter } from '../typewriter';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Typewriter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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

  courses = [
    {
      name: 'Automota, Logic, and Computation',
      number: 'CS 422',
      semester: 'Fall 2025',
      type: 'Computer Science Elective',
      credits: '4 Credits',
    },
    {
      name: 'Embedded Systems and Machine Learning',
      number: 'CS 528',
      semester: 'Fall 2025',
      type: 'Computer Science Elective',
      credits: '4 Credits',
    },
    {
      name: 'Advanced Calculus I',
      number: 'MATH 417',
      semester: 'Fall 2025',
      type: 'Mathimatics Core',
      credits: '3 Credits',
    },
    {
      name: 'Combinatorics I',
      number: 'MATH 501',
      semester: 'Fall 2025',
      type: 'Mathimatics Elective',
      credits: '3 Credits',
    },
    {
      name: 'Honors Thesis',
      number: 'HONR 499',
      semester: 'Fall 2025',
      type: 'Honors Core',
      credits: '3 Credits',
    },
    {
      name: 'Chamber Music',
      number: 'HONR 397',
      semester: 'Fall 2025',
      type: 'Honors Elective',
      credits: '1 Credit',
    },
    {
      name: 'Cello Lessons',
      number: 'MU 170P',
      semester: 'Fall 2025',
      type: 'Elective',
      credits: '1 Credit',
    },
    {
      name: 'Cello Ensemble',
      number: 'MU 408',
      semester: 'Fall 2025',
      type: 'Elective',
      credits: '1 Credit',
    },
  ];

  jobs = [
    {
      name: 'Computer Science Major',
      employer: 'Colorado State University',
      years: 'Fall 2022 - May 2026',
    },
    {
      name: 'Mathematics Major',
      employer: 'Colorado State University',
      years: 'Fall 2022 - May 2026',
    },
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
}
