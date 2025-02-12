import {Component, Input, OnInit, ElementRef, HostBinding, ChangeDetectionStrategy} from "@angular/core";
import {Action} from "../../action";

export interface DropdownMenuOptions {
    item: Action;
    rightAligned?: boolean;
    showMenuClass: string;
    header?: string;
}

@Component({
    selector: "[sq-dropdown-menu]",
    templateUrl: "./dropdown-menu.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BsDropdownMenu implements OnInit {
    children: Action[];
    
    private _options: DropdownMenuOptions;
    
    @Input("sq-dropdown-menu")
    set options(opts: DropdownMenuOptions) {
        this._options = {...opts};
        this.children = opts.item.children?.filter(child => !child.hidden) || [];
    }
    get options(): DropdownMenuOptions {
        return this._options;
    }
    
    @HostBinding("attr.role") role = "menu";
    @HostBinding("class.dropdown-menu") dropdown = true;
    @HostBinding("class.dropdown-menu-end") rightAligned;

    constructor(
        private elementRef: ElementRef) {
    }

    ngOnInit() {
        const element: HTMLElement = this.elementRef.nativeElement;
        if (this.options.item.scrollable) {
            element.classList.add("sq-scrollable-menu");
        }
        else if (this.options.item.scrollGroup) {
            element.classList.add("sq-scroll-menu");
        }
        this.rightAligned = this.options.rightAligned;
    }

    private getLi(element: HTMLElement): HTMLElement | null {
        let element1: HTMLElement | null = element;
        while (element1 && element1.nodeName !== "LI") {
            element1 = element1.parentElement;
        }
        return element1;
    }

    click(item: Action, event: UIEvent) {
        if (!this.options.item.disabled) {
            /**
             * Nested dropdown structure
             * -------------------------
             *  ABC (1)
             *    +--- 123
             *    +--- 456
             *  DEF
             *  GHI
             *  JKL (2)
             *    +--- 789
             *    +--- 321
             * 
             *
             * <ul dropdown-menu>               // nested dropdown container
             *   <li dropdown-submenu> (1)      // first nested menu
             *      <ul dropdown-menu>
             *         <li>...</i>
             *         <li>...</i>
             *      </ul>
             *   </li>
             *   <li>...</li>
             *   <li>...</li>
             *   <li dropdown-submenu> (2)      // second nested menu
             *      <ul dropdown-menu>
             *         <li>...</i>
             *         <li>...</i>
             *      </ul>
             *   </li>
             * <ul>
             * 
             */
            
            let isOpen = false;
            const li = this.getLi(<HTMLElement>event.target);
            if (!!li && li.classList.contains("dropdown-submenu")) {
                event.preventDefault();
                event.stopPropagation();
                
                // get the current's submenu status: <ul class='... show'> 
                const ul = li.getElementsByTagName("ul")[0];
                if(ul !== undefined) isOpen = ul.classList.contains(this.options.showMenuClass);

                // remove for each submenu the 'show' class
                if (li.parentElement) {
                    const els = li.parentElement.querySelectorAll('li > ul');
                    els.forEach(el => el.classList.remove(this.options.showMenuClass));
                }
                
                if (!isOpen) {
                    ul.classList.add(this.options.showMenuClass);
                }
            } else {
                li?.parentElement?.classList.remove(this.options.showMenuClass);
            }
            
            if (item.action) {
                item.action(item, event);
            }
            if (item.toggle) {
                item.toggle(item, !isOpen);
            }
        }
    }
}