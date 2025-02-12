---
layout: default
title: Modal Module
parent: Components
grand_parent: Modules
nav_order: 11
---

# Modal Module

## Reference documentation

Please checkout the [reference documentation]({{site.baseurl}}components/modules/BsModalModule.html) auto-generated from source code.

## Features

The `Modal` module is divised into two parts:

1. The generic part in `@sinequa\core` provides service, and components declartion for the creation of popup modals,
2. The components in `@sinequa\components` provides overrides for the components in `@sinequa\core` for styling, for Bootstrap ([BsModalModule]({{site.baseurl}}components/modules/BsModalModule.html)).

This documentation page focuses on the Bootstrap flavor components of `Modal`.

Please refer to the document of the [core modal module]({{site.baseurl}}modules/core/modal.html) for the usage of the generic module.

## Import

```typescript
import { LoginModule } from "@sinequa/core/login";
import { ModalModule } from "@sinequa/core/modal";

import { BsModalModule } from "@sinequa/components/modal"; // Bootstrap flavor of Modal

@NgModule({
    imports: [
        /*....*/
        LoginModule,
        ModalModule,
        BsModalModule, // Overrides login and modal components with Bootstrap components
        /*....*/
    ],
    /*....*/
})
```

This module is internationalized: If not already the case, you need to import its messages for the language(s) of your application. For example, in your app's `src/locales/en.ts`:

```ts
...
import {enModal} from "@sinequa/components/modal";

const messages = Utils.merge({}, ..., enModal, appMessages);
```

## API usage

This module introduces the [BsModal component]({{site.baseurl}}components/components/BsModal.html) that helps creating popup modal with Bootstrap styling.

This component provides the `sq-modal` selector that can be used to display a modal in the HTML template of your component

Example: The "New saved query" popup with `BsModal`

```html
<form name="editSavedQuery" novalidate [formGroup]="form">
    <sq-modal [title]="'msg#editSavedQuery.title'" [buttons]="buttons">
        <div class="form-group sq-form-group">
            <label for="savedQueryName">
                {{'msg#editSavedQuery.name' | sqMessage}}
            </label>
            <input
                [sqValidation]="form"
                type="text"
                class="form-control"
                id="savedQueryName"
                formControlName="savedQueryName"
                spellcheck="off"
                sqAutofocus
            >
        </div>
    </sq-modal>
</form>
```

which yields the following popup

![New saved query popup]({{site.baseurl}}assets/modules/modal/modal-new-saved-query.png)
*New saved query popup*
{: .text-center }

The input of the components are

* `title`: The title of the popup, could be internationalized (i18n) message
* `buttons`: The list of the buttons in the popup, each follows the interface [`IModalButton`]({{site.baseurl}}core/interfaces/IModalButton.html),
* `showHeader`: whether to show the header of the modal, `true` by default,
* `showFooter`: whether to show the footer of the modal, `true` by default.
