"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tablehero_1 = require("./tablehero");
var TableComponent = (function () {
    function TableComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = [
            new tablehero_1.TableHero(1, 'Yoki'),
            new tablehero_1.TableHero(13, 'Spoke'),
            new tablehero_1.TableHero(15, 'Magnuta'),
            new tablehero_1.TableHero(20, 'Mornava')
        ];
        this.myHero = this.heroes[0];
    }
    return TableComponent;
}());
TableComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <h2>My favorite hero is: {{myHero.name}}</h2>\n  <p>Heroes:</p>\n  <ul>\n    <li *ngFor=\"let hero of heroes\">\n      {{ hero.name }}\n      </li>\n  </ul>\n  <p *ngIf=\"heroes.length > 3\">There are many heroes!</p>\n"
    })
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map