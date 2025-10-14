import { Component, Input, AfterViewInit, AfterViewChecked } from '@angular/core';

declare const MathJax: {
  typesetPromise: (elements?: Element[]) => Promise<void>;
};

@Component({
  selector: 'app-floating-window',
  template: `
    <head> </head>
    <div class="floating-window">
      <div class="window-header">
        <span class="course-title"> {{ course.number }}: {{ course.name }} </span>
        <button class="close-btn" (click)="onClose()">✕</button>
      </div>

      <div class="window-body">
        <div class="course-details">
          <div class="detail-item">
            <span class="label">Semester: </span>
            <span class="value">{{ course.semester }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Type: </span>
            <span class="value">{{ course.type }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Credits: </span>
            <span class="value">{{ course.credits }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Instructor: </span>
            <span class="value">{{ course.instructor }}</span>
          </div>
        </div>

        <div class="course-description">
          <h3>Description</h3>
          <p>{{ course.description }}</p>
        </div>
      </div>
    </div>
  `,
  styles: `
    .floating-window {
      background: #1e1e2e;
      border-radius: 10px;
      border: 2px solid #94e2d5;
      width: 80vw;
      animation: fadeIn 0.25s ease-in-out;
    }

    .window-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #313244;
      font-size: 1.5rem;
      padding: 20px;
      color: #cdd6f4;
      border-radius: 10px 10px 0 0;
    }

    .course-title {
      color: #89b4fa;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: #f38ba8;
      font-size: 18px;
      cursor: pointer;
    }

    .close-btn:hover {
      color: #fab387;
    }

    .window-body {
      padding: 16px 20px 20px 20px;
      font-size: 1rem;
      color: #cdd6f4;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .course-details {
      display: grid;
      gap: 12px 12px;
      background: #2b2d40;
      padding: 16px;
      border-radius: 8px;
    }

    .detail-item {
      display: flex;
      font-size: 1rem;
    }

    .detail-item .label {
      color: #bac2de;
      font-weight: 500;
    }

    .detail-item .value {
      padding-left: 5px;
      color: #a6e3a1;
    }

    .course-description {
      background: #2e2f3e;
      border-radius: 8px;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }

    .course-description h3 {
      color: #f9e2af;
      font-size: 1.1rem;
      margin-bottom: 8px;
    }

    .course-description p {
      color: #cdd6f4;
      line-height: 1.5;
      margin: 0;
      font-size: 1rem;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
})
export class FloatingWindow implements AfterViewInit, AfterViewChecked {
  onClose!: () => void;
  private mathRendered = false;

  @Input() course!: {
    name: string;
    number: string;
    semester: string;
    type: string;
    credits: string;
    instructor: string;
    description: string;
  };

  ngAfterViewInit() {
    this.renderMath();
  }

  ngAfterViewChecked() {
    if (!this.mathRendered) {
      this.renderMath();
    }
  }

  private renderMath() {
    if (typeof MathJax !== 'undefined') {
      MathJax.typesetPromise().then(() => {
        this.mathRendered = true;
      });
    }
  }
}
