import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tree-node',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li [class.root]="level === 0" [style.paddingLeft.rem]="level != 0 ? 1.5 : 0" class="nav-list">
      <div class="nav-item">
        <span class="label">{{ item.label }}</span>
      </div>

      <ul *ngIf="item.children" class="child-list">
        <tree-node
          *ngFor="let child of item.children"
          [item]="child"
          [level]="level + 1"
        ></tree-node>
      </ul>
    </li>
  `,
  styles: `
    @import 'https://www.nerdfonts.com/assets/css/webfont.css';

    ul,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-list,
    .child-list {
      margin: 0;
      padding: 0;
    }

    li {
      position: relative;
      padding-left: 1rem;
    }

    li::before {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      left: 0.75rem;
      border-left: 1px solid #5e5e6e;
    }

    li:last-child::before {
      height: 100%;
    }

    .nav-item {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0.3rem 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .nav-item:hover {
      background-color: #585b70;
    }

    .label {
      white-space: normal;
    }

    li.root::before,
    li.root > .nav-item::before {
      display: none;
    }
  `,
})
export class TreeNode {
  @Input() item!: any;
  @Input() level = 0;
}
