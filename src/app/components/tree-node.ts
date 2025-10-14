import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tree-node',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class.root]="level === 0">
      <div class="nav-item" (click)="onItemClick($event)">
        <span class="label">{{ item.label }}</span>
      </div>

      <ul *ngIf="item.children" class="child-list">
        <li
          *ngFor="let child of item.children; let last = last"
          [class.last]="last"
          [style.paddingLeft.rem]="3"
        >
          <tree-node
            [item]="child"
            [level]="level + 1"
            [path]="path.concat(item.label)"
            (nodeClicked)="nodeClicked.emit($event)"
          ></tree-node>
        </li>
      </ul>
    </div>
  `,
  styles: `
    @import 'https://www.nerdfonts.com/assets/css/webfont.css';

    ul,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      position: relative;
    }

    li::before {
      content: '';
      position: absolute;
      height: 100%;
      left: 0.75rem;
      border-left: 2px solid #cdd6f4;
    }

    .nav-item::before {
      content: '';
      position: absolute;
      top: 1rem;
      left: -2.1rem;
      width: 1.5rem;
      border-top: 2px solid #cdd6f4;
    }

    .nav-item {
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .nav-item:hover {
      background-color: #585b70;
    }

    li.last::before {
      height: 1.1rem;
    }

    .root::before,
    .root > .nav-item::before {
      display: none;
      border-left-color: transparent;
      border-top: 2px transparent;
    }
  `,
})
export class TreeNode {
  @Input() item!: any;
  @Input() level = 0;
  @Input() path: string[] = [];

  @Output() nodeClicked = new EventEmitter<{ path: string[] }>();

  onItemClick(event?: MouseEvent) {
    event?.stopPropagation();
    this.nodeClicked.emit({
      path: [...this.path, this.item.label],
    });
  }
}
