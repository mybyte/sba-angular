import {Component, Input, HostBinding, Injector} from "@angular/core";
import {ModalService, ModalResult, ModalRef} from "@sinequa/core/modal";

@Component({
    selector: "sq-modal-header",
    templateUrl: "./modal-header.component.html",
    styles: [`
        /* in dark mode, invert close button color */
        :host-context(.dark)
        button.btn-close {
            filter: invert(1);
        }
    `]
})
export class BsModalHeader {
    @Input() title: string;
    @HostBinding("class.sq-modal-header") true;

    constructor(
        protected modalRef: ModalRef,
        protected injector: Injector) {
    }

    // Avoid circular reference (via Confirm)
    get modalService(): ModalService {
        return this.injector.get(ModalService);
    }

    cancel() {
        this.modalRef.close(ModalResult.Cancel);
    }
}