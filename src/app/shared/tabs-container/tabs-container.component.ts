import {
  AfterContentInit,
  Component,
  contentChildren
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  readonly tabs = contentChildren(TabComponent);

  constructor() {}

  ngAfterContentInit() {
    const activeTabs: TabComponent[] = this.tabs().filter(
      (tab: TabComponent) => tab.active()
    );
    if (activeTabs.length === 0 || !activeTabs) {
      this.selectTab(this.tabs().at(0)!);
    }
    // this.tabs.toArray()[0].active = true;
  }

  selectTab(tab: TabComponent): boolean {
    this.tabs().forEach((tab: TabComponent): void => {
      tab.active = false;
    });
    tab.active = true;
    return false;
  }
}
