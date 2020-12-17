import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppService, FormatService, ExprValueInitializer, Expr } from "@sinequa/core/app-utils";

import { SearchService } from "../search";
import {
  AdvancedService,
  BasicAdvancedConfig,
  AdvancedSelect,
  AdvancedRange,
  AdvancedInput,
  AdvancedCheckbox,
  AdvancedOperator,
  AdvancedFormType,
  BasicAdvancedValue,
} from "../advanced";
import { ValidationService } from "@sinequa/core/validation";
import { START_CONFIG, CCColumn } from "@sinequa/core/web-services";
import { HttpHandler } from "@angular/common/http";
import { IntlService, LOCALES_CONFIG } from "@sinequa/core/intl";
import { FormControl } from "@angular/forms";
import { MODAL_LOGIN } from '@sinequa/core/login';
import { MODAL_CONFIRM, MODAL_PROMPT } from '@sinequa/core/modal';
import { AuthService } from 'ng2-ui-auth';
import { AppLocalesConfig } from './mocks/app.locales.config';
import { Utils } from '@sinequa/core/base';

describe("AdvancedService", () => {
  let service: AdvancedService;
  let searchService: SearchService;
  let appService: AppService;
  let formatService: FormatService;
  let intlService: IntlService;

  beforeEach(() => {

    const IntlServiceFactory = () => ({
      parseDate: () => {},
    });

    const AuthServiceFactory = () => ({});

    TestBed.configureTestingModule({
      providers: [
        AdvancedService,
        FormatService,
        AppService,
        HttpHandler,
        ValidationService,
        SearchService,
        { provide: START_CONFIG, useValue: { app: "testing_app" } },
        { provide: MODAL_LOGIN, useValue: "MODAL_LOGIN" },
        { provide: MODAL_CONFIRM, useValue: "MODAL_CONFIRM" },
        { provide: MODAL_PROMPT, useValue: "MODAL_PROMPT" },
        { provide: IntlService, useFactory: IntlServiceFactory },
        { provide: AuthService, useFactory: AuthServiceFactory },
        {provide: LOCALES_CONFIG, useClass: AppLocalesConfig},
      ],
      imports: [
        RouterTestingModule,
        OverlayModule
      ]
    });
    service = TestBed.inject(AdvancedService);
    searchService = TestBed.inject(SearchService);
    appService = TestBed.inject(AppService);
    formatService = TestBed.inject(FormatService);
    intlService = TestBed.inject(IntlService);
  });

  it("can load instance", () => {
    expect(service).toBeTruthy();
    expect(service.advancedFormValidators).toBeDefined();
  });

  describe("advanced validators", () => {
    it("min", () => {
      const validator = service.advancedFormValidators.min(10, {
        field: "toto",
      } as BasicAdvancedConfig);
      const control = new FormControl("control", [validator]);
      control.setValue(1);
      expect(control.errors?.min).toBeDefined();
      expect(control.valid).toBeFalsy();
    });

    it("max", () => {
      const validator = service.advancedFormValidators.max(10, {
        field: "toto",
      } as BasicAdvancedConfig);
      const control = new FormControl("control", [validator]);
      control.setValue(11);
      expect(control.errors?.max).toBeDefined();
      expect(control.valid).toBeFalsy();
    });

    it("required", () => {
      const validator = service.advancedFormValidators.required;
      const control = new FormControl("control", [validator]);
      control.setValue(null);
      expect(control.errors?.required).toBeDefined();
      expect(control.valid).toBeFalsy();
    });

    it("email", () => {
      const validator = service.advancedFormValidators.email;
      const control = new FormControl("control", [validator]);
      control.setValue("test");
      expect(control.errors?.email).toBeDefined();
      expect(control.valid).toBeFalsy();
    });

    it("pattern", () => {
      const validator = service.advancedFormValidators.pattern("^[0-9]+$");
      const control = new FormControl("control", [validator]);
      control.setValue("abc");
      expect(control.errors?.pattern).toBeDefined();
      expect(control.valid).toBeFalsy();
    });

    it("integer", () => {
      const validator = service.advancedFormValidators.integer({
        field: "toto",
      } as BasicAdvancedConfig);
      const control = new FormControl("control", [validator]);
      control.setValue(1.8);
      expect(control.errors?.integer).toBeDefined();
      expect(control.valid).toBeFalsy();
    });

    it("number", () => {
      const validator = service.advancedFormValidators.number({
        field: "toto",
      } as BasicAdvancedConfig);
      const control = new FormControl("control", [validator]);
      control.setValue("test");
      expect(control.errors?.number).toBeDefined();
      expect(control.valid).toBeFalsy();
    });

    it("range", () => {
      const validator = service.advancedFormValidators.range({
        field: "toto",
      } as BasicAdvancedConfig);
      const control = new FormControl("control", [validator]);
      control.setValue(["b", "a"]);
      expect(control.errors?.range).toBeDefined();
      expect(control.valid).toBeFalsy();
    });

    it("date", () => {
      const validator = service.advancedFormValidators.date({
        field: "toto",
      } as BasicAdvancedConfig);
      const control = new FormControl("control", [validator]);
      control.setValue("10");
      expect(control.errors?.date).toBeDefined();
      expect(control.valid).toBeFalsy();
    });
  });

  describe("create advanced controls", () => {
    let spy;
    beforeEach(() => {
      spy = spyOn<any>(service, "createControl");
    });

    it("select-control", () => {
      service.createSelectControl({} as AdvancedSelect, []);
      expect(spy).toHaveBeenCalledWith({} as AdvancedSelect, [], undefined);
    });

    it("range-control", () => {
      service.createRangeControl({} as AdvancedRange);
      expect(spy).toHaveBeenCalledWith({} as AdvancedRange, undefined, undefined);
    });

    it("input-control", () => {
      service.createInputControl({} as AdvancedInput, []);
      expect(spy).toHaveBeenCalledWith({} as AdvancedInput, [], undefined);
    });

    it("multi-input-control", () => {
      service.createMultiInputControl({} as AdvancedInput, undefined, []);
      expect(spy).toHaveBeenCalledWith({} as AdvancedInput, undefined, []);
    });

    it("checkbox-control", () => {
      service.createCheckboxControl({} as AdvancedCheckbox, []);
      expect(spy).toHaveBeenCalledWith({} as AdvancedCheckbox, [], undefined);
    });
  });

  describe("get advanced value from searchService.query", () => {
    let spy;
    let spyQueryAction;
    beforeEach(() => {
      searchService.query.select = [
        {expression: "treepath:[`Product`,`web`]", facet: "advanced_treepath"},
        {expression: "authors:[`sinequa`]", facet: "advanced_authors"},
        {expression: "size:<=262144000", facet: "advanced_size"},
        {expression: "modified:[2020-12-01..2020-12-16]", facet: "advanced_modified"},
        {expression: "person:[`Elon Musk`,`Bill Gates`]", facet: "advanced_person"},
        {expression: "docformat:`htm`", facet: "advanced_docformat"}
      ];
      spy = spyOn(appService, 'parseExpr');
      spyQueryAction = spyOn(searchService.query, 'findSelect').and.callThrough();
    });

    afterEach(() => {
      spy.calls.reset();
    })

    it("when defined filter for a mono-select and multi-select component", () => {
      // Case multi-select
      const config1 = {
        field: "treepath",
        operator: AdvancedOperator.NONE,
        multiple: true
      } as AdvancedSelect;

      const exprValueInitializer1: ExprValueInitializer = {
        exprContext: {appService, formatService, intlService},
        values: ["Product","web"],
        field: "treepath",
        operator: 10
      };
      const expr1: Expr = new Expr(exprValueInitializer1);
      spy.and.returnValue(expr1);
      const value1 = service.getAdvancedValue(config1);

      expect(spyQueryAction).toHaveBeenCalledWith("advanced_treepath");
      expect(value1).toEqual(["Product","web"]);

      // Case mono-select
      const config2 = {
        field: "authors",
        operator: AdvancedOperator.NONE,
        multiple: false
      } as AdvancedSelect;

      const exprValueInitializer2: ExprValueInitializer = {
        exprContext: {appService, formatService, intlService},
        values: ["sinequa"],
        field: "authors",
        operator: 10
      };
      const expr2: Expr = new Expr(exprValueInitializer2);
      spy.and.returnValue(expr2);
      const value2 = service.getAdvancedValue(config2);

      expect(spyQueryAction).toHaveBeenCalledWith("advanced_authors");
      expect(value2).toEqual("sinequa");
    });

    it("when defined filter for a number/date range component", () => {
      // Case numbers with only one operand of the range
      const config1 = {
        field: "size",
        type: AdvancedFormType.Range
      } as AdvancedRange;

      const exprValueInitializer1: ExprValueInitializer = {
        exprContext: {appService, formatService, intlService},
        values: ["262144000"],
        value: "262144000",
        field: "size",
        operator: 5
      };
      const expr1: Expr = new Expr(exprValueInitializer1);
      spy.and.returnValue(expr1);
      const value1 = service.getAdvancedValue(config1);

      expect(spyQueryAction).toHaveBeenCalledWith("advanced_size");
      expect(value1).toEqual([undefined, '262144000']);

      // Case dates with 2 operands of the range
      const config2 = {
        field: "modified",
        type: AdvancedFormType.Range
      } as AdvancedRange;

      const exprValueInitializer2: ExprValueInitializer = {
        exprContext: {appService, formatService, intlService},
        values: ["2020-12-01", "2020-12-16"],
        field: "modified",
        operator: 11
      };
      const expr2: Expr = new Expr(exprValueInitializer2);
      spy.and.returnValue(expr2);
      const value2 = service.getAdvancedValue(config2);

      expect(spyQueryAction).toHaveBeenCalledWith("advanced_modified");
      expect(value2).toEqual(["2020-12-01", "2020-12-16"]);
    });

    it("when defined filter for a multi-input/input component", () => {
      // Case multi-input
      const config1 = {
        field: "person",
        operator: AdvancedOperator.NONE
      } as AdvancedInput;

      const exprValueInitializer1: ExprValueInitializer = {
        exprContext: {appService, formatService, intlService},
        values: ["Elon Musk","Bill Gates"],
        field: "person",
        operator: 10
      };
      const expr1: Expr = new Expr(exprValueInitializer1);
      spy.and.returnValue(expr1);
      const value1 = service.getAdvancedValue(config1);

      expect(spyQueryAction).toHaveBeenCalledWith("advanced_person");
      expect(value1).toEqual(["Elon Musk","Bill Gates"]);

      // Case input
      const config2 = {
        field: "docformat",
        operator: AdvancedOperator.NONE
      } as AdvancedInput;

      const exprValueInitializer2: ExprValueInitializer = {
        exprContext: {appService, formatService, intlService},
        values: ["htm"],
        field: "docformat",
        operator: 10
      };
      const expr2: Expr = new Expr(exprValueInitializer2);
      spy.and.returnValue(expr2);
      const value2 = service.getAdvancedValue(config2);

      expect(spyQueryAction).toHaveBeenCalledWith("advanced_docformat");
      expect(value2).toEqual("htm");
    });

    it("Undefined filter should also be processed", () => {
      // Case range
      const config1 = {
        field: "foo",
        type: AdvancedFormType.Range
      } as AdvancedRange;

      const value1 = service.getAdvancedValue(config1);

      expect(spyQueryAction).toHaveBeenCalledWith("advanced_foo");
      expect(value1).toEqual([undefined,undefined]);

      // All other Cases: as example Select
      const config2 = {
        field: "toto",
        type: AdvancedFormType.Select
      } as AdvancedSelect;

      const value2 = service.getAdvancedValue(config2);

      expect(spyQueryAction).toHaveBeenCalledWith("advanced_toto");
      expect(value2).toEqual(undefined);
    });
  });

  describe("set advanced value in searchService.query", () => {
    let spyQueryRemoveAction;
    let spyQueryAddAction;
    beforeEach(() => {
      searchService.query.select = [];
      spyQueryAddAction = spyOn(searchService.query, 'addSelect').and.callThrough();
      spyQueryRemoveAction = spyOn(searchService.query, 'removeSelect').and.callThrough();
    });

    afterEach(() => {
      spyQueryAddAction.calls.reset();
      spyQueryRemoveAction.calls.reset();
    })

    it("from a number/date range component", () => {
      // Case numbers with only one operand of the range
      const config1 = {
        field: "size",
        type: AdvancedFormType.Range
      } as AdvancedRange;

      service.setAdvancedValue([undefined, '262144000'], config1);

      expect(spyQueryRemoveAction).toHaveBeenCalledWith("advanced_size");
      expect(spyQueryAddAction).toHaveBeenCalledWith("size:<=262144000","advanced_size");

      // Case dates with 2 operands of the range
      const config2 = {
        field: "modified",
        type: AdvancedFormType.Range
      } as AdvancedRange;

      service.setAdvancedValue(["2020-12-01", "2020-12-16"], config2);

      expect(spyQueryRemoveAction).toHaveBeenCalledWith("advanced_modified");
      expect(spyQueryAddAction).toHaveBeenCalledWith("modified:[2020-12-01..2020-12-16]","advanced_modified");
    });

    it("from a (select/input/checkbox...) component", () => {
      const config1 = {
        field: "treepath",
        operator: AdvancedOperator.NONE,
        multiple: true
      } as AdvancedSelect;

      service.setAdvancedValue(["Product","web"], config1);

      expect(spyQueryRemoveAction).toHaveBeenCalledWith("advanced_treepath");
      expect(spyQueryAddAction).toHaveBeenCalledWith("treepath:[Product,web]","advanced_treepath");
    });

    it("with undefined value", () => {
      const config1 = {
        field: "person",
        operator: AdvancedOperator.NONE
      } as AdvancedInput;

      service.setAdvancedValue(undefined, config1);

      expect(spyQueryRemoveAction).toHaveBeenCalledWith("advanced_person");
      expect(spyQueryAddAction).not.toHaveBeenCalled();
    });
  });

  describe("remove an advanced value from searchService.query", () => {
    let spyQueryRemoveAction;
    let spySearch;
    beforeEach(() => {
      searchService.query.select = [{expression: "foo:[`toto`]", facet: "advanced_foo"}];
      spySearch = spyOn(searchService, 'search').and.callThrough();
      spyQueryRemoveAction = spyOn(searchService.query, 'removeSelect').and.callThrough();
    });

    afterEach(() => {
      spySearch.calls.reset();
      spyQueryRemoveAction.calls.reset();
    })

    it("remove existing select and trigger new search", () => {
      service.removeAdvancedValue("foo");

      expect(spyQueryRemoveAction).toHaveBeenCalledWith("advanced_foo");
      expect(searchService.query.select).toEqual([]);
      expect(spySearch).toHaveBeenCalled();
    });

    it("non-existent select and trigger new search", () => {
      service.removeAdvancedValue("test");

      expect(spyQueryRemoveAction).toHaveBeenCalledWith("advanced_test");
      expect(searchService.query.select).toEqual([{expression: "foo:[`toto`]", facet: "advanced_foo"}]);
      expect(spySearch).toHaveBeenCalled();
    });

    it("remove existing select without triggering new search", () => {
      service.removeAdvancedValue("foo", false);

      expect(spyQueryRemoveAction).toHaveBeenCalledWith("advanced_foo");
      expect(searchService.query.select).toEqual([]);
      expect(spySearch).not.toHaveBeenCalled();
    });
  });

  describe("reset advanced values from searchService.query", () => {
    let spySearch;

    beforeEach(() => {
      searchService.query.select = [
        {expression: "foo:[`toto`]", facet: "advanced_foo"},
        {expression: "test:[`titi`]", facet: "test"}
      ];
      spySearch = spyOn(searchService, 'search').and.callThrough();
    });

    afterEach(() => {
      spySearch.calls.reset();
    })

    it("then trigger new search", () => {
      service.resetAdvancedValues();

      expect(searchService.query.select).toEqual([{expression: "test:[`titi`]", facet: "test"}]);
      expect(spySearch).toHaveBeenCalled();
    });

    it("without triggering new search", () => {
      service.resetAdvancedValues(false);

      expect(searchService.query.select).toEqual([{expression: "test:[`titi`]", facet: "test"}]);
      expect(spySearch).not.toHaveBeenCalled();
    });
  });

  describe("get advanced values as object from searchService.query", () => {
    let spy;
    beforeEach(() => {
      spy = spyOn(appService, 'parseExpr');
    });

    afterEach(() => {
      spy.calls.reset();
    })

    it("when defined advanced filter exists in the query", () => {
      searchService.query.select = [
        {expression: "treepath:[`Product`,`web`]", facet: "advanced_treepath"}
      ];
      const exprValueInitializer: ExprValueInitializer = {
        exprContext: {appService, formatService, intlService},
        values: ["Product","web"],
        field: "treepath",
        operator: 10
      };
      const expr: Expr = new Expr(exprValueInitializer);
      spy.and.returnValue(expr);

      const value = service.getAdvancedValues();

      expect(value).toEqual({ treepath: ["Product","web"] });
    });

    it("when no advanced filter exists in the query", () => {
      searchService.query.select = [
        {expression: "foo:[`Product`,`web`]", facet: "foo"}
      ];
      const exprValueInitializer: ExprValueInitializer = {
        exprContext: {appService, formatService, intlService},
        values: ["toto"],
        field: "foo",
        operator: 10
      };
      const expr: Expr = new Expr(exprValueInitializer);
      spy.and.returnValue(expr);

      const value = service.getAdvancedValues();

      expect(value).toEqual({});
    });
  });

  describe("make a range expression", () => {

    it("when both operands are defined", () => {
      const expr = service.makeRangeExpr("toto", 1, 10);

      expect(expr).toEqual("toto:[1..10]");
    });

    it("when only higher operand is defined", () => {
      const expr = service.makeRangeExpr("toto", undefined, 150);

      expect(expr).toEqual("toto:<=150");
    });

    it("when only lower operand is defined", () => {
      const expr = service.makeRangeExpr("toto", 5, undefined);

      expect(expr).toEqual("toto:>=5");
    });

    it("when no operand is defined", () => {
      const expr = service.makeRangeExpr("toto", undefined, undefined);

      expect(expr).toBeUndefined();
    });

  });

  describe("make an expression", () => {

    it("with a list of items", () => {
      const expr = service.makeExpr("toto", [1, 10]);

      expect(expr).toEqual("toto:[1,10]");
    });

    it("with a single item", () => {
      const expr = service.makeExpr("toto", "foo");

      expect(expr).toEqual("toto:foo");
    });

    it("with undefined value", () => {
      const expr = service.makeExpr("toto", undefined);

      expect(expr).toBeUndefined();
    });

  });

  describe("format an advanced value", () => {
    let spy;
    let config;
    beforeEach(() => {
      spy = spyOn(formatService, 'formatValue');
      config = {} as BasicAdvancedValue;
    });

    afterEach(() => {
      spy.calls.reset();
    })

    it("single value with formatted column", () => {
      const column = {formatter: "toto"} as CCColumn;
      spyOn(appService, 'getColumn').and.returnValue(column)

      service.formatAdvancedValue(config, "foo");

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith("foo", column);
    });

    it("list of items (including undefined values) with formatted column", () => {
      const column = {formatter: "toto"} as CCColumn;
      const value = ["foo", "test", undefined];
      spyOn(appService, 'getColumn').and.returnValue(column)

      service.formatAdvancedValue(config, value);

      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledWith("foo", column);
      expect(spy).toHaveBeenCalledWith("test", column);
    });

    it("with unformatted column", () => {
      const column = {formatter: undefined} as CCColumn;
      spyOn(appService, 'getColumn').and.returnValue(column)

      service.formatAdvancedValue(config, 1520845152);

      expect(spy).not.toHaveBeenCalled();
    });

  });

  describe("ensure an advanced value", () => {
    let spy;
    let config;
    beforeEach(() => {
      spy = spyOn<any>(service, '_ensureAdvancedValue');
      config = {} as BasicAdvancedValue;
    });

    afterEach(() => {
      spy.calls.reset();
    })

    it("case single value", () => {

      service.ensureAdvancedValue(config, "foo");

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(config, "foo");
    });

    it("list of items (including undefined values)", () => {
      const value = ["foo", "test", undefined];

      service.ensureAdvancedValue(config, value);

      expect(spy).toHaveBeenCalledTimes(value.length);
      expect(spy).toHaveBeenCalledWith(config, "foo");
      expect(spy).toHaveBeenCalledWith(config, "test");
      expect(spy).toHaveBeenCalledWith(config, undefined);
    });

  });

  describe("cast an advanced value", () => {
    let column;
    beforeEach(() => {
      column = {formatter: "toto"} as CCColumn;
      spyOn(Utils, 'isString').and.returnValue(true)
    });

    it("string as Date", () => {
      spyOn(AppService, 'isDate').and.returnValue(true)
      const spy = spyOn(Utils, 'toDate');

      service.castAdvancedValue("12/12/1212", column);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith("12/12/1212");
    });

    it("string as integer", () => {
      spyOn(AppService, 'isInteger').and.returnValue(true)
      spyOn(Utils, 'testInteger').and.returnValue(true)
      const spy = spyOn(Utils, 'toInt');

      service.castAdvancedValue("12", column);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith("12");
    });

    it("string as number", () => {
      spyOn(AppService, 'isDouble').and.returnValue(true)
      spyOn(Utils, 'testFloat').and.returnValue(true)
      const spy = spyOn(Utils, 'toNumber');

      service.castAdvancedValue("129.487", column);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith("129.487");
    });

    it("string as boolean", () => {
      spyOn(AppService, 'isBoolean').and.returnValue(true)
      const spy = spyOn(Utils, 'isTrue');

      service.castAdvancedValue("true", column);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith("true");
    });

  });
});