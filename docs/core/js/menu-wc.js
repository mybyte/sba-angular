'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Core</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppUtilsModule.html" data-type="entity-link" >AppUtilsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppUtilsModule-5e3ddace33c59a0bf73948ab0e32378133a02fb883829d37c730fce16c93d8ad0d3f79a6947d016282945b2ec86c896ddfd6bfa1e8761f7a30753bb93c7650a0"' : 'data-target="#xs-injectables-links-module-AppUtilsModule-5e3ddace33c59a0bf73948ab0e32378133a02fb883829d37c730fce16c93d8ad0d3f79a6947d016282945b2ec86c896ddfd6bfa1e8761f7a30753bb93c7650a0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppUtilsModule-5e3ddace33c59a0bf73948ab0e32378133a02fb883829d37c730fce16c93d8ad0d3f79a6947d016282945b2ec86c896ddfd6bfa1e8761f7a30753bb93c7650a0"' :
                                        'id="xs-injectables-links-module-AppUtilsModule-5e3ddace33c59a0bf73948ab0e32378133a02fb883829d37c730fce16c93d8ad0d3f79a6947d016282945b2ec86c896ddfd6bfa1e8761f7a30753bb93c7650a0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FormatService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormatService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BaseModule.html" data-type="entity-link" >BaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IntlModule.html" data-type="entity-link" >IntlModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-IntlModule-155edca8215bf81b0cfd8811d69f2a4c96c3dc6f77801ee87a882ddec50cad4f6001c54ac5f2967c01060bfe017fa9037e13558d46fe0379abec4893a5480440"' : 'data-target="#xs-injectables-links-module-IntlModule-155edca8215bf81b0cfd8811d69f2a4c96c3dc6f77801ee87a882ddec50cad4f6001c54ac5f2967c01060bfe017fa9037e13558d46fe0379abec4893a5480440"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IntlModule-155edca8215bf81b0cfd8811d69f2a4c96c3dc6f77801ee87a882ddec50cad4f6001c54ac5f2967c01060bfe017fa9037e13558d46fe0379abec4893a5480440"' :
                                        'id="xs-injectables-links-module-IntlModule-155edca8215bf81b0cfd8811d69f2a4c96c3dc6f77801ee87a882ddec50cad4f6001c54ac5f2967c01060bfe017fa9037e13558d46fe0379abec4893a5480440"' }>
                                        <li class="link">
                                            <a href="injectables/IntlService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntlService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-IntlModule-155edca8215bf81b0cfd8811d69f2a4c96c3dc6f77801ee87a882ddec50cad4f6001c54ac5f2967c01060bfe017fa9037e13558d46fe0379abec4893a5480440"' : 'data-target="#xs-pipes-links-module-IntlModule-155edca8215bf81b0cfd8811d69f2a4c96c3dc6f77801ee87a882ddec50cad4f6001c54ac5f2967c01060bfe017fa9037e13558d46fe0379abec4893a5480440"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-IntlModule-155edca8215bf81b0cfd8811d69f2a4c96c3dc6f77801ee87a882ddec50cad4f6001c54ac5f2967c01060bfe017fa9037e13558d46fe0379abec4893a5480440"' :
                                            'id="xs-pipes-links-module-IntlModule-155edca8215bf81b0cfd8811d69f2a4c96c3dc6f77801ee87a882ddec50cad4f6001c54ac5f2967c01060bfe017fa9037e13558d46fe0379abec4893a5480440"' }>
                                            <li class="link">
                                                <a href="pipes/MessagePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoadComponentModule.html" data-type="entity-link" >LoadComponentModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-LoadComponentModule-e1f41f0d3188fecdc7d569bb6ffab63a0784bafaf7779e18c66f4275aa3e0c6414122260ef8c9d0a2fa82d22e658b0d33e7a8f528908c05224d97a18901198fc"' : 'data-target="#xs-directives-links-module-LoadComponentModule-e1f41f0d3188fecdc7d569bb6ffab63a0784bafaf7779e18c66f4275aa3e0c6414122260ef8c9d0a2fa82d22e658b0d33e7a8f528908c05224d97a18901198fc"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-LoadComponentModule-e1f41f0d3188fecdc7d569bb6ffab63a0784bafaf7779e18c66f4275aa3e0c6414122260ef8c9d0a2fa82d22e658b0d33e7a8f528908c05224d97a18901198fc"' :
                                        'id="xs-directives-links-module-LoadComponentModule-e1f41f0d3188fecdc7d569bb6ffab63a0784bafaf7779e18c66f4275aa3e0c6414122260ef8c9d0a2fa82d22e658b0d33e7a8f528908c05224d97a18901198fc"' }>
                                        <li class="link">
                                            <a href="directives/LoadComponentDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadComponentDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoadComponentModule-e1f41f0d3188fecdc7d569bb6ffab63a0784bafaf7779e18c66f4275aa3e0c6414122260ef8c9d0a2fa82d22e658b0d33e7a8f528908c05224d97a18901198fc"' : 'data-target="#xs-injectables-links-module-LoadComponentModule-e1f41f0d3188fecdc7d569bb6ffab63a0784bafaf7779e18c66f4275aa3e0c6414122260ef8c9d0a2fa82d22e658b0d33e7a8f528908c05224d97a18901198fc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoadComponentModule-e1f41f0d3188fecdc7d569bb6ffab63a0784bafaf7779e18c66f4275aa3e0c6414122260ef8c9d0a2fa82d22e658b0d33e7a8f528908c05224d97a18901198fc"' :
                                        'id="xs-injectables-links-module-LoadComponentModule-e1f41f0d3188fecdc7d569bb6ffab63a0784bafaf7779e18c66f4275aa3e0c6414122260ef8c9d0a2fa82d22e658b0d33e7a8f528908c05224d97a18901198fc"' }>
                                        <li class="link">
                                            <a href="injectables/LoadComponentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadComponentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-931dd86e9e83a421d86d0771dffe0b295317f4f3aeaaaa94cb89e9a3659e47d613c7c9a11ca23a40b5f031eb12d433432c539a572757511a1ab72885d3d16736"' : 'data-target="#xs-components-links-module-LoginModule-931dd86e9e83a421d86d0771dffe0b295317f4f3aeaaaa94cb89e9a3659e47d613c7c9a11ca23a40b5f031eb12d433432c539a572757511a1ab72885d3d16736"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-931dd86e9e83a421d86d0771dffe0b295317f4f3aeaaaa94cb89e9a3659e47d613c7c9a11ca23a40b5f031eb12d433432c539a572757511a1ab72885d3d16736"' :
                                            'id="xs-components-links-module-LoginModule-931dd86e9e83a421d86d0771dffe0b295317f4f3aeaaaa94cb89e9a3659e47d613c7c9a11ca23a40b5f031eb12d433432c539a572757511a1ab72885d3d16736"' }>
                                            <li class="link">
                                                <a href="components/Login.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Login</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoginModule-931dd86e9e83a421d86d0771dffe0b295317f4f3aeaaaa94cb89e9a3659e47d613c7c9a11ca23a40b5f031eb12d433432c539a572757511a1ab72885d3d16736"' : 'data-target="#xs-injectables-links-module-LoginModule-931dd86e9e83a421d86d0771dffe0b295317f4f3aeaaaa94cb89e9a3659e47d613c7c9a11ca23a40b5f031eb12d433432c539a572757511a1ab72885d3d16736"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginModule-931dd86e9e83a421d86d0771dffe0b295317f4f3aeaaaa94cb89e9a3659e47d613c7c9a11ca23a40b5f031eb12d433432c539a572757511a1ab72885d3d16736"' :
                                        'id="xs-injectables-links-module-LoginModule-931dd86e9e83a421d86d0771dffe0b295317f4f3aeaaaa94cb89e9a3659e47d613c7c9a11ca23a40b5f031eb12d433432c539a572757511a1ab72885d3d16736"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationOauthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationOauthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthenticationPopupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationPopupService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JWTService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JWTService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TokenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TokenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalModule.html" data-type="entity-link" >ModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalModule-67f1155f60a6a23752f3de214dc2f26e46fb3dbf6497564edd8896e4b6b44e06346e6cbb70631f5f20c7d0fade3ea8b6d7d703ab4881da6fc5a88a4899bbdb17"' : 'data-target="#xs-components-links-module-ModalModule-67f1155f60a6a23752f3de214dc2f26e46fb3dbf6497564edd8896e4b6b44e06346e6cbb70631f5f20c7d0fade3ea8b6d7d703ab4881da6fc5a88a4899bbdb17"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalModule-67f1155f60a6a23752f3de214dc2f26e46fb3dbf6497564edd8896e4b6b44e06346e6cbb70631f5f20c7d0fade3ea8b6d7d703ab4881da6fc5a88a4899bbdb17"' :
                                            'id="xs-components-links-module-ModalModule-67f1155f60a6a23752f3de214dc2f26e46fb3dbf6497564edd8896e4b6b44e06346e6cbb70631f5f20c7d0fade3ea8b6d7d703ab4881da6fc5a88a4899bbdb17"' }>
                                            <li class="link">
                                                <a href="components/Confirm.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Confirm</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Prompt.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Prompt</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ModalModule-67f1155f60a6a23752f3de214dc2f26e46fb3dbf6497564edd8896e4b6b44e06346e6cbb70631f5f20c7d0fade3ea8b6d7d703ab4881da6fc5a88a4899bbdb17"' : 'data-target="#xs-injectables-links-module-ModalModule-67f1155f60a6a23752f3de214dc2f26e46fb3dbf6497564edd8896e4b6b44e06346e6cbb70631f5f20c7d0fade3ea8b6d7d703ab4881da6fc5a88a4899bbdb17"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ModalModule-67f1155f60a6a23752f3de214dc2f26e46fb3dbf6497564edd8896e4b6b44e06346e6cbb70631f5f20c7d0fade3ea8b6d7d703ab4881da6fc5a88a4899bbdb17"' :
                                        'id="xs-injectables-links-module-ModalModule-67f1155f60a6a23752f3de214dc2f26e46fb3dbf6497564edd8896e4b6b44e06346e6cbb70631f5f20c7d0fade3ea8b6d7d703ab4881da6fc5a88a4899bbdb17"' }>
                                        <li class="link">
                                            <a href="injectables/ModalService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationModule.html" data-type="entity-link" >NotificationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NotificationModule-dca84443aaddb36af8f2293d23b54d064aa3acb416db8139ef4d9f0664d39149bc291a0fe5099d52b9b8f2a4f5f7c68dee36972597fe33d1579230d6fb22e031"' : 'data-target="#xs-injectables-links-module-NotificationModule-dca84443aaddb36af8f2293d23b54d064aa3acb416db8139ef4d9f0664d39149bc291a0fe5099d52b9b8f2a4f5f7c68dee36972597fe33d1579230d6fb22e031"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationModule-dca84443aaddb36af8f2293d23b54d064aa3acb416db8139ef4d9f0664d39149bc291a0fe5099d52b9b8f2a4f5f7c68dee36972597fe33d1579230d6fb22e031"' :
                                        'id="xs-injectables-links-module-NotificationModule-dca84443aaddb36af8f2293d23b54d064aa3acb416db8139ef4d9f0664d39149bc291a0fe5099d52b9b8f2a4f5f7c68dee36972597fe33d1579230d6fb22e031"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ValidationModule.html" data-type="entity-link" >ValidationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' : 'data-target="#xs-components-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' :
                                            'id="xs-components-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' }>
                                            <li class="link">
                                                <a href="components/ValidationMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidationMessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' : 'data-target="#xs-directives-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' :
                                        'id="xs-directives-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' }>
                                        <li class="link">
                                            <a href="directives/ValidationDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidationDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' : 'data-target="#xs-injectables-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' :
                                        'id="xs-injectables-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' }>
                                        <li class="link">
                                            <a href="injectables/ValidationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidationService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' : 'data-target="#xs-pipes-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' :
                                            'id="xs-pipes-links-module-ValidationModule-ee21be22066c0237ace081744f00d653f3dcf18dfea03d2d1643ef16c9bf6a11add4616a11689dbdf7ff7a0dc201ad587559e72e1474f56cc6a2c1ace20b39f6"' }>
                                            <li class="link">
                                                <a href="pipes/ValidationErrorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidationErrorPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WebServicesModule.html" data-type="entity-link" >WebServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WebServicesModule-c0ba9583f52731dfdfee459675e2237babadf88e778bef19c64b1ef3839a2c37c27f929b3b82c6d967d7b74d06580b77ee3498e5a32f2e7b0b620a9539bd94fe"' : 'data-target="#xs-injectables-links-module-WebServicesModule-c0ba9583f52731dfdfee459675e2237babadf88e778bef19c64b1ef3839a2c37c27f929b3b82c6d967d7b74d06580b77ee3498e5a32f2e7b0b620a9539bd94fe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WebServicesModule-c0ba9583f52731dfdfee459675e2237babadf88e778bef19c64b1ef3839a2c37c27f929b3b82c6d967d7b74d06580b77ee3498e5a32f2e7b0b620a9539bd94fe"' :
                                        'id="xs-injectables-links-module-WebServicesModule-c0ba9583f52731dfdfee459675e2237babadf88e778bef19c64b1ef3839a2c37c27f929b3b82c6d967d7b74d06580b77ee3498e5a32f2e7b0b620a9539bd94fe"' }>
                                        <li class="link">
                                            <a href="injectables/AppWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuditWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuditWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DownloadWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JsonMethodPluginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JsonMethodPluginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LabelsWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LabelsWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PreviewWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreviewWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrincipalWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrincipalWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/QueryExportWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QueryExportWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/QueryWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QueryWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RecentQueriesWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecentQueriesWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RfmWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RfmWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SimilarDocumentsWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SimilarDocumentsWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SponsoredLinksWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SponsoredLinksWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SqHttpClient.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SqHttpClient</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StartConfigWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartConfigWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SuggestFieldWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuggestFieldWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SuggestQueryWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuggestQueryWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserRatingsWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRatingsWebService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserSettingsWebService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserSettingsWebService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ComponentWithLogin.html" data-type="entity-link" >ComponentWithLogin</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ArrayBasedView.html" data-type="entity-link" >ArrayBasedView</a>
                            </li>
                            <li class="link">
                                <a href="classes/DefaultLocalesConfig.html" data-type="entity-link" >DefaultLocalesConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/Expr.html" data-type="entity-link" >Expr</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExprParser.html" data-type="entity-link" >ExprParser</a>
                            </li>
                            <li class="link">
                                <a href="classes/FrameTask.html" data-type="entity-link" >FrameTask</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpService.html" data-type="entity-link" >HttpService</a>
                            </li>
                            <li class="link">
                                <a href="classes/IteratorAdaptor.html" data-type="entity-link" >IteratorAdaptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModalButton.html" data-type="entity-link" >ModalButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModalRef.html" data-type="entity-link" >ModalRef</a>
                            </li>
                            <li class="link">
                                <a href="classes/NameValueArrayViewHelper.html" data-type="entity-link" >NameValueArrayViewHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pattern.html" data-type="entity-link" >Pattern</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatternMatcher.html" data-type="entity-link" >PatternMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/Patterns.html" data-type="entity-link" >Patterns</a>
                            </li>
                            <li class="link">
                                <a href="classes/Query.html" data-type="entity-link" >Query</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecentQueries.html" data-type="entity-link" >RecentQueries</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecentQueriesList.html" data-type="entity-link" >RecentQueriesList</a>
                            </li>
                            <li class="link">
                                <a href="classes/SqError.html" data-type="entity-link" >SqError</a>
                            </li>
                            <li class="link">
                                <a href="classes/SqHttpParameterCodec.html" data-type="entity-link" >SqHttpParameterCodec</a>
                            </li>
                            <li class="link">
                                <a href="classes/Timer.html" data-type="entity-link" >Timer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utils.html" data-type="entity-link" >Utils</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppWebService.html" data-type="entity-link" >AppWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuditWebService.html" data-type="entity-link" >AuditWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthConfig.html" data-type="entity-link" >AuthConfig</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationOauthService.html" data-type="entity-link" >AuthenticationOauthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationPopupService.html" data-type="entity-link" >AuthenticationPopupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatasetWebService.html" data-type="entity-link" >DatasetWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocBuilderWebService.html" data-type="entity-link" >DocBuilderWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DownloadWebService.html" data-type="entity-link" >DownloadWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExprBuilder.html" data-type="entity-link" >ExprBuilder</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormatService.html" data-type="entity-link" >FormatService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IntlService.html" data-type="entity-link" >IntlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JsonMethodPluginService.html" data-type="entity-link" >JsonMethodPluginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JWTService.html" data-type="entity-link" >JWTService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LabelsWebService.html" data-type="entity-link" >LabelsWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadComponentService.html" data-type="entity-link" >LoadComponentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link" >ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationsService.html" data-type="entity-link" >NotificationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PreviewWebService.html" data-type="entity-link" >PreviewWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrincipalWebService.html" data-type="entity-link" >PrincipalWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QueryExportWebService.html" data-type="entity-link" >QueryExportWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QueryIntentWebService.html" data-type="entity-link" >QueryIntentWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QueryWebService.html" data-type="entity-link" >QueryWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecentQueriesWebService.html" data-type="entity-link" >RecentQueriesWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RfmWebService.html" data-type="entity-link" >RfmWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SimilarDocumentsWebService.html" data-type="entity-link" >SimilarDocumentsWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SponsoredLinksWebService.html" data-type="entity-link" >SponsoredLinksWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SqHttpClient.html" data-type="entity-link" >SqHttpClient</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StartConfigWebService.html" data-type="entity-link" >StartConfigWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SuggestFieldWebService.html" data-type="entity-link" >SuggestFieldWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SuggestQueryWebService.html" data-type="entity-link" >SuggestQueryWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TextChunksWebService.html" data-type="entity-link" >TextChunksWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRatingsWebService.html" data-type="entity-link" >UserRatingsWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserSettingsWebService.html" data-type="entity-link" >UserSettingsWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationService.html" data-type="entity-link" >ValidationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuditInterceptor.html" data-type="entity-link" >AuditInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoginInterceptor.html" data-type="entity-link" >LoginInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/NotificationsInterceptor.html" data-type="entity-link" >NotificationsInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccessListPrincipal.html" data-type="entity-link" >AccessListPrincipal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccessLists.html" data-type="entity-link" >AccessLists</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Aggregation.html" data-type="entity-link" >Aggregation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AggregationItem.html" data-type="entity-link" >AggregationItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AggregationOptions.html" data-type="entity-link" >AggregationOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Answer.html" data-type="entity-link" >Answer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppEvent.html" data-type="entity-link" >AppEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArrayView.html" data-type="entity-link" >ArrayView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Attributes.html" data-type="entity-link" >Attributes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuditEvent.html" data-type="entity-link" >AuditEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuditRecord.html" data-type="entity-link" >AuditRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Authentication.html" data-type="entity-link" >Authentication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryHighlightData.html" data-type="entity-link" >CategoryHighlightData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCAggregation.html" data-type="entity-link" >CCAggregation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCApp.html" data-type="entity-link" >CCApp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCAppRefresh.html" data-type="entity-link" >CCAppRefresh</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCAutocomplete.html" data-type="entity-link" >CCAutocomplete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCColumn.html" data-type="entity-link" >CCColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCColumnInfo.html" data-type="entity-link" >CCColumnInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCColumnsInfo.html" data-type="entity-link" >CCColumnsInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCConfig.html" data-type="entity-link" >CCConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCIndex.html" data-type="entity-link" >CCIndex</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCLabels.html" data-type="entity-link" >CCLabels</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCList.html" data-type="entity-link" >CCList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCListItem.html" data-type="entity-link" >CCListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCQuery.html" data-type="entity-link" >CCQuery</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCRating.html" data-type="entity-link" >CCRating</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCRFM.html" data-type="entity-link" >CCRFM</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCRFMAction.html" data-type="entity-link" >CCRFMAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCScope.html" data-type="entity-link" >CCScope</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCSortingChoice.html" data-type="entity-link" >CCSortingChoice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCTab.html" data-type="entity-link" >CCTab</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCTabSearch.html" data-type="entity-link" >CCTabSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CCWebService.html" data-type="entity-link" >CCWebService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CheckCloseEvent.html" data-type="entity-link" >CheckCloseEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfirmOptions.html" data-type="entity-link" >ConfirmOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Credentials.html" data-type="entity-link" >Credentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatasetDescription.html" data-type="entity-link" >DatasetDescription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatasetError.html" data-type="entity-link" >DatasetError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataUpdatedEvent.html" data-type="entity-link" >DataUpdatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeducedStartConfig.html" data-type="entity-link" >DeducedStartConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DidYouMean.html" data-type="entity-link" >DidYouMean</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DidYouMeanItem.html" data-type="entity-link" >DidYouMeanItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentAccessLists.html" data-type="entity-link" >DocumentAccessLists</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityItem.html" data-type="entity-link" >EntityItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExportDialogModel.html" data-type="entity-link" >ExportDialogModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExprContext.html" data-type="entity-link" >ExprContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExprEvaluationContext.html" data-type="entity-link" >ExprEvaluationContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExprLocation.html" data-type="entity-link" >ExprLocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExprMessage.html" data-type="entity-link" >ExprMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExprMessageOptions.html" data-type="entity-link" >ExprMessageOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExprOperandsInitializer.html" data-type="entity-link" >ExprOperandsInitializer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExprParserOptions.html" data-type="entity-link" >ExprParserOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExprValueInfo.html" data-type="entity-link" >ExprValueInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExprValueInitializer.html" data-type="entity-link" >ExprValueInitializer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExprValueLocation.html" data-type="entity-link" >ExprValueLocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FromJsonOptions.html" data-type="entity-link" >FromJsonOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HighlightDataPerCategory.html" data-type="entity-link" >HighlightDataPerCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HighlightDataPerLocation.html" data-type="entity-link" >HighlightDataPerLocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HighlightValue.html" data-type="entity-link" >HighlightValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModalButton.html" data-type="entity-link" >IModalButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModalRef.html" data-type="entity-link" >IModalRef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMulti.html" data-type="entity-link" >IMulti</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IntlConfig.html" data-type="entity-link" >IntlConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IntlFormats.html" data-type="entity-link" >IntlFormats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPartialConfigOptions.html" data-type="entity-link" >IPartialConfigOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IQuery.html" data-type="entity-link" >IQuery</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRef.html" data-type="entity-link" >IRef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JsonArray.html" data-type="entity-link" >JsonArray</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JsonObject.html" data-type="entity-link" >JsonObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JsonWebToken.html" data-type="entity-link" >JsonWebToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Labels.html" data-type="entity-link" >Labels</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LabelsRights.html" data-type="entity-link" >LabelsRights</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LinkResult.html" data-type="entity-link" >LinkResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LinksResults.html" data-type="entity-link" >LinksResults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoadComponentOptions.html" data-type="entity-link" >LoadComponentOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoadedComponent.html" data-type="entity-link" >LoadedComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Locale.html" data-type="entity-link" >Locale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocaleChangeEvent.html" data-type="entity-link" >LocaleChangeEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocaleData.html" data-type="entity-link" >LocaleData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocalesConfig.html" data-type="entity-link" >LocalesConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginData.html" data-type="entity-link" >LoginData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapOf.html" data-type="entity-link" >MapOf</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatchingPassage.html" data-type="entity-link" >MatchingPassage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatchLocationsPerPartname.html" data-type="entity-link" >MatchLocationsPerPartname</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessageParams.html" data-type="entity-link" >MessageParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModalConfig.html" data-type="entity-link" >ModalConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NameValueArrayView.html" data-type="entity-link" >NameValueArrayView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NameValuePair.html" data-type="entity-link" >NameValuePair</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationEvent.html" data-type="entity-link" >NotificationEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Open.html" data-type="entity-link" >Open</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PartnameMatchLocations.html" data-type="entity-link" >PartnameMatchLocations</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Passage.html" data-type="entity-link" >Passage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PreloginAppConfig.html" data-type="entity-link" >PreloginAppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PreviewData.html" data-type="entity-link" >PreviewData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Principal.html" data-type="entity-link" >Principal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrincipalChangedEvent.html" data-type="entity-link" >PrincipalChangedEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrincipalEvent.html" data-type="entity-link" >PrincipalEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrincipalParams.html" data-type="entity-link" >PrincipalParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrincipalUserIdsParams.html" data-type="entity-link" >PrincipalUserIdsParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrincipalUserInfo.html" data-type="entity-link" >PrincipalUserInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcessedCredentials.html" data-type="entity-link" >ProcessedCredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PromptOptions.html" data-type="entity-link" >PromptOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryAnalysis.html" data-type="entity-link" >QueryAnalysis</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryAnalysisElement.html" data-type="entity-link" >QueryAnalysisElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryChangedEvent.html" data-type="entity-link" >QueryChangedEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryIntent.html" data-type="entity-link" >QueryIntent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryIntentAction.html" data-type="entity-link" >QueryIntentAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryIntentData.html" data-type="entity-link" >QueryIntentData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryIntentDatasets.html" data-type="entity-link" >QueryIntentDatasets</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryIntentEntity.html" data-type="entity-link" >QueryIntentEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryIntentEntity2.html" data-type="entity-link" >QueryIntentEntity2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryIntentMatch.html" data-type="entity-link" >QueryIntentMatch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryIntentResponse.html" data-type="entity-link" >QueryIntentResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryIntentWord.html" data-type="entity-link" >QueryIntentWord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Record.html" data-type="entity-link" >Record</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RelevantExtract.html" data-type="entity-link" >RelevantExtract</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Results.html" data-type="entity-link" >Results</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RFMActionDisplay.html" data-type="entity-link" >RFMActionDisplay</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RFMData.html" data-type="entity-link" >RFMData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Select.html" data-type="entity-link" >Select</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServerConfig.html" data-type="entity-link" >ServerConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SessionEvent.html" data-type="entity-link" >SessionEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StartConfig.html" data-type="entity-link" >StartConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Suggestion.html" data-type="entity-link" >Suggestion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tab.html" data-type="entity-link" >Tab</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TermPresence.html" data-type="entity-link" >TermPresence</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TextChunk.html" data-type="entity-link" >TextChunk</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TextLocation.html" data-type="entity-link" >TextLocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ThrottleSettings.html" data-type="entity-link" >ThrottleSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToJsonOptions.html" data-type="entity-link" >ToJsonOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TopPassage.html" data-type="entity-link" >TopPassage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeAggregationNode.html" data-type="entity-link" >TreeAggregationNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNode.html" data-type="entity-link" >TreeNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatedEvent.html" data-type="entity-link" >UpdatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserOverride.html" data-type="entity-link" >UserOverride</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserRatingResponse.html" data-type="entity-link" >UserRatingResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserSettings.html" data-type="entity-link" >UserSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserSettingsChangedEvent.html" data-type="entity-link" >UserSettingsChangedEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserSettingsEvent.html" data-type="entity-link" >UserSettingsEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValidationOptions.html" data-type="entity-link" >ValidationOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Validator.html" data-type="entity-link" >Validator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValueItem.html" data-type="entity-link" >ValueItem</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/AbstractIntlPipe.html" data-type="entity-link" >AbstractIntlPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});