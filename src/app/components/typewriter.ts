import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="typewriter-container">
      <span class="text">{{ staticText }} </span>
      <span class="text">{{ beforeCursor }}</span>

      <span
        *ngIf="cursorChar || mode === 'insert'"
        [ngClass]="{
          'caret-block': mode === 'normal' || mode === 'visual',
          'caret-thin': mode === 'insert',
        }"
      >
        {{ cursorChar }}
      </span>
      <ng-container *ngIf="mode === 'visual'">
        <span class="highlighted-text">{{ afterCursor }}</span>
      </ng-container>
      <ng-container *ngIf="mode !== 'visual'">
        <span class="text">{{ afterCursor }}</span>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .typewriter-container {
        font-family: 'Hack', monospace;
        position: relative;
      }

      .text {
        white-space: pre-wrap;
        vertical-align: middle;
      }

      .highlighted-text {
        background-color: #696969;
        vertical-align: middle;
        color: #cdd6f4;
      }

      .cursor {
        display: inline-block;
        white-space: pre;
        margin: 0;
      }

      .caret-block {
        background-color: #f5e0dc;
        color: #000;
        font-size: inherit;

        width: 1ch;
        height: 1.5em;
        overflow: hidden;
        vertical-align: middle;

        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .caret-thin {
        display: inline-block;
        vertical-align: middle;
        width: 1px;
        height: 1.5em;
        background-color: #696969;
      }

      .visual-mode {
        background-color: #888;
        color: #fff;
      }
    `,
  ],
})
export class Typewriter implements OnInit, OnDestroy {
  displayText = '';
  beforeCursor = '';
  cursorChar = ' ';
  afterCursor = '';
  mode: 'normal' | 'insert' | 'visual' = 'normal';

  @Input() texts: string[] = [];
  @Input() staticText: string = '';

  @Output() modeChange = new EventEmitter<'normal' | 'insert' | 'visual'>();
  @Output() charIndex = new EventEmitter<number>();

  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private highlightIndex = 0;
  private timeoutId: any;

  ngOnInit() {
    if (this.texts && this.texts.length > 0) {
      this.startTypewriter();
    }
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private updateCursorPosition(index: number) {
    const text = this.displayText;

    if (this.mode === 'insert') {
      this.beforeCursor = text.slice(0, index);
      this.afterCursor = text.slice(index);
      this.cursorChar = '';
    } else {
      this.beforeCursor = text.slice(0, index);
      this.cursorChar = text[index] ?? ' ';
      this.afterCursor = text.slice(index + 1);
    }
  }

  private startTypewriter() {
    this.mode = 'normal';
    this.modeChange.emit(this.mode);
    this.modeChange.emit(this.mode);
    this.timeoutId = setTimeout(() => this.enterInsertMode(), 500);
  }

  private enterInsertMode() {
    this.mode = 'insert';
    this.modeChange.emit(this.mode);
    this.timeoutId = setTimeout(() => this.typeText(), 750);
  }

  private typeText() {
    const currentText = this.texts[this.currentTextIndex];

    if (this.currentCharIndex < currentText.length) {
      this.displayText += currentText[this.currentCharIndex];
      this.currentCharIndex++;
      this.charIndex.emit(this.currentCharIndex);

      this.updateCursorPosition(this.currentCharIndex);

      this.timeoutId = setTimeout(() => this.typeText(), 150);
    } else {
      this.timeoutId = setTimeout(() => this.enterNormalMode(), 250);
    }
  }

  private enterNormalMode() {
    this.mode = 'normal';
    this.modeChange.emit(this.mode);
    this.updateCursorPosition(this.displayText.length - 1);

    this.timeoutId = setTimeout(() => this.enterVisualMode(), 1500);
  }

  private enterVisualMode() {
    this.mode = 'visual';
    this.modeChange.emit(this.mode);
    this.highlightIndex = this.displayText.length;
    this.timeoutId = setTimeout(() => this.highlightBackward(), 250);
  }

  private highlightBackward() {
    if (this.highlightIndex > 0) {
      this.highlightIndex--;
      this.charIndex.emit(this.highlightIndex);

      this.updateCursorPosition(this.highlightIndex);

      this.timeoutId = setTimeout(() => this.highlightBackward(), 200);
    } else {
      this.updateCursorPosition(0);
      this.timeoutId = setTimeout(() => this.deleteAllText(), 250);
    }
  }

  private deleteAllText() {
    this.displayText = '';
    this.beforeCursor = '';
    this.cursorChar = ' ';
    this.afterCursor = '';

    this.currentCharIndex = 0;
    this.charIndex.emit(this.currentCharIndex);
    this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;

    this.mode = 'normal';
    this.modeChange.emit(this.mode);
    this.timeoutId = setTimeout(() => this.startTypewriter(), 250);
  }
}
