import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FloatingWindow } from '../course-window';
import { TreeNode } from '../tree-node';
import { Shared } from '../../shared';

interface NavItem {
  label: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-coursework',
  imports: [CommonModule, TreeNode],
  templateUrl: './coursework.html',
  styleUrl: './coursework.css',
})
export class Coursework implements OnInit {
  private overlayRef?: OverlayRef;

  constructor(
    private shared: Shared,
    private overlay: Overlay,
  ) {}

  courses: {
    name: string;
    number: string;
    semester: string;
    type: string;
    credits: string;
    instructor: string;
    description: string;
  }[] = [];

  navItems: NavItem[] = [{ label: 'Courses', children: [] }];

  generateNavItems() {
    for (const course of this.courses) {
      const parent = this.navItems.find((item) => item.label === 'Courses');
      if (!parent) return;
      if (!parent.children) parent.children = [];
      if (!parent.children?.some((child) => child.label === course.semester)) {
        parent.children.push({
          label: course.semester,
          children: [{ label: course.number + ': ' + course.name }],
        });
      } else {
        parent.children
          .find((item) => item.label === course.semester)
          ?.children?.push({ label: course.number + ': ' + course.name });
      }
    }
  }

  ngOnInit(): void {
    this.courses = this.shared.getCourses();
    this.generateNavItems();
  }

  onNodeClicked(event: { path: string[] }) {
    if (event.path.length >= 3) {
      for (const course of this.courses) {
        if (
          event.path.includes(course.semester) &&
          event.path.some((i) => i.includes(course.number))
        ) {
          this.openWindow(course);
        }
      }
    }
  }

  openWindow(course: any) {
    this.overlayRef?.dispose();

    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    const portal = new ComponentPortal(FloatingWindow);

    const componentRef = this.overlayRef.attach(portal);

    componentRef.instance.course = course;

    componentRef.instance.onClose = () => this.closeWindow();

    this.overlayRef.backdropClick().subscribe(() => this.closeWindow());
  }

  closeWindow() {
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
  }
}
