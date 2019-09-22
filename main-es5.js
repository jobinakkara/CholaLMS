(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.--><!--\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>-->\n\n\n<!-- main app container -->\n<!-- <div class=\"jumbotron\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-6 offset-sm-3\">\n              <router-outlet></router-outlet>\n          </div>\n      </div>\n  </div>\n</div> -->\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/commndetails/commndetails.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/commndetails/commndetails.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\t\t\t\t\n<div *ngFor=\"let details of collection\" class=\"maindiv\">\n  <div class=\"rowtbl\" *ngIf=\"details.agreement_no!=''\">\n  <input type=\"button\"  id=\"goback\" (click)=\"GoBack()\" class = \"goback\" value = \"Back\">&nbsp;&nbsp;\n    <h5><a href=\"\" [routerLink]=\"['/createcommn',{'groupid':this.GroupID}]\" style=\"color:#bd2130;\">{{this.GroupID}}</a></h5>\n    <div class=\"column\" >\n      <p><b>Group Name.:</b><span>{{details.groupname}}</span></p>\n      <p><b>Company:</b><span>{{details.company}}</span></p>\n      \n    </div>\n    <div class=\"column\" >\n        <p><b>Group ID:</b><span>{{details.groupid}}</span></p>\n        \n    </div>\n</div>\n  \n<br><br>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/commnslist/commnslist.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/commnslist/commnslist.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header> \n\n\n<br><br>\n<div class=\"maindiv\">\n\t<h4 style=\"color: #bd2130;\">Communication</h4>\n\t<input  (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" class=\"inputborder\">\n\t <br/> <br/>\n    <pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\n   \n\t<div >\n\t\t<table class=\"tablecls\" border=\"1\" >\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  SMS\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Email\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Communication Type\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Communication Name\n\t\t\t\t\t</th>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t\n\t\t\t\t<tr *ngFor=\"let item of collection | paginate: { itemsPerPage: 10, currentPage: p }\">\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><i class=\"fa fa-edit Editicon\" (click)=\"EditSelrec(item.groupid)\"></i></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><input type=\"checkbox\" name=\"selbx\" value=\"{{item.groupid}}\" (change)=\"verifyCheckBox($event,item.groupid)\" id='isAgeSelected_\"+{{item.groupid}}+\"' ></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\"><a id='enlink_\"+{{item.groupid}}+\"' (click)='fn_redirect(item.groupid);' ><b class='EnDetailLink' >{{item.templatename}}</b></a></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.smstemplatename}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.emailtemplatename}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.emailtemplatename}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n                     \n\t<pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\t\t\n\t\n\t\n</div>\n  \n<br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/commtempdetails/commtempdetails.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/commtempdetails/commtempdetails.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\t\t\t\t\n<div *ngFor=\"let details of collection\" class=\"maindiv\">\n  <div class=\"rowtbl\" *ngIf=\"details.agreement_no!=''\">\n  <input type=\"button\"  id=\"goback\" (click)=\"GoBack()\" class = \"goback\" value = \"Back\">&nbsp;&nbsp;\n    <h5><a href=\"\" [routerLink]=\"['/createcommtemp',{'groupid':this.GroupID}]\" style=\"color:#bd2130;\">{{this.GroupID}}</a></h5>\n    <div class=\"column\" >\n      <p><b>Group Name.:</b><span>{{details.groupname}}</span></p>\n      <p><b>Company:</b><span>{{details.company}}</span></p>\n      \n    </div>\n    <div class=\"column\" >\n        <p><b>Group ID:</b><span>{{details.groupid}}</span></p>\n        \n    </div>\n</div>\n  \n<br><br>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/commtempslist/commtempslist.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/commtempslist/commtempslist.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header> \n\n\n<br><br>\n<div class=\"maindiv\">\n\t<h4 style=\"color: #bd2130;\">Communication List</h4>\n\t<input  (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" class=\"inputborder\">\n\t <br/> <br/>\n    <pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\n   \n\t<div >\n\t\t<table class=\"tablecls\" border=\"1\" >\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Template Name\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  SMS Template\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Email Template\n\t\t\t\t\t</th>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t\n\t\t\t\t<tr *ngFor=\"let item of collection | paginate: { itemsPerPage: 10, currentPage: p }\">\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><i class=\"fa fa-edit Editicon\" (click)=\"EditSelrec(item.groupid)\"></i></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><input type=\"checkbox\" name=\"selbx\" value=\"{{item.groupid}}\" (change)=\"verifyCheckBox($event,item.groupid)\" id='isAgeSelected_\"+{{item.groupid}}+\"' ></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\"><a id='enlink_\"+{{item.groupid}}+\"' (click)='fn_redirect(item.groupid);' ><b class='EnDetailLink' >{{item.templatename}}</b></a></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.smstemplatename}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.emailtemplatename}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n                     \n\t<pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\t\t\n\t\n\t\n</div>\n  \n<br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/createcommn/createcommn.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/createcommn/createcommn.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>createcommn works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/createcommtemp/createcommtemp.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/createcommtemp/createcommtemp.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"containercls\">\n<form [formGroup] = \"communsdata\"  >\n\t<div class=\"rowtbl\" >\n\t\t<h5>Communication List</h5>\n\t\t \n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Template Name:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"tmplatename\" formControlName=\"tmplatename\"  *ngIf=\"this.existgroupid==null\"/>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"tmplatename\" formControlName=\"tmplatename\" value=\"{{item.tmplatename}}\" *ngIf=\"this.existgroupid!='' && this.existgroupid!=null\"/>\n\t\t  <br/><br/>\n\t\t  \n\t\t  <label class=\"fieldlabel\"><b>SMS Template:</b></label>\n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"smstmplatename\" formControlName=\"smstmplatename\"  *ngIf=\"this.existgroupid==null\"></textarea>\n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"smstmplatename\" formControlName=\"smstmplatename\" value=\"{{item.smstmplatename}}\" *ngIf=\"this.existgroupid!='' && this.existgroupid!=null\"></textarea>\n\t\t  <br/><br/>\n\t\t  \n\t\t  <label class=\"fieldlabel\"><b>Email Template:</b></label>\n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"emailtmplatename\" formControlName=\"emailtmplatename\"  *ngIf=\"this.existgroupid==null\"></textarea>\n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"emailtmplatename\" formControlName=\"emailtmplatename\" value=\"{{item.emailtmplatename}}\" *ngIf=\"this.existgroupid!='' && this.existgroupid!=null\"></textarea>\n\t\t  <br/><br/>\n\t\t  \n\t\t  <label class=\"fieldlabel\"><b>Upload Template:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"file\" class=\"fieldbox\" id=\"uploadtemplates\" formControlName=\"uploadtemplates\"  *ngIf=\"this.existgroupid==null\"/>&nbsp;&nbsp;&nbsp;&nbsp;<span><input type = \"button\"  id=\"upload\" class = \"forclear\" value = \"upload\"></span>\n\t\t  \t\t  \n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <!-- <label class=\"fieldlabel\"><b>Group ID:</b></label> \n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"group_id\" formControlName=\"groupid\" *ngIf=\"this.existgroupid==null\" style=\"background-color: ghostwhite;\" readonly/>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"group_id\" formControlName=\"groupid\" value=\"{{item.groupid}}\" *ngIf=\"this.existgroupid!='' && this.existgroupid!=null\" style=\"background-color: ghostwhite;\" readonly/>\n\t\t  <br/><br/> -->\n\t\t  <!-- <label class=\"fieldlabel\"><b>Role Description:</b></label> -->\n\t\t  <!-- <input type=\"text\" class=\"fieldbox\" id=\"description\" formControlName=\"description\" /> -->\n\t\t  \n\t\t</div>\n    \n  \t</div>\n\t\n\t<!-- <div class=\"rowtbl\">\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Upload Template:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"file\" class=\"fieldbox\" id=\"uploadtemplates\" formControlName=\"uploadtemplates\"  *ngIf=\"this.existgroupid==null\"/><span><input type = \"button\"  id=\"upload\" class = \"forclear\" value = \"upload\"></span>\n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t \n\t\t</div>\n    \n\t</div> -->\n\t<br/><br/>\n\t\n\t<!-- <div class=\"rowtbl\" *ngIf=\"this.existgroupid!='' && this.existgroupid!=null\">\n\t\t<h5>Group Creation</h5>\n\t\t \n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Group Name:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"group_name\" formControlName=\"groupname\"  value=\"{{item.groupname}}\"/>\n\t\t  <br/><br/>\n\t\t  \n\t\t  <label class=\"fieldlabel\"><b>Company:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"company\" [value]=\"item.company\">\n\t\t\t<option [value]=\"company\" *ngFor=\"let company of companyrole\">{{company}}</option>\n\t\t  </select>\n\t\t  \n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Group ID:</b></label> \n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"group_id\" formControlName=\"groupid\" value=\"{{item.groupid}}\" style=\"background-color: ghostwhite;\" readonly/>\n\t\t  <br/><br/>\n\t\t  \n\t\t</div>\n    \n  \t</div> -->\n\t<br/><br/>\n\t<div id=\"buttondiv\">\n\t\t<input type = \"button\"  id=\"save\" class = \"forsubmit\" value = \"Save\" (click) = \"onClickSubmit(communsdata.value)\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t<input type = \"button\"  id=\"exit\" class = \"forclear\" value = \"Exit\" (click) = \"onClickExit()\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\n\t</div> \n\t</form>\n\n</div>\n\t\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/creategroup/creategroup.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/creategroup/creategroup.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"containercls\">\n<form [formGroup] = \"groupsdata\"  *ngFor=\"let item of collection \">\n\t<div class=\"rowtbl\" >\n\t\t<h5>Group Creation</h5>\n\t\t \n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Group Name:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"group_name\" formControlName=\"groupname\"  *ngIf=\"this.existgroupid==null\"/>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"group_name\" formControlName=\"groupname\" value=\"{{item.groupname}}\" *ngIf=\"this.existgroupid!='' && this.existgroupid!=null\"/>\n\t\t  <br/><br/>\n\t\t  \n\t\t  <label class=\"fieldlabel\"><b>Company:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"company\" *ngIf=\"this.existgroupid==null\">\n\t\t\t<option [value]=\"company\" *ngFor=\"let company of companyrole\">{{company}}</option>\n\t\t  </select>\n\t\t  <select formControlName=\"company\" [value]=\"item.company\" *ngIf=\"this.existgroupid!='' && this.existgroupid!=null\">\n\t\t\t<option [value]=\"company\" *ngFor=\"let company of companyrole\">{{company}}</option>\n\t\t  </select>\n\t\t  \n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Group ID:</b></label> \n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"group_id\" formControlName=\"groupid\" *ngIf=\"this.existgroupid==null\" style=\"background-color: ghostwhite;\" readonly/>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"group_id\" formControlName=\"groupid\" value=\"{{item.groupid}}\" *ngIf=\"this.existgroupid!='' && this.existgroupid!=null\" style=\"background-color: ghostwhite;\" readonly/>\n\t\t  <br/><br/>\n\t\t  <!-- <label class=\"fieldlabel\"><b>Role Description:</b></label> -->\n\t\t  <!-- <input type=\"text\" class=\"fieldbox\" id=\"description\" formControlName=\"description\" /> -->\n\t\t  \n\t\t</div>\n    \n  \t</div>\n\t<!-- <div class=\"rowtbl\" *ngIf=\"this.existgroupid!='' && this.existgroupid!=null\">\n\t\t<h5>Group Creation</h5>\n\t\t \n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Group Name:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"group_name\" formControlName=\"groupname\"  value=\"{{item.groupname}}\"/>\n\t\t  <br/><br/>\n\t\t  \n\t\t  <label class=\"fieldlabel\"><b>Company:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"company\" [value]=\"item.company\">\n\t\t\t<option [value]=\"company\" *ngFor=\"let company of companyrole\">{{company}}</option>\n\t\t  </select>\n\t\t  \n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Group ID:</b></label> \n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"group_id\" formControlName=\"groupid\" value=\"{{item.groupid}}\" style=\"background-color: ghostwhite;\" readonly/>\n\t\t  <br/><br/>\n\t\t  \n\t\t</div>\n    \n  \t</div> -->\n\t<br/><br/>\n\t<div id=\"buttondiv\">\n\t\t<input type = \"button\"  id=\"save\" class = \"forsubmit\" value = \"Save\" (click) = \"onClickSubmit(groupsdata.value)\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t<input type = \"button\"  id=\"exit\" class = \"forclear\" value = \"Exit\" (click) = \"onClickExit()\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\n\t</div> \n\t</form>\n\n</div>\n\t\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/createholiday/createholiday.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/createholiday/createholiday.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>createholiday works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/createroles/createroles.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/createroles/createroles.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"containercls\">\n<form [formGroup] = \"rolesdata\"  *ngFor=\"let item of collection \">\n\t<div class=\"rowtbl\" *ngIf=\"this.existroleid==null\">\n\t\t<h4>Role Creation</h4>\n\t\t \n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Role Name:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"role_name\" formControlName=\"rolename\"  />\n\t\t  <br/><br/>\n\t\t  \n\t\t  <label class=\"fieldlabel\"><b>Company:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"company\">\n\t\t\t<option [value]=\"company\" *ngFor=\"let company of companyrole\">{{company}}</option>\n\t\t  </select>\n\t\t  \n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Role Level:<span style=\"color:red;\">*</span></b></label> \n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"role_level\" formControlName=\"rolelevel\" />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Role Description:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"description\" formControlName=\"description\" />\n\t\t  \n\t\t</div>\n    \n  \t</div>\n\t<div class=\"rowtbl\" *ngIf=\"this.existroleid!='' && this.existroleid!=null\">\n\t\t<h3>Role Creation</h3>\n\t\t \n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Role Name:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"role_name\" formControlName=\"rolename\"  value=\"{{item.rolename}}\"/>\n\t\t  <br/><br/>\n\t\t  \n\t\t  <label class=\"fieldlabel\"><b>Company:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"company\" [value]=\"item.company\">\n\t\t\t<option [value]=\"company\" *ngFor=\"let company of companyrole\">{{company}}</option>\n\t\t  </select>\n\t\t  \n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Role Level:<span style=\"color:red;\">*</span></b></label> \n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"role_level\" formControlName=\"rolelevel\" value=\"{{item.rolelevel}}\"/>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Role Description:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"description\" formControlName=\"description\" value=\"{{item.roledesc}}\"/>\n\t\t  \n\t\t</div>\n    \n  \t</div>\n\t<br/><br/>\n\t<div id=\"buttondiv\">\n\t\t<input type = \"button\"  id=\"save\" class = \"forsubmit\" value = \"Save\" (click) = \"onClickSubmit(rolesdata.value)\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t<input type = \"button\"  id=\"exit\" class = \"forclear\" value = \"Exit\" (click) = \"onClickExit()\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\n\t</div> \n\t</form>\n\n</div>\n\t\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/createsrtat/createsrtat.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/createsrtat/createsrtat.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>createsrtat works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/createstate/createstate.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/createstate/createstate.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>createstate works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/createuser/createuser.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/createuser/createuser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"containercls\">\n<form [formGroup] = \"usersdata\"  *ngFor=\"let item of collection \">\n\t<div class=\"rowtbl\" *ngIf=\"this.existusrid==null\">\n\t\t<h4>User Creation</h4>\n\t\t \n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>UserName:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"user_name\" formControlName=\"username\"  />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>LastName:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"last_name\" formControlName=\"lastname\"  />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Company:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"company\">\n\t\t\t<option [value]=\"company\" *ngFor=\"let company of companyrole\">{{company}}</option>\n\t\t  </select>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>UserRole:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"userrole\" (change)=\"getnxtevlrole($event)\">\n\t\t\t<option [value]=\"usrrole.roleid\" *ngFor=\"let usrrole of rolecollection\">{{usrrole.rolename}}</option>\n\t\t  </select>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Role:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"role\" formControlName=\"role\" />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>MobileNo.:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"mobileno\" formControlName=\"mobileno\" />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Password:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"pwd\" formControlName=\"password\" />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Group:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"groupname\" multiple>\n\t\t\t<option [value]=\"grpdata.groupid\" *ngFor=\"let grpdata of grpcollection\">{{grpdata.groupname}}</option>\n\t\t  </select>\n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>FirstName:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"first_name\" formControlName=\"firstname\"  />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>UserType:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"usertype\">\n\t\t\t<option [value]=\"usrtype\" *ngFor=\"let usrtype of usertypeval\">{{usrtype}}</option>\n\t\t  </select>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Product:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"product\">\n\t\t\t<option [value]=\"prdct\" *ngFor=\"let prdct of productval\">{{prdct}}</option>\n\t\t  </select>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>NextLevelRole:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"nextlevelrole\" (change)=\"getreportsto($event)\">\n\t\t\t<option [value]=\"nxtrole.nxtrlid\" [label]=\"nxtrole.nxtrlname\" *ngFor=\"let nxtrole of nextlevelrl\">{{nxtrole.nxtrlname}}</option>\n\t\t  </select>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Department:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"department\" formControlName=\"department\" />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>EmailID:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"emailid\" formControlName=\"emailid\" />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>NewPassword:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"newpwd\" formControlName=\"newpassword\" />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Reports To:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"reportsto\">\n\t\t\t<option [value]=\"reprtsto.repusrid\" *ngFor=\"let reprtsto of reportstousr\">{{reprtsto.repusrname}}</option>\n\t\t  </select>\n\t\t</div>\n    \n  \t</div>\n\t<div class=\"rowtbl\" *ngIf=\"this.existusrid!='' && this.existusrid!=null\">\n\t\t<h4>User Creation</h4>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>UserName:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"user_name\" formControlName=\"username\"  value=\"{{item.username}}\"/>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>LastName:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"last_name\" formControlName=\"lastname\" value=\"{{item.lastname}}\" />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Company:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"company\" [value]=\"item.company\">\n\t\t\t<option [value]=\"company\" *ngFor=\"let company of companyrole\">{{company}}</option>\n\t\t  </select>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>UserRole:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"userrole\" [value]=\"item.usrrole\" *ngIf=\"this.usrrolehs==false\" (click)=\"EnableGlobalfun()\">\n\t\t\t<option [value]=\"item.usrrole\">{{item.role}}</option>\n\t\t  </select>\n\t\t  <select formControlName=\"userrole\" (change)=\"VerifyUsrrole($event)\"  *ngIf=\"this.usrrolehs==true\">\n\t\t\t<option [value]=\"usrrole.roleid\" *ngFor=\"let usrrole of rolecollection\">{{usrrole.rolename}}</option>\n\t\t  </select>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Role:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"role\" formControlName=\"role\" value=\"{{item.role}}\"/>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>MobileNo.:<span style=\"color:red;\">*</span></b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"mobileno\" formControlName=\"mobileno\" value=\"{{item.mobileno}}\"/>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Password:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"pwd\" formControlName=\"password\" />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Group:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"groupname\" [value]=\"item.grpname\" multiple>\n\t\t\t<option [value]=\"grpdata.groupid\" *ngFor=\"let grpdata of grpcollection\">{{grpdata.groupname}}</option>\n\t\t  </select>\n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>FirstName:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"first_name\" formControlName=\"firstname\" value=\"{{item.firstname}}\" />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>UserType:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"usertype\" [value]=\"item.usrtype\">\n\t\t\t<option [value]=\"usrtype\" *ngFor=\"let usrtype of usertypeval\">{{usrtype}}</option>\n\t\t  </select>\n\t\t  \n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Product:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"product\" [value]=\"item.product\">\n\t\t\t<option [value]=\"prdct\" *ngFor=\"let prdct of productval\">{{prdct}}</option>\n\t\t  </select>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>NextLevelRole:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"nextlevelrole\" [value]=\"item.nextlevelrole\" *ngIf=\"this.nxtrolehs==false\">\n\t\t\t<option [value]=\"item.nextlevelrole\" >{{item.department}}</option>\n\t\t  </select>\n\t\t  <select formControlName=\"nextlevelrole\" (change)=\"getreportsto($event)\" *ngIf=\"this.nxtrolehs==true\">\n\t\t\t<option [value]=\"nxtrole.nxtrlid\" [label]=\"nxtrole.nxtrlname\" *ngFor=\"let nxtrole of nextlevelrl\">{{nxtrole.nxtrlname}}</option>\n\t\t  </select>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Department:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"department\" formControlName=\"department\" value=\"{{item.department}}\"/>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>EmailID:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"emailid\" formControlName=\"emailid\" value=\"{{item.emailid}}\"/>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>NewPassword:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"newpwd\" formControlName=\"newpassword\" />\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Reports To:<span style=\"color:red;\">*</span></b></label>\n\t\t  <select formControlName=\"reportsto\" [value]=\"item.reportstoid\" *ngIf=\"this.reportshs==false\">\n\t\t\t<option [value]=\"item.reportstoid\" >{{item.reportsto}}</option>\n\t\t  </select>\n\t\t  <select formControlName=\"reportsto\" *ngIf=\"this.reportshs==true\">\n\t\t\t<option [value]=\"reprtsto.repusrid\" *ngFor=\"let reprtsto of reportstousr\">{{reprtsto.repusrname}}</option>\n\t\t  </select>\n\t\t</div>\n    \n  \t</div>\n\t<br/><br/>\n\t<div id=\"buttondiv\">\n\t\t<input type = \"button\"  id=\"save\" class = \"forsubmit\" value = \"Save\" (click) = \"onClickSubmit(usersdata.value)\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t<input type = \"button\"  id=\"exit\" class = \"forclear\" value = \"Exit\" (click) = \"onClickExit()\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\n\t</div> \n\t</form>\n\n</div>\n\t\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customerdetails/customerdetails.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customerdetails/customerdetails.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header><br><br>\n\n<!-- <body> class=\"row\"-->\n  <div class=\"rowtbl\"> \n    <div class=\"radio\">\n      <!-- <input type = \"button\" [disabled] = \"!custservicedata.valid\" id=\"create\" (click)=\"GoBack()\" class = \"goback\" value = \"Back\"> -->\n      <form [formGroup] = \"customerdetials\"  id=\"custform\">\n        <input type=\"checkbox\" class=\"type_api\" name=\"api_chkbx\" value=\"GE\" formControlName = \"ge_chkbx\"> &nbsp;<span style=\"font-size:18px; font-weight:500\"> General Enquiry </span>&nbsp;&nbsp;\n        <input type=\"checkbox\" class=\"type_api\" name=\"api_chkbx\" value=\"SR\" formControlName = \"sr_chkbx\"> &nbsp;<span style=\"font-size:18px; font-weight:500\"> Service Request </span>&nbsp;&nbsp;\n        <input type=\"checkbox\" class=\"type_api\" name=\"api_chkbx\" value=\"CR\" formControlName = \"cr_chkbx\"> &nbsp;<span style=\"font-size:18px; font-weight:500\"> Complaints </span>&nbsp;&nbsp;\n\n        \n        <input type=\"button\"  id=\"create\" (click)=\"CreateRequest(customerdetials.value)\" class = \"createreuqest\" value = \"Create\">\n      </form>\n    </div><br/>\n  </div> \n\n<div *ngFor=\"let details of collection\" >\n  <div class=\"rowtbl\" *ngIf=\"details.name!=''\">\n    <h4>Customer Details</h4>\n    <div class=\"column\" >\n      <p><b>Customer Name:</b><span>{{details.name}}</span></p>\n      <p><b>Voter ID:</b><span>{{details.voter_id}}</span></p>\n      <p><b>Email ID:</b><span>{{details.email_id}}</span></p>\n      <p><b>Father Name:</b><span>{{details.father_name}}</span></p>\n      <p><b>Driving License No:</b><span>{{details.driving_license_no}}</span></p>\n      <p><b>CIN No:</b><span>{{details.cin_no}}</span></p>\n      <p><b>Co Applicant Name:</b><span>{{details.co_applicant_name}}</span></p>\n    </div>\n    <div class=\"column\" >\n        <p><b>Date of Birth:</b><span>{{details.dob}}</span></p>\n        <p><b>GST Number:</b><span>{{details.gst_no}}</span></p>\n        <p><b>PAN No:</b><span>{{details.pan_no}}</span></p>\n        <p><b>Aadhaar No:</b><span>{{details.aadhaar_no}}</span></p>\n        <p><b>Passport No:</b><span>{{details.passport_no}}</span></p>\n        <p><b>alternate mobile no:</b><span>{{details.alternate_mobile_no}}</span></p>\n        <p><b>Guarantor Name:</b><span>{{details.guarantor_name}}</span></p>\n    </div>\n  </div>\n\n  <div class=\"rowtbl\" *ngIf=\"details.mobile_number!=''\">\n    <h4>Communication Details</h4>\n    <div class=\"column\" >\n      <p><b>Address Type:</b><span>{{details.address_type}}</span></p>\n      <p><b>Property:</b><span>{{details.property}}</span></p>\n      <p><b>city:</b><span>{{details.city}}</span></p>\n      <p><b>State:</b><span>{{details.state}}</span></p>\n      <p><b>Pin Code:</b><span>{{details.pin_code}}</span></p>\n      <p><b>Phone 2:</b><span>{{details.phone_2}}</span></p>\n    </div>\n    <div class=\"column\" >\n        <p><b>Stay Duration at Current Address:</b><span>{{details.stay_duration}}</span></p>\n        <p><b>Address:</b><span>{{details.address}}</span></p>\n        <p><b>District:</b><span>{{details.district}}</span></p>\n        <p><b>Country:</b><span>{{details.country}}</span></p>\n        <p><b>Phone 1:</b><span>{{details.phone_1}}</span></p>\n        <p><b>Mobile Number:</b><span>{{details.mobile_number}}</span></p>\n    </div>\n  </div>\n  \n  <div class=\"rowtbl\" *ngIf=\"details.agreementid!=''\">\n    <h4>Disbursement Details</h4>\n    <div class=\"column\" >\n      <p><b>Agreement ID:</b><span>{{details.agreementid}}</span></p>\n      <p><b>CIF No.:</b><span>{{details.cif_no}}</span></p>\n      <p><b>Loan Account Number:</b><span>{{details.loan_accno}}</span></p>\n      <p><b>Mode of Repayment (Current):</b><span>{{details.mode_of_repayment}}</span></p>\n    </div>\n    <div class=\"column\" >\n        <p><b>Customer ID:</b><span>{{details.customer_id}}</span></p>\n        <p><b>Group ID:</b><span>{{details.group_id}}</span></p>\n        <p><b>Disbursal Date:</b><span>{{details.disbursal_date}}</span></p>\n        <p><b>Branch Name:</b><span>{{details.branch_name}}</span></p>\n    </div>\n  </div>\n\n  <div class=\"rowtbl\" *ngIf=\"details.bank!=''\">\n    <h4>Banking Details</h4>\n    <div class=\"column\" >\n      <p><b>Bank:</b><span>{{details.bank}}</span></p>\n      <p><b>UPI Address:</b><span>{{details.upi_address}}</span></p>\n      <p><b>Customer repayment bank account type:</b><span>{{details.bank_acc_type}}</span></p>\n    </div>\n    <div class=\"column\" >\n        <p><b>SPDC (Chq No):</b><span>{{details.spdc_chq_no}}</span></p>\n        <p><b>Unbanked PDC(Cheque No):</b><span>{{details.unbanked_pdc}}</span></p>\n        <p><b>Customer repayment bank account no:</b><span>{{details.bank_acc_no}}</span></p>\n    </div>\n  </div>\n\n  <!-- <div class=\"row\">\n    <h3>OD Details</h3>\n    <div class=\"column\" >\n      <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n      <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n      <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n      <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n    </div>\n    <div class=\"column\" >\n        <p><b>Date of Birth:</b><span>{{details.value}}</span></p>\n        <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n        <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n        <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <h3>Deduction Details</h3>\n    <div class=\"column\" >\n      <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n      <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n      <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n      <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n    </div>\n    <div class=\"column\" >\n        <p><b>Date of Birth:</b><span>{{details.value}}</span></p>\n        <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n        <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n        <p><b>Customer Name:</b><span>{{details.value}}</span></p>\n    </div>\n  </div> -->\n\n  <div class=\"rowtbl\" *ngIf=\"details.loan_agreementno!=''\">\n    <h4>Loans List view</h4>\n    <div class=\"column\" >\n      <p><b>Source Type:</b><span>{{details.source_type}}</span></p>\n      <p><b>Amount Financed:</b><span>{{details.amount_financed}}</span></p>\n      <p><b>Loan Tenure:</b><span>{{details.loan_tenure}}</span></p>\n      <p><b>Status:</b><span>{{details.loan_status}}</span></p>\n    </div>\n    <div class=\"column\" >\n        <p><b>Loan Agreement Number:</b><span>{{details.loan_agreementno}}</span></p>\n        <p><b>Vehicle Number:</b><span>{{details.vehicle_number}}</span></p>\n        <p><b>Total Over Due:</b><span>{{details.total_over_due}}</span></p>\n        <p><b>Api Type:</b><span>{{details.api_type}}</span></p>\n    </div>\n  </div>\n</div>\n<!-- </body> -->\n  \n<br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custrequest/custrequest.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custrequest/custrequest.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"containercls\">\n<form [formGroup] = \"custrequestdata\"  id=\"custform\" *ngFor=\"let element of collection; \" > \n  <div class=\"rowtbl\" *ngIf=\"this.existreqid=='' || this.existreqid==null\">\n    <h5>{{this.requestclass}}</h5>\n    \n    <div class=\"column\" >\n      <label class=\"fieldlabel\"><b>Agreement No.:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"agreement_no\" formControlName=\"agreementno\" value=\"{{this.AgreementNo}}\" style=\"background-color: ghostwhite;\" readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Category:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"requestcategory\" (change)=\"GetFunRequestSubCat($event)\">\n        <option [value]=\"reqcat\" *ngFor=\"let reqcat of requestcats\" >{{reqcat}}</option>\n      </select>\n\t  <!-- <div class=\"requiredErrMsg\" *ngIf=\"custrequestdata.controls.requestcategory.value==''\">Required &nbsp;<span style=\"color:red;\">*</span></div> -->\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Type:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"requesttype\" (change)=\"GetFunTatDt($event)\">\n        <option [value]=\"reqtype\" *ngFor=\"let reqtype of requesttype\" [disabled] = \"this.bolcat==false || this.subbolcat==false\">{{reqtype}}</option>\n      </select>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Date & Time:<span style=\"color:red;\">*</span></b></label> \n      <!-- <input type=\"text\" formControlName=\"requestdate\" name=\"dp\" [(ngModel)]=\"date\"  ngbDatepicker #d=\"ngbDatepicker\"> -->\n      <input type=\"text\" class=\"fieldbox\" id=\"request_dt\" formControlName=\"requestdate\"  value=\"{{element.request_creation_dt}}\" style=\"background-color: ghostwhite;\"  readonly/>\n      <!-- <ng-datepicker [(ngModel)]=\"date\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker> -->\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Raised Source:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"requestsource\">\n        <option [value]=\"reqsrc\" *ngFor=\"let reqsrc of requestsource\">{{reqsrc}}</option>\n      </select>\n\t  <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Status:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"requeststatus\" *ngIf=\"this.RequestID==''\" [value]=\"reqstatus\" >\n        <option [value]=\"reqstatus\" >{{reqstatus}}</option>\n      </select>\n\t  <select formControlName=\"requeststatus\" *ngIf=\"this.RequestID!=''\" >\n        <option [value]=\"reqst\" *ngFor=\"let reqst of reqstatus\">{{reqst}}</option>\n      </select>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request ID:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"request_id\" formControlName=\"requestid\" value=\"\" style=\"background-color: ghostwhite;\" readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Email ID:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"customer_mailid\" formControlName=\"customer_mailid\"  value=\"{{element.customer_mailid}}\" style=\"background-color: ghostwhite;\"  readonly/>\n\t  <br/><br/>\n      <label class=\"fieldlabel\"><b>Customer ID:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"customerid\" formControlName=\"customerid\"  value=\"{{element.customerid}}\" style=\"background-color: ghostwhite;\"  readonly/>\n\t  <br/><br/>\n      <label class=\"fieldlabel\"><b>Cat ID:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"catid\" formControlName=\"catid\"   style=\"background-color: ghostwhite;\"  readonly/>\n\t  \n      <!-- <input [owlDateTime]=\"dt2\" >value=\"{{this.catidval}}\"\n      <span [owlDateTimeTrigger]=\"dt2\"><i class=\"fa fa-calendar\"></i></span>\n      <owl-date-time #dt2></owl-date-time> -->\n    </div>\n    \n    <div class=\"column\" >\n      <label class=\"fieldlabel\"><b>Customer Name:</b></label>\n      <input type=\"text\" class=\"fieldbox\"  formControlName=\"customername\" value=\"{{element.customer_name}}\" style=\"background-color: ghostwhite;\" readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Sub-Category:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"requestsubcategory\"  (change)=\"GetFunRequestType($event)\">\n        <option [value]=\"reqsubcat\" *ngFor=\"let reqsubcat of requestsubcats\" [disabled] = \"this.bolcat==false\">{{reqsubcat}}</option>\n      </select>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Description:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"requestdescription\" *ngIf=\"this.RequestType=='SR'\" [value]=\"requestdesc\">\n        <option [value]=\"requestdesc\"  >{{requestdesc}}</option>\n        <!-- <option [value]=\"reqdesc\" *ngFor=\"let reqdesc of requestdesc\" >{{reqdesc}}</option> -->\n      </select>\n\t  <select formControlName=\"requestdescription\" *ngIf=\"this.RequestType=='CR'\">\n        <!-- <option [value]=\"requestdesc\"  *ngIf=\"this.RequestType=='SR'\">{{requestdesc}}</option> -->\n        <option [value]=\"reqdesc\" *ngFor=\"let reqdesc of requestdesc\" >{{reqdesc}}</option>\n      </select>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Tentative Closing Date & Time:<span style=\"color:red;\">*</span></b></label> \n      <!-- <input type=\"text\" formControlName=\"requestdate\" name=\"dp\" [(ngModel)]=\"date\"  ngbDatepicker #d=\"ngbDatepicker\"> -->\n      <input type=\"text\" class=\"fieldbox\" id=\"tentative_dt\" formControlName=\"tentativedate\"  value=\"{{this.tatdt}}\" style=\"background-color: ghostwhite;\"  readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Actual Closing Date & Time:</b></label> \n      <!-- <input type=\"text\" formControlName=\"requestdate\" name=\"dp\" [(ngModel)]=\"date\"  ngbDatepicker #d=\"ngbDatepicker\"> -->\n      <input type=\"text\" class=\"fieldbox\" id=\"actual_dt\" formControlName=\"actualdate\"  value=\"\" style=\"background-color: ghostwhite;\"  readonly/>\n\t  <br/><br/>\n      <label class=\"fieldlabel\"><b>Remarks:<span style=\"color:red;\">*</span></b></label>\n      <textarea type=\"text\" class=\"fieldbox\" id=\"remarks\" formControlName=\"remarks\"  value=\"\" ></textarea>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Classification:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"request_kind\" formControlName=\"requestkind\"  value=\"{{this.requestclass}}\" style=\"background-color: ghostwhite;\"  readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Mobile No.:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"customer_mobileno\" formControlName=\"customer_mobileno\"  value=\"{{element.customer_mobileno}}\" style=\"background-color: ghostwhite;\"  readonly/>\n\t  <br/><br/>\n      <label class=\"fieldlabel\"><b>Vehicle No:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"vehicleno\" formControlName=\"vehicleno\"  value=\"{{element.vehicleno}}\" style=\"background-color: ghostwhite;\"  readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Group Name:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"groupname\" formControlName=\"groupname\"  value=\"{{this.grpname}}\" style=\"background-color: ghostwhite;\"  readonly/>\n      \n    </div>\n    </div>\n  \n\t<div class=\"rowtbl\" *ngIf=\"this.existreqid!='' && this.existreqid!=null\">\n    <h5>{{this.requestclass}}</h5>\n    \n    <div class=\"column\" >\n      <label class=\"fieldlabel\"><b>Agreement No.:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"agreement_no\" formControlName=\"extagreementno\" value=\"{{element.agreement_no}}\" style=\"background-color: ghostwhite;\" readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Category:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"extrequestcategory\" [value]=\"element.request_category\">\n        <option [value]=\"element.request_category\" [disabled]=\"this.existreqid!='' && this.existreqid!=null\" >{{element.request_category}}</option>\n      </select>\n\t  <!-- <div class=\"requiredErrMsg\" *ngIf=\"custrequestdata.controls.requestcategory.value==''\">Required &nbsp;<span style=\"color:red;\">*</span></div> -->\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Type:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"extrequesttype\" [value]=\"element.request_type\">\n        <option [value]=\"element.request_type\" [disabled]=\"this.existreqid!='' && this.existreqid!=null\">{{element.request_type}}</option>\n      </select>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Date & Time:<span style=\"color:red;\">*</span></b></label> \n      <!-- <input type=\"text\" formControlName=\"requestdate\" name=\"dp\" [(ngModel)]=\"date\"  ngbDatepicker #d=\"ngbDatepicker\"> -->\n      <input type=\"text\" class=\"fieldbox\" id=\"request_dt\" formControlName=\"extrequestdate\"  value=\"{{element.request_creation_dt}}\" style=\"background-color: ghostwhite;\"  readonly/>\n      <!-- <ng-datepicker [(ngModel)]=\"date\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker> -->\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Raised Source:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"extrequestsource\" [value]=\"element.requestsource\">\n        <option [value]=\"reqsrc\" *ngFor=\"let reqsrc of requestsource\">{{reqsrc}}</option>\n      </select>\n\t  <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Status:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"extrequeststatus\"  [value]=\"element.requeststatus\" *ngIf=\"this.exreqst == 'open'\">\n        <option [value]=\"element.requeststatus\"  *ngIf=\"this.exreqst == 'open'\" [disabled]=\"this.enrdisval == true\">{{element.requeststatus}}</option>\n      </select>\n\t  <select formControlName=\"extrequeststatus\"  [value]=\"element.requeststatus\" *ngIf=\"this.exreqst != 'open'\">\n        <option [value]=\"reqst\" *ngFor=\"let reqst of reqstatus\"  [disabled]=\"this.enrdisval == true\">{{reqst}}</option>\n      </select>\n\t  <br/><br/>\n      <label class=\"fieldlabel\"><b>Request ID:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"request_id\" formControlName=\"extrequestid\" value=\"{{this.existreqid}}\" style=\"background-color: ghostwhite;\" readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Email ID:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"customer_mailid\" formControlName=\"extcustomer_mailid\"  value=\"{{element.customer_mailid}}\" style=\"background-color: ghostwhite;\"  readonly/>\n\t  <br/><br/>\n      <label class=\"fieldlabel\"><b>Customer ID:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"customerid\" formControlName=\"extcustomerid\"  value=\"{{element.customerid}}\" style=\"background-color: ghostwhite;\"  readonly/>\n\t  <br/><br/>\n      <label class=\"fieldlabel\"><b>Cat ID:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"catid\" formControlName=\"extcatid\" value=\"{{element.catid}}\"  style=\"background-color: ghostwhite;\"  readonly/>\n\t  \n    </div>\n    \n    <div class=\"column\" >\n      <label class=\"fieldlabel\"><b>Customer Name:</b></label>\n      <input type=\"text\" class=\"fieldbox\"  formControlName=\"extcustomername\" value=\"{{element.customer_name}}\" style=\"background-color: ghostwhite;\" readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Sub-Category:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"extrequestsubcategory\"  [value]=\"element.request_subcategory\">\n        <option [value]=\"element.request_subcategory\" [disabled]=\"this.existreqid!='' && this.existreqid!=null\">{{element.request_subcategory}}</option>\n      </select>\n      <br/><br/>\n      <label class=\"fieldlabel\" *ngIf=\"this.RequestType=='SR' || this.RequestType=='CR'\"><b>Request Description:<span style=\"color:red;\">*</span></b></label>\n      <select formControlName=\"extrequestdescription\" *ngIf=\"this.RequestType=='SR'\" [value]=\"element.request_desc\" >\n        <option [value]=\"requestdesc\" [disabled]=\"this.existreqid!='' && this.existreqid!=null\" >{{requestdesc}}</option>\n        <!-- <option [value]=\"reqdesc\" *ngFor=\"let reqdesc of requestdesc\" >{{reqdesc}}</option> -->\n      </select>\n\t  <!-- <select formControlName=\"requestdescription\" *ngIf=\"this.RequestType=='CR'\" [value]=\"element.request_desc\">\n        <option [value]=\"reqdesc\" *ngFor=\"let reqdesc of requestdesc\" [disabled]=\"this.existreqid!='' && this.existreqid!=null\">{{reqdesc}}</option>\n      </select> -->\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Tentative Closing Date & Time:<span style=\"color:red;\">*</span></b></label> \n      <!-- <input type=\"text\" formControlName=\"requestdate\" name=\"dp\" [(ngModel)]=\"date\"  ngbDatepicker #d=\"ngbDatepicker\"> -->\n      <input type=\"text\" class=\"fieldbox\" id=\"tentative_dt\" formControlName=\"exttentativedate\"  value=\"{{element.tentative_closing_dt}}\" style=\"background-color: ghostwhite;\"  readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Actual Closing Date & Time:</b></label> \n      <!-- <input type=\"text\" formControlName=\"requestdate\" name=\"dp\" [(ngModel)]=\"date\"  ngbDatepicker #d=\"ngbDatepicker\"> -->\n      <input type=\"text\" class=\"fieldbox\" id=\"actual_dt\" formControlName=\"extactualdate\"  value=\"\" style=\"background-color: ghostwhite;\"  readonly/>\n\t  <br/><br/>\n      <label class=\"fieldlabel\"><b>Remarks:<span style=\"color:red;\">*</span></b></label>\n      <textarea type=\"text\" class=\"fieldbox\" id=\"remarks\" formControlName=\"extremarks\"  value=\"{{element.remarks}}\" ></textarea>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Request Classification:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"request_kind\" formControlName=\"extrequestkind\"  value=\"{{this.requestclass}}\" style=\"background-color: ghostwhite;\"  readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Mobile No.:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"customer_mobileno\" formControlName=\"extcustomer_mobileno\"  value=\"{{element.customer_mobileno}}\" style=\"background-color: ghostwhite;\"  readonly/>\n\t  <br/><br/>\n      <label class=\"fieldlabel\"><b>Vehicle No:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"vehicleno\" formControlName=\"extvehicleno\"  value=\"{{element.vehicleno}}\" style=\"background-color: ghostwhite;\"  readonly/>\n      <br/><br/>\n      <label class=\"fieldlabel\"><b>Group Name:</b></label>\n      <input type=\"text\" class=\"fieldbox\" id=\"groupname\" formControlName=\"extgroupname\"  value=\"{{element.groupname}}\" style=\"background-color: ghostwhite;\"  readonly/>\n      \n    </div>\n    </div>\n  \n\t<div class=\"rowtbl\">\n\t\t<h5>Documents</h5>\n\t\t \n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Name of Attch:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"attch_name\" />\n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Documents:</b></label>\n\t\t  <input type=\"file\" class=\"fieldbox\" id=\"attch_doc\"  /><span><input type = \"button\"  id=\"add\" class = \"forclear\" value = \"ADD\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t<input type = \"button\" id=\"remove\" class = \"forrca\" value = \"Remove\"></span>\n\t\t</div>\n    \n\t</div>\n\t<br/><br/>\n\t<div id=\"buttondiv\">\n\t\t<!-- <button type = \"submit\"  id=\"save\" class = \"forsubmit\" value = \"Save\" >Save</button>&nbsp;&nbsp;&nbsp;&nbsp; -->\n\t\t<input type = \"button\"  id=\"save\" class = \"forsubmit\" value = \"Save\" (click)=\"onClickSubmit(custrequestdata.value)\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t<input type = \"button\"  id=\"exit\" class = \"forclear\" value = \"Exit\" (click) = \"onClickExit()\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t<input type = \"button\"  id=\"rca\" class = \"forrca\" value = \"RCA\" (click) = \"onClickRCA()\">\n\t</div> \n\t\n\t</form>\n  \n\n</div>\n\t<!-- (click) = \"onClickSubmit(custrequestdata.value)\" [disabled] = \"!custrequestdata.valid\"(click) = \"onClickSubmit(custrequestdata.value)\"-->\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custservice/custservice.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custservice/custservice.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header> \n\n<div class=\"containercls\">\n    <form [formGroup] = \"custservicedata\" (ngSubmit) = \"onClickSubmit(custservicedata.value)\" id=\"custform\"> \n\n        <!-- <div class=\"row1\"> layout-->\n            <!-- <div  > -->\n                <div class=\"radio\">\n                    <input type=\"radio\" class=\"type_api\" name=\"api_chkbx\" value=\"FinnOne\" formControlName = \"api_chkbx\"> &nbsp;<span style=\"font-size:18px; font-weight:500\"> FinnOne </span>&nbsp;&nbsp;\n                    <input type=\"radio\" class=\"type_api\" name=\"api_chkbx\" value=\"EnCore\" formControlName = \"api_chkbx\"> &nbsp;<span style=\"font-size:18px; font-weight:500\"> EnCore </span>&nbsp;&nbsp;\n                    <input type=\"radio\" class=\"type_api\" name=\"api_chkbx\" value=\"miFin\" formControlName = \"api_chkbx\"> &nbsp;<span style=\"font-size:18px; font-weight:500\"> miFin </span>&nbsp;&nbsp;\n                </div><br/>\n                 <div>\n                    <ul class=\"hrbarul\">\n                        <li class=\"hrbarli\"><a class=\"active\"  (click)=\"EnableQuicksrch()\">Quick Search</a></li>\n                        <li class=\"hrbarli\"><a class=\"active\"  (click)=\"EnableAdvancesrch()\">Advanced Search</a></li>\n                    </ul>\n                </div><br/>\n                <div class=\"QuickSearch\" *ngIf=\"this.quicksrch==true\"> \n                    <input type = \"text\" class = \"fortextbox\" name = \"customer_name\" placeholder = \"Customer Name\" formControlName = \"custname\">&nbsp;&nbsp;&nbsp;&nbsp;\n                    <input type = \"text\" class = \"fortextbox\" name = \"aadhar_no\" placeholder = \"Aadhar Number\" formControlName = \"aadherno\">&nbsp;&nbsp;\n                    <input type = \"text\" class = \"fortextbox\" name = \"mobile_no\" placeholder = \"Mobile Number\" formControlName = \"mobileno\">&nbsp;&nbsp;&nbsp;&nbsp;\n                    <input type = \"text\" class = \"fortextbox\" name = \"pan_no\" placeholder = \"Pan Number\" formControlName = \"panno\">&nbsp;&nbsp;\n                    <input type = \"text\" class = \"fortextbox\" name = \"agreement_no\" placeholder = \"Agreement Number\" formControlName = \"agreementno\">&nbsp;&nbsp;&nbsp;&nbsp;\n                    <input type = \"text\" class = \"fortextbox\" name = \"email_id\" placeholder = \"Email ID\" formControlName = \"emailid\">&nbsp;&nbsp;\n                </div>\n                <div class=\"AdvancedSearch\" *ngIf=\"this.quicksrch==false\"> \n                    <input type = \"text\" class = \"fortextbox\" name = \"customer_name\" placeholder = \"Customer Name\" formControlName = \"custname\">&nbsp;&nbsp;&nbsp;&nbsp;\n                    <input type = \"text\" class = \"fortextbox\" name = \"email_id\" placeholder = \"Email ID\" formControlName = \"emailid\">&nbsp;&nbsp;\n                    <input type = \"text\" class = \"fortextbox\" name = \"mobile_no\" placeholder = \"Mobile Number\" formControlName = \"mobileno\">&nbsp;&nbsp;&nbsp;&nbsp;\n                    <input type = \"text\" class = \"fortextbox\" name = \"pan_no\" placeholder = \"Pan Number\" formControlName = \"panno\">&nbsp;&nbsp;\n                    <input type = \"text\" class = \"fortextbox\" name = \"agreement_no\" placeholder = \"Agreement Number\" formControlName = \"agreementno\">&nbsp;&nbsp;&nbsp;&nbsp;\n                    <input type = \"text\" class = \"fortextbox\" name = \"aadhar_no\" placeholder = \"Aadhar Number\" formControlName = \"aadherno\">&nbsp;&nbsp;\n                </div>\n                <br/><br/>\n        \n                <div id=\"buttondiv\">\n                    <input type = \"submit\" [disabled] = \"!custservicedata.valid\" id=\"search\" class = \"forsubmit\" value = \"Search\" >&nbsp;&nbsp;&nbsp;&nbsp;\n                    <input type = \"button\" [disabled] = \"!custservicedata.valid\" id=\"clear\" (click)=\"OnClickClear()\" class = \"forclear\" value = \"Clear\">\n                </div> \n                 <br/><br/><br/>\n\n                \n                    \n            <!-- </div> -->\n        <!-- </div> -->\n    </form> \n<pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\n                \n                <div style=\"overflow-x:auto;\">\n                        <table class=\"tablecls\" border=\"1\">\n                                <thead >\n                                  <tr>\n                                    <th style=\"text-align: center;\">\n                                      Sl No.\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Verify\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Agreement No.\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Customer Name\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      DOB\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Email ID\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Group ID\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Mobile No.\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Pan No.\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Customer ID\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Loan Amount Finaced\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      EMI\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Disbursement Date\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      NOC Date\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Disbursement Status\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Branch Name\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Vehicle No.\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Loan Status\n                                    </th>\n                                    <th style=\"text-align: center;\">\n                                      Action\n                                    </th>\n                                    \n                                  </tr>\n                                  \n                                </thead>\n                                <tbody>\n                                        <!-- |  filterBy: userFilter | paginate: { itemsPerPage: 10, currentPage: p } \n                                        \n                                        |  filterBy: userFilter | paginate: { itemsPerPage: 10, currentPage: p }\n                                      -->\n                                  <tr *ngFor=\"let item of collection | paginate: { itemsPerPage: 10, currentPage: p }\">\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.slno}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\"><input type=\"checkbox\" name=\"selbx\" value=\"{{item.slno}}\" (change)=\"verifyCheckBox($event,item.slno)\" id='isAgeSelected_\"+{{item.id}}+\"' *ngIf=\"this.linkval==item.slno || this.linkval==''\"></label>\n                                    </td>\n                                    <td>\n                                        <label class=\"label tbltxt\" for=\"prodname\"><a id='enlink_\"+{{item.slno}}+\"' (click)='fn_redirect(item.agreementno);' *ngIf=\"this.verifycheckbx==true && this.linkval==item.slno\"><b class='EnDetailLink'>{{item.agreementno}}</b></a><span class='DisDetailLink' id='dislink_\"+{{item.slno}}+\"' *ngIf=\"this.verifycheckbx==false || this.linkval!=item.slno\">{{item.agreementno}}</span></label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.customername}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.dob}}</label>\n                                    </td>\n                                    <td>\n                                        <label class=\"label tbltxt\" for=\"prodname\">{{item.emailid}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.cifno}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.groupid}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.panno}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.mobileno}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.customerid}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.loanamtfin}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.emi}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.disbdate}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.nocdate}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.disbstatus}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.npastage}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\">{{item.branchname}}</label>\n                                    </td>\n                                    <td>\n                                      <label class=\"label tbltxt\" for=\"prodname\"></label>\n                                    </td>\n                                  </tr>\n                                  \n                                </tbody>\n                              </table>\n\t\t\t\t\t\t\t \n                </div>\n\t\t\t\t <pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\n                     \n\n        \n </div><br/><br/>\n\n \n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <p>&copy; 2019 Chola CSM Limited</p>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groupdetails/groupdetails.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groupdetails/groupdetails.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\t\t\t\t\n<div *ngFor=\"let details of collection\" class=\"maindiv\">\n  <div class=\"rowtbl\" *ngIf=\"details.agreement_no!=''\">\n  <input type=\"button\"  id=\"goback\" (click)=\"GoBack()\" class = \"goback\" value = \"Back\">&nbsp;&nbsp;\n    <h5><a href=\"\" [routerLink]=\"['/creategroup',{'groupid':this.GroupID}]\" style=\"color:#bd2130;\">{{this.GroupID}}</a></h5>\n    <div class=\"column\" >\n      <p><b>Group Name.:</b><span>{{details.groupname}}</span></p>\n      <p><b>Company:</b><span>{{details.company}}</span></p>\n      \n    </div>\n    <div class=\"column\" >\n        <p><b>Group ID:</b><span>{{details.groupid}}</span></p>\n        \n    </div>\n</div>\n  \n<br><br>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groupslist/groupslist.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groupslist/groupslist.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header> \n\n\n<br><br>\n<div class=\"maindiv\">\n\t<h4 style=\"color: #bd2130;\">Group Master</h4>\n\t<input  (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" class=\"inputborder\">\n\t <br/> <br/>\n    <pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\n   \n\t<div >\n\t\t<table class=\"tablecls\" border=\"1\" >\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Group ID\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Group Name\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Company\n\t\t\t\t\t</th>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t\n\t\t\t\t<tr *ngFor=\"let item of collection | paginate: { itemsPerPage: 10, currentPage: p }\">\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><i class=\"fa fa-edit Editicon\" (click)=\"EditSelrec(item.groupid)\"></i></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><input type=\"checkbox\" name=\"selbx\" value=\"{{item.groupid}}\" (change)=\"verifyCheckBox($event,item.groupid)\" id='isAgeSelected_\"+{{item.groupid}}+\"' ></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\"><a id='enlink_\"+{{item.groupid}}+\"' (click)='fn_redirect(item.groupid);' ><b class='EnDetailLink' >{{item.groupid}}</b></a></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.groupname}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.company}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n                     \n\t<pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\t\t\n\t\n\t\n</div>\n  \n<br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"header\">\n  <p class=\"header_title\">{{header_title}}</p>\n</div> -->\n\n<div class=\"bs-example\">\n    <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n        <a href=\"#\" class=\"navbar-brand\" style=\"color:white;\">CholaCSM</a>\n        <button type=\"button\" id=\"botbtn\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" >\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\t\t\n\t\t<div id=\"main\">\n\t\t\t<!-- <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" >\n\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t</button> -->\n\t\t  <!-- <button class=\"openbtn\" (click)=\"openNav()\">☰ </button>   -->\n\t\t  <button class=\"openbtn\" (click)=\"openNav()\" id=\"openbtn\"><span class=\"navbar-toggler-icon\"></span> </button>  \n\t\t  <!-- <h2>Collapsed Sidebar</h2> -->\n\t\t  <!-- <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p> -->\n\t\t</div>\n\t\t\n\t\t<div id=\"mySidebar\" class=\"sidebar\">\n\t\t  <b class=\"closebtn\" (click)=\"closeNav()\">×</b>\n\t\t  <!-- <a >CSM</a> -->\n\t\t  <!-- <div class=\"sidenav\"> -->\n\t\t\t<button class=\"dropdown-btn\">CSM<i class=\"fa fa-caret-down\"></i></button>\n\t\t\t<div class=\"dropdown-container\">\n\t\t\t\t<a >Customer Service</a>\n\t\t\t\t<a >Request/Agreement Search</a>\n\t\t\t\t<button class=\"dropdown-btn\">Communication List<i class=\"fa fa-caret-down\"></i></button>\n\t\t\t\t<div class=\"dropdown-container\">\n\t\t\t\t\t<a >Create Communication List</a>\n\t\t\t\t\t<a >View Communication List</a>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"dropdown-btn\">Communication<i class=\"fa fa-caret-down\"></i></button>\n\t\t\t\t<div class=\"dropdown-container\">\n\t\t\t\t\t<a >Create Communication</a>\n\t\t\t\t\t<a >View Communication</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  <a >Maters</a>\n\t\t  <!-- <a >Clients</a>\n\t\t  <a >Contact</a> -->\n\t\t  <!-- </div> -->\n\t\t</div>\n\n\t\t\n\n\t\t\n        <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"nav-item\">\n                    <a  class=\"nav-link\" >{{SelmoduleName}}</a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">CSM</a>\n\t\t\t\t\t<!-- <div class=\"dropdown-menu\"> -->\n\t\t\t\t\t<ul class=\"dropdown-menu child1\" id=\"csmul\">\n                        <li><a  class=\"dropdown-item\" (click)=\"navigateTocustservice()\">Customer Service</a></li>\n                        <li><a  class=\"dropdown-item\" (click)=\"navigateTocustrequest()\">Request/Agreement Search</a></li>\n                        <li><a  class=\"dropdown-item\" (click)=\"navigateTorca()\">RCA</a></li>\n\t\t\t\t\t\t<li class=\"parent\"><a class=\"dropdown-item\" >Communication List<span class=\"expand\">&raquo;</span></a>\n\t\t\t\t\t\t\t<ul class=\"child2\" id=\"csmfstul\">\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToCreatecomtep()\">Create Communication List</a></li>\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToViewcomteps()\">View Communication List</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"parent\"><a class=\"dropdown-item\" >Communication <span class=\"expand\">&raquo;</span></a>\n\t\t\t\t\t\t\t<ul class=\"child2\" id=\"csmsecul\">\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToCreatecomn()\">Create Communication</a></li>\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToViewcomns()\">View Communication</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n                    </ul>    \n                    <!-- </div> -->\n                </li>\n                <li class=\"nav-item dropdown \" *ngIf=\"this.usrnmCookie=='admin'\">\n                    <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">Maters</a>\n\t\t\t\t\t<!-- <div class=\"dropdown-menu parent\"> -->\n\t\t\t\t\t<ul class=\"dropdown-menu child1\" id=\"masterul\">\n\t\t\t\t\t\t<!-- <li><a  class=\"dropdown-item\" (click)=\"navigateTocustrequest()\">Request/Agreement Searchhjgjgh</a></li>\t -->\n\t\t\t\t\t\t<li class=\"parent\"><a class=\"dropdown-item\" >Holiday Master<span class=\"expand\">&raquo;</span></a>\n\t\t\t\t\t\t\t<ul class=\"child2\" id=\"fstul\">\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToCreateholiday()\">Create Holiday</a></li>\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToViewholidays()\">View Holidays</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"parent\"><a class=\"dropdown-item\" >SR TAT Master<span class=\"expand\">&raquo;</span></a>\n\t\t\t\t\t\t\t<ul class=\"child2\" id=\"secul\">\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToCreatesrtat()\">Create SR TAT</a></li>\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToViewsrtat()\">View SR TAT</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<li class=\"parent\"><a class=\"dropdown-item\" >Users Master<span class=\"expand\">&raquo;</span></a>\n\t\t\t\t\t\t\t<ul class=\"child2\" id=\"trdul\">\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToCreateuser()\">Create User</a></li>\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToViewusers()\">View Users</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"parent\"><a class=\"dropdown-item\" >Roles Master<span class=\"expand\">&raquo;</span></a>\n\t\t\t\t\t\t\t<ul class=\"child2\" id=\"frtul\">\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToCreaterole()\">Create Role</a></li>\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToViewroles()\">View Roles</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"parent\"><a class=\"dropdown-item\" >State Master<span class=\"expand\">&raquo;</span></a>\n\t\t\t\t\t\t\t<ul class=\"child2\" id=\"fivul\">\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToCreatestate()\">Create State</a></li>\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToViewstates()\">View States</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"parent\"><a class=\"dropdown-item\" >Group Master<span class=\"expand\">&raquo;</span></a>\n\t\t\t\t\t\t\t<ul class=\"child2\" id=\"sixul\">\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToCreategroup()\">Create Group</a></li>\n\t\t\t\t\t\t\t\t<li><a  (click)=\"navigateToViewgroups()\">View Groups</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t\t<!-- </div> -->\n                    <!-- <div class=\"dropdown-menu\">\n\t\t\t\t\t\t<a class=\"dropdown-item\" >Group Master</a>\n\t\t\t\t\t\t\n                        <a class=\"dropdown-item\" (click)=\"navigateTosrtat()\">SR TAT Master</a>\n                        <a class=\"dropdown-item\" (click)=\"navigateTousers()\">Users Master</a>\n\t\t\t\t\t\t\n                        <a class=\"dropdown-item\" (click)=\"navigateToroles()\">Roles Master</a>\n\t\t\t\t\t\t\n                    </div> -->\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav ml-auto\">\n                <li class=\"nav-item dropdown\">\n                    <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">{{this.fulnameCookie}}</a>\n                    <div class=\"dropdown-menu dropdown-menu-right\">\n                        <a  class=\"dropdown-item\">Settings</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a  class=\"dropdown-item\" (click)=\"navigateTologin()\">Logout</a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/holidaydetails/holidaydetails.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/holidaydetails/holidaydetails.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>holidaydetails works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/holidayslist/holidayslist.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/holidayslist/holidayslist.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>holidayslist works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi {{currentUser.firstName}}!</h1>\n<p>You're logged in with Angular 6!!</p>\n<h3>All registered users:</h3>\n<ul>\n    <li *ngFor=\"let user of users\">\n        {{user.username}} ({{user.firstName}} {{user.lastName}})\n        - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\n    </li>\n</ul>\n<p><a [routerLink]=\"['/login']\">Logout</a></p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"page\" class=\"landing-page\">\n\t<ul class=\"bg-slideshow\">\n\t\t<li><span></span></li>\n\t\t<li><span></span></li>\n\t\t<li><span></span></li>\n\t\t<li><span></span></li>\n\t</ul>\n\t<div class=\"container\">\n\t\t<div class=\"login-container\">\n\t\t\t<div class=\"table-row\">\n\t\t\t\t<div class=\"table-cell v-h-center\">\n\t\t\t\t\t<div class=\"inner-box\">\n\t\t\t\t\t\t<div class=\"logo\"><img src=\"assets/img/company_logo.png\" alt=\"logo\"></div>\t\n\t\t\t\t\t\t<form [formGroup]=\"LoginForm\" autocomplete=\"off\">\n\t\t\t\t\t\t\t<div class=\"form-field\">\n\t\t\t\t\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t\t\t\t\t<input tabindex=\"1\" type=\"text\" placeholder=\"User ID\" spellcheck=\"false\" formControlName=\"username\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" value=\"submit\" class=\"add-on-btn\"><i class=\"fa fa-user\"></i></button>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"requiredErrMsg\" *ngIf=\"LoginForm.controls.username.value=='' && this.submitted==true\">Required &nbsp;<span style=\"color:red;\">*</span></div>\n\t\t\t\t\t\t\t<div class=\"form-field\">\n\t\t\t\t\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t\t\t\t\t<input tabindex=\"2\" type=\"password\" placeholder=\"Password\" spellcheck=\"false\" formControlName=\"password\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" value=\"submit\" class=\"add-on-btn\"><i class=\"fa fa-lock\"></i></button>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"requiredErrMsg\" *ngIf=\"LoginForm.controls.password.value=='' && this.submitted==true && this.flag_forgotPwd==false\">Required &nbsp;<span style=\"color:red;\">*</span></div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- <div *ngIf=\"this.globals.development==true;else deployement\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t <div class=\"form-field\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t\t\t\t\t\t<ngx-recaptcha2\n\t\t\t\t\t\t\t\t\t\t\t[siteKey]=\"siteKey\"\n\t\t\t\t\t\t\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t\t\t\t\t\t\t[hl]=\"lang\"\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"theme\"\n\t\t\t\t\t\t\t\t\t\t\t[type]=\"type\"\n\t\t\t\t\t\t\t\t\t\t\t(expire)=\"handleExpire()\"\n\t\t\t\t\t\t\t\t\t\t\t(load)=\"handleLoad()\"\n\t\t\t\t\t\t\t\t\t\t\t(success)=\"handleSuccess($event)\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"recaptcha\">\n\t\t\t\t\t\t\t\t\t\t</ngx-recaptcha2>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ng-template #deployement>\n\t\t\t\t\t\t\t\t<div class=\"form-field\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t\t\t\t\t\t<!-- <ngx-recaptcha2\n\t\t\t\t\t\t\t\t\t\t\t[siteKey]=\"siteKey\"\n\t\t\t\t\t\t\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t\t\t\t\t\t\t[hl]=\"lang\"\n\t\t\t\t\t\t\t\t\t\t\t[theme]=\"theme\"\n\t\t\t\t\t\t\t\t\t\t\t[type]=\"type\"\n\t\t\t\t\t\t\t\t\t\t\t(expire)=\"handleExpire()\"\n\t\t\t\t\t\t\t\t\t\t\t(load)=\"handleLoad()\"\n\t\t\t\t\t\t\t\t\t\t\t(success)=\"handleSuccess($event)\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"recaptcha\">\n\t\t\t\t\t\t\t\t\t\t</ngx-recaptcha2> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"requiredErrMsg\" *ngIf=\"LoginForm.controls.recaptcha.value=='' && this.submitted==true && this.flag_forgotPwd==false\">Required &nbsp;<span style=\"color:white;\">*</span></div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"form-sbmit\">\n\t\t\t\t\t\t\t\t<button tabindex=\"3\" type=\"button\" value=\"button\" (click)=\"onSubmit(LoginForm.value)\" class=\"sub-btn\">Submit</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-links\">\n\t\t\t\t\t\t\t\t<span><a class=\"cursorPointer\" (click)=\"forgotpwd()\">Forgot Password</a></span> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"form-links\">\n\t\t\t\t\t\t\t\t<span><a class=\"cursorPointer\" (click)=\"restart()\">Restart Login</a></span> \n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t<div class=\"form-links\">\n\t\t\t\t\t\t\t\t<span>&copy; 2018 CholaCSM . All Rights Reserved.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"versionCss\">{{Product_version_no}}</div>\n\t\t\t\t\t\t\t<div class=\"versionCss\">{{version_no}}</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\n\t\t\t\t\t</div> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- <ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\n\t\t<p class=\"loadingtxt\">Loading...</p>\n\t</ngx-spinner> -->\n</body>\n\n<!-- <div class=\"modal fade\" id=\"basicModal\" tabindex=\"-1\" data-backdrop=\"static\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t\t<h4 class=\"modal-title\" id=\"myModalLabel\">Forgot Password</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body fontRegular inputfont\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-6\">\n\t\t\t\t\t\t<mat-form-field class=\"widthFull\">\n\t\t\t\t\t\t\t<input matInput spellcheck=\"false\" type=\"text\" [(ngModel)]=\"forgotEmailId\" placeholder=\"Verify Email ID\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-6 centerAlign\">\n\t\t\t\t\t\t<button type=\"button\" (click)=\"verifyEmailID()\" class=\"btn btnPink fontBold\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<div class=\"messagecss fontRegular\">{{this.forgotRes[\"author\"]}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n -->\n\n\n<!-- <h2>Login</h2>\n <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/register']\"  class=\"btn btn-link\">Register</a>\n    </div>\n</form>  -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header> \r\n\r\n<!-- <div class=\"sidebar\">\r\n    <a class=\"active\" href=\"#home\" >Home</a>\r\n    <a   (click)=\"navigateTocustservice()\">Customer Service</a>\r\n    <a   (click)=\"navigateTocustrequest()\">Customer Request</a>\r\n    <a   (click)=\"navigateTorca()\">RCA</a>\r\n</div>\r\n -->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rca/rca.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rca/rca.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"containercls\">\n\t<form [formGroup] = \"rcadata\"  *ngFor=\"let item of collection \">\n\t    \n\t<div class=\"rowtbl\" *ngIf=\"this.existrecid==null\">\n\t\t<h4 >RCA Creation</h4>\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Complaint ID:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"complaint_id\" formControlName=\"complaintid\" style=\"background-color: ghostwhite;\" readonly>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>RCA Status:</b></label>\n\t\t  <select formControlName=\"rcastatus\">\n\t\t\t<option [value]=\"rcast\" *ngFor=\"let rcast of rcastatusval\">{{rcast}}</option>\n\t\t  </select>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Why</b></label> \n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"why\" formControlName=\"why\" ></textarea>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>How:</b></label>\n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"how\" formControlName=\"how\" ></textarea>\n\t\t  \n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Reason Code:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"reason_code\" formControlName=\"reasoncode\" >\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>What</b></label> \n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"what\" formControlName=\"what\"  ></textarea>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>When</b></label> \n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"when\" formControlName=\"when\"  ></textarea>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Remarks:</b></label>\n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"remarks\" formControlName=\"remarks\" ></textarea>\n\t\t  \n\t\t</div>\n\t\t\n\t</div>\n\t\n\t<div class=\"rowtbl\" *ngIf=\"this.existrecid!='' && this.existrecid!=null\">\n\t\t<h4 >RCA Creation</h4>\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Complaint ID:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"complaint_id\" formControlName=\"complaintid\" style=\"background-color: ghostwhite;\" value=\"{{item.complaintid}}\" readonly>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>RCA Status:</b></label>\n\t\t  <select formControlName=\"rcastatus\" [value]=\"item.rcastatusval\">\n\t\t\t<option [value]=\"rcast\" *ngFor=\"let rcast of rcastatusval\">{{rcast}}</option>\n\t\t  </select>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Why</b></label> \n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"why\" formControlName=\"why\" value=\"{{item.why}}\"></textarea>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>How:</b></label>\n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"how\" formControlName=\"how\" value=\"{{item.how}}\"></textarea>\n\t\t  \n\t\t</div>\n\t\t\n\t\t<div class=\"column\" >\n\t\t  <label class=\"fieldlabel\"><b>Reason Code:</b></label>\n\t\t  <input type=\"text\" class=\"fieldbox\" id=\"reason_code\" formControlName=\"reasoncode\" value=\"{{item.reasoncode}}\">\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>What</b></label> \n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"what\" formControlName=\"what\" value=\"{{item.what}}\" ></textarea>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>When</b></label> \n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"when\" formControlName=\"when\"  value=\"{{item.when}}\"></textarea>\n\t\t  <br/><br/>\n\t\t  <label class=\"fieldlabel\"><b>Remarks:</b></label>\n\t\t  <textarea type=\"text\" class=\"fieldbox\" id=\"remarks\" formControlName=\"remarks\" value=\"{{item.remarks}}\"></textarea>\n\t\t  \n\t\t</div>\n\t\t\n\t</div>\n\t<div id=\"buttondiv\">\n\t\t<input type = \"submit\"  id=\"save\" class = \"forsubmit\" value = \"Save\" (click) = \"onClickSubmit(rcadata.value)\">&nbsp;&nbsp;&nbsp;&nbsp;\n        <input type = \"button\"  id=\"exit\" (click)=\"OnClickExit()\" class = \"forclear\" value = \"Exit\">\n\t</div>\t\n    </form>\n\t\n\t\n  \n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rcadetails/rcadetails.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rcadetails/rcadetails.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\t\t\t\t\n<div *ngFor=\"let details of collection\" class=\"maindiv\">\n  <div class=\"rowtbl\" *ngIf=\"details.agreement_no!=''\">\n    <h5><input type=\"button\"  id=\"goback\" (click)=\"GoBack()\" class = \"goback\" value = \"Back\">&nbsp;&nbsp;<a href=\"\" [routerLink]=\"['/rca',{'recid':this.ComplaintID}]\" style=\"color:#bd2130;\">{{this.ComplaintID}}</a></h5>\n    <div class=\"column\" >\n      <p><b>ComplaintID:</b><span>{{details.complaintid}}</span></p>\n      <p><b>RCA Status:</b><span>{{details.rcastatusval}}</span></p>\n      <p><b>When:</b><span>{{details.when}}</span></p>\n      <p><b>How:</b><span>{{details.how}}</span></p>\n      \n    </div>\n    <div class=\"column\" >\n        <p><b>Reason Code:</b><span>{{details.reasoncode}}</span></p>\n        <p><b>Why:</b><span>{{details.why}}</span></p>\n        <p><b>What:</b><span>{{details.what}}</span></p>\n        <p><b>How:</b><span>{{details.how}}</span></p>\n        \n    </div>\n</div>\n  \n<br><br>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rcalist/rcalist.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rcalist/rcalist.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br><br>\n<div class=\"maindiv\">\n\t<h4 style=\"color: #bd2130;\">RCA</h4>\n\t<input  (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" class=\"inputborder\">\n    \n    <br/>\n\t<pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\n\t<div >\n\t\t<table class=\"tablecls\" border=\"1\" >\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Complaint ID\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Reason Code\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  RCA Status\n\t\t\t\t\t</th>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t\n\t\t\t\t<tr *ngFor=\"let item of collection | paginate: { itemsPerPage: 10, currentPage: p }\">\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><i class=\"fa fa-edit Editicon\" (click)=\"EditSelrec(item.complaintid)\"></i></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><input type=\"checkbox\" name=\"selbx\" value=\"{{item.complaintid}}\" (change)=\"verifyCheckBox($event,item.complaintid)\" id='isAgeSelected_\"+{{item.complaintid}}+\"' ></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\"><a id='enlink_\"+{{item.complaintid}}+\"' (click)='fn_redirect(item.complaintid);' ><b class='EnDetailLink'>{{item.complaintid}}</b></a></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.reasoncode}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.rcastatusval}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n                     \n\t<pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\t\t\n\t\n\t\n</div>\n  \n<br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h2>Register</h2>\n\n<!-- <h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"emailid\">EmailID</label>\n        <input type=\"text\" formControlName=\"emailid\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.emailid.errors }\" />\n        <div *ngIf=\"submitted && f.emailid.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.emailid.errors.required\">EmailID is required</div>\n           <div *ngIf=\"f.emailid.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"mobilenum\">Mobile No.</label>\n        <input type=\"text\" formControlName=\"mobilenum\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.mobilenum.errors }\" />\n        <div *ngIf=\"submitted && f.mobilenum.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.mobilenum.errors.required\">Mobile Number is required</div>\n            <div *ngIf=\"f.mobilenum.errors.minlength\">Mobile Number must be 10 Numbers</div>\n            <div *ngIf=\"f.mobilenum.errors.maxlength\">Mobile Number must be 10 Numbers</div>\n            <div *ngIf=\"f.mobilenum.errors.pattern\">Mobile Number must be Numeric</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"dob\">Date fo Birth</label>\n        <input type=\"text\" formControlName=\"dob\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\" value={{todaydate}}/>\n        <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.dob.errors.required\">Date of Birth is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button  class=\"btn btn-primary\">Register</button> [disabled]=\"loading\"\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/requestdetails/requestdetails.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/requestdetails/requestdetails.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\t\t\t\t\n<div *ngFor=\"let details of collection\" class=\"maindiv\">\n  <div class=\"rowtbl\" *ngIf=\"details.agreement_no!=''\">\n    <h5><input type=\"button\"  id=\"goback\" (click)=\"GoBack()\" class = \"goback\" value = \"Back\">&nbsp;&nbsp;<a href=\"\" [routerLink]=\"['/custrequest',{'requestid':this.RequestID}]\" style=\"color:#bd2130;\">{{this.RequestID}}</a></h5>\n    <div class=\"column\" >\n      <p><b>Agreement No.:</b><span>{{details.agreement_no}}</span></p>\n      <p><b>Request Category:</b><span>{{details.request_category}}</span></p>\n      <p><b>Request Type:</b><span>{{details.request_type}}</span></p>\n      <p><b>Request Date & Time:</b><span>{{details.request_creation_dt}}</span></p>\n      <p><b>Request Raised Source:</b><span>{{details.requestsource}}</span></p>\n      <p><b>Request Status:</b><span>{{details.requeststatus}}</span></p>\n      <p><b>Request ID:</b><span>{{details.request_id}}</span></p>\n      <p><b>Email ID:</b><span>{{details.customer_mailid}}</span></p>\n      <p><b>Customer ID:</b><span>{{details.customerid}}</span></p>\n      <p><b>Cat ID:</b><span></span></p>\n      <!-- <p><b>Request ID:</b><span>{{details.co_applicant_name}}</span></p> -->\n    </div>\n    <div class=\"column\" >\n        <p><b>Customer Name:</b><span>{{details.customer_name}}</span></p>\n        <p><b>Request Sub-Category:</b><span>{{details.request_subcategory}}</span></p>\n        <p><b>Request Description:</b><span>{{details.request_desc}}</span></p>\n        <p><b>Tentative Closing Date & Time:</b><span>{{details.tentative_closing_dt}}</span></p>\n        <p><b>Actual Closing Date & Time:</b><span>{{details.actual_closing_dt}}</span></p>\n        <p><b>Remarks:</b><span>{{details.remarks}}</span></p>\n        <p><b>Request Classification:</b><span>{{details.request_classification}}</span></p>\n        <p><b>Mobile No.:</b><span>{{details.customer_mobileno}}</span></p>\n        <p><b>Vehicle No:</b><span>{{details.vehicleno}}</span></p>\n        <p><b>Group Name:</b><span>{{details.groupname}}</span></p>\n    </div>\n</div>\n  \n<br><br>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/requestslist/requestslist.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/requestslist/requestslist.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br><br>\n<div class=\"maindiv\">\n\t<h4 style=\"color: #bd2130;\">Request/Ageement Search</h4>\n\t<input  (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" class=\"inputborder\">\n    <pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\n    <br/>\n\t<div style=\"overflow-x:auto;\">\n\t\t<table class=\"tablecls\" border=\"1\" >\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Request ID\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Customer Name\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Customer ID\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Ageement No.\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Request Category\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Request Sub-Category\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Request Type\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Request Cration date\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Tentative Closing Date\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Request Status\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Request Classification\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Assigned To\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Group Name\n\t\t\t\t\t</th>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t\n\t\t\t\t<tr *ngFor=\"let item of collection | paginate: { itemsPerPage: 10, currentPage: p }\">\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><i class=\"fa fa-edit Editicon\" id=\"Editicon\" (click)=\"EditSelrec(item.request_id)\"></i></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><input type=\"checkbox\" name=\"selbx\" value=\"{{item.recid}}\" (change)=\"verifyCheckBox($event,item.recid)\" id='isAgeSelected_\"+{{item.recid}}+\"' ></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\"><a id='enlink_\"+{{item.recid}}+\"' (click)='fn_redirect(item.request_id);' ><b class='EnDetailLink'>{{item.request_id}}</b></a></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.customer_name}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.customerid}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.agreement_no}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.request_category}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.request_subcategory}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.request_type}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.request_creation_dt}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.tentative_closing_dt}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.requeststatus}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.request_classification}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.assignedusr}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.groupname}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n                     \n\t<pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\t\t\n\t\n\t<h4 style=\"color: #bd2130;\">Assignment:</h4>\n\t<form [formGroup] = \"requestlistdata\"  > \n\t\t<div class=\"radio\">\n\t\t\t<input type=\"radio\" class=\"type_api\" name=\"api_chkbx\" value=\"Group\" formControlName = \"api_chkbx\" (click)=\"verifyradiobtn($event)\"> &nbsp;<span style=\"font-size:18px; font-weight:500\" > Group </span>&nbsp;&nbsp;\n\t\t\t<input type=\"radio\" class=\"type_api\" name=\"api_chkbx\" value=\"Individual\" formControlName = \"api_chkbx\" (click)=\"verifyradiobtn($event)\"> &nbsp;<span style=\"font-size:18px; font-weight:500\" > Individual </span>&nbsp;&nbsp;\n\t\t\t<input type=\"radio\" class=\"type_api\" name=\"api_chkbx\" value=\"Self\" formControlName = \"api_chkbx\" (click)=\"verifyradiobtn($event)\"> &nbsp;<span style=\"font-size:18px; font-weight:500\" > Self </span>&nbsp;&nbsp;\n\t\t</div><br/>\n\t\t\n\t\t<div class=\"QuickSearch\" *ngIf=\"this.AssignFields==true\"> \n\t\t\t<label class=\"fieldlabel\" *ngIf=\"this.Selchkbx=='Group' || this.Selchkbx=='Individual'\"><b>GroupName:</b></label>\n\t\t\t<select formControlName=\"groupname\" *ngIf=\"this.Selchkbx=='Group' || this.Selchkbx=='Individual'\" (change)=\"GetIndvidualuser($event)\">\n\t\t\t\t<option [value]=\"grpval.groupid\" *ngFor=\"let grpval of grpcollection\" >{{grpval.groupname}}</option>\n\t\t\t</select>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t<label class=\"fieldlabel\" *ngIf=\"this.Selchkbx=='Individual'\"><b>UserName:</b></label>\n\t\t\t<select formControlName=\"username\" *ngIf=\"this.Selchkbx=='Individual'\">\n\t\t\t\t<option [value]=\"usrval.usrid\" *ngFor=\"let usrval of indvidualusrs\" >{{usrval.usrname}}</option>\n\t\t\t</select>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t<label class=\"fieldlabel\" *ngIf=\"this.Selchkbx=='Self'\"><b>SelfUser:</b></label>\n\t\t\t<input type = \"text\" class = \"fortextbox\" formControlName = \"selfuser\" value=\"{{this.selfusr}}\" *ngIf=\"this.Selchkbx=='Self'\" readonly/>&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t<label class=\"fieldlabel\"><b>Remarks:</b></label>\n\t\t\t<textarea type=\"text\" class=\"fieldbox\" formControlName=\"remarks\" style=\"margin: 0px; width: 200px; height: 50px;\"></textarea>\n\t\t</div><br/>\n\t\t\n\t\t<div id=\"buttondiv\">\n\t\t\t<input type = \"submit\"  id=\"Assign\" class = \"forsubmit\" value = \"Assign\" (click) = \"onClickSubmit(requestlistdata.value)\">&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t</div> \n\t\t<br/><br/>\t\t\t\t\n\t\n\t</form>\n</div>\n  \n<br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roleslist/roleslist.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roleslist/roleslist.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br><br>\n<div class=\"maindiv\">\n\t<h4 style=\"color: #bd2130;\">Roles</h4>\n\t<input  (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" class=\"inputborder\">\n    \n    <br/>\n\t<pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\n\t<div >\n\t\t<table class=\"tablecls\" border=\"1\" >\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Role Name\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Role Description\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Role Level\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Company\n\t\t\t\t\t</th>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t\n\t\t\t\t<tr *ngFor=\"let item of collection | paginate: { itemsPerPage: 10, currentPage: p }\">\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><i class=\"fa fa-edit Editicon\" (click)=\"EditSelrec(item.recid)\"></i></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><input type=\"checkbox\" name=\"selbx\" value=\"{{item.recid}}\" (change)=\"verifyCheckBox($event,item.recid)\" id='isAgeSelected_\"+{{item.recid}}+\"' ></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\"><a id='enlink_\"+{{item.recid}}+\"' (click)='fn_redirect(item.recid);' ><b class='EnDetailLink' >{{item.rolename}}</b></a></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.roledesc}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.rolelevel}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.company}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n                     \n\t<pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\t\t\n\t\n\t\n</div>\n  \n<br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/srtatdetails/srtatdetails.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/srtatdetails/srtatdetails.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>srtatdetails works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/srtatslist/srtatslist.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/srtatslist/srtatslist.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>srtatslist works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/statedetails/statedetails.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/statedetails/statedetails.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>statedetails works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stateslist/stateslist.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stateslist/stateslist.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>stateslist works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userdetails/userdetails.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userdetails/userdetails.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\t\t\t\t\n<div *ngFor=\"let details of collection\" class=\"maindiv\">\n  <div class=\"rowtbl\" *ngIf=\"details.username!=''\">\n    <h5><input type=\"button\"  id=\"goback\" (click)=\"GoBack()\" class = \"goback\" value = \"Back\">&nbsp;&nbsp;<a href=\"\" [routerLink]=\"['/createuser',{'userid':this.UserID}]\" style=\"color:#bd2130;\">{{details.username}}</a></h5>\n    <div class=\"column\" >\n      <p><b>User Name.:</b><span>{{details.username}}</span></p>\n      <p><b>Last Name:</b><span>{{details.lastname}}</span></p>\n      <p><b>Company:</b><span>{{details.company}}</span></p>\n      <p><b>User Type:</b><span>{{details.usertype}}</span></p>\n      <p><b>User Role:</b><span>{{details.role}}</span></p>\n      <p><b>Reports To:</b><span>{{details.reportsto}}</span></p>\n      \n    </div>\n    <div class=\"column\" >\n        <p><b>First Name:</b><span>{{details.firstname}}</span></p>\n        <p><b>Product:</b><span>{{details.product}}</span></p>\n        <p><b>Mobile No.:</b><span>{{details.mobileno}}</span></p>\n        <p><b>Email ID:</b><span>{{details.emailid}}</span></p>\n        <p><b>User NextLevel Role:</b><span>{{details.department}}</span></p>\n        <p><b>User Group:</b><span>{{details.grpname}}</span></p>\n        \n    </div>\n</div>\n  \n<br><br>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userslist/userslist.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userslist/userslist.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br><br>\n<div class=\"maindiv\">\n\t<h4 style=\"color: #bd2130;\">Users</h4>\n\t<input  (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" class=\"inputborder\">\n    \n    <br/>\n\t<pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\n\t<div >\n\t\t<table class=\"tablecls\" border=\"1\" >\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  \n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  User Name\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Name\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Company\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  product\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  User Role\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Mobile No.\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Email ID\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Reports To\n\t\t\t\t\t</th>\n\t\t\t\t\t<th style=\"text-align: center;\">\n\t\t\t\t\t  Reports To Role\n\t\t\t\t\t</th>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t\n\t\t\t\t<tr *ngFor=\"let item of collection | paginate: { itemsPerPage: 10, currentPage: p }\">\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><i class=\"fa fa-edit Editicon\" (click)=\"EditSelrec(item.recid)\"></i></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\"><input type=\"checkbox\" name=\"selbx\" value=\"{{item.recid}}\" (change)=\"verifyCheckBox($event,item.recid)\" id='isAgeSelected_\"+{{item.recid}}+\"' ></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\"><a id='enlink_\"+{{item.recid}}+\"' (click)='fn_redirect(item.recid);' ><b class='EnDetailLink' >{{item.username}}</b></a></label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <label class=\"label tbltxt\" for=\"prodname\">{{item.firstname}}{{item.lastname}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.company}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.product}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.role}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.mobileno}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.emailid}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.reportsto}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<label class=\"label tbltxt\" for=\"prodname\">{{item.department}}</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n                     \n\t<pagination-controls (pageChange)=\"p = $event\" class=\"custom-pagination\"></pagination-controls>\t\t\n\t\n\t\n</div>\n  \n<br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _custservice_custservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custservice/custservice.component */ "./src/app/custservice/custservice.component.ts");
/* harmony import */ var _custrequest_custrequest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custrequest/custrequest.component */ "./src/app/custrequest/custrequest.component.ts");
/* harmony import */ var _rca_rca_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rca/rca.component */ "./src/app/rca/rca.component.ts");
/* harmony import */ var _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customerdetails/customerdetails.component */ "./src/app/customerdetails/customerdetails.component.ts");
/* harmony import */ var _requestdetails_requestdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./requestdetails/requestdetails.component */ "./src/app/requestdetails/requestdetails.component.ts");
/* harmony import */ var _requestslist_requestslist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./requestslist/requestslist.component */ "./src/app/requestslist/requestslist.component.ts");
/* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/createuser/createuser.component.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/userdetails/userdetails.component.ts");
/* harmony import */ var _userslist_userslist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./userslist/userslist.component */ "./src/app/userslist/userslist.component.ts");
/* harmony import */ var _createroles_createroles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./createroles/createroles.component */ "./src/app/createroles/createroles.component.ts");
/* harmony import */ var _roleslist_roleslist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./roleslist/roleslist.component */ "./src/app/roleslist/roleslist.component.ts");
/* harmony import */ var _creategroup_creategroup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./creategroup/creategroup.component */ "./src/app/creategroup/creategroup.component.ts");
/* harmony import */ var _groupdetails_groupdetails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./groupdetails/groupdetails.component */ "./src/app/groupdetails/groupdetails.component.ts");
/* harmony import */ var _groupslist_groupslist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./groupslist/groupslist.component */ "./src/app/groupslist/groupslist.component.ts");
/* harmony import */ var _rcadetails_rcadetails_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rcadetails/rcadetails.component */ "./src/app/rcadetails/rcadetails.component.ts");
/* harmony import */ var _rcalist_rcalist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rcalist/rcalist.component */ "./src/app/rcalist/rcalist.component.ts");
/* harmony import */ var _createholiday_createholiday_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./createholiday/createholiday.component */ "./src/app/createholiday/createholiday.component.ts");
/* harmony import */ var _holidaydetails_holidaydetails_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./holidaydetails/holidaydetails.component */ "./src/app/holidaydetails/holidaydetails.component.ts");
/* harmony import */ var _holidayslist_holidayslist_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./holidayslist/holidayslist.component */ "./src/app/holidayslist/holidayslist.component.ts");
/* harmony import */ var _createsrtat_createsrtat_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./createsrtat/createsrtat.component */ "./src/app/createsrtat/createsrtat.component.ts");
/* harmony import */ var _srtatdetails_srtatdetails_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./srtatdetails/srtatdetails.component */ "./src/app/srtatdetails/srtatdetails.component.ts");
/* harmony import */ var _srtatslist_srtatslist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./srtatslist/srtatslist.component */ "./src/app/srtatslist/srtatslist.component.ts");
/* harmony import */ var _createstate_createstate_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./createstate/createstate.component */ "./src/app/createstate/createstate.component.ts");
/* harmony import */ var _statedetails_statedetails_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./statedetails/statedetails.component */ "./src/app/statedetails/statedetails.component.ts");
/* harmony import */ var _stateslist_stateslist_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./stateslist/stateslist.component */ "./src/app/stateslist/stateslist.component.ts");
/* harmony import */ var _createcommtemp_createcommtemp_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./createcommtemp/createcommtemp.component */ "./src/app/createcommtemp/createcommtemp.component.ts");
/* harmony import */ var _commtempdetails_commtempdetails_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./commtempdetails/commtempdetails.component */ "./src/app/commtempdetails/commtempdetails.component.ts");
/* harmony import */ var _commtempslist_commtempslist_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./commtempslist/commtempslist.component */ "./src/app/commtempslist/commtempslist.component.ts");
/* harmony import */ var _createcommn_createcommn_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./createcommn/createcommn.component */ "./src/app/createcommn/createcommn.component.ts");
/* harmony import */ var _commndetails_commndetails_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./commndetails/commndetails.component */ "./src/app/commndetails/commndetails.component.ts");
/* harmony import */ var _commnslist_commnslist_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./commnslist/commnslist.component */ "./src/app/commnslist/commnslist.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");






































var routes = [
    //{ path: "",component: HomeComponent },
    //{ path: "login",component: CustrequestComponent },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: "menu", component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"] },
    { path: "custservice", component: _custservice_custservice_component__WEBPACK_IMPORTED_MODULE_6__["CustserviceComponent"] },
    { path: "custrequest", component: _custrequest_custrequest_component__WEBPACK_IMPORTED_MODULE_7__["CustrequestComponent"] },
    { path: "rca", component: _rca_rca_component__WEBPACK_IMPORTED_MODULE_8__["RcaComponent"] },
    { path: "customerdetails", component: _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_9__["CustomerdetailsComponent"] },
    { path: "requestdetails", component: _requestdetails_requestdetails_component__WEBPACK_IMPORTED_MODULE_10__["RequestdetailsComponent"] },
    { path: "requestslist", component: _requestslist_requestslist_component__WEBPACK_IMPORTED_MODULE_11__["RequestslistComponent"] },
    { path: "createuser", component: _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_12__["CreateuserComponent"] },
    { path: "userdetails", component: _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_13__["UserdetailsComponent"] },
    { path: "userslist", component: _userslist_userslist_component__WEBPACK_IMPORTED_MODULE_14__["UserslistComponent"] },
    { path: "createroles", component: _createroles_createroles_component__WEBPACK_IMPORTED_MODULE_15__["CreaterolesComponent"] },
    { path: "roleslist", component: _roleslist_roleslist_component__WEBPACK_IMPORTED_MODULE_16__["RoleslistComponent"] },
    { path: "creategroup", component: _creategroup_creategroup_component__WEBPACK_IMPORTED_MODULE_17__["CreategroupComponent"] },
    { path: "groupdetails", component: _groupdetails_groupdetails_component__WEBPACK_IMPORTED_MODULE_18__["GroupdetailsComponent"] },
    { path: "groupslist", component: _groupslist_groupslist_component__WEBPACK_IMPORTED_MODULE_19__["GroupslistComponent"] },
    { path: "rcadetails", component: _rcadetails_rcadetails_component__WEBPACK_IMPORTED_MODULE_20__["RcadetailsComponent"] },
    { path: "rcalist", component: _rcalist_rcalist_component__WEBPACK_IMPORTED_MODULE_21__["RcalistComponent"] },
    { path: "createholiday", component: _createholiday_createholiday_component__WEBPACK_IMPORTED_MODULE_22__["CreateholidayComponent"] },
    { path: "holidaydetails", component: _holidaydetails_holidaydetails_component__WEBPACK_IMPORTED_MODULE_23__["HolidaydetailsComponent"] },
    { path: "holidayslist", component: _holidayslist_holidayslist_component__WEBPACK_IMPORTED_MODULE_24__["HolidayslistComponent"] },
    { path: "createsrtat", component: _createsrtat_createsrtat_component__WEBPACK_IMPORTED_MODULE_25__["CreatesrtatComponent"] },
    { path: "srtatdetails", component: _srtatdetails_srtatdetails_component__WEBPACK_IMPORTED_MODULE_26__["SrtatdetailsComponent"] },
    { path: "srtatslist", component: _srtatslist_srtatslist_component__WEBPACK_IMPORTED_MODULE_27__["SrtatslistComponent"] },
    { path: "createstate", component: _createstate_createstate_component__WEBPACK_IMPORTED_MODULE_28__["CreatestateComponent"] },
    { path: "statedetails", component: _statedetails_statedetails_component__WEBPACK_IMPORTED_MODULE_29__["StatedetailsComponent"] },
    { path: "stateslist", component: _stateslist_stateslist_component__WEBPACK_IMPORTED_MODULE_30__["StateslistComponent"] },
    { path: "createcommtemp", component: _createcommtemp_createcommtemp_component__WEBPACK_IMPORTED_MODULE_31__["CreatecommtempComponent"] },
    { path: "commtempdetails", component: _commtempdetails_commtempdetails_component__WEBPACK_IMPORTED_MODULE_32__["CommtempdetailsComponent"] },
    { path: "commtempslist", component: _commtempslist_commtempslist_component__WEBPACK_IMPORTED_MODULE_33__["CommtempslistComponent"] },
    { path: "createcommn", component: _createcommn_createcommn_component__WEBPACK_IMPORTED_MODULE_34__["CreatecommnComponent"] },
    { path: "commndetails", component: _commndetails_commndetails_component__WEBPACK_IMPORTED_MODULE_35__["CommndetailsComponent"] },
    { path: "commnslist", component: _commnslist_commnslist_component__WEBPACK_IMPORTED_MODULE_36__["CommnslistComponent"] },
    { path: "header", component: _header_header_component__WEBPACK_IMPORTED_MODULE_37__["HeaderComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(route, router, myservice) {
        this.route = route;
        this.router = router;
        this.myservice = myservice;
        this.title = 'myapp';
        this.myservice.setTitle(this.title);
        //this.router.navigate(['/home']); 
        //this.router.navigate(['/login']); 
        //this.router.navigate(['/register']); 
        //this.router.navigate(['/home']); 
        //this.router.navigate(['/newprospect']); 
        //this.router.navigate(['/deliveryupdate']); 
        //this.router.navigate(['/updateprospect']); 
        //this.router.navigate(['/calenderdemo']); 
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _custservice_custservice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./custservice/custservice.component */ "./src/app/custservice/custservice.component.ts");
/* harmony import */ var _custrequest_custrequest_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./custrequest/custrequest.component */ "./src/app/custrequest/custrequest.component.ts");
/* harmony import */ var _rca_rca_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rca/rca.component */ "./src/app/rca/rca.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customerdetails/customerdetails.component */ "./src/app/customerdetails/customerdetails.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _requestdetails_requestdetails_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./requestdetails/requestdetails.component */ "./src/app/requestdetails/requestdetails.component.ts");
/* harmony import */ var _requestslist_requestslist_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./requestslist/requestslist.component */ "./src/app/requestslist/requestslist.component.ts");
/* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/createuser/createuser.component.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/userdetails/userdetails.component.ts");
/* harmony import */ var _userslist_userslist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./userslist/userslist.component */ "./src/app/userslist/userslist.component.ts");
/* harmony import */ var _createroles_createroles_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./createroles/createroles.component */ "./src/app/createroles/createroles.component.ts");
/* harmony import */ var _roleslist_roleslist_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./roleslist/roleslist.component */ "./src/app/roleslist/roleslist.component.ts");
/* harmony import */ var _creategroup_creategroup_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./creategroup/creategroup.component */ "./src/app/creategroup/creategroup.component.ts");
/* harmony import */ var _groupdetails_groupdetails_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./groupdetails/groupdetails.component */ "./src/app/groupdetails/groupdetails.component.ts");
/* harmony import */ var _groupslist_groupslist_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./groupslist/groupslist.component */ "./src/app/groupslist/groupslist.component.ts");
/* harmony import */ var _rcadetails_rcadetails_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./rcadetails/rcadetails.component */ "./src/app/rcadetails/rcadetails.component.ts");
/* harmony import */ var _rcalist_rcalist_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./rcalist/rcalist.component */ "./src/app/rcalist/rcalist.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _createholiday_createholiday_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./createholiday/createholiday.component */ "./src/app/createholiday/createholiday.component.ts");
/* harmony import */ var _holidaydetails_holidaydetails_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./holidaydetails/holidaydetails.component */ "./src/app/holidaydetails/holidaydetails.component.ts");
/* harmony import */ var _holidayslist_holidayslist_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./holidayslist/holidayslist.component */ "./src/app/holidayslist/holidayslist.component.ts");
/* harmony import */ var _createsrtat_createsrtat_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./createsrtat/createsrtat.component */ "./src/app/createsrtat/createsrtat.component.ts");
/* harmony import */ var _srtatdetails_srtatdetails_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./srtatdetails/srtatdetails.component */ "./src/app/srtatdetails/srtatdetails.component.ts");
/* harmony import */ var _srtatslist_srtatslist_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./srtatslist/srtatslist.component */ "./src/app/srtatslist/srtatslist.component.ts");
/* harmony import */ var _createstate_createstate_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./createstate/createstate.component */ "./src/app/createstate/createstate.component.ts");
/* harmony import */ var _statedetails_statedetails_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./statedetails/statedetails.component */ "./src/app/statedetails/statedetails.component.ts");
/* harmony import */ var _stateslist_stateslist_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./stateslist/stateslist.component */ "./src/app/stateslist/stateslist.component.ts");
/* harmony import */ var _createcommtemp_createcommtemp_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./createcommtemp/createcommtemp.component */ "./src/app/createcommtemp/createcommtemp.component.ts");
/* harmony import */ var _commtempdetails_commtempdetails_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./commtempdetails/commtempdetails.component */ "./src/app/commtempdetails/commtempdetails.component.ts");
/* harmony import */ var _commtempslist_commtempslist_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./commtempslist/commtempslist.component */ "./src/app/commtempslist/commtempslist.component.ts");
/* harmony import */ var _createcommn_createcommn_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./createcommn/createcommn.component */ "./src/app/createcommn/createcommn.component.ts");
/* harmony import */ var _commndetails_commndetails_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./commndetails/commndetails.component */ "./src/app/commndetails/commndetails.component.ts");
/* harmony import */ var _commnslist_commnslist_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./commnslist/commnslist.component */ "./src/app/commnslist/commnslist.component.ts");




















//import { DataTablesModule } from 'angular-datatables';















//import { Cookie } from 'ng2-cookies/ng2-cookies';
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _custservice_custservice_component__WEBPACK_IMPORTED_MODULE_15__["CustserviceComponent"],
                _custrequest_custrequest_component__WEBPACK_IMPORTED_MODULE_16__["CustrequestComponent"],
                _rca_rca_component__WEBPACK_IMPORTED_MODULE_17__["RcaComponent"],
                _customerdetails_customerdetails_component__WEBPACK_IMPORTED_MODULE_19__["CustomerdetailsComponent"],
                _requestdetails_requestdetails_component__WEBPACK_IMPORTED_MODULE_23__["RequestdetailsComponent"],
                _requestslist_requestslist_component__WEBPACK_IMPORTED_MODULE_24__["RequestslistComponent"],
                _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_25__["CreateuserComponent"],
                _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_26__["UserdetailsComponent"],
                _userslist_userslist_component__WEBPACK_IMPORTED_MODULE_27__["UserslistComponent"],
                _createroles_createroles_component__WEBPACK_IMPORTED_MODULE_28__["CreaterolesComponent"],
                _roleslist_roleslist_component__WEBPACK_IMPORTED_MODULE_29__["RoleslistComponent"],
                _creategroup_creategroup_component__WEBPACK_IMPORTED_MODULE_30__["CreategroupComponent"],
                _groupdetails_groupdetails_component__WEBPACK_IMPORTED_MODULE_31__["GroupdetailsComponent"],
                _groupslist_groupslist_component__WEBPACK_IMPORTED_MODULE_32__["GroupslistComponent"],
                _rcadetails_rcadetails_component__WEBPACK_IMPORTED_MODULE_33__["RcadetailsComponent"],
                _rcalist_rcalist_component__WEBPACK_IMPORTED_MODULE_34__["RcalistComponent"],
                _createholiday_createholiday_component__WEBPACK_IMPORTED_MODULE_36__["CreateholidayComponent"],
                _holidaydetails_holidaydetails_component__WEBPACK_IMPORTED_MODULE_37__["HolidaydetailsComponent"],
                _holidayslist_holidayslist_component__WEBPACK_IMPORTED_MODULE_38__["HolidayslistComponent"],
                _createsrtat_createsrtat_component__WEBPACK_IMPORTED_MODULE_39__["CreatesrtatComponent"],
                _srtatdetails_srtatdetails_component__WEBPACK_IMPORTED_MODULE_40__["SrtatdetailsComponent"],
                _srtatslist_srtatslist_component__WEBPACK_IMPORTED_MODULE_41__["SrtatslistComponent"],
                _createstate_createstate_component__WEBPACK_IMPORTED_MODULE_42__["CreatestateComponent"],
                _statedetails_statedetails_component__WEBPACK_IMPORTED_MODULE_43__["StatedetailsComponent"],
                _stateslist_stateslist_component__WEBPACK_IMPORTED_MODULE_44__["StateslistComponent"],
                _createcommtemp_createcommtemp_component__WEBPACK_IMPORTED_MODULE_45__["CreatecommtempComponent"],
                _commtempdetails_commtempdetails_component__WEBPACK_IMPORTED_MODULE_46__["CommtempdetailsComponent"],
                _commtempslist_commtempslist_component__WEBPACK_IMPORTED_MODULE_47__["CommtempslistComponent"],
                _createcommn_createcommn_component__WEBPACK_IMPORTED_MODULE_48__["CreatecommnComponent"],
                _commndetails_commndetails_component__WEBPACK_IMPORTED_MODULE_49__["CommndetailsComponent"],
                _commnslist_commnslist_component__WEBPACK_IMPORTED_MODULE_50__["CommnslistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__["OwlNativeDateTimeModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_21__["NgDatepickerModule"],
                //NgbDate,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"]
                //DataTablesModule
            ],
            providers: [
                _myservice_service__WEBPACK_IMPORTED_MODULE_11__["MyserviceService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_35__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commndetails/commndetails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/commndetails/commndetails.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n\t\r\n  }\r\n  .maindiv {\r\n\tmargin-top:100px;  \r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .goback {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    position: relative;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW5kZXRhaWxzL2NvbW1uZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCOztFQUV4QjtFQUNBO0NBQ0QsZ0JBQWdCO0VBQ2Y7RUFDQSw0REFBNEQ7RUFDNUQ7SUFDRSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCO0VBRUEsbUNBQW1DO0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvY29tbW5kZXRhaWxzL2NvbW1uZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFxyXG4gIH1cclxuICAubWFpbmRpdiB7XHJcblx0bWFyZ2luLXRvcDoxMDBweDsgIFxyXG4gIH1cclxuICAvKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLyogaGVpZ2h0OiAzMDBweDsgICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gIC5yb3d0Ymw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5nb2JhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2JkMjEzMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIGJvcmRlcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/commndetails/commndetails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/commndetails/commndetails.component.ts ***!
  \********************************************************/
/*! exports provided: CommndetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommndetailsComponent", function() { return CommndetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CommndetailsComponent = /** @class */ (function () {
    function CommndetailsComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.collection = [];
        this.GroupID = '';
    }
    CommndetailsComponent.prototype.ngOnInit = function () {
        this.myservice.setTitle('Communication');
        this.GroupID = this.route.snapshot.paramMap.get('groupid');
        console.log("GroupID=" + this.GroupID);
    };
    CommndetailsComponent.prototype.GoBack = function () {
        this.router.navigate(['/commnslist']);
    };
    CommndetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CommndetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commndetails',
            template: __webpack_require__(/*! raw-loader!./commndetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/commndetails/commndetails.component.html"),
            styles: [__webpack_require__(/*! ./commndetails.component.css */ "./src/app/commndetails/commndetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CommndetailsComponent);
    return CommndetailsComponent;
}());



/***/ }),

/***/ "./src/app/commnslist/commnslist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/commnslist/commnslist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.maindiv {\r\n\t/* margin-top:50px; */\r\n}\r\n\r\n tablecls {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n th {\r\n\tcolor: #bd2130;\r\n}\r\n\r\n th, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\n tr:nth-child(even) {background-color: #f2f2f2;}\r\n\r\n .tbltxt{\r\n  /* width:100px !important; */\r\n  text-align: center;\r\n \r\n }\r\n\r\n .EnDetailLink,.Editicon {\r\n  color: #bd2130;\r\n }\r\n\r\n .inputborder {\r\n    border-top: 1px;\r\n    border-left: 1px;\r\n    padding: 5px;\r\n    border-bottom: groove;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW5zbGlzdC9jb21tbnNsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOztDQUVDO0VBQ0MseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7Q0FDQTtDQUNDLGNBQWM7QUFDZjs7Q0FDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0NBRUEsb0JBQW9CLHlCQUF5QixDQUFDOztDQUU5QztFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7O0NBRW5COztDQUVBO0VBQ0MsY0FBYztDQUNmOztDQUVEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tbW5zbGlzdC9jb21tbnNsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW5kaXYge1xyXG5cdC8qIG1hcmdpbi10b3A6NTBweDsgKi9cclxufVxyXG5cclxuIHRhYmxlY2xzIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRoIHtcclxuXHRjb2xvcjogI2JkMjEzMDtcclxufVxyXG50aCwgdGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fSBcclxuXHJcbi50Ymx0eHR7XHJcbiAgLyogd2lkdGg6MTAwcHggIWltcG9ydGFudDsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxuIH1cclxuXHJcbiAuRW5EZXRhaWxMaW5rLC5FZGl0aWNvbiB7XHJcbiAgY29sb3I6ICNiZDIxMzA7XHJcbiB9XHJcblxyXG4uaW5wdXRib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IGdyb292ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/commnslist/commnslist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/commnslist/commnslist.component.ts ***!
  \****************************************************/
/*! exports provided: CommnslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommnslistComponent", function() { return CommnslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");








var CommnslistComponent = /** @class */ (function () {
    function CommnslistComponent(formBuilder, router, http, myservice, route, cookieService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.cookieService = cookieService;
        this.collection = [];
    }
    CommnslistComponent.prototype.ngOnInit = function () {
        this.myservice.setTitle('Communication');
    };
    CommnslistComponent.prototype.EditSelrec = function (recidval) {
        console.log("EditSelrec=" + recidval);
        this.router.navigate(['/createcommn', { 'groupid': recidval }]);
    };
    CommnslistComponent.prototype.fn_redirect = function (requestidval) {
        this.router.navigate(['/commndetails', { 'groupid': requestidval }]);
    };
    CommnslistComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    CommnslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commnslist',
            template: __webpack_require__(/*! raw-loader!./commnslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/commnslist/commnslist.component.html"),
            styles: [__webpack_require__(/*! ./commnslist.component.css */ "./src/app/commnslist/commnslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], CommnslistComponent);
    return CommnslistComponent;
}());



/***/ }),

/***/ "./src/app/commtempdetails/commtempdetails.component.css":
/*!***************************************************************!*\
  !*** ./src/app/commtempdetails/commtempdetails.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n\t\r\n  }\r\n  .maindiv {\r\n\tmargin-top:100px;  \r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .goback {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    position: relative;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbXRlbXBkZXRhaWxzL2NvbW10ZW1wZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCOztFQUV4QjtFQUNBO0NBQ0QsZ0JBQWdCO0VBQ2Y7RUFDQSw0REFBNEQ7RUFDNUQ7SUFDRSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCO0VBRUEsbUNBQW1DO0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvY29tbXRlbXBkZXRhaWxzL2NvbW10ZW1wZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFxyXG4gIH1cclxuICAubWFpbmRpdiB7XHJcblx0bWFyZ2luLXRvcDoxMDBweDsgIFxyXG4gIH1cclxuICAvKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLyogaGVpZ2h0OiAzMDBweDsgICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gIC5yb3d0Ymw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5nb2JhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2JkMjEzMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIGJvcmRlcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/commtempdetails/commtempdetails.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/commtempdetails/commtempdetails.component.ts ***!
  \**************************************************************/
/*! exports provided: CommtempdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommtempdetailsComponent", function() { return CommtempdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CommtempdetailsComponent = /** @class */ (function () {
    function CommtempdetailsComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.collection = [];
        this.GroupID = '';
    }
    CommtempdetailsComponent.prototype.ngOnInit = function () {
        this.myservice.setTitle('Communication List');
        this.GroupID = this.route.snapshot.paramMap.get('groupid');
        console.log("GroupID=" + this.GroupID);
    };
    CommtempdetailsComponent.prototype.GoBack = function () {
        this.router.navigate(['/commtempslist']);
    };
    CommtempdetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CommtempdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commtempdetails',
            template: __webpack_require__(/*! raw-loader!./commtempdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/commtempdetails/commtempdetails.component.html"),
            styles: [__webpack_require__(/*! ./commtempdetails.component.css */ "./src/app/commtempdetails/commtempdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CommtempdetailsComponent);
    return CommtempdetailsComponent;
}());



/***/ }),

/***/ "./src/app/commtempslist/commtempslist.component.css":
/*!***********************************************************!*\
  !*** ./src/app/commtempslist/commtempslist.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.maindiv {\r\n\t/* margin-top:50px; */\r\n}\r\n\r\n tablecls {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n th {\r\n\tcolor: #bd2130;\r\n}\r\n\r\n th, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\n tr:nth-child(even) {background-color: #f2f2f2;}\r\n\r\n .tbltxt{\r\n  /* width:100px !important; */\r\n  text-align: center;\r\n \r\n }\r\n\r\n .EnDetailLink,.Editicon {\r\n  color: #bd2130;\r\n }\r\n\r\n .inputborder {\r\n    border-top: 1px;\r\n    border-left: 1px;\r\n    padding: 5px;\r\n    border-bottom: groove;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbXRlbXBzbGlzdC9jb21tdGVtcHNsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOztDQUVDO0VBQ0MseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7Q0FDQTtDQUNDLGNBQWM7QUFDZjs7Q0FDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0NBRUEsb0JBQW9CLHlCQUF5QixDQUFDOztDQUU5QztFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7O0NBRW5COztDQUVBO0VBQ0MsY0FBYztDQUNmOztDQUVEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tbXRlbXBzbGlzdC9jb21tdGVtcHNsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW5kaXYge1xyXG5cdC8qIG1hcmdpbi10b3A6NTBweDsgKi9cclxufVxyXG5cclxuIHRhYmxlY2xzIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRoIHtcclxuXHRjb2xvcjogI2JkMjEzMDtcclxufVxyXG50aCwgdGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fSBcclxuXHJcbi50Ymx0eHR7XHJcbiAgLyogd2lkdGg6MTAwcHggIWltcG9ydGFudDsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxuIH1cclxuXHJcbiAuRW5EZXRhaWxMaW5rLC5FZGl0aWNvbiB7XHJcbiAgY29sb3I6ICNiZDIxMzA7XHJcbiB9XHJcblxyXG4uaW5wdXRib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IGdyb292ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/commtempslist/commtempslist.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/commtempslist/commtempslist.component.ts ***!
  \**********************************************************/
/*! exports provided: CommtempslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommtempslistComponent", function() { return CommtempslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");








var CommtempslistComponent = /** @class */ (function () {
    function CommtempslistComponent(formBuilder, router, http, myservice, route, cookieService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.cookieService = cookieService;
        this.collection = [];
    }
    CommtempslistComponent.prototype.ngOnInit = function () {
        this.myservice.setTitle('Communication List');
    };
    CommtempslistComponent.prototype.EditSelrec = function (recidval) {
        console.log("EditSelrec=" + recidval);
        this.router.navigate(['/createcommtemp', { 'groupid': recidval }]);
    };
    CommtempslistComponent.prototype.fn_redirect = function (requestidval) {
        this.router.navigate(['/commtempdetails', { 'groupid': requestidval }]);
    };
    CommtempslistComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    CommtempslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commtempslist',
            template: __webpack_require__(/*! raw-loader!./commtempslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/commtempslist/commtempslist.component.html"),
            styles: [__webpack_require__(/*! ./commtempslist.component.css */ "./src/app/commtempslist/commtempslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], CommtempslistComponent);
    return CommtempslistComponent;
}());



/***/ }),

/***/ "./src/app/createcommn/createcommn.component.css":
/*!*******************************************************!*\
  !*** ./src/app/createcommn/createcommn.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZWNvbW1uL2NyZWF0ZWNvbW1uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/createcommn/createcommn.component.ts":
/*!******************************************************!*\
  !*** ./src/app/createcommn/createcommn.component.ts ***!
  \******************************************************/
/*! exports provided: CreatecommnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecommnComponent", function() { return CreatecommnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreatecommnComponent = /** @class */ (function () {
    function CreatecommnComponent() {
    }
    CreatecommnComponent.prototype.ngOnInit = function () {
    };
    CreatecommnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createcommn',
            template: __webpack_require__(/*! raw-loader!./createcommn.component.html */ "./node_modules/raw-loader/index.js!./src/app/createcommn/createcommn.component.html"),
            styles: [__webpack_require__(/*! ./createcommn.component.css */ "./src/app/createcommn/createcommn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatecommnComponent);
    return CreatecommnComponent;
}());



/***/ }),

/***/ "./src/app/createcommtemp/createcommtemp.component.css":
/*!*************************************************************!*\
  !*** ./src/app/createcommtemp/createcommtemp.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  .containercls {\r\n    margin-top: 30px;\r\n    position: absolute;\r\n    z-index: -1;\r\n    /* height: 100%; */\r\n\twidth:100%;\r\n    margin-bottom: 80px;\r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    /* float: left; */\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  input[type=\"text\"] {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  textarea[type=\"text\"] {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  input[type=\"file\"] {\r\n    /* width: 30%; */\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 5px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  select {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  .fieldlabel {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  }\r\n  #save,#exit,#upload {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    /* position: relative; */\r\n    /* left: -15px; */\r\n    /* right: 338px; */\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlY29tbXRlbXAvY3JlYXRlY29tbXRlbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCLFVBQVU7SUFDUCxtQkFBbUI7RUFDckI7RUFDQSw0REFBNEQ7RUFDNUQ7SUFDRSwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCO0VBRUEsbUNBQW1DO0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFFQTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCOztFQUV4QjtFQUVBO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7O0VBRXhCO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjs7RUFFeEI7RUFFQTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCOztFQUV4QjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtFQUdBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZWNvbW10ZW1wL2NyZWF0ZWNvbW10ZW1wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5jb250YWluZXJjbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG5cdHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIH1cclxuICAvKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAvKiBmbG9hdDogbGVmdDsgKi9cclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLyogaGVpZ2h0OiAzMDBweDsgICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gIC5yb3d0Ymw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWFbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIC8qIHdpZHRoOiAzMCU7ICovXHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLmZpZWxkbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI3NhdmUsI2V4aXQsI3VwbG9hZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmQyMTMwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xyXG4gICAgYm9yZGVyOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgLyogbGVmdDogLTE1cHg7ICovXHJcbiAgICAvKiByaWdodDogMzM4cHg7ICovXHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/createcommtemp/createcommtemp.component.ts":
/*!************************************************************!*\
  !*** ./src/app/createcommtemp/createcommtemp.component.ts ***!
  \************************************************************/
/*! exports provided: CreatecommtempComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecommtempComponent", function() { return CreatecommtempComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CreatecommtempComponent = /** @class */ (function () {
    function CreatecommtempComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.companyrole = ['CIFCL', 'HFC'];
        this.submitted = false;
        //defaultval = false;
        this.existgroupid = '';
        this.collection = [];
    }
    CreatecommtempComponent.prototype.ngOnInit = function () {
        this.myservice.setTitle('Communication List');
        this.existgroupid = this.route.snapshot.paramMap.get('groupid');
        this.communsdata = this.formBuilder.group({
            tmplatename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            smstmplatename: ['', ''],
            emailtmplatename: ['', ''],
            uploadtemplates: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            /* extgroupname: ['', Validators.required],
            extgroupid: ['', ''],
            extcompany: ['', Validators.required] */
        });
    };
    CreatecommtempComponent.prototype.onClickExit = function () {
        if (this.existgroupid != null && this.existgroupid != '') {
            this.router.navigate(['/commtempdetails', { "groupid": this.existgroupid }]);
        }
        else {
            this.router.navigate(['/commtempslist']);
        }
    };
    CreatecommtempComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CreatecommtempComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createcommtemp',
            template: __webpack_require__(/*! raw-loader!./createcommtemp.component.html */ "./node_modules/raw-loader/index.js!./src/app/createcommtemp/createcommtemp.component.html"),
            styles: [__webpack_require__(/*! ./createcommtemp.component.css */ "./src/app/createcommtemp/createcommtemp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CreatecommtempComponent);
    return CreatecommtempComponent;
}());



/***/ }),

/***/ "./src/app/creategroup/creategroup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/creategroup/creategroup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  .containercls {\r\n    margin-top: 30px;\r\n    position: absolute;\r\n    z-index: -1;\r\n    /* height: 100%; */\r\n\twidth:100%;\r\n    margin-bottom: 80px;\r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  input[type=\"text\"] {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  input[type=\"file\"] {\r\n    /* width: 30%; */\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 5px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  select {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  .fieldlabel {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  }\r\n  #save,#exit,#rca,#add,#remove {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    /* position: relative; */\r\n    /* left: -15px; */\r\n    /* right: 338px; */\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlZ3JvdXAvY3JlYXRlZ3JvdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCLFVBQVU7SUFDUCxtQkFBbUI7RUFDckI7RUFDQSw0REFBNEQ7RUFDNUQ7SUFDRSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCO0VBRUEsbUNBQW1DO0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFFQTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCOztFQUV4QjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7O0VBRXhCO0VBRUE7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjs7RUFFeEI7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7RUFHQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGVncm91cC9jcmVhdGVncm91cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuY29udGFpbmVyY2xzIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuXHR3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICB9XHJcbiAgLyogQ3JlYXRlIHR3byBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8qIGhlaWdodDogMzAwcHg7ICAqL1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuICAucm93dGJsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIC8qIHdpZHRoOiAzMCU7ICovXHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLmZpZWxkbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI3NhdmUsI2V4aXQsI3JjYSwjYWRkLCNyZW1vdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2JkMjEzMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIGJvcmRlcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIC8qIGxlZnQ6IC0xNXB4OyAqL1xyXG4gICAgLyogcmlnaHQ6IDMzOHB4OyAqL1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/creategroup/creategroup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/creategroup/creategroup.component.ts ***!
  \******************************************************/
/*! exports provided: CreategroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreategroupComponent", function() { return CreategroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CreategroupComponent = /** @class */ (function () {
    function CreategroupComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.companyrole = ['CIFCL', 'HFC'];
        this.submitted = false;
        //defaultval = false;
        this.existgroupid = '';
        this.collection = [];
    }
    CreategroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('Group Master');
        this.existgroupid = this.route.snapshot.paramMap.get('groupid');
        console.log("existgroupid=" + this.existgroupid);
        //if(this.existgroupid!='' && this.existgroupid!=null) {
        var params = { 'recidval': this.existgroupid };
        this.myservice.httpPostMethod('http://localhost:81/Angular/getgroupdetails.php', params, 'application/json', false, 'createroles')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitcol = mesg.split('$$');
                                _this.collection.push({ "groupname": splitcol[0], "groupid": splitcol[1], "company": splitcol[2], "recid": splitcol[3] });
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
        });
        //this.defaultval = true;
        //} else {
        //this.collection.push('1');
        //this.defaultval = false;
        //this.collection.push({ "groupname": '', "groupid": '', "company": '',  "recid": '' });
        //return false;
        //}
        this.groupsdata = this.formBuilder.group({
            groupname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            groupid: ['', ''],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            /* extgroupname: ['', Validators.required],
            extgroupid: ['', ''],
            extcompany: ['', Validators.required] */
        });
    };
    CreategroupComponent.prototype.onClickSubmit = function (formval) {
        var _this = this;
        console.log("groupname=" + formval.groupname);
        console.log("company=" + formval.company);
        console.log("groupid=" + formval.groupid);
        this.submitted = true;
        if (!this.groupsdata.valid) {
            alert("Please Enter the mandatory fields");
            return false;
        }
        else {
            // validate all form fields
            var params = void 0;
            if (this.existgroupid != '' && this.existgroupid != null) {
                if (formval.groupname != '' || formval.company != '') {
                    params = { 'recordtype': 'Edit', 'groupname': formval.groupname, 'company': formval.company, 'groupid': this.existgroupid };
                }
                else {
                    alert("Record Updated Succesfully");
                    return false;
                }
            }
            else {
                params = { 'recordtype': 'Create', 'groupname': formval.groupname, 'company': formval.company, 'groupid': formval.groupid };
            }
            return false;
            this.myservice.httpPostMethod('http://localhost:81/Angular/submitgroups.php', params, 'application/json', false, 'createroles')
                .then(function (resData) {
                if (resData != undefined) {
                    console.log("inside of resdata");
                    if (resData.hasOwnProperty('status')) {
                        console.log("inside of hasOwnProperty");
                        if (resData['status'] == 200) {
                            console.log("status=", resData);
                            var emirates = resData['body'];
                            console.log("emirates=" + emirates); //return false;
                            if (emirates != undefined && emirates != null && emirates != "") {
                                console.log("&&&&&&", emirates.success);
                                if (emirates.success) {
                                    var mesg = emirates.message;
                                    console.log("mesg=" + mesg);
                                    alert("Group has been created successfully");
                                    _this.router.navigate(['/groupdetails', { 'groupid': mesg }]);
                                }
                            }
                        }
                        else {
                            console.log("Get City List API - Error Occured : " + resData['txt']);
                            return false;
                        }
                    }
                }
            }, function (error) {
                console.log("Error", error);
            });
        }
    };
    CreategroupComponent.prototype.onClickExit = function () {
        if (this.existgroupid != null && this.existgroupid != '') {
            this.router.navigate(['/groupdetails', { "groupid": this.existgroupid }]);
        }
        else {
            this.router.navigate(['/groupdetails']);
        }
    };
    CreategroupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CreategroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-creategroup',
            template: __webpack_require__(/*! raw-loader!./creategroup.component.html */ "./node_modules/raw-loader/index.js!./src/app/creategroup/creategroup.component.html"),
            styles: [__webpack_require__(/*! ./creategroup.component.css */ "./src/app/creategroup/creategroup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CreategroupComponent);
    return CreategroupComponent;
}());



/***/ }),

/***/ "./src/app/createholiday/createholiday.component.css":
/*!***********************************************************!*\
  !*** ./src/app/createholiday/createholiday.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZWhvbGlkYXkvY3JlYXRlaG9saWRheS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/createholiday/createholiday.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/createholiday/createholiday.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateholidayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateholidayComponent", function() { return CreateholidayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateholidayComponent = /** @class */ (function () {
    function CreateholidayComponent() {
    }
    CreateholidayComponent.prototype.ngOnInit = function () {
    };
    CreateholidayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createholiday',
            template: __webpack_require__(/*! raw-loader!./createholiday.component.html */ "./node_modules/raw-loader/index.js!./src/app/createholiday/createholiday.component.html"),
            styles: [__webpack_require__(/*! ./createholiday.component.css */ "./src/app/createholiday/createholiday.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateholidayComponent);
    return CreateholidayComponent;
}());



/***/ }),

/***/ "./src/app/createroles/createroles.component.css":
/*!*******************************************************!*\
  !*** ./src/app/createroles/createroles.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  .containercls {\r\n    margin-top: 80px; \r\n    position: absolute;\r\n    z-index: -1;\r\n    /* height: 100%; */\r\n\twidth:100%;\r\n    /* margin-bottom: 80px; */\r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  input[type=\"text\"] {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  select {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  .fieldlabel {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  }\r\n  #save,#exit {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlcm9sZXMvY3JlYXRlcm9sZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCLFVBQVU7SUFDUCx5QkFBeUI7RUFDM0I7RUFDQSw0REFBNEQ7RUFDNUQ7SUFDRSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCO0VBRUEsbUNBQW1DO0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFFQTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCOztFQUV4QjtFQUdBO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7O0VBRXhCO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0VBR0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGVyb2xlcy9jcmVhdGVyb2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuY29udGFpbmVyY2xzIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcblx0d2lkdGg6MTAwJTtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDgwcHg7ICovXHJcbiAgfVxyXG4gIC8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICAuY29sdW1uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbiAgLnJvd3RibDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuIFxyXG4gIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBcclxuICB9XHJcblxyXG4gIC5maWVsZGxhYmVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICAgXHJcbiAgI3NhdmUsI2V4aXQge1xyXG4gICAgYmFja2dyb3VuZDogI2JkMjEzMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIGJvcmRlcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/createroles/createroles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/createroles/createroles.component.ts ***!
  \******************************************************/
/*! exports provided: CreaterolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreaterolesComponent", function() { return CreaterolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CreaterolesComponent = /** @class */ (function () {
    function CreaterolesComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.companyrole = ['CIFCL', 'HFC'];
        this.submitted = false;
        //defaultval = false;
        this.existroleid = '';
        this.collection = [];
    }
    CreaterolesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('Roles Creation');
        this.existroleid = this.route.snapshot.paramMap.get('recidval');
        console.log("existroleid=" + this.existroleid);
        //if(this.existroleid!='' && this.existroleid!=null) {
        var params = { 'recidval': this.existroleid };
        this.myservice.httpPostMethod('http://localhost:81/Angular/getrolesdetails.php', params, 'application/json', false, 'createroles')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitcol = mesg.split('$$');
                                _this.collection.push({ "rolename": splitcol[0], "rolelevel": splitcol[1], "company": splitcol[2], "roledesc": splitcol[3], "recid": splitcol[4] });
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
        });
        //this.defaultval = true;
        //} else {
        //this.collection.push('1');
        //this.defaultval = false;
        //return false;
        //}
        this.rolesdata = this.formBuilder.group({
            rolename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            rolelevel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            description: ['', '']
        });
    };
    CreaterolesComponent.prototype.onClickExit = function () {
        console.log("onClickExit");
        this.router.navigate(['/roleslist']);
    };
    CreaterolesComponent.prototype.onClickSubmit = function (formval) {
        var _this = this;
        console.log("rolename=" + formval.rolename);
        console.log("company=" + formval.company);
        console.log("rolelevel=" + formval.rolelevel);
        console.log("description=" + formval.description);
        this.submitted = true;
        if (!this.rolesdata.valid) {
            alert("Please Enter the mandatory fields");
            return false;
        }
        else {
            // validate all form fields
            var params = { 'rolename': formval.rolename, 'company': formval.company, 'rolelevel': formval.rolelevel, 'description': formval.description };
            this.myservice.httpPostMethod('http://localhost:81/Angular/submitroles.php', params, 'application/json', false, 'createroles')
                .then(function (resData) {
                if (resData != undefined) {
                    console.log("inside of resdata");
                    if (resData.hasOwnProperty('status')) {
                        console.log("inside of hasOwnProperty");
                        if (resData['status'] == 200) {
                            console.log("status=", resData);
                            var emirates = resData['body'];
                            console.log("emirates=" + emirates); //return false;
                            if (emirates != undefined && emirates != null && emirates != "") {
                                console.log("&&&&&&", emirates.success);
                                if (emirates.success) {
                                    var mesg = emirates.message;
                                    console.log("mesg=" + mesg);
                                    alert("Role has been created successfully");
                                    _this.router.navigate(['/roleslist']);
                                }
                            }
                        }
                        else {
                            console.log("Get City List API - Error Occured : " + resData['txt']);
                            return false;
                        }
                    }
                }
            }, function (error) {
                console.log("Error", error);
            });
        }
    };
    CreaterolesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CreaterolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createroles',
            template: __webpack_require__(/*! raw-loader!./createroles.component.html */ "./node_modules/raw-loader/index.js!./src/app/createroles/createroles.component.html"),
            styles: [__webpack_require__(/*! ./createroles.component.css */ "./src/app/createroles/createroles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CreaterolesComponent);
    return CreaterolesComponent;
}());



/***/ }),

/***/ "./src/app/createsrtat/createsrtat.component.css":
/*!*******************************************************!*\
  !*** ./src/app/createsrtat/createsrtat.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXNydGF0L2NyZWF0ZXNydGF0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/createsrtat/createsrtat.component.ts":
/*!******************************************************!*\
  !*** ./src/app/createsrtat/createsrtat.component.ts ***!
  \******************************************************/
/*! exports provided: CreatesrtatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatesrtatComponent", function() { return CreatesrtatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreatesrtatComponent = /** @class */ (function () {
    function CreatesrtatComponent() {
    }
    CreatesrtatComponent.prototype.ngOnInit = function () {
    };
    CreatesrtatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createsrtat',
            template: __webpack_require__(/*! raw-loader!./createsrtat.component.html */ "./node_modules/raw-loader/index.js!./src/app/createsrtat/createsrtat.component.html"),
            styles: [__webpack_require__(/*! ./createsrtat.component.css */ "./src/app/createsrtat/createsrtat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatesrtatComponent);
    return CreatesrtatComponent;
}());



/***/ }),

/***/ "./src/app/createstate/createstate.component.css":
/*!*******************************************************!*\
  !*** ./src/app/createstate/createstate.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXN0YXRlL2NyZWF0ZXN0YXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/createstate/createstate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/createstate/createstate.component.ts ***!
  \******************************************************/
/*! exports provided: CreatestateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatestateComponent", function() { return CreatestateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreatestateComponent = /** @class */ (function () {
    function CreatestateComponent() {
    }
    CreatestateComponent.prototype.ngOnInit = function () {
    };
    CreatestateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createstate',
            template: __webpack_require__(/*! raw-loader!./createstate.component.html */ "./node_modules/raw-loader/index.js!./src/app/createstate/createstate.component.html"),
            styles: [__webpack_require__(/*! ./createstate.component.css */ "./src/app/createstate/createstate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatestateComponent);
    return CreatestateComponent;
}());



/***/ }),

/***/ "./src/app/createuser/createuser.component.css":
/*!*****************************************************!*\
  !*** ./src/app/createuser/createuser.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  .containercls {\r\n    margin-top: 80px;\r\n    position: absolute;\r\n    z-index: -1;\r\n    /* height: 100%; */\r\n\twidth:100%;\r\n    margin-bottom: 80px;\r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  input[type=\"text\"] {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  select {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  .fieldlabel {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  }\r\n  #save,#exit {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    /* position: relative; */\r\n    /* left: -15px; */\r\n    /* right: 338px; */\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRldXNlci9jcmVhdGV1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtDQUNyQixVQUFVO0lBQ1AsbUJBQW1CO0VBQ3JCO0VBQ0EsNERBQTREO0VBQzVEO0lBQ0UsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLG9CQUFvQjtFQUN0QjtFQUVBLG1DQUFtQztFQUNuQztJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBRUE7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjs7RUFFeEI7RUFHQTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCOztFQUV4QjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtFQUdBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXVzZXIvY3JlYXRldXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuY29udGFpbmVyY2xzIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuXHR3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICB9XHJcbiAgLyogQ3JlYXRlIHR3byBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8qIGhlaWdodDogMzAwcHg7ICAqL1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuICAucm93dGJsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLmZpZWxkbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI3NhdmUsI2V4aXQge1xyXG4gICAgYmFja2dyb3VuZDogI2JkMjEzMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIGJvcmRlcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIC8qIGxlZnQ6IC0xNXB4OyAqL1xyXG4gICAgLyogcmlnaHQ6IDMzOHB4OyAqL1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/createuser/createuser.component.ts":
/*!****************************************************!*\
  !*** ./src/app/createuser/createuser.component.ts ***!
  \****************************************************/
/*! exports provided: CreateuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateuserComponent", function() { return CreateuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CreateuserComponent = /** @class */ (function () {
    function CreateuserComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.companyrole = ['CIFCL', 'HFC'];
        this.productval = ['HF', 'HL', 'VF', 'HE'];
        this.usertypeval = ['Internal', 'External'];
        this.submitted = false;
        //defaultval = false;
        this.existusrid = '';
        this.collection = [];
        this.rolecollection = [];
        this.grpcollection = [];
        this.nextlevelrl = [];
        this.reportstousr = [];
        this.reportshs = false;
        this.nxtrolehs = false;
        this.usrrolehs = false;
    }
    CreateuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('User Creation');
        this.existusrid = this.route.snapshot.paramMap.get('userid');
        console.log("existusrid=" + this.existusrid);
        //if(this.existusrid!='' && this.existusrid!=null) {
        var params = { 'recidval': this.existusrid };
        this.collection = [];
        this.myservice.httpPostMethod('http://localhost:81/Angular/getuserdetails.php', params, 'application/json', false, 'createuser')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitcol = mesg.split('$$');
                                _this.collection.push({ "username": splitcol[0], "lastname": splitcol[1], "firstname": splitcol[2], "company": splitcol[3], "mobileno": splitcol[4], "reportsto": splitcol[5], "grpname": splitcol[6], "product": splitcol[7], "emailid": splitcol[8], "department": splitcol[10], "role": splitcol[9], "recid": splitcol[11], "usrtype": splitcol[12], "usrrole": splitcol[13], "nextlevelrole": splitcol[14], "reportstoid": splitcol[15] });
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
        });
        //this.defaultval = true;
        //} else {
        //this.collection.push('1');
        //this.defaultval = false;
        //return false;
        //}
        this.usersdata = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            firstname: ['', ''],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            userrole: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            mobileno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            reportsto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            newpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            groupname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            usertype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            nextlevelrole: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            emailid: ['', ''],
            department: ['', ''],
            role: ['', ''],
            description: ['', '']
        });
        var rolegrp = { 'rolegrp': '' };
        this.rolecollection = [];
        this.grpcollection = [];
        this.myservice.httpPostMethod('http://localhost:81/Angular/getuserrolegrp.php', rolegrp, 'application/json', false, 'createuser')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitmsg = mesg.split('&&');
                                console.log('roledaata=' + splitmsg[0]);
                                console.log('groupdata=' + splitmsg[1]);
                                var roledt = splitmsg[0].split('||');
                                var rolelen = roledt.length;
                                for (var i = 0; i < rolelen - 1; i++) {
                                    var splitrole = roledt[i].split('$$');
                                    _this.rolecollection.push({ "rolename": splitrole[0], "roleid": splitrole[1] });
                                }
                                var grpdt = splitmsg[1].split('||');
                                var grplen = grpdt.length;
                                for (var i = 0; i < grplen - 1; i++) {
                                    var splitgrp = grpdt[i].split('$$');
                                    _this.grpcollection.push({ "groupname": splitgrp[0], "groupid": splitgrp[1] });
                                }
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
        });
    };
    CreateuserComponent.prototype.getnxtevlrole = function (evt) {
        var _this = this;
        this.nextlevelrl = [];
        this.nxtrolehs = true;
        console.log("getnxtevlrole=" + evt.target.value);
        console.log("getnxtevlrole=" + this.rolecollection.length);
        var collen = this.rolecollection.length;
        for (var i = 0; i < collen - 1; i++) {
            //console.log("getnxtevlrole="+this.rolecollection[i].roleid);
            if (this.rolecollection[i].roleid == evt.target.value) {
                var selrlname = this.rolecollection[i].rolename;
            }
        }
        console.log("selrlname=" + selrlname);
        if (selrlname == 'MD' || selrlname == 'TC') {
            console.log("inside of IF=" + evt.target.value);
            this.nextlevelrl.push({ "nxtrlname": 'ADMIN', "nxtrlid": '0' });
            return false;
        }
        else {
            console.log("inside of ELSE=" + evt.target.value);
            var nxtval = { 'roleid': evt.target.value };
            this.myservice.httpPostMethod('http://localhost:81/Angular/getusernxtrole.php', nxtval, 'application/json', false, 'createuser')
                .then(function (resData) {
                if (resData != undefined) {
                    console.log("inside of resdata");
                    if (resData.hasOwnProperty('status')) {
                        console.log("inside of hasOwnProperty");
                        if (resData['status'] == 200) {
                            console.log("status=", resData);
                            var emirates = resData['body'];
                            console.log("emirates=" + emirates); //return false;
                            if (emirates != undefined && emirates != null && emirates != "") {
                                console.log("&&&&&&", emirates.success);
                                if (emirates.success) {
                                    var mesg = emirates.message;
                                    console.log("mesg=" + mesg);
                                    var roledt = mesg.split('||');
                                    var rolelen = roledt.length;
                                    for (var i = 0; i < rolelen - 1; i++) {
                                        var splitrole = roledt[i].split('$$');
                                        _this.nextlevelrl.push({ "nxtrlname": splitrole[0], "nxtrlid": splitrole[1] });
                                    }
                                }
                            }
                        }
                        else {
                            console.log("Get City List API - Error Occured : " + resData['txt']);
                            return false;
                        }
                    }
                }
            }, function (error) {
                console.log("Error", error);
            });
        }
    };
    CreateuserComponent.prototype.getreportsto = function (evt) {
        var _this = this;
        this.reportstousr = [];
        this.reportshs = true;
        console.log("getreportsto=" + evt.target.value);
        if (evt.target.value == 0) {
            console.log("inside of IF=" + evt.target.value);
            this.reportstousr.push({ "repusrname": 'admin', "repusrid": '1' });
            return false;
        }
        else {
            console.log("inside of ELSE=" + evt.target.value);
            var repusr = { 'nxtvalid': evt.target.value };
            this.myservice.httpPostMethod('http://localhost:81/Angular/getuserreports.php', repusr, 'application/json', false, 'createuser')
                .then(function (resData) {
                if (resData != undefined) {
                    console.log("inside of resdata");
                    if (resData.hasOwnProperty('status')) {
                        console.log("inside of hasOwnProperty");
                        if (resData['status'] == 200) {
                            console.log("status=", resData);
                            var emirates = resData['body'];
                            console.log("emirates=" + emirates); //return false;
                            if (emirates != undefined && emirates != null && emirates != "") {
                                console.log("&&&&&&", emirates.success);
                                if (emirates.success) {
                                    var mesg = emirates.message;
                                    console.log("mesg=" + mesg);
                                    var roledt = mesg.split('||');
                                    var rolelen = roledt.length;
                                    for (var i = 0; i < rolelen - 1; i++) {
                                        var splitrole = roledt[i].split('$$');
                                        _this.reportstousr.push({ "repusrname": splitrole[0], "repusrid": splitrole[1] });
                                    }
                                }
                            }
                        }
                        else {
                            console.log("Get City List API - Error Occured : " + resData['txt']);
                            return false;
                        }
                    }
                }
            }, function (error) {
                console.log("Error", error);
            });
        }
    };
    CreateuserComponent.prototype.onClickSubmit = function (usrform) {
        var _this = this;
        console.log("username=" + usrform.username);
        console.log("lastname=" + usrform.lastname);
        console.log("firstname=" + usrform.firstname);
        console.log("company=" + usrform.company);
        console.log("userrole=" + usrform.userrole);
        console.log("mobileno=" + usrform.mobileno);
        console.log("password=" + usrform.password);
        console.log("newpassword=" + usrform.newpassword);
        console.log("reportsto=" + usrform.reportsto);
        console.log("groupname=" + usrform.groupname);
        console.log("usertype=" + usrform.usertype);
        console.log("product=" + usrform.product);
        console.log("nextlevelrole=" + usrform.nextlevelrole);
        console.log("emailid=" + usrform.emailid);
        console.log("department=" + usrform.department);
        console.log("role=" + usrform.role);
        this.submitted = true;
        if (!this.usersdata.valid) {
            alert("Please Enter the mandatory fields");
            return false;
        }
        else {
            // validate all form fields
            console.log("groupname12345=" + usrform.groupname);
            var usrparams = { 'username': usrform.username, 'lastname': usrform.lastname, 'firstname': usrform.firstname, 'company': usrform.company, 'userrole': usrform.userrole, 'mobileno': usrform.mobileno, 'password': usrform.password, 'newpassword': usrform.newpassword, 'reportsto': usrform.reportsto, 'grpname': usrform.groupname, 'usertype': usrform.usertype, 'product': usrform.product, 'nextlevelrole': usrform.nextlevelrole, 'emailid': usrform.emailid, 'department': usrform.department, 'role': usrform.role };
            this.myservice.httpPostMethod('http://localhost:81/Angular/submitusers.php', usrparams, 'application/json', false, 'createroles')
                .then(function (resData) {
                if (resData != undefined) {
                    console.log("inside of resdata");
                    if (resData.hasOwnProperty('status')) {
                        console.log("inside of hasOwnProperty");
                        if (resData['status'] == 200) {
                            console.log("status=", resData);
                            var emirates = resData['body'];
                            console.log("emirates=" + emirates); //return false;
                            if (emirates != undefined && emirates != null && emirates != "") {
                                console.log("&&&&&&", emirates.success);
                                if (emirates.success) {
                                    var mesg = emirates.message;
                                    console.log("mesg=" + mesg);
                                    alert("User has been created successfully");
                                    _this.router.navigate(['/userdetails', { 'userid': mesg }]);
                                }
                            }
                        }
                        else {
                            console.log("Get City List API - Error Occured : " + resData['txt']);
                            return false;
                        }
                    }
                }
            }, function (error) {
                console.log("Error", error);
            });
        }
    };
    CreateuserComponent.prototype.VerifyUsrrole = function (evnt) {
        console.log("VerifyUsrrole=" + evnt.target.value);
        if (this.collection[0].usrrole == evnt.target.value) {
            this.usrrolehs = false;
        }
        else {
            this.usrrolehs = true;
        }
    };
    CreateuserComponent.prototype.EnableGlobalfun = function () {
        console.log("EnableGlobalfun=" + this.usrrolehs);
        this.usrrolehs = true;
    };
    CreateuserComponent.prototype.onClickExit = function () {
        if (this.existusrid != null && this.existusrid != '') {
            this.router.navigate(['/userdetails', { "userid": this.existusrid }]);
        }
        else {
            this.router.navigate(['/userdetails']);
        }
    };
    CreateuserComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CreateuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createuser',
            template: __webpack_require__(/*! raw-loader!./createuser.component.html */ "./node_modules/raw-loader/index.js!./src/app/createuser/createuser.component.html"),
            styles: [__webpack_require__(/*! ./createuser.component.css */ "./src/app/createuser/createuser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CreateuserComponent);
    return CreateuserComponent;
}());



/***/ }),

/***/ "./src/app/customerdetails/customerdetails.component.css":
/*!***************************************************************!*\
  !*** ./src/app/customerdetails/customerdetails.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /* Create two equal columns that floats next to each other */\r\n  \r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  \r\n  /* Clear floats after the columns */\r\n  \r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  .radio{\r\n    /* margin-top: 50px; */\r\n    float: right;\r\n  }\r\n  \r\n  .createreuqest {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 17px;\r\n    padding-right: 10px;\r\n    /* position: relative; */\r\n    /* left: -15px; */\r\n    /* right: 338px; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJkZXRhaWxzL2N1c3RvbWVyZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0VBQ3hCOztFQUVBLDREQUE0RDs7RUFDNUQ7SUFDRSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCOztFQUVBLG1DQUFtQzs7RUFDbkM7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBSUY7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcmRldGFpbHMvY3VzdG9tZXJkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICAuY29sdW1uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbiAgLnJvd3RibDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIC5yYWRpb3tcclxuICAgIC8qIG1hcmdpbi10b3A6IDUwcHg7ICovXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuLmNyZWF0ZXJldXFlc3Qge1xyXG4gICAgYmFja2dyb3VuZDogI2JkMjEzMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIGJvcmRlcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIC8qIGxlZnQ6IC0xNXB4OyAqL1xyXG4gICAgLyogcmlnaHQ6IDMzOHB4OyAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/customerdetails/customerdetails.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/customerdetails/customerdetails.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdetailsComponent", function() { return CustomerdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");







var CustomerdetailsComponent = /** @class */ (function () {
    function CustomerdetailsComponent(router, http, myservice, route, formBuilder) {
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.formBuilder = formBuilder;
        this.collection = [];
    }
    CustomerdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('Customer Details');
        this.recid = this.route.snapshot.paramMap.get('agreement_no');
        console.log("recid=" + this.recid);
        this.customerdetials = this.formBuilder.group({
            ge_chkbx: ['', ''],
            sr_chkbx: ['', ''],
            cr_chkbx: ['', ''],
        });
        var params = { 'agreement_no': this.recid };
        this.myservice.httpPostMethod('http://localhost:81/Angular/get_details.php', params, 'application/json', false, 'custdetails')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitrw = mesg.split('||');
                                console.log("splitrw=" + splitrw.length);
                                var reclen = splitrw.length;
                                for (var i = 0; i < reclen - 1; i++) {
                                    console.log("splitrw of i=" + splitrw[i]);
                                    var splitcol = splitrw[i].split('$$');
                                    console.log("splitcol=" + splitcol.length);
                                    _this.collection.push({ "name": splitcol[0], "dob": splitcol[1], "voter_id": splitcol[2], "gst_no": splitcol[3], "email_id": splitcol[4], "pan_no": splitcol[5], "father_name": splitcol[6], "aadhaar_no": splitcol[7], "driving_license_no": splitcol[8], "passport_no": splitcol[9], "cin_no": splitcol[10], "alternate_mobile_no": splitcol[11], "co_applicant_name": splitcol[12], "guarantor_name": splitcol[13], "address_type": splitcol[14], "stay_duration": splitcol[15], "property": splitcol[16], "address": splitcol[17], "city": splitcol[18], "state": splitcol[19], "district": splitcol[20], "country": splitcol[21], "pin_code": splitcol[22], "phone_1": splitcol[23], "phone_2": splitcol[24], "mobile_number": splitcol[25], "agreementid": splitcol[26], "customer_id": splitcol[27], "cif_no": splitcol[28], "group_id": splitcol[29], "loan_accno": splitcol[30], "disbursal_date": splitcol[31], "mode_of_repayment": splitcol[32], "branch_name": splitcol[33], "bank": splitcol[34], "spdc_chq_no": splitcol[35], "upi_address": splitcol[36], "unbanked_pdc": splitcol[37], "bank_acc_type": splitcol[38], "bank_acc_no": splitcol[39], "source_type": splitcol[40], "loan_agreementno": splitcol[41], "amount_financed": splitcol[42], "vehicle_number": splitcol[43], "loan_tenure": splitcol[44], "total_over_due": splitcol[45], "loan_status": splitcol[46], "api_type": splitcol[47] });
                                }
                            }
                            else {
                                alert("Invalid User credentilas");
                                return false;
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
            //this.spinner.hide();
        });
    };
    CustomerdetailsComponent.prototype.CreateRequest = function (requestvalue) {
        console.log("CreateRequest function=" + requestvalue.ge_chkbx);
        var chkbxval;
        if (requestvalue.sr_chkbx == true) {
            chkbxval = 'SR';
        }
        else if (requestvalue.cr_chkbx == true) {
            chkbxval = 'CR';
        }
        else {
            chkbxval = 'GE';
        }
        if (requestvalue.ge_chkbx != '' && requestvalue.sr_chkbx != '' && requestvalue.cr_chkbx != '') {
            alert("Please Select Any CheckBox");
            return false;
        }
        else {
            this.router.navigate(['/custrequest', { 'request_type': chkbxval, 'agreement_no': this.recid }]);
        }
    };
    CustomerdetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_5__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    CustomerdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customerdetails',
            template: __webpack_require__(/*! raw-loader!./customerdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/customerdetails/customerdetails.component.html"),
            styles: [__webpack_require__(/*! ./customerdetails.component.css */ "./src/app/customerdetails/customerdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_5__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CustomerdetailsComponent);
    return CustomerdetailsComponent;
}());



/***/ }),

/***/ "./src/app/custrequest/custrequest.component.css":
/*!*******************************************************!*\
  !*** ./src/app/custrequest/custrequest.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  .containercls {\r\n    margin-top: 30px;\r\n    position: absolute;\r\n    z-index: -1;\r\n    /* height: 100%; */\r\n\twidth:100%;\r\n    margin-bottom: 80px;\r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  input[type=\"text\"] {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  textarea {\r\n\t width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box; \r\n  }\r\n  input[type=\"file\"] {\r\n    /* width: 30%; */\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 5px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  select {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  .fieldlabel {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  }\r\n  /* #buttondiv { */\r\n  /* position: relative; */\r\n  /* left: 25%; */\r\n  /* } */\r\n  #save,#exit,#rca,#add,#remove {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    /* position: relative; */\r\n    /* left: -15px; */\r\n    /* right: 338px; */\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdHJlcXVlc3QvY3VzdHJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCLFVBQVU7SUFDUCxtQkFBbUI7RUFDckI7RUFDQSw0REFBNEQ7RUFDNUQ7SUFDRSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCO0VBRUEsbUNBQW1DO0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFFQTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCOztFQUV4QjtFQUVBO0VBQ0EsVUFBVTtJQUNSLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCOztFQUV4QjtFQUVBO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7O0VBRXhCO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0VBRUYsaUJBQWlCO0VBQ2Isd0JBQXdCO0VBQ3hCLGVBQWU7RUFDbkIsTUFBTTtFQUVKO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2N1c3RyZXF1ZXN0L2N1c3RyZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5jb250YWluZXJjbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG5cdHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIH1cclxuICAvKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLyogaGVpZ2h0OiAzMDBweDsgICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gIC5yb3d0Ymw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWEge1xyXG5cdCB3aWR0aDogNTAlO1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgLyogd2lkdGg6IDMwJTsgKi9cclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgXHJcbiAgfVxyXG5cclxuICBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgXHJcbiAgfVxyXG5cclxuICAuZmllbGRsYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuLyogI2J1dHRvbmRpdiB7ICovXHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAvKiBsZWZ0OiAyNSU7ICovXHJcbi8qIH0gKi9cclxuICBcclxuICAjc2F2ZSwjZXhpdCwjcmNhLCNhZGQsI3JlbW92ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmQyMTMwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xyXG4gICAgYm9yZGVyOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgLyogbGVmdDogLTE1cHg7ICovXHJcbiAgICAvKiByaWdodDogMzM4cHg7ICovXHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/custrequest/custrequest.component.ts":
/*!******************************************************!*\
  !*** ./src/app/custrequest/custrequest.component.ts ***!
  \******************************************************/
/*! exports provided: CustrequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustrequestComponent", function() { return CustrequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







//import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import { DatepickerOptions } from 'ng2-datepicker';
// import * as frLocale from 'date-fns/locale/fr';
//import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
var CustrequestComponent = /** @class */ (function () {
    function CustrequestComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.collection = [];
        this.tatarray = ['requestcats', 'requestsubcats', 'requesttype'];
        this.RequestID = '';
        this.submitted = false;
        this.enrdisval = false;
        this.exreqst = '';
        this.catval = '';
        this.subcatval = '';
        this.typecatval = '';
        this.grpname = '';
        this.tatdt = '';
        this.requestcats = [];
        this.requestsubcats = [];
        this.requesttype = [];
        this.requestdesc = [];
        this.reqstatus = [];
        //requestcats = ['USA', 'Canada', 'Uk'];
        //requestsubcats = ['USA', 'Canada', 'Uk'];
        //requesttype = ['USA', 'Canada', 'Uk'];
        //requestdesc = ['USA', 'Canada', 'Uk'];
        this.requestsource = ['USA', 'Canada', 'Uk'];
        //reqstatus = ['open', 'intiated', 'work in progress','rejected','closed'];
        this.subbolcat = false;
        this.bolcat = false;
        this.reqdesc = '';
        this.reqstval = '';
    }
    CustrequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('Customer Request');
        this.AgreementNo = this.route.snapshot.paramMap.get('agreement_no');
        console.log("AgreementNo=" + this.AgreementNo);
        this.RequestType = this.route.snapshot.paramMap.get('request_type');
        console.log("RequestType=" + this.RequestType);
        this.existreqid = this.route.snapshot.paramMap.get('requestid');
        console.log("existreqid=" + this.existreqid);
        /*this.custrequestdata = this.formBuilder.group({
          agreementno: ['', Validators.required],
          customername: ['', Validators.required],
          requestcategory: ['', Validators.required],
          requestsubcategory: ['', Validators.required],
          requesttype: ['', Validators.required],
          requestdescription: ['', Validators.required],
          requestdate: ['', Validators.required],
          requestsource: ['', Validators.required],
          tentativedate: ['', Validators.required],
          actualdate: ['', ''],
          requestkind: ['', Validators.required],
          requestid: ['', Validators.required],
          customer_mobileno: ['', ''],
          customer_mailid: ['', ''],
          requeststatus: ['', ''],
          vehicleno: ['', ''],
          customerid: ['', ''],
          remarks: ['', ''],
          catid: ['', ''],
          groupname: ['', '']
    
        });*/
        this.custrequestdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            agreementno: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            customername: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            requestcategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            requestsubcategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            requesttype: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            requestdescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            requestdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            requestsource: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            tentativedate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            requestkind: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            requestid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            actualdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            customer_mobileno: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            customer_mailid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            requeststatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            vehicleno: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            customerid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            catid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            groupname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            extagreementno: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            extcustomername: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            extrequestcategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            extrequestsubcategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            extrequesttype: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            extrequestdescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            extrequestdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            extrequestsource: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            exttentativedate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            extrequestkind: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            extrequestid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            extactualdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            extcustomer_mobileno: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            extcustomer_mailid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            extrequeststatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            extvehicleno: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            extcustomerid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            extremarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            extcatid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            extgroupname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        if (this.existreqid != '' && this.existreqid != null) {
            var gtstr = this.existreqid;
            this.RequestType = gtstr.substring(0, 2);
        }
        if (this.RequestType == 'SR') {
            this.requestclass = 'Service Request';
            this.requestdesc.push('Request');
        }
        else if (this.RequestType == 'CR') {
            this.requestclass = 'Complaints';
            this.requestdesc.push('complaint1', 'complaint2', 'complaint3');
        }
        else if (this.RequestType != '') {
            this.requestclass = 'General Enquiry';
        }
        console.log("requestclass=" + this.requestclass);
        if (this.existreqid == '' || this.existreqid == null) {
            this.reqstatus.push('open');
            var params = { 'agreement_no': this.AgreementNo };
            this.myservice.httpPostMethod('http://localhost:81/Angular/api_reqdetails.php', params, 'application/json', false, 'custservice')
                .then(function (resData) {
                if (resData != undefined) {
                    console.log("inside of resdata");
                    if (resData.hasOwnProperty('status')) {
                        console.log("inside of hasOwnProperty");
                        if (resData['status'] == 200) {
                            console.log("status=", resData);
                            var emirates = resData['body'];
                            console.log("emirates=" + emirates); //return false;
                            if (emirates != undefined && emirates != null && emirates != "") {
                                console.log("&&&&&&", emirates.success);
                                if (emirates.success) {
                                    var mesg = emirates.message;
                                    console.log("mesg=" + mesg);
                                    var splitrw = mesg.split('||');
                                    var reqdata = splitrw[1];
                                    console.log("reqdata=" + splitrw[1]);
                                    var splitcol = reqdata.split('$$');
                                    _this.collection.push({ "customer_name": splitcol[0], "customer_mailid": splitcol[1], "customer_mobileno": splitcol[2], "customerid": splitcol[3], "vehicleno": splitcol[4], "request_creation_dt": splitcol[5] });
                                    //alert("customername="+this.collection.length);
                                    var tatdata = splitrw[0];
                                    console.log("tatdata=" + splitrw[0]);
                                    var splitrow = tatdata.split('&&');
                                    var reclen = splitrow.length;
                                    for (var i = 0; i < reclen; i++) {
                                        console.log("splitrw of 0=" + splitrow[i]);
                                        var splitat = splitrow[i].split('~');
                                        var tatlen = splitat.length;
                                        console.log("tatlen=" + tatlen);
                                        console.log("tatarray=" + _this.tatarray[i]);
                                        var arrayval = _this.tatarray[i];
                                        console.log("arrayval=" + arrayval);
                                        for (var j = 0; j < tatlen - 1; j++) {
                                            //console.log("splitat="+splitat[j]);//{"reqtat": splitat[j]}
                                            if (i == 0) {
                                                _this.requestcats.push(splitat[j]);
                                            }
                                            else if (i == 1) {
                                                _this.requestsubcats.push(splitat[j]);
                                            }
                                            else {
                                                _this.requesttype.push(splitat[j]);
                                            }
                                        }
                                    }
                                }
                                else {
                                    alert("Invalid User credentilas");
                                    return false;
                                }
                            }
                        }
                        else {
                            console.log("Get City List API - Error Occured : " + resData['txt']);
                            return false;
                        }
                    }
                }
            }, function (error) {
                console.log("Error", error);
                //this.spinner.hide();
            });
        }
        else {
            //this.reqstatus.push('intiated','work in progess','rejected','closed');
            //let params = {'agreement_no':this.AgreementNo};
            var extparams = { 'requestid': this.existreqid };
            this.myservice.httpPostMethod('http://localhost:81/Angular/existreqdetails.php', extparams, 'application/json', false, 'custservice')
                .then(function (resData) {
                if (resData != undefined) {
                    console.log("inside of resdata");
                    if (resData.hasOwnProperty('status')) {
                        console.log("inside of hasOwnProperty");
                        if (resData['status'] == 200) {
                            console.log("status=", resData);
                            var emirates = resData['body'];
                            console.log("emirates=" + emirates); //return false;
                            if (emirates != undefined && emirates != null && emirates != "") {
                                console.log("&&&&&&", emirates.success);
                                if (emirates.success) {
                                    var mesg = emirates.message;
                                    console.log("mesg=" + mesg);
                                    var splitcol = mesg.split('$$');
                                    _this.collection = [];
                                    _this.collection.push({ "recid": splitcol[0], "request_category": splitcol[1], "request_subcategory": splitcol[2], "request_type": splitcol[3], "request_desc": splitcol[4], "groupname": splitcol[5], "agreement_no": splitcol[6], "customerid": splitcol[7], "catid": splitcol[8], "customer_mailid": splitcol[9], "customer_name": splitcol[10], "requeststatus": splitcol[11], "remarks": splitcol[12], "customer_mobileno": splitcol[13], "vehicleno": splitcol[14], "cust_groupid": splitcol[15], "assignedto": splitcol[16], "assignedusr": splitcol[17], "created_by": splitcol[18], "request_creation_dt": splitcol[19], "tentative_closing_dt": splitcol[20], "actual_closing_dt": splitcol[21], "requestsource": splitcol[22] });
                                    _this.exreqst = _this.collection[0].requeststatus;
                                    if (_this.exreqst == 'open') {
                                        _this.enrdisval = true;
                                    }
                                    else {
                                        _this.enrdisval = false;
                                        _this.reqstatus = [];
                                        _this.reqstatus.push('intiated', 'work in progess', 'rejected', 'closed');
                                    }
                                }
                                else {
                                    alert("Invalid User credentilas");
                                    return false;
                                }
                            }
                        }
                        else {
                            console.log("Get City List API - Error Occured : " + resData['txt']);
                            return false;
                        }
                    }
                }
            }, function (error) {
                console.log("Error", error);
                //this.spinner.hide();
            });
        }
    };
    CustrequestComponent.prototype.GetFunRequestSubCat = function (evt) {
        this.catval = evt.target.value;
        //console.log("catval="+catval);	
        //console.log("bolcat="+this.bolcat);	
        if (this.catval != '') {
            this.bolcat = true;
        }
        else {
            this.bolcat = false;
        }
        console.log("bolcat=" + this.bolcat);
    };
    CustrequestComponent.prototype.GetFunRequestType = function (evt) {
        this.subcatval = evt.target.value;
        //console.log("subcatval="+subcatval);
        //console.log("subbolcat="+this.subbolcat);		
        if (this.subcatval != '') {
            this.subbolcat = true;
        }
        else {
            this.subbolcat = false;
        }
        console.log("subbolcat=" + this.subbolcat);
    };
    CustrequestComponent.prototype.GetFunTatDt = function (evt) {
        var _this = this;
        this.typecatval = evt.target.value;
        //console.log("typecatval="+typecatval);
        var params = { 'catval': this.catval, 'subcatval': this.subcatval, 'typecatval': this.typecatval };
        this.myservice.httpPostMethod('http://localhost:81/Angular/get_tatdt.php', params, 'application/json', false, 'custservice')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitrw = mesg.split('||');
                                _this.grpname = splitrw[0];
                                console.log("grpname=" + _this.grpname);
                                _this.tatdt = splitrw[1];
                                console.log("tatdt=" + _this.tatdt);
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
            //this.spinner.hide();
        });
    };
    CustrequestComponent.prototype.onClickExit = function () {
        console.log("onClickExit");
        this.router.navigate(['/requestslist']);
        /* if(this.existgroupid!=null && this.existgroupid!='') {
            this.router.navigate(['/requestdetails',{"groupid":this.existgroupid}]);
        } else {
            this.router.navigate(['/requestslist']);
        } */
    };
    CustrequestComponent.prototype.onClickRCA = function () {
        console.log("onClickRCA");
        //this.router.navigate(['/requestdetails']);
    };
    CustrequestComponent.prototype.onClickSubmit = function (formval) {
        var _this = this;
        this.submitted = true;
        if (this.existreqid != '' && this.existreqid != null) {
            //console.log("requestcategory="+this.custrequestdata.controls['extagreementno'].value);  return false;
            console.log("requestcategory=" + formval.extagreementno);
            return false;
            /* console.log("requestsubcategory="+formval.requestsubcategory);
            console.log("requesttype="+formval.requesttype);
            console.log("requestdescription="+formval.requestdescription);
            console.log("requestsource="+formval.requestsource);
            console.log("remarks="+formval.remarks);
            console.log("requeststatus="+formval.requeststatus);
            console.log("requeststatus="+this.custrequestdata.requeststatus);
            console.log("grpname="+this.grpname);
            console.log("tatdt="+this.tatdt);
            console.log("requestclass="+this.requestclass);
            console.log("customername="+this.collection[0].customer_name);
            console.log("emailid="+this.collection[0].customer_mailid);
            console.log("mobileno="+this.collection[0].customer_mobileno);
            console.log("customerid="+this.collection[0].customerid);
            console.log("vehicleno="+this.collection[0].vehicleno);
            console.log("requestdt="+this.collection[0].request_creation_dt);   */
        }
        else {
            this.reqstval = 'open';
            //this.requeststatus =  formval.requeststatus;
            //console.log("requestcategory="+this.custrequestdata.controls['agreementno'].value);  return false;
            console.log("requestcategory=" + formval.agreementno);
            return false;
            /* console.log("requestsubcategory="+formval.requestsubcategory);
            console.log("requesttype="+formval.requesttype);
            console.log("requestdescription="+formval.requestdescription);
            console.log("requestsource="+formval.requestsource);
            console.log("remarks="+formval.remarks);
            console.log("requeststatus="+formval.requeststatus);
            console.log("requeststatus="+this.custrequestdata.requeststatus);
            console.log("grpname="+this.grpname);
            console.log("tatdt="+this.tatdt);
            console.log("requestclass="+this.requestclass);
            console.log("customername="+this.collection[0].customer_name);
            console.log("emailid="+this.collection[0].customer_mailid);
            console.log("mobileno="+this.collection[0].customer_mobileno);
            console.log("customerid="+this.collection[0].customerid);
            console.log("vehicleno="+this.collection[0].vehicleno);
            console.log("requestdt="+this.collection[0].request_creation_dt);   */
        }
        if (this.RequestType == 'SR') {
            this.reqdesc = 'Request';
        }
        else if (this.RequestType == 'CR') {
            //	this.requestdescription = formval.requestdescription;
        }
        //console.log("requestdescription="+this.requestdescription);  
        //console.log("requeststatus="+this.requeststatus); 
        //let params = {'agreement_no':this.AgreementNo,'customername':this.collection[0].customer_name,'emailid':this.collection[0].customer_mailid,'mobileno':this.collection[0].customer_mobileno,'customerid':this.collection[0].customerid,'vehicleno':this.collection[0].vehicleno,'requestdt':this.collection[0].request_creation_dt,'catval':this.catval,'subcatval':this.subcatval,'typecatval':this.typecatval,'requestdesc':this.reqdesc,'requestsource':formval.requestsource,'remarks':formval.remarks,'groupname':this.grpname,'tatdate':this.tatdt,'requestclass':this.requestclass,'requeststatus':this.reqstval,'requesttype':this.RequestType};
        var params = { 'agreement_no': '' };
        this.myservice.httpPostMethod('http://localhost:81/Angular/submitrequest.php', params, 'application/json', false, 'custservice')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                alert("Request has been created successfully");
                                _this.router.navigate(['/requestdetails', { 'requestid': mesg }]);
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
        });
    };
    CustrequestComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CustrequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custrequest',
            template: __webpack_require__(/*! raw-loader!./custrequest.component.html */ "./node_modules/raw-loader/index.js!./src/app/custrequest/custrequest.component.html"),
            styles: [__webpack_require__(/*! ./custrequest.component.css */ "./src/app/custrequest/custrequest.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CustrequestComponent);
    return CustrequestComponent;
}());



/***/ }),

/***/ "./src/app/custservice/custservice.component.css":
/*!*******************************************************!*\
  !*** ./src/app/custservice/custservice.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.containercls {\r\n    \r\tmargin-top: 50px;\r\n    /* position: absolute; */\r\n    /* z-index: -1; */\r\n    height: 100%;\r\n\t/* left: 25%;  */\r\n    /* margin-bottom: 150px; */\r\n  }\r\n\r\n  #search,#clear {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 17px;\r\n    padding-right: 10px;\r\n    /* position: relative; */\r\n    /* left: -15px; */\r\n    /* right: 338px; */\r\n\r\n}\r\n\r\n  input[type=text] {\r\n  width: 15%;\r\n  /* display: inline-block; */\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  padding: 8px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n \r\n}\r\n\r\n  /* .radio{\r\n  margin-top: -60px;\r\n} */\r\n\r\n  .hrbarul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #bd2130;\r\n}\r\n\r\n  .hrbarli {\r\n  float: left;\r\n}\r\n\r\n  .hrbarli .active {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n  .hrbarli .active:hover {\r\n  background-color: #111;\r\n}\r\n\r\n  .tablecls {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n  th {\r\n\tcolor: #bd2130;\t\r\n}\r\n\r\n  th, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\n  tr:nth-child(even) {background-color: #f2f2f2;}\r\n\r\n  .tbltxt{\r\n  /* width:100px !important; */\r\n  text-align: center;\r\n \r\n }\r\n\r\n  .EnDetailLink {\r\n  color: #bd2130;\r\n }\r\n\r\n  @media only screen and (max-width: 1024px) {\r\n  input[type=text] {\r\n\t  width: 45%;\r\n\t  /* display: inline-block; */\r\n\t  border: 1px solid #ccc;\r\n\t  border-radius: 5px;\r\n\t  padding: 8px 20px;\r\n\t  margin: 8px 0;\r\n\t  display: inline-block;\r\n\t  border: 1px solid #ccc;\r\n\t  box-sizing: border-box;\r\n\t \r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdHNlcnZpY2UvY3VzdHNlcnZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7TUFDTSxnQkFBZ0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2YsZ0JBQWdCO0lBQ2IsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7RUFHQTtFQUNFLFVBQVU7RUFDViwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCOztBQUV4Qjs7RUFDQTs7R0FFRzs7RUFFSDtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0VBRUE7RUFDRSxXQUFXO0FBQ2I7O0VBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztFQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztFQUVDO0VBQ0MseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7RUFDQTtDQUNDLGNBQWM7QUFDZjs7RUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0VBRUEsb0JBQW9CLHlCQUF5QixDQUFDOztFQUU5QztFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7O0NBRW5COztFQUdBO0VBQ0MsY0FBYztDQUNmOztFQUVBO0VBQ0M7R0FDQyxVQUFVO0dBQ1YsMkJBQTJCO0dBQzNCLHNCQUFzQjtHQUN0QixrQkFBa0I7R0FDbEIsaUJBQWlCO0dBQ2pCLGFBQWE7R0FDYixxQkFBcUI7R0FDckIsc0JBQXNCO0dBQ3RCLHNCQUFzQjs7Q0FFeEI7QUFDRCIsImZpbGUiOiJzcmMvYXBwL2N1c3RzZXJ2aWNlL2N1c3RzZXJ2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lcmNscyB7XHJcbiAgICBcclx0bWFyZ2luLXRvcDogNTBweDtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgIC8qIHotaW5kZXg6IC0xOyAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cdC8qIGxlZnQ6IDI1JTsgICovXHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAxNTBweDsgKi9cclxuICB9XHJcblxyXG4gICNzZWFyY2gsI2NsZWFyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiZDIxMzA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXHJcbiAgICBib3JkZXI6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAvKiBsZWZ0OiAtMTVweDsgKi9cclxuICAgIC8qIHJpZ2h0OiAzMzhweDsgKi9cclxuXHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA4cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiBcclxufVxyXG4vKiAucmFkaW97XHJcbiAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbn0gKi9cclxuXHJcbi5ocmJhcnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQyMTMwO1xyXG59XHJcblxyXG4uaHJiYXJsaSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5ocmJhcmxpIC5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmhyYmFybGkgLmFjdGl2ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxufVxyXG5cclxuIC50YWJsZWNscyB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG50aCB7XHJcblx0Y29sb3I6ICNiZDIxMzA7XHRcclxufVxyXG50aCwgdGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fSBcclxuXHJcbi50Ymx0eHR7XHJcbiAgLyogd2lkdGg6MTAwcHggIWltcG9ydGFudDsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxuIH1cclxuXHJcblxyXG4gLkVuRGV0YWlsTGluayB7XHJcbiAgY29sb3I6ICNiZDIxMzA7XHJcbiB9XHJcblxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICBpbnB1dFt0eXBlPXRleHRdIHtcclxuXHQgIHdpZHRoOiA0NSU7XHJcblx0ICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcblx0ICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cdCAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdCAgcGFkZGluZzogOHB4IDIwcHg7XHJcblx0ICBtYXJnaW46IDhweCAwO1xyXG5cdCAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdCAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHQgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0IFxyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/custservice/custservice.component.ts":
/*!******************************************************!*\
  !*** ./src/app/custservice/custservice.component.ts ***!
  \******************************************************/
/*! exports provided: CustserviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustserviceComponent", function() { return CustserviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






//import { DataTableDirective } from 'angular-datatables';

var CustserviceComponent = /** @class */ (function () {
    function CustserviceComponent(formBuilder, router, http, myservice, cookieService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.cookieService = cookieService;
        this.quicksrch = true;
        this.verifycheckbx = false;
        this.linkval = '';
        this.collection = [];
    }
    CustserviceComponent.prototype.ngOnInit = function () {
        this.myservice.setTitle('Customer Service');
        this.custservicedata = this.formBuilder.group({
            custname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z]+$/)],
            aadherno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]\d{12}$/)],
            mobileno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[6-9]\d{9}$/)],
            panno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[[a-zA-Z0-9]\d{10}$/)],
            agreementno: ['', ''],
            emailid: ['', ''],
            api_chkbx: ['', '']
        });
    };
    CustserviceComponent.prototype.EnableQuicksrch = function () {
        this.quicksrch = true;
    };
    CustserviceComponent.prototype.EnableAdvancesrch = function () {
        this.quicksrch = false;
    };
    CustserviceComponent.prototype.onClickSubmit = function (searchvalue) {
        var _this = this;
        if (this.custservicedata.invalid) {
            return false;
        }
        console.log("custservice=" + searchvalue.api_chkbx);
        if (searchvalue.api_chkbx != "") {
            if (searchvalue.mobileno != '') {
                var api_name = searchvalue.api_chkbx;
                var agreement_no = searchvalue.agreementno;
                var reg_mobile = searchvalue.mobileno;
                // var params = 'usrname='+usrname+'&pwd='+pwd;x-www-form-urlencoded
                console.log("username=" + api_name + "--password=" + agreement_no + "--reg_mobile=" + reg_mobile);
                var params = { 'api_name': api_name, 'agreement_no': agreement_no, 'reg_mobile': reg_mobile };
                this.myservice.httpPostMethod('http://localhost:81/Angular/api_search.php', params, 'application/json', false, 'custservice')
                    .then(function (resData) {
                    if (resData != undefined) {
                        console.log("inside of resdata");
                        if (resData.hasOwnProperty('status')) {
                            console.log("inside of hasOwnProperty");
                            if (resData['status'] == 200) {
                                console.log("status=", resData);
                                var emirates = resData['body'];
                                console.log("emirates=" + emirates); //return false;
                                if (emirates != undefined && emirates != null && emirates != "") {
                                    console.log("&&&&&&", emirates.success);
                                    if (emirates.success) {
                                        var mesg = emirates.message;
                                        console.log("mesg=" + mesg);
                                        var splitrw = mesg.split('||');
                                        console.log("splitrw=" + splitrw.length);
                                        var reclen = splitrw.length;
                                        for (var i = 0; i < reclen - 1; i++) {
                                            console.log("splitrw of i=" + splitrw[i]);
                                            var splitcol = splitrw[i].split('$$');
                                            console.log("splitcol=" + splitcol.length);
                                            //for(var j=0;j<splitcol.length;j++) {
                                            //console.log("splitcol of j="+splitcol[j]);
                                            _this.collection.push({ "slno": i + 1, "id": splitcol[0], "agreementno": splitcol[1], "customername": splitcol[2], "dob": splitcol[3], "emailid": splitcol[4], "cifno": splitcol[5], "groupid": splitcol[6], "mobileno": splitcol[7], "panno": splitcol[8], "customerid": splitcol[9], "loanamtfin": splitcol[10], "emi": splitcol[11], "disbdate": splitcol[12], "nocdate": splitcol[13], "disbstatus": splitcol[14], "npastage": splitcol[15], "branchname": splitcol[17], "vehicleno": splitcol[18], "loanstatus": splitcol[19] });
                                            // }
                                        }
                                        //alert("Successfully Logged-In");
                                        //this.router.navigate(['/menu']);
                                    }
                                    else {
                                        alert("Invalid User credentilas");
                                        return false;
                                    }
                                }
                            }
                            else {
                                console.log("Get City List API - Error Occured : " + resData['txt']);
                                return false;
                            }
                        }
                    }
                }, function (error) {
                    console.log("Error", error);
                    //this.spinner.hide();
                });
            }
            else {
                alert("Please Enter Mobile Number");
                return false;
            }
        }
        else {
            alert("Please Select API Type");
            return false;
        }
    };
    CustserviceComponent.prototype.OnClickClear = function () {
        this.custservicedata.reset();
    };
    CustserviceComponent.prototype.verifyCheckBox = function (event, checkbxval) {
        console.log("checkbxval=" + checkbxval);
        this.linkval = checkbxval;
        if (event.target.checked) {
            this.verifycheckbx = true;
        }
        else {
            this.verifycheckbx = false;
            this.linkval = '';
        }
    };
    CustserviceComponent.prototype.fn_redirect = function (agreement_no) {
        console.log("agreement_no=" + agreement_no);
        this.router.navigate(['/customerdetails', { 'agreement_no': agreement_no }]);
    };
    CustserviceComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_5__["MyserviceService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    CustserviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custservice',
            template: __webpack_require__(/*! raw-loader!./custservice.component.html */ "./node_modules/raw-loader/index.js!./src/app/custservice/custservice.component.html"),
            styles: [__webpack_require__(/*! ./custservice.component.css */ "./src/app/custservice/custservice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_5__["MyserviceService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], CustserviceComponent);
    return CustserviceComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --------------------------- footer css (start)---------------------------------- */\r\n.footer {\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n\tbackground-color: #bd2130;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tpadding: 10px;\r\n}\r\n/* --------------------------- footer css (end)---------------------------------- */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRjtBQUNyRjtDQUNDLGVBQWU7Q0FDZixPQUFPO0NBQ1AsU0FBUztDQUNULFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQix5Q0FBeUM7Q0FDekMsYUFBYTtBQUNkO0FBQ0EsbUZBQW1GIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvb3RlciBjc3MgKHN0YXJ0KS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZvb3RlciB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGxlZnQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb290ZXIgY3NzIChlbmQpLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/groupdetails/groupdetails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/groupdetails/groupdetails.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n\t\r\n  }\r\n  .maindiv {\r\n\tmargin-top:100px;  \r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .goback {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    position: relative;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBkZXRhaWxzL2dyb3VwZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCOztFQUV4QjtFQUNBO0NBQ0QsZ0JBQWdCO0VBQ2Y7RUFDQSw0REFBNEQ7RUFDNUQ7SUFDRSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCO0VBRUEsbUNBQW1DO0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBkZXRhaWxzL2dyb3VwZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFxyXG4gIH1cclxuICAubWFpbmRpdiB7XHJcblx0bWFyZ2luLXRvcDoxMDBweDsgIFxyXG4gIH1cclxuICAvKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLyogaGVpZ2h0OiAzMDBweDsgICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gIC5yb3d0Ymw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5nb2JhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2JkMjEzMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIGJvcmRlcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/groupdetails/groupdetails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/groupdetails/groupdetails.component.ts ***!
  \********************************************************/
/*! exports provided: GroupdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupdetailsComponent", function() { return GroupdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var GroupdetailsComponent = /** @class */ (function () {
    function GroupdetailsComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.collection = [];
        this.GroupID = '';
    }
    GroupdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('Group Master');
        this.GroupID = this.route.snapshot.paramMap.get('groupid');
        console.log("GroupID=" + this.GroupID);
        var params = { 'recidval': this.GroupID };
        this.myservice.httpPostMethod('http://localhost:81/Angular/getgroupdetails.php', params, 'application/json', false, 'groupdetails')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitcol = mesg.split('$$');
                                _this.collection.push({ "groupname": splitcol[0], "groupid": splitcol[1], "company": splitcol[2], "recid": splitcol[3] });
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
            //this.spinner.hide();
        });
    };
    GroupdetailsComponent.prototype.GoBack = function () {
        this.router.navigate(['/groupslist']);
    };
    GroupdetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    GroupdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groupdetails',
            template: __webpack_require__(/*! raw-loader!./groupdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/groupdetails/groupdetails.component.html"),
            styles: [__webpack_require__(/*! ./groupdetails.component.css */ "./src/app/groupdetails/groupdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], GroupdetailsComponent);
    return GroupdetailsComponent;
}());



/***/ }),

/***/ "./src/app/groupslist/groupslist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/groupslist/groupslist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.maindiv {\r\n\t/* margin-top:50px; */\r\n}\r\n\r\n tablecls {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n th {\r\n\tcolor: #bd2130;\r\n}\r\n\r\n th, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\n tr:nth-child(even) {background-color: #f2f2f2;}\r\n\r\n .tbltxt{\r\n  /* width:100px !important; */\r\n  text-align: center;\r\n \r\n }\r\n\r\n .EnDetailLink,.Editicon {\r\n  color: #bd2130;\r\n }\r\n\r\n .inputborder {\r\n    border-top: 1px;\r\n    border-left: 1px;\r\n    padding: 5px;\r\n    border-bottom: groove;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzbGlzdC9ncm91cHNsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOztDQUVDO0VBQ0MseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7Q0FDQTtDQUNDLGNBQWM7QUFDZjs7Q0FDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0NBRUEsb0JBQW9CLHlCQUF5QixDQUFDOztDQUU5QztFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7O0NBRW5COztDQUVBO0VBQ0MsY0FBYztDQUNmOztDQUVEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzbGlzdC9ncm91cHNsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW5kaXYge1xyXG5cdC8qIG1hcmdpbi10b3A6NTBweDsgKi9cclxufVxyXG5cclxuIHRhYmxlY2xzIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRoIHtcclxuXHRjb2xvcjogI2JkMjEzMDtcclxufVxyXG50aCwgdGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fSBcclxuXHJcbi50Ymx0eHR7XHJcbiAgLyogd2lkdGg6MTAwcHggIWltcG9ydGFudDsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxuIH1cclxuXHJcbiAuRW5EZXRhaWxMaW5rLC5FZGl0aWNvbiB7XHJcbiAgY29sb3I6ICNiZDIxMzA7XHJcbiB9XHJcblxyXG4uaW5wdXRib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IGdyb292ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/groupslist/groupslist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/groupslist/groupslist.component.ts ***!
  \****************************************************/
/*! exports provided: GroupslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupslistComponent", function() { return GroupslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");








var GroupslistComponent = /** @class */ (function () {
    function GroupslistComponent(formBuilder, router, http, myservice, route, cookieService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.cookieService = cookieService;
        this.collection = [];
    }
    GroupslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.myservice.setTitle('Request List');
        this.myservice.setTitle('Group Master');
        var params = { 'requestid': '' };
        this.myservice.httpPostMethod('http://localhost:81/Angular/groupslist.php', params, 'application/json', false, 'roleslist')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitrow = mesg.split('||');
                                var reclen = splitrow.length;
                                for (var i = 0; i < reclen - 1; i++) {
                                    var splitcol = splitrow[i].split('$$');
                                    _this.collection.push({ "groupname": splitcol[0], "groupid": splitcol[1], "company": splitcol[2], "recid": splitcol[3] });
                                }
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
            //this.spinner.hide();
        });
    };
    GroupslistComponent.prototype.EditSelrec = function (recidval) {
        console.log("EditSelrec=" + recidval);
        this.router.navigate(['/creategroup', { 'groupid': recidval }]);
    };
    GroupslistComponent.prototype.fn_redirect = function (requestidval) {
        this.router.navigate(['/groupdetails', { 'groupid': requestidval }]);
    };
    GroupslistComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    GroupslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groupslist',
            template: __webpack_require__(/*! raw-loader!./groupslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/groupslist/groupslist.component.html"),
            styles: [__webpack_require__(/*! ./groupslist.component.css */ "./src/app/groupslist/groupslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], GroupslistComponent);
    return GroupslistComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .parent {display: block;position: relative;float: left;} */\r\n/*line-height: 30px;background-color: #4FA0D8;border-right:#CCC 1px solid;*/\r\n/* .parent a{margin: 10px;color: #FFFFFF;text-decoration: none;} */\r\n.parent:hover > ul {display:block;position:absolute;z-index:1000;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:center;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;}\r\n.child2 {display: none;}\r\n.child2 li a{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}\r\n.child2 li a:focus,.child2 li a:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}\r\n.child2 li a:active{color:#fff;text-decoration:none;background-color:#007bff}\r\nul{list-style: none;margin: 0;padding: 0px; min-width:10em;}\r\n/* ul ul {left: 50%;top: 100%;margin-left:1px;width:175px;} */\r\n/* ul#masterul ul {left: 50%;top: 100%;margin-left:1px;width:180px;}\r\nul#csmul ul {left: 50%;top: 100%;margin-left:1px;width:100px;}\r\n */\r\nul ul ul#fstul{left: 100%;top: 0;margin-left:1px;}\r\nul ul ul#secul{left: 100%;top: 15%;margin-left:1px;}\r\nul ul ul#trdul{left: 100%;top: 30%;margin-left:1px;}\r\nul ul ul#frtul{left: 100%;top: 45%;margin-left:1px;}\r\nul ul ul#fivul{left: 100%;top: 60%;margin-left:1px;}\r\nul ul ul#sixul{left: 100%;top: 75%;margin-left:1px;}\r\nul ul ul#csmfstul{left: 100%;top: 50%;margin-left:1px;}\r\nul ul ul#csmsecul{left: 100%;top: 70%;margin-left:1px;}\r\nli:active {background-color: none;}\r\n.parent li:hover {display: block;background-color: #fff;}\r\n.expand{font-size:12px;float:right;margin-right:-5px;}\r\n#main,#mySidebar {\r\n\t\tdisplay:none !important;\r\n\t}\r\n#botbtn {\r\n\t\tdisplay:none !important;\r\n\t}\r\n@media screen and (max-width: 1024px) {\r\n\t\r\n\t#main,#mySidebar {\r\n\t\tdisplay:block !important;\r\n\t}\r\n\t#botbtn {\r\n\t\tdisplay:none !important;\r\n\t}\r\n\t\r\n\t.sidebar {\r\n\t  height: 100%;\r\n\t  width: 0;\r\n\t  position: fixed;\r\n\t  z-index: 1;\r\n\t  top: 0;\r\n\t  left: 0;\r\n\t  background-color: #fff;\r\n\t  overflow-x: hidden;\r\n\t  transition: 0.5s;\r\n\t  padding-top: 60px;\r\n\t  \r\n\t}\r\n\r\n\t.sidebar a {\r\n\t  padding: 8px 8px 8px 32px;\r\n\t  text-decoration: none;\r\n\t  font-size: 25px;\r\n\t  color: #bd2130;\r\n\t  display: block;\r\n\t  transition: 0.3s;\r\n\t}\r\n\r\n\t.sidebar a:hover {\r\n\t  color: #f1f1f1;\r\n\t}\r\n\r\n\t.sidebar .closebtn {\r\n\t  position: absolute;\r\n\t  top: 0;\r\n\t  right: 25px;\r\n\t  font-size: 36px;\r\n\t  margin-left: 50px;\r\n\t  text-align:center;\r\n\t  color:#bd2130;\r\n\t}\r\n\r\n\t.openbtn {\r\n\t  /* font-size: 20px;\r\n\t  cursor: pointer;\r\n\t  background-color: #111;\r\n\t  color: white;\r\n\t  padding: 10px 15px;\r\n\t  border: none; */\r\n\t      padding: .25rem .75rem;\r\n\t\tfont-size: 1.25rem;\r\n\t\tline-height: 1;\r\n\t\tbackground-color: transparent;\r\n\t\tborder: 1px solid transparent;\r\n\t\tborder-radius: .25rem;\r\n\t\t    color: rgba(0,0,0,.5);\r\n    border-color: rgba(0,0,0,.1);\r\n\t-webkit-appearance: button;\r\n\ttext-transform: none;\r\n\toverflow: visible;\r\n\t}\r\n\r\n\t.openbtn:hover {\r\n\t  background-color: #444;\r\n\t}\r\n\r\n\t#main {\r\n\t  transition: margin-left .5s;\r\n\t  padding: 16px;\r\n\t}\r\n\r\n\t/* .sidenav {\r\n\t  height: 100%;\r\n\t  width: 200px;\r\n\t  position: fixed;\r\n\t  z-index: 1;\r\n\t  top: 0;\r\n\t  left: 0;\r\n\t  background-color: #111;\r\n\t  overflow-x: hidden;\r\n\t  padding-top: 20px;\r\n\t} */\r\n\r\n\r\n\t\t/* Style the sidenav links and the dropdown button */\r\n\t.sidebar a, .dropdown-btn {\r\n\t  padding: 6px 8px 6px 16px;\r\n\t  text-decoration: none;\r\n\t  font-size: 20px;\r\n\t  color: #bd2130;\r\n\t  display: block;\r\n\t  border: none;\r\n\t  background: none;\r\n\t  width: 100%;\r\n\t  text-align: left;\r\n\t  cursor: pointer;\r\n\t  outline: none;\r\n\t}\r\n\r\n\t/* On mouse-over */\r\n\t.sidebar a:hover, .dropdown-btn:hover {\r\n\t  color: #bd2130;\r\n\t}\r\n\r\n\t/* Main content */\r\n\t.main {\r\n\t  margin-left: 200px; /* Same as the width of the sidenav */\r\n\t  font-size: 20px; /* Increased text to enable scrolling */\r\n\t  padding: 0px 10px;\r\n\t}\r\n\r\n\t/* Add an active class to the active dropdown button */\r\n\t.active {\r\n\t  background-color: green;\r\n\t  color: blue;\r\n\t}\r\n\r\n\t/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\r\n\t.dropdown-container {\r\n\t  display: none;\r\n\t  background-color: yellow;\r\n\t  padding-left: 8px;\r\n\t}\r\n\r\n\t/* Optional: Style the caret down icon */\r\n\t.fa-caret-down {\r\n\t  float: right;\r\n\t  padding-right: 8px;\r\n\t}\r\n\r\n\r\n\t\r\n}\r\n@media screen and (max-height: 450px) {\r\n\t  .sidebar {padding-top: 15px;}\r\n\t  .sidebar a {font-size: 18px;}\r\n}\r\n/* --------------------------- Header css (start)---------------------------------- */\r\n/*.header {\r\n\tposition: fixed;\r\n    left: 0;\r\n    top:0;\r\n\t\r\n\twidth: 100%;\r\n\tbackground-color:#bd2130;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n    padding: 10px; \r\n}*/\r\n/* --------------------------- Header css (end)---------------------------------- */\r\n/*\r\n@media screen and (max-width: 800px) {\r\n\t.header_home_header{\r\n\t\tpadding-top: 10px!important;\r\n\t\tbackground-color: #ffffff;\r\n\t\tmargin-bottom: 10px;\r\n\t\tpadding-left: 0%!important; \r\n\t\tpadding-right: 0%!important; \r\n\t\t\r\n\t}\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCwyRUFBMkU7QUFDM0Usa0VBQWtFO0FBQ2xFLG9CQUFvQixhQUFhLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLDJCQUEyQixDQUFDLGdDQUFnQyxDQUFDLG9CQUFvQixDQUFDO0FBRXRTLFNBQVMsYUFBYSxDQUFDO0FBRXZCLGFBQWEsYUFBYSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxRQUFRO0FBRWhMLHNDQUFzQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCO0FBRWpHLG9CQUFvQixVQUFVLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCO0FBRzVFLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7QUFFM0QsNkRBQTZEO0FBQzdEOztFQUVFO0FBQ0YsZUFBZSxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztBQUNqRCxlQUFlLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQ25ELGVBQWUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDbkQsZUFBZSxVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUNuRCxlQUFlLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQ25ELGVBQWUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFFbkQsa0JBQWtCLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQ3RELGtCQUFrQixVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUV0RCxXQUFXLHNCQUFzQixDQUFDO0FBRWxDLGtCQUFrQixjQUFjLENBQUMsc0JBQXNCLENBQUM7QUFFeEQsUUFBUSxjQUFjLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDO0FBS3JEO0VBQ0UsdUJBQXVCO0NBQ3hCO0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEI7QUFDRDs7Q0FFQztFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsdUJBQXVCO0NBQ3hCOztDQUVBO0dBQ0UsWUFBWTtHQUNaLFFBQVE7R0FDUixlQUFlO0dBQ2YsVUFBVTtHQUNWLE1BQU07R0FDTixPQUFPO0dBQ1Asc0JBQXNCO0dBQ3RCLGtCQUFrQjtHQUNsQixnQkFBZ0I7R0FDaEIsaUJBQWlCOztDQUVuQjs7Q0FFQTtHQUNFLHlCQUF5QjtHQUN6QixxQkFBcUI7R0FDckIsZUFBZTtHQUNmLGNBQWM7R0FDZCxjQUFjO0dBQ2QsZ0JBQWdCO0NBQ2xCOztDQUVBO0dBQ0UsY0FBYztDQUNoQjs7Q0FFQTtHQUNFLGtCQUFrQjtHQUNsQixNQUFNO0dBQ04sV0FBVztHQUNYLGVBQWU7R0FDZixpQkFBaUI7R0FDakIsaUJBQWlCO0dBQ2pCLGFBQWE7Q0FDZjs7Q0FFQTtHQUNFOzs7OztrQkFLZTtPQUNYLHNCQUFzQjtFQUMzQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IscUJBQXFCO01BQ2pCLHFCQUFxQjtJQUN2Qiw0QkFBNEI7Q0FDL0IsMEJBQTBCO0NBQzFCLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakI7O0NBRUE7R0FDRSxzQkFBc0I7Q0FDeEI7O0NBRUE7R0FDRSwyQkFBMkI7R0FDM0IsYUFBYTtDQUNmOztDQUVBOzs7Ozs7Ozs7O0lBVUc7OztFQUdGLG9EQUFvRDtDQUNyRDtHQUNFLHlCQUF5QjtHQUN6QixxQkFBcUI7R0FDckIsZUFBZTtHQUNmLGNBQWM7R0FDZCxjQUFjO0dBQ2QsWUFBWTtHQUNaLGdCQUFnQjtHQUNoQixXQUFXO0dBQ1gsZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixhQUFhO0NBQ2Y7O0NBRUEsa0JBQWtCO0NBQ2xCO0dBQ0UsY0FBYztDQUNoQjs7Q0FFQSxpQkFBaUI7Q0FDakI7R0FDRSxrQkFBa0IsRUFBRSxxQ0FBcUM7R0FDekQsZUFBZSxFQUFFLHVDQUF1QztHQUN4RCxpQkFBaUI7Q0FDbkI7O0NBRUEsc0RBQXNEO0NBQ3REO0dBQ0UsdUJBQXVCO0dBQ3ZCLFdBQVc7Q0FDYjs7Q0FFQSx3SkFBd0o7Q0FDeEo7R0FDRSxhQUFhO0dBQ2Isd0JBQXdCO0dBQ3hCLGlCQUFpQjtDQUNuQjs7Q0FFQSx3Q0FBd0M7Q0FDeEM7R0FDRSxZQUFZO0dBQ1osa0JBQWtCO0NBQ3BCOzs7O0FBSUQ7QUFFQTtHQUNHLFVBQVUsaUJBQWlCLENBQUM7R0FDNUIsWUFBWSxlQUFlLENBQUM7QUFDL0I7QUFDQSxxRkFBcUY7QUFDckY7Ozs7Ozs7Ozs7O0VBV0U7QUFDRixtRkFBbUY7QUFFbkY7Ozs7Ozs7Ozs7R0FVRyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5wYXJlbnQge2Rpc3BsYXk6IGJsb2NrO3Bvc2l0aW9uOiByZWxhdGl2ZTtmbG9hdDogbGVmdDt9ICovXHJcbi8qbGluZS1oZWlnaHQ6IDMwcHg7YmFja2dyb3VuZC1jb2xvcjogIzRGQTBEODtib3JkZXItcmlnaHQ6I0NDQyAxcHggc29saWQ7Ki9cclxuLyogLnBhcmVudCBhe21hcmdpbjogMTBweDtjb2xvcjogI0ZGRkZGRjt0ZXh0LWRlY29yYXRpb246IG5vbmU7fSAqL1xyXG4ucGFyZW50OmhvdmVyID4gdWwge2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Zsb2F0OmxlZnQ7bWluLXdpZHRoOjEwcmVtO3BhZGRpbmc6LjVyZW0gMDttYXJnaW46LjEyNXJlbSAwIDA7Zm9udC1zaXplOjFyZW07Y29sb3I6IzIxMjUyOTt0ZXh0LWFsaWduOmNlbnRlcjtsaXN0LXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTtib3JkZXItcmFkaXVzOi4yNXJlbTt9XHJcblxyXG4uY2hpbGQyIHtkaXNwbGF5OiBub25lO31cclxuXHJcbi5jaGlsZDIgbGkgYXtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7cGFkZGluZzouMjVyZW0gMS41cmVtO2NsZWFyOmJvdGg7Zm9udC13ZWlnaHQ6NDAwO2NvbG9yOiMyMTI1Mjk7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOm5vd3JhcDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjowfVxyXG5cclxuLmNoaWxkMiBsaSBhOmZvY3VzLC5jaGlsZDIgbGkgYTpob3Zlcntjb2xvcjojMTYxODFiO3RleHQtZGVjb3JhdGlvbjpub25lO2JhY2tncm91bmQtY29sb3I6I2Y4ZjlmYX1cclxuXHJcbi5jaGlsZDIgbGkgYTphY3RpdmV7Y29sb3I6I2ZmZjt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmZ9XHJcblxyXG5cclxudWx7bGlzdC1zdHlsZTogbm9uZTttYXJnaW46IDA7cGFkZGluZzogMHB4OyBtaW4td2lkdGg6MTBlbTt9XHJcblxyXG4vKiB1bCB1bCB7bGVmdDogNTAlO3RvcDogMTAwJTttYXJnaW4tbGVmdDoxcHg7d2lkdGg6MTc1cHg7fSAqL1xyXG4vKiB1bCNtYXN0ZXJ1bCB1bCB7bGVmdDogNTAlO3RvcDogMTAwJTttYXJnaW4tbGVmdDoxcHg7d2lkdGg6MTgwcHg7fVxyXG51bCNjc211bCB1bCB7bGVmdDogNTAlO3RvcDogMTAwJTttYXJnaW4tbGVmdDoxcHg7d2lkdGg6MTAwcHg7fVxyXG4gKi9cclxudWwgdWwgdWwjZnN0dWx7bGVmdDogMTAwJTt0b3A6IDA7bWFyZ2luLWxlZnQ6MXB4O31cclxudWwgdWwgdWwjc2VjdWx7bGVmdDogMTAwJTt0b3A6IDE1JTttYXJnaW4tbGVmdDoxcHg7fVxyXG51bCB1bCB1bCN0cmR1bHtsZWZ0OiAxMDAlO3RvcDogMzAlO21hcmdpbi1sZWZ0OjFweDt9XHJcbnVsIHVsIHVsI2ZydHVse2xlZnQ6IDEwMCU7dG9wOiA0NSU7bWFyZ2luLWxlZnQ6MXB4O31cclxudWwgdWwgdWwjZml2dWx7bGVmdDogMTAwJTt0b3A6IDYwJTttYXJnaW4tbGVmdDoxcHg7fVxyXG51bCB1bCB1bCNzaXh1bHtsZWZ0OiAxMDAlO3RvcDogNzUlO21hcmdpbi1sZWZ0OjFweDt9XHJcblxyXG51bCB1bCB1bCNjc21mc3R1bHtsZWZ0OiAxMDAlO3RvcDogNTAlO21hcmdpbi1sZWZ0OjFweDt9XHJcbnVsIHVsIHVsI2NzbXNlY3Vse2xlZnQ6IDEwMCU7dG9wOiA3MCU7bWFyZ2luLWxlZnQ6MXB4O31cclxuXHJcbmxpOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogbm9uZTt9XHJcblxyXG4ucGFyZW50IGxpOmhvdmVyIHtkaXNwbGF5OiBibG9jaztiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO31cclxuXHJcbi5leHBhbmR7Zm9udC1zaXplOjEycHg7ZmxvYXQ6cmlnaHQ7bWFyZ2luLXJpZ2h0Oi01cHg7fVxyXG5cclxuXHJcblxyXG5cclxuI21haW4sI215U2lkZWJhciB7XHJcblx0XHRkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG4jYm90YnRuIHtcclxuXHRcdGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblx0XHJcblx0I21haW4sI215U2lkZWJhciB7XHJcblx0XHRkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCNib3RidG4ge1xyXG5cdFx0ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdFxyXG5cdC5zaWRlYmFyIHtcclxuXHQgIGhlaWdodDogMTAwJTtcclxuXHQgIHdpZHRoOiAwO1xyXG5cdCAgcG9zaXRpb246IGZpeGVkO1xyXG5cdCAgei1pbmRleDogMTtcclxuXHQgIHRvcDogMDtcclxuXHQgIGxlZnQ6IDA7XHJcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdCAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cdCAgdHJhbnNpdGlvbjogMC41cztcclxuXHQgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG5cdCAgXHJcblx0fVxyXG5cclxuXHQuc2lkZWJhciBhIHtcclxuXHQgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcblx0ICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0ICBmb250LXNpemU6IDI1cHg7XHJcblx0ICBjb2xvcjogI2JkMjEzMDtcclxuXHQgIGRpc3BsYXk6IGJsb2NrO1xyXG5cdCAgdHJhbnNpdGlvbjogMC4zcztcclxuXHR9XHJcblxyXG5cdC5zaWRlYmFyIGE6aG92ZXIge1xyXG5cdCAgY29sb3I6ICNmMWYxZjE7XHJcblx0fVxyXG5cclxuXHQuc2lkZWJhciAuY2xvc2VidG4ge1xyXG5cdCAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdCAgdG9wOiAwO1xyXG5cdCAgcmlnaHQ6IDI1cHg7XHJcblx0ICBmb250LXNpemU6IDM2cHg7XHJcblx0ICBtYXJnaW4tbGVmdDogNTBweDtcclxuXHQgIHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdCAgY29sb3I6I2JkMjEzMDtcclxuXHR9XHJcblxyXG5cdC5vcGVuYnRuIHtcclxuXHQgIC8qIGZvbnQtc2l6ZTogMjBweDtcclxuXHQgIGN1cnNvcjogcG9pbnRlcjtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcblx0ICBjb2xvcjogd2hpdGU7XHJcblx0ICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblx0ICBib3JkZXI6IG5vbmU7ICovXHJcblx0ICAgICAgcGFkZGluZzogLjI1cmVtIC43NXJlbTtcclxuXHRcdGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuXHRcdCAgICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsLjEpO1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cdG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cdH1cclxuXHJcblx0Lm9wZW5idG46aG92ZXIge1xyXG5cdCAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuXHR9XHJcblxyXG5cdCNtYWluIHtcclxuXHQgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC41cztcclxuXHQgIHBhZGRpbmc6IDE2cHg7XHJcblx0fVxyXG5cclxuXHQvKiAuc2lkZW5hdiB7XHJcblx0ICBoZWlnaHQ6IDEwMCU7XHJcblx0ICB3aWR0aDogMjAwcHg7XHJcblx0ICBwb3NpdGlvbjogZml4ZWQ7XHJcblx0ICB6LWluZGV4OiAxO1xyXG5cdCAgdG9wOiAwO1xyXG5cdCAgbGVmdDogMDtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcblx0ICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0ICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHR9ICovXHJcblxyXG5cclxuXHRcdC8qIFN0eWxlIHRoZSBzaWRlbmF2IGxpbmtzIGFuZCB0aGUgZHJvcGRvd24gYnV0dG9uICovXHJcblx0LnNpZGViYXIgYSwgLmRyb3Bkb3duLWJ0biB7XHJcblx0ICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xyXG5cdCAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdCAgZm9udC1zaXplOiAyMHB4O1xyXG5cdCAgY29sb3I6ICNiZDIxMzA7XHJcblx0ICBkaXNwbGF5OiBibG9jaztcclxuXHQgIGJvcmRlcjogbm9uZTtcclxuXHQgIGJhY2tncm91bmQ6IG5vbmU7XHJcblx0ICB3aWR0aDogMTAwJTtcclxuXHQgIHRleHQtYWxpZ246IGxlZnQ7XHJcblx0ICBjdXJzb3I6IHBvaW50ZXI7XHJcblx0ICBvdXRsaW5lOiBub25lO1xyXG5cdH1cclxuXHJcblx0LyogT24gbW91c2Utb3ZlciAqL1xyXG5cdC5zaWRlYmFyIGE6aG92ZXIsIC5kcm9wZG93bi1idG46aG92ZXIge1xyXG5cdCAgY29sb3I6ICNiZDIxMzA7XHJcblx0fVxyXG5cclxuXHQvKiBNYWluIGNvbnRlbnQgKi9cclxuXHQubWFpbiB7XHJcblx0ICBtYXJnaW4tbGVmdDogMjAwcHg7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlbmF2ICovXHJcblx0ICBmb250LXNpemU6IDIwcHg7IC8qIEluY3JlYXNlZCB0ZXh0IHRvIGVuYWJsZSBzY3JvbGxpbmcgKi9cclxuXHQgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG5cdH1cclxuXHJcblx0LyogQWRkIGFuIGFjdGl2ZSBjbGFzcyB0byB0aGUgYWN0aXZlIGRyb3Bkb3duIGJ1dHRvbiAqL1xyXG5cdC5hY3RpdmUge1xyXG5cdCAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcblx0ICBjb2xvcjogYmx1ZTtcclxuXHR9XHJcblxyXG5cdC8qIERyb3Bkb3duIGNvbnRhaW5lciAoaGlkZGVuIGJ5IGRlZmF1bHQpLiBPcHRpb25hbDogYWRkIGEgbGlnaHRlciBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzb21lIGxlZnQgcGFkZGluZyB0byBjaGFuZ2UgdGhlIGRlc2lnbiBvZiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG5cdC5kcm9wZG93bi1jb250YWluZXIge1xyXG5cdCAgZGlzcGxheTogbm9uZTtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuXHQgIHBhZGRpbmctbGVmdDogOHB4O1xyXG5cdH1cclxuXHJcblx0LyogT3B0aW9uYWw6IFN0eWxlIHRoZSBjYXJldCBkb3duIGljb24gKi9cclxuXHQuZmEtY2FyZXQtZG93biB7XHJcblx0ICBmbG9hdDogcmlnaHQ7XHJcblx0ICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblx0fVxyXG5cclxuXHJcblx0XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG5cdCAgLnNpZGViYXIge3BhZGRpbmctdG9wOiAxNXB4O31cclxuXHQgIC5zaWRlYmFyIGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEhlYWRlciBjc3MgKHN0YXJ0KS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyouaGVhZGVyIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOjA7XHJcblx0XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojYmQyMTMwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyBcclxufSovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIZWFkZXIgY3NzIChlbmQpLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLypcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuXHQuaGVhZGVyX2hvbWVfaGVhZGVye1xyXG5cdFx0cGFkZGluZy10b3A6IDEwcHghaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAlIWltcG9ydGFudDsgXHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAwJSFpbXBvcnRhbnQ7IFxyXG5cdFx0XHJcblx0fVxyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");





var HeaderComponent = /** @class */ (function () {
    //var $: any;
    function HeaderComponent(router, myservice, cookieService) {
        this.router = router;
        this.myservice = myservice;
        this.cookieService = cookieService;
        //header_title = '';
        this.usrnmCookie = '';
        this.usridCookie = '';
        this.fulnameCookie = '';
        this.SelmoduleName = '';
        this.sidbaractive = 2;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        /* this.myservice.header_title.subscribe(updatedTitle => {
          this.header_title = updatedTitle;
        }); */
        var _this = this;
        this.myservice.SelmoduleName.subscribe(function (updatedTitle) {
            _this.SelmoduleName = updatedTitle;
        });
        this.usrnmCookie = this.cookieService.get('username');
        this.usridCookie = this.cookieService.get('userid');
        this.fulnameCookie = this.cookieService.get('fullname');
        console.log('username=' + this.usrnmCookie);
        console.log('userid=' + this.usridCookie);
        console.log('userid=' + this.fulnameCookie);
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;
        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                }
                else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    };
    HeaderComponent.prototype.navigateTocustservice = function () {
        //this.selmodule = 'Customer Service';
        this.router.navigate(['/custservice']);
    };
    HeaderComponent.prototype.navigateTocustrequest = function () {
        //this.selmodule = 'Request/Agreement Search';
        this.router.navigate(['/requestslist']);
    };
    HeaderComponent.prototype.navigateTorca = function () {
        //this.selmodule = 'RCA';
        this.router.navigate(['/rcalist']);
    };
    HeaderComponent.prototype.navigateToCreategroup = function () {
        //this.selmodule = 'Group Master';
        this.router.navigate(['/creategroup']);
    };
    HeaderComponent.prototype.navigateToViewgroups = function () {
        //this.selmodule = 'Group Master';
        this.router.navigate(['/groupslist']);
    };
    /* navigateToCreatesrtat() {
       //this.selmodule = 'SR TAT Master';
       this.router.navigate(['/createsrtat']);
    }
    
    navigateToCreatesrtat() {
       this.router.navigate(['/srtatlist']);
    }
    
    */
    HeaderComponent.prototype.navigateTologin = function () {
        this.cookieService.delete('username');
        this.cookieService.delete('userid');
        this.cookieService.delete('fullname');
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.navigateToCreateuser = function () {
        //this.selmodule = 'Users Master'; 
        this.router.navigate(['/createuser']);
    };
    HeaderComponent.prototype.navigateToViewusers = function () {
        //this.selmodule = 'Users Master'; 
        this.router.navigate(['/userslist']);
    };
    HeaderComponent.prototype.navigateToCreaterole = function () {
        //this.selmodule = 'Roles'; 
        this.router.navigate(['/createrole']);
    };
    HeaderComponent.prototype.navigateToViewroles = function () {
        //this.selmodule = 'Roles'; 
        this.router.navigate(['/roleslist']);
    };
    HeaderComponent.prototype.navigateToCreateholiday = function () {
        //this.selmodule = 'Roles'; 
        this.router.navigate(['/createholiday']);
    };
    HeaderComponent.prototype.navigateToViewholidays = function () {
        //this.selmodule = 'Roles'; 
        this.router.navigate(['/holidayslist']);
    };
    HeaderComponent.prototype.navigateToCreatestate = function () {
        //this.selmodule = 'Roles'; 
        this.router.navigate(['/createstate']);
    };
    HeaderComponent.prototype.navigateToViewstates = function () {
        //this.selmodule = 'Roles'; 
        this.router.navigate(['/stateslist']);
    };
    HeaderComponent.prototype.navigateToCreatecomtep = function () {
        //this.selmodule = 'Roles'; 
        this.router.navigate(['/createcommtemp']);
    };
    HeaderComponent.prototype.navigateToViewcomteps = function () {
        //this.selmodule = 'Roles'; 
        this.router.navigate(['/commtempslist']);
    };
    HeaderComponent.prototype.navigateToCreatecomn = function () {
        //this.selmodule = 'Roles'; 
        this.router.navigate(['/createcommn']);
    };
    HeaderComponent.prototype.navigateToViewcomns = function () {
        //this.selmodule = 'Roles'; 
        this.router.navigate(['/commnslist']);
    };
    HeaderComponent.prototype.openNav = function () {
        this.sidbaractive = 1;
        $("#mySidebar").css("width", "250px");
        $("#main").css("margin-left", "250px");
        $("#openbtn").css("display", "none");
        //<!-- document.getElementById("mySidebar").style.width = "250px"; -->
        //<!-- document.getElementById("main").style.marginLeft = "250px"; -->
    };
    HeaderComponent.prototype.closeNav = function () {
        $("#mySidebar").css("width", "0px");
        $("#main").css("margin-left", "0px");
        $("#openbtn").css("display", "block");
        this.sidbaractive = 2;
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/holidaydetails/holidaydetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/holidaydetails/holidaydetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbGlkYXlkZXRhaWxzL2hvbGlkYXlkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/holidaydetails/holidaydetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/holidaydetails/holidaydetails.component.ts ***!
  \************************************************************/
/*! exports provided: HolidaydetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidaydetailsComponent", function() { return HolidaydetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HolidaydetailsComponent = /** @class */ (function () {
    function HolidaydetailsComponent() {
    }
    HolidaydetailsComponent.prototype.ngOnInit = function () {
    };
    HolidaydetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-holidaydetails',
            template: __webpack_require__(/*! raw-loader!./holidaydetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/holidaydetails/holidaydetails.component.html"),
            styles: [__webpack_require__(/*! ./holidaydetails.component.css */ "./src/app/holidaydetails/holidaydetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HolidaydetailsComponent);
    return HolidaydetailsComponent;
}());



/***/ }),

/***/ "./src/app/holidayslist/holidayslist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/holidayslist/holidayslist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbGlkYXlzbGlzdC9ob2xpZGF5c2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/holidayslist/holidayslist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/holidayslist/holidayslist.component.ts ***!
  \********************************************************/
/*! exports provided: HolidayslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayslistComponent", function() { return HolidayslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HolidayslistComponent = /** @class */ (function () {
    function HolidayslistComponent() {
    }
    HolidayslistComponent.prototype.ngOnInit = function () {
    };
    HolidayslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-holidayslist',
            template: __webpack_require__(/*! raw-loader!./holidayslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/holidayslist/holidayslist.component.html"),
            styles: [__webpack_require__(/*! ./holidayslist.component.css */ "./src/app/holidayslist/holidayslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HolidayslistComponent);
    return HolidayslistComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*Fonts*/\r\n*{outline:none;}\r\n@font-face {\r\n\t font-family: 'PFHandbookPro-Thin';\r\n\t src: url('/assets/loginFonts/PFHandbookPro-Thin.woff') format('woff'), url('/assets/loginFonts/PFHandbookPro-Thin.ttf') format('truetype'), url('/assets/loginFonts/PFHandbookPro-Thin.svg#PFHandbookPro-Thin') format('svg');\r\n\t font-weight: normal;\r\n\t font-style: normal;\r\n}\r\n@font-face {\r\n\t font-family: 'PFHandbookPro-Thin_35441';\r\n\t src: url('/assets/loginFonts/PFHandbookPro-Thin_35441.eot');\r\n\t src: url('/assets/loginFonts/PFHandbookPro-Thin_35441.woff2') format('woff2'), url('/assets/loginFonts/PFHandbookPro-Thin_35441.eot?#iefix') format('embedded-opentype');\r\n\t font-weight: normal;\r\n\t font-style: normal;\r\n}\r\n@font-face {\r\n\t font-family: 'PFHandbookPro-regular';\r\n\t src: url('/assets/loginFonts/PFHandbookPro-Regular.woff') format('woff'), url('/assets/loginFonts/PFHandbookPro-Regular.ttf') format('truetype'), url('/assets/loginFonts/PFHandbookPro-Regular.svg#PFHandbookPro-Bold') format('svg');\r\n\t font-weight: normal;\r\n\t font-style: normal;\r\n}\r\n@font-face {\r\n\t font-family: 'PFHandbookPro-Regular_35440';\r\n\t src: url('/assets/loginFonts/PFHandbookPro-Regular_35440.eot');\r\n\t src: url('/assets/loginFonts/PFHandbookPro-Regular_35440.woff2') format('woff2'), url('/assets/loginFonts/PFHandbookPro-Regular_35440.eot?#iefix') format('embedded-opentype');\r\n\t font-weight: normal;\r\n\t font-style: normal;\r\n}\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\nfont-size:14px;    color: #a7a7a7;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\nfont-size:14px;    color: #a7a7a7\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\nfont-size:14px;    color: #a7a7a7\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\nfont-size:14px;    color:#a7a7a7;\r\n}\r\nhtml,body{height:100%;width:100%;}\r\nbody{margin:0;background:#FFF;font-family:'PFHandbookPro-regular';}\r\n.landing-page{position: fixed; z-index: 999; }\r\n/* .landing-page{z-index: 999;} */\r\n.landing-page{width: 100%;height: 100%;}\r\n.landing-page .slider-container{float: left;}\r\n.landing-page .login-container{text-align: center;overflow: hidden;display: table;min-height: 100%;height: 100%;width: auto;padding: 10px;max-width: 420px;margin: 0 auto;}\r\n.landing-page .logo{width:100%;float: left;padding-top:20px;padding-bottom: 20px;}\r\n.landing-page h1{margin-bottom: 15px; padding-top: 20px; color: #969090; font-weight: 600; font-size: 15px;}\r\n.landing-page .form-field input{width: 265px;height: 36px;padding: 0px 7px;float: left; background: #252739;border: 1px solid rgba(71, 72, 76, 0.4117647058823529);color: #747477;font-size: 15px;font-weight:400;letter-spacing: 1.5px;border-right: none;color:#fff}\r\n.landing-page .add-on-btn{height: 36px;width: 30px;display: inline-block;background: #12131C;border: none;font-size: 23px;float: right;\r\n    position: absolute;border:1px solid rgba(71, 72, 76, 0.4117647058823529);border-left: none;}\r\n.landing-page .form-content{margin: 10px auto;display: block;width: 300px;}\r\n.landing-page .sub-btn{background: #E5408E;color: #fff;width: 120px;border-radius: 15px;font-weight:400;height: 30px;border: none;margin-top: 25px;font-size:16px;color:#E7E8EB}\r\n.landing-page .fa-plus{padding-right: 6px;background: #ffffff;color: #019ADD;font-size: 16px;}\r\n.landing-page .form-links span{font-size: 13px;letter-spacing: 1px;padding: 0px 5px;color: #E7E8EB;}\r\n.landing-page .fa-arrow-right{background: #545454;}\r\n.landing-page .user-name{display: inline-block;float: left;width: 100%;}\r\n.landing-page .form-sbmit{float: left;width: 100%;margin-top:10px;}\r\n.landing-page .form-field {width: 100%;float: left;padding-top:15px;}\r\n.landing-page .container{display: block;width: 100%;height: 100%;position: relative;z-index: 3;/* margin: 7px; */padding: 0px;}\r\n.landing-page .container .pages{display:block;margin:0 auto;width:1280px;height:720px;}\r\n.landing-page .container #myCarousel img{width:100%;}\r\n.landing-page .inner-box{background: rgba(56, 62, 101, 0.81);padding:20px 10px;/* border-radius: 5px; */margin:30px 0;border: 1px solid #747477;}\r\n.landing-page .table{height:100%;width:100%;display:table;margin:0;}\r\n.landing-page .table-row{height:100%;width:100%;display:table-row}\r\n.landing-page .table-cell{height:100%;width:100%;display:table-cell}\r\n.landing-page .table-cell.v-h-center{vertical-align:middle;}\r\n.landing-page .loginPage{position:relative;top:0;left:0;}\r\n.landing-page .loginPage .loginSlider{position:absolute;top:0;left:0;width:720px;}\r\n.landing-page .loginPage .advisorWork{position:absolute;top:100px;left:0;border:1px solid red;}\r\n.landing-page .loginPage .loginBtn{position: absolute; top: 301px; right: 83px; height: 41px; width: 47px;z-index:9999;cursor:pointer;background:transparent}\r\n.landing-page .login-img{ position: absolute; top: 0; left: 0; height: 100%; width: 100%;float: left;}\r\n.landing-page  i.fa {color: #fff;font-size: 16px;float: left;padding: 3px;}\r\n.landing-page .form-links {display:inline-block;color: #a7a7a7;width: 100%;padding-top: 15px;}\r\n.landing-page .form-links:last-child {padding-top: 20px;}\r\n.landing-page .form-links a {text-decoration: none;color: #E7E8EB;font-weight: 400;border-bottom: 1px solid;font-size:15px;}\r\n.landing-page .bg-slideshow{/* background:#fff; */}\r\n.landing-page .pass-field{}\r\n.landing-page .bg-slideshow,\r\n.landing-page .bg-slideshow:after { position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 3; margin: 0; padding:0; }\r\n/* .landing-page .bg-slideshow:after { content: ''; background: rgba(255, 255, 255, 0) url(/assets/pattern.png) repeat top left; background-size:2px; }  */\r\n.landing-page .bg-slideshow li span { width: 100%; height: 100%; position: absolute; top: 0px; left: 0px; color: transparent; background-size: cover; background-position: 50% 50%; background-repeat: none; opacity: 0; z-index: 0; -webkit-backface-visibility: hidden; -webkit-animation: imageAnimation 24s linear infinite 0s; animation: imageAnimation 24s linear infinite 0s; }\r\n.landing-page .bg-slideshow li:nth-child(1) span { background-image: url(/assets/img/bak_image2.jpeg) }\r\n.landing-page .bg-slideshow li:nth-child(2) span { background-image: url(/assets/img/bak_image3.jpeg); -webkit-animation-delay: 8s; animation-delay: 8s; }\r\n.landing-page .bg-slideshow li:nth-child(3) span { background-image: url(/assets/img/bak_image4.jpeg); -webkit-animation-delay: 16s; animation-delay: 16s; }\r\n/* Animation for the slideshow img */\r\n@-webkit-keyframes imageAnimation { \r\n\t0% {\r\n\t    opacity: 0;\r\n\t    \r\n\t}\r\n\t8% {\r\n\t    opacity: 1;\r\n\t    -webkit-transform: scale(1.05);\r\n\t    -webkit-animation-timing-function: linear;\r\n\t   \r\n\t}\r\n\t17% {\r\n\t    opacity: 1;\r\n\t\t\r\n\t    \r\n\t}\r\n\t22% {\r\n\t\topacity: 1;\r\n\t}\r\n\t40% {\r\n\t     opacity: 0;\r\n\t\t-webkit-transform: scale(1.05);\r\n\t\t-webkit-animation-timing-function: linear;\r\n\t    \r\n\t}\r\n\t100% { opacity: 0; }\r\n\r\n}\r\n@keyframes imageAnimation { \r\n0% {\r\n\t    opacity: 0;\r\n\t    \r\n\t}\r\n\t8% {\r\n\t    opacity: 1;\r\n\t    \r\n\t   \r\n\t}\r\n\t17% {\r\n\t    opacity: 1;\r\n\t\t\r\n\t    \r\n\t}\r\n\t22% {\r\n\t\topacity: 1;\r\n\t\t\r\n\t}\r\n\t40% {\r\n\t    opacity: 0;\r\n\t\t-webkit-transform: scale(1.05);\r\n\t\t-webkit-animation-timing-function: linear;\r\n\t    \r\n\t}\r\n\t\r\n\t100% { \r\n\topacity: 0;\r\n\t}\r\n}\r\n/* Show at least something when animations not supported */\r\n.no-cssanimations .bg-slideshow li span{\r\n\topacity: 1;\r\n}\r\n/* Added by Sethu */\r\n.landing-page .w-100{width:100% !important;}\r\n.landing-page .form-content .form-lbl{margin-bottom:10px;font-size: 18px;}\r\n.landing-page .form-content,p{text-align:left;color: #a7a7a7;}\r\n.landing-page p{margin-top:10px;margin: 10px auto;display: block;width: 300px;}\r\n.landing-page  .checkbox label{padding-left:0px;}\r\n/* radio styles */\r\n.landing-page .radio.radio-inline { margin-top: 5px; margin-right: 10px; margin-left: 0px; }\r\n.landing-page .radio{padding-left: 20px; }\r\n.landing-page .radio input{ border: 1px solid #C3C3C3; height: 32px; color: #000; font-size: 13px;cursor: pointer;  }\r\n.landing-page .radio label { font-size: 12px; font-weight: 500; }\r\n.landing-page .radio label::before { width: 22px; height: 22px; top: -1px; }\r\n.landing-page .radio input[type=\"radio\"]:checked + label::after {font-family: \"FontAwesome\"; content: \"\\f00c\"; font-size: 10px; left: 3px; top: 0px; color: #344A5F; background: #b1b1b1; border-color: #344A5F;}\r\n.landing-page .landing-page .radio label::before {content: \"\"; display: inline-block; position: absolute; width: 17px; height: 17px; left: 0; margin-left: -20px; border: 1px solid #cccccc; border-radius: 50%; background-color: #b1b1b1; border: 1px solid #344A5F !important; transition: border 0.15s ease-in-out;}\r\n.landing-page .radio input[type=\"radio\"]:focus + label::before {outline: thin dotted; outline: 0px auto -webkit-focus-ring-color;outline-offset: 0px;}\r\n.landing-page .form-field .radio label > span{float: left;position: relative;top: -2px;}\r\n.landing-page .a-link:hover{text-decoration:underline;color:#828282;cursor:pointer;}\r\n.landing-page .a-link{font-size:12px;}\r\n/* Media Query\t */\r\n@media screen and (max-width: 320px) { \r\n\t.inner-box{width:300px;}\r\n\t.landing-page .form-field input{width:250px}\r\n\t.g-recaptcha {transform:scale(0.92);-webkit-transform:scale(0.92);transform-origin:0 0;-webkit-transform-origin:0 0;}\r\n}\r\n@media only screen and (max-width: 768px){\r\n\t.landing-page .slider-container{display:none;}\r\n}\r\n@media screen and (max-width: 1140px) { \r\n\t.bg-slideshow li div h3 { font-size: 100px }\r\n}\r\n@media screen and (max-width: 1140px) { \r\n\t.bg-slideshow li div h3 { font-size: 100px }\r\n}\r\n.widthFull{\r\n\twidth: 80% !important;\r\n\tmargin-left: 10% !important;\r\n}\r\n.messagecss{\r\n\tcolor:red;\r\n\tfont-size:20px;\r\n}\r\n.centerAlign {\r\n\ttext-align: center;\r\n}\r\n.loadingtxt{\r\n\tfont-size: 20px;\r\n\tcolor: white;\r\n\ttext-align:center;\r\n}\r\n.versionCss{\r\n\tfloat:right;\r\n\tpadding-top: 0px;\r\n\tcolor: #E7E8EB;\r\n}\r\n.modal .modal-dialog{\r\n  margin-top: 30vh;\r\n}\r\n.requiredErrMsg{\r\n\tcolor: white !important;\r\n    text-align: left !important;\r\n    margin-left: 40px !important;\r\n}\r\n@media screen and (min-width: 768px) {\r\n\t.inputfont {margin-left:15%;}\r\n\t.centerAlign {text-align: left;}\r\n\t.widthFull{width:100%;}\r\n}\r\n@media screen and (max-width:320px) {\r\n\t.requiredErrMsg{\r\n\t\tmargin-left:5px !important;\r\n\t}\r\n}\r\n@media screen and (max-width:360px) {\r\n\t.requiredErrMsg{\r\n\t\tmargin-left:10px !important;\r\n\t}\r\n}\r\n@media screen and (max-width:384px) {\r\n\t.requiredErrMsg{\r\n\t\tmargin-left:10px !important;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsUUFBUTtBQUNSLEVBQUUsWUFBWSxDQUFDO0FBQ2Y7RUFDRSxpQ0FBaUM7RUFDakMsNk5BQTZOO0VBQzdOLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHVDQUF1QztFQUN2QywyREFBMkQ7RUFDM0Qsd0tBQXdLO0VBQ3hLLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxzT0FBc087RUFDdE8sbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLDhEQUE4RDtFQUM5RCw4S0FBOEs7RUFDOUssbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBLDhCQUE4Qix3QkFBd0I7QUFDdEQsY0FBYyxLQUFLLGNBQWM7QUFDakM7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDLGNBQWMsS0FBSztBQUNuQjtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDLGNBQWMsS0FBSztBQUNuQjtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEMsY0FBYyxLQUFLLGFBQWE7QUFDaEM7QUFFQSxVQUFVLFdBQVcsQ0FBQyxVQUFVLENBQUM7QUFDakMsS0FBSyxRQUFRLENBQUMsZUFBZSxDQUFDLG1DQUFtQyxDQUFDO0FBR2xFLGNBQWMsZUFBZSxFQUFFLFlBQVksRUFBRTtBQUM3QyxpQ0FBaUM7QUFDakMsY0FBYyxXQUFXLENBQUMsWUFBWSxDQUFDO0FBQ3ZDLGdDQUFnQyxXQUFXLENBQUM7QUFDNUMsK0JBQStCLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7QUFDMUssb0JBQW9CLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7QUFDakYsaUJBQWlCLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7QUFDM0csZ0NBQWdDLFlBQVksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLHNEQUFzRCxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLFVBQVU7QUFDclEsMEJBQTBCLFlBQVksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxZQUFZO0lBQ2xJLGtCQUFrQixDQUFDLHFEQUFxRCxDQUFDLGlCQUFpQixDQUFDO0FBQy9GLDRCQUE0QixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO0FBQzFFLHVCQUF1QixtQkFBbUIsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxhQUFhO0FBQy9LLHVCQUF1QixrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO0FBQzdGLCtCQUErQixlQUFlLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0FBQ25HLDhCQUE4QixtQkFBbUIsQ0FBQztBQUNsRCx5QkFBeUIscUJBQXFCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztBQUN2RSwwQkFBMEIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7QUFDbEUsMkJBQTJCLFdBQVcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7QUFFcEUseUJBQXlCLGNBQWMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUM7QUFDOUgsZ0NBQWdDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztBQUN0Rix5Q0FBeUMsVUFBVSxDQUFDO0FBQ3BELHlCQUF5QixtQ0FBbUMsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUM7QUFDaEoscUJBQXFCLFdBQVcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUNuRSx5QkFBeUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7QUFDakUsMEJBQTBCLFdBQVcsQ0FBQyxVQUFVLENBQUMsa0JBQWtCO0FBQ25FLHFDQUFxQyxxQkFBcUIsQ0FBQztBQUMzRCx5QkFBeUIsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUN4RCxzQ0FBc0MsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDakYsc0NBQXNDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7QUFDOUYsbUNBQW1DLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLHNCQUFzQjtBQUM1SiwwQkFBMEIsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQztBQUVyRyxxQkFBcUIsV0FBVyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO0FBQzFFLDJCQUEyQixvQkFBb0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDO0FBQzdGLHNDQUFzQyxpQkFBaUIsQ0FBQztBQUN4RCw2QkFBNkIscUJBQXFCLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQztBQUMzSCw0QkFBNEIscUJBQXFCLENBQUM7QUFDbEQsMEJBQTBCO0FBQzFCO29DQUNvQyxlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBRXZJLDBKQUEwSjtBQUUxSixzQ0FBc0MsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLDRCQUE0QixFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsbUNBQW1DLEVBQUUsd0RBQXdELEVBQW9LLGdEQUFnRCxFQUFFO0FBR3hoQixtREFBbUQsbURBQW1EO0FBRXRHLG1EQUFtRCxrREFBa0QsRUFBRSwyQkFBMkIsRUFBNkUsbUJBQW1CLEVBQUU7QUFFcE8sbURBQW1ELGtEQUFrRCxFQUFFLDRCQUE0QixFQUFnRixvQkFBb0IsRUFBRTtBQUV6TyxvQ0FBb0M7QUFDcEM7Q0FDQztLQUNJLFVBQVU7O0NBRWQ7Q0FDQTtLQUNJLFVBQVU7S0FDViw4QkFBOEI7S0FDOUIseUNBQXlDOztDQUU3QztDQUNBO0tBQ0ksVUFBVTs7O0NBR2Q7Q0FDQTtFQUNDLFVBQVU7Q0FDWDtDQUNBO01BQ0ssVUFBVTtFQUNkLDhCQUE4QjtFQUM5Qix5Q0FBeUM7O0NBRTFDO0NBQ0EsT0FBTyxVQUFVLEVBQUU7O0FBRXBCO0FBb0ZBO0FBQ0E7S0FDSyxVQUFVOztDQUVkO0NBQ0E7S0FDSSxVQUFVOzs7Q0FHZDtDQUNBO0tBQ0ksVUFBVTs7O0NBR2Q7Q0FDQTtFQUNDLFVBQVU7O0NBRVg7Q0FDQTtLQUNJLFVBQVU7RUFDYiw4QkFBOEI7RUFDOUIseUNBQXlDOztDQUUxQzs7Q0FFQTtDQUNBLFVBQVU7Q0FDVjtBQUNEO0FBRUEsMERBQTBEO0FBQzFEO0NBQ0MsVUFBVTtBQUNYO0FBRUEsbUJBQW1CO0FBQ25CLHFCQUFxQixxQkFBcUIsQ0FBQztBQUMzQyxzQ0FBc0Msa0JBQWtCLENBQUMsZUFBZSxDQUFDO0FBQ3pFLDhCQUE4QixlQUFlLENBQUMsY0FBYyxDQUFDO0FBQzdELGdCQUFnQixlQUFlLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztBQUM5RSwrQkFBK0IsZ0JBQWdCLENBQUM7QUFHaEQsaUJBQWlCO0FBQ2pCLG9DQUFvQyxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUU7QUFDM0YscUJBQXFCLGtCQUFrQixFQUFFO0FBQ3pDLDRCQUE0Qix5QkFBeUIsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQyxlQUFlLEdBQUc7QUFDcEgsNkJBQTZCLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRTtBQUNoRSxxQ0FBcUMsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUU7QUFDM0UsaUVBQWlFLDBCQUEwQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQztBQUNoTixrREFBa0QsV0FBVyxFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLG9DQUFvQyxFQUF5RixvQ0FBb0MsQ0FBQztBQUM5WSxnRUFBZ0Usb0JBQW9CLEVBQUUsMENBQTBDLENBQUMsbUJBQW1CLENBQUM7QUFDckosOENBQThDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7QUFDdkYsNEJBQTRCLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDbkYsc0JBQXNCLGNBQWMsQ0FBQztBQU1yQyxpQkFBaUI7QUFDakI7Q0FDQyxXQUFXLFdBQVcsQ0FBQztDQUN2QixnQ0FBZ0MsV0FBVztDQUMzQyxjQUFjLHFCQUFxQixDQUFDLDZCQUE2QixDQUFDLG9CQUFvQixDQUFDLDRCQUE0QixDQUFDO0FBQ3JIO0FBRUE7Q0FDQyxnQ0FBZ0MsWUFBWSxDQUFDO0FBQzlDO0FBRUE7Q0FDQywwQkFBMEIsaUJBQWlCO0FBQzVDO0FBR0E7Q0FDQywwQkFBMEIsaUJBQWlCO0FBQzVDO0FBS0E7Q0FDQyxxQkFBcUI7Q0FDckIsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyxTQUFTO0NBQ1QsY0FBYztBQUNmO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7Q0FDQyx1QkFBdUI7SUFDcEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQztBQUVBO0NBQ0MsWUFBWSxlQUFlLENBQUM7Q0FDNUIsY0FBYyxnQkFBZ0IsQ0FBQztDQUMvQixXQUFXLFVBQVUsQ0FBQztBQUN2QjtBQUNBO0NBQ0M7RUFDQywwQkFBMEI7Q0FDM0I7QUFDRDtBQUNBO0NBQ0M7RUFDQywyQkFBMkI7Q0FDNUI7QUFDRDtBQUNBO0NBQ0M7RUFDQywyQkFBMkI7Q0FDNUI7QUFDRCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypGb250cyovXHJcbip7b3V0bGluZTpub25lO30gXHJcbkBmb250LWZhY2Uge1xyXG5cdCBmb250LWZhbWlseTogJ1BGSGFuZGJvb2tQcm8tVGhpbic7XHJcblx0IHNyYzogdXJsKCcvYXNzZXRzL2xvZ2luRm9udHMvUEZIYW5kYm9va1Byby1UaGluLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcvYXNzZXRzL2xvZ2luRm9udHMvUEZIYW5kYm9va1Byby1UaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCcvYXNzZXRzL2xvZ2luRm9udHMvUEZIYW5kYm9va1Byby1UaGluLnN2ZyNQRkhhbmRib29rUHJvLVRoaW4nKSBmb3JtYXQoJ3N2ZycpO1xyXG5cdCBmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdCBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcblx0IGZvbnQtZmFtaWx5OiAnUEZIYW5kYm9va1Byby1UaGluXzM1NDQxJztcclxuXHQgc3JjOiB1cmwoJy9hc3NldHMvbG9naW5Gb250cy9QRkhhbmRib29rUHJvLVRoaW5fMzU0NDEuZW90Jyk7XHJcblx0IHNyYzogdXJsKCcvYXNzZXRzL2xvZ2luRm9udHMvUEZIYW5kYm9va1Byby1UaGluXzM1NDQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy9hc3NldHMvbG9naW5Gb250cy9QRkhhbmRib29rUHJvLVRoaW5fMzU0NDEuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKTtcclxuXHQgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHQgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG5cdCBmb250LWZhbWlseTogJ1BGSGFuZGJvb2tQcm8tcmVndWxhcic7XHJcblx0IHNyYzogdXJsKCcvYXNzZXRzL2xvZ2luRm9udHMvUEZIYW5kYm9va1Byby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcvYXNzZXRzL2xvZ2luRm9udHMvUEZIYW5kYm9va1Byby1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCcvYXNzZXRzL2xvZ2luRm9udHMvUEZIYW5kYm9va1Byby1SZWd1bGFyLnN2ZyNQRkhhbmRib29rUHJvLUJvbGQnKSBmb3JtYXQoJ3N2ZycpO1xyXG5cdCBmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdCBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcblx0IGZvbnQtZmFtaWx5OiAnUEZIYW5kYm9va1Byby1SZWd1bGFyXzM1NDQwJztcclxuXHQgc3JjOiB1cmwoJy9hc3NldHMvbG9naW5Gb250cy9QRkhhbmRib29rUHJvLVJlZ3VsYXJfMzU0NDAuZW90Jyk7XHJcblx0IHNyYzogdXJsKCcvYXNzZXRzL2xvZ2luRm9udHMvUEZIYW5kYm9va1Byby1SZWd1bGFyXzM1NDQwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy9hc3NldHMvbG9naW5Gb250cy9QRkhhbmRib29rUHJvLVJlZ3VsYXJfMzU0NDAuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKTtcclxuXHQgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHQgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXHJcbmZvbnQtc2l6ZToxNHB4OyAgICBjb2xvcjogI2E3YTdhNztcclxufVxyXG46Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xyXG5mb250LXNpemU6MTRweDsgICAgY29sb3I6ICNhN2E3YTdcclxufVxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXHJcbmZvbnQtc2l6ZToxNHB4OyAgICBjb2xvcjogI2E3YTdhN1xyXG59XHJcbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cclxuZm9udC1zaXplOjE0cHg7ICAgIGNvbG9yOiNhN2E3YTc7XHJcbn1cclxuXHJcbmh0bWwsYm9keXtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO31cclxuYm9keXttYXJnaW46MDtiYWNrZ3JvdW5kOiNGRkY7Zm9udC1mYW1pbHk6J1BGSGFuZGJvb2tQcm8tcmVndWxhcic7fVxyXG5cclxuXHJcbi5sYW5kaW5nLXBhZ2V7cG9zaXRpb246IGZpeGVkOyB6LWluZGV4OiA5OTk7IH1cclxuLyogLmxhbmRpbmctcGFnZXt6LWluZGV4OiA5OTk7fSAqL1xyXG4ubGFuZGluZy1wYWdle3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTt9XHJcbi5sYW5kaW5nLXBhZ2UgLnNsaWRlci1jb250YWluZXJ7ZmxvYXQ6IGxlZnQ7fVxyXG4ubGFuZGluZy1wYWdlIC5sb2dpbi1jb250YWluZXJ7dGV4dC1hbGlnbjogY2VudGVyO292ZXJmbG93OiBoaWRkZW47ZGlzcGxheTogdGFibGU7bWluLWhlaWdodDogMTAwJTtoZWlnaHQ6IDEwMCU7d2lkdGg6IGF1dG87cGFkZGluZzogMTBweDttYXgtd2lkdGg6IDQyMHB4O21hcmdpbjogMCBhdXRvO31cclxuLmxhbmRpbmctcGFnZSAubG9nb3t3aWR0aDoxMDAlO2Zsb2F0OiBsZWZ0O3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206IDIwcHg7fVxyXG4ubGFuZGluZy1wYWdlIGgxe21hcmdpbi1ib3R0b206IDE1cHg7IHBhZGRpbmctdG9wOiAyMHB4OyBjb2xvcjogIzk2OTA5MDsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxNXB4O30gXHRcclxuLmxhbmRpbmctcGFnZSAuZm9ybS1maWVsZCBpbnB1dHt3aWR0aDogMjY1cHg7aGVpZ2h0OiAzNnB4O3BhZGRpbmc6IDBweCA3cHg7ZmxvYXQ6IGxlZnQ7IGJhY2tncm91bmQ6ICMyNTI3Mzk7Ym9yZGVyOiAxcHggc29saWQgcmdiYSg3MSwgNzIsIDc2LCAwLjQxMTc2NDcwNTg4MjM1MjkpO2NvbG9yOiAjNzQ3NDc3O2ZvbnQtc2l6ZTogMTVweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6IDEuNXB4O2JvcmRlci1yaWdodDogbm9uZTtjb2xvcjojZmZmfVx0XHJcbi5sYW5kaW5nLXBhZ2UgLmFkZC1vbi1idG57aGVpZ2h0OiAzNnB4O3dpZHRoOiAzMHB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztiYWNrZ3JvdW5kOiAjMTIxMzFDO2JvcmRlcjogbm9uZTtmb250LXNpemU6IDIzcHg7ZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO2JvcmRlcjoxcHggc29saWQgcmdiYSg3MSwgNzIsIDc2LCAwLjQxMTc2NDcwNTg4MjM1MjkpO2JvcmRlci1sZWZ0OiBub25lO31cclxuLmxhbmRpbmctcGFnZSAuZm9ybS1jb250ZW50e21hcmdpbjogMTBweCBhdXRvO2Rpc3BsYXk6IGJsb2NrO3dpZHRoOiAzMDBweDt9XHJcbi5sYW5kaW5nLXBhZ2UgLnN1Yi1idG57YmFja2dyb3VuZDogI0U1NDA4RTtjb2xvcjogI2ZmZjt3aWR0aDogMTIwcHg7Ym9yZGVyLXJhZGl1czogMTVweDtmb250LXdlaWdodDo0MDA7aGVpZ2h0OiAzMHB4O2JvcmRlcjogbm9uZTttYXJnaW4tdG9wOiAyNXB4O2ZvbnQtc2l6ZToxNnB4O2NvbG9yOiNFN0U4RUJ9XHJcbi5sYW5kaW5nLXBhZ2UgLmZhLXBsdXN7cGFkZGluZy1yaWdodDogNnB4O2JhY2tncm91bmQ6ICNmZmZmZmY7Y29sb3I6ICMwMTlBREQ7Zm9udC1zaXplOiAxNnB4O31cclxuLmxhbmRpbmctcGFnZSAuZm9ybS1saW5rcyBzcGFue2ZvbnQtc2l6ZTogMTNweDtsZXR0ZXItc3BhY2luZzogMXB4O3BhZGRpbmc6IDBweCA1cHg7Y29sb3I6ICNFN0U4RUI7fVxyXG4ubGFuZGluZy1wYWdlIC5mYS1hcnJvdy1yaWdodHtiYWNrZ3JvdW5kOiAjNTQ1NDU0O31cclxuLmxhbmRpbmctcGFnZSAudXNlci1uYW1le2Rpc3BsYXk6IGlubGluZS1ibG9jaztmbG9hdDogbGVmdDt3aWR0aDogMTAwJTt9XHJcbi5sYW5kaW5nLXBhZ2UgLmZvcm0tc2JtaXR7ZmxvYXQ6IGxlZnQ7d2lkdGg6IDEwMCU7bWFyZ2luLXRvcDoxMHB4O31cclxuLmxhbmRpbmctcGFnZSAuZm9ybS1maWVsZCB7d2lkdGg6IDEwMCU7ZmxvYXQ6IGxlZnQ7cGFkZGluZy10b3A6MTVweDt9XHJcblxyXG4ubGFuZGluZy1wYWdlIC5jb250YWluZXJ7ZGlzcGxheTogYmxvY2s7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO3Bvc2l0aW9uOiByZWxhdGl2ZTt6LWluZGV4OiAzOy8qIG1hcmdpbjogN3B4OyAqL3BhZGRpbmc6IDBweDt9XHJcbi5sYW5kaW5nLXBhZ2UgLmNvbnRhaW5lciAucGFnZXN7ZGlzcGxheTpibG9jazttYXJnaW46MCBhdXRvO3dpZHRoOjEyODBweDtoZWlnaHQ6NzIwcHg7fVxyXG4ubGFuZGluZy1wYWdlIC5jb250YWluZXIgI215Q2Fyb3VzZWwgaW1ne3dpZHRoOjEwMCU7fVxyXG4ubGFuZGluZy1wYWdlIC5pbm5lci1ib3h7YmFja2dyb3VuZDogcmdiYSg1NiwgNjIsIDEwMSwgMC44MSk7cGFkZGluZzoyMHB4IDEwcHg7LyogYm9yZGVyLXJhZGl1czogNXB4OyAqL21hcmdpbjozMHB4IDA7Ym9yZGVyOiAxcHggc29saWQgIzc0NzQ3Nzt9XHJcbi5sYW5kaW5nLXBhZ2UgLnRhYmxle2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7ZGlzcGxheTp0YWJsZTttYXJnaW46MDt9XHJcbi5sYW5kaW5nLXBhZ2UgLnRhYmxlLXJvd3toZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO2Rpc3BsYXk6dGFibGUtcm93fVxyXG4ubGFuZGluZy1wYWdlIC50YWJsZS1jZWxse2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7ZGlzcGxheTp0YWJsZS1jZWxsfVxyXG4ubGFuZGluZy1wYWdlIC50YWJsZS1jZWxsLnYtaC1jZW50ZXJ7dmVydGljYWwtYWxpZ246bWlkZGxlO31cclxuLmxhbmRpbmctcGFnZSAubG9naW5QYWdle3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDowO2xlZnQ6MDt9XHJcbi5sYW5kaW5nLXBhZ2UgLmxvZ2luUGFnZSAubG9naW5TbGlkZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjcyMHB4O31cclxuLmxhbmRpbmctcGFnZSAubG9naW5QYWdlIC5hZHZpc29yV29ya3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTAwcHg7bGVmdDowO2JvcmRlcjoxcHggc29saWQgcmVkO31cclxuLmxhbmRpbmctcGFnZSAubG9naW5QYWdlIC5sb2dpbkJ0bntwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMzAxcHg7IHJpZ2h0OiA4M3B4OyBoZWlnaHQ6IDQxcHg7IHdpZHRoOiA0N3B4O3otaW5kZXg6OTk5OTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fVxyXG4ubGFuZGluZy1wYWdlIC5sb2dpbi1pbWd7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlO2Zsb2F0OiBsZWZ0O31cclxuXHJcbi5sYW5kaW5nLXBhZ2UgIGkuZmEge2NvbG9yOiAjZmZmO2ZvbnQtc2l6ZTogMTZweDtmbG9hdDogbGVmdDtwYWRkaW5nOiAzcHg7fVxyXG4ubGFuZGluZy1wYWdlIC5mb3JtLWxpbmtzIHtkaXNwbGF5OmlubGluZS1ibG9jaztjb2xvcjogI2E3YTdhNzt3aWR0aDogMTAwJTtwYWRkaW5nLXRvcDogMTVweDt9IFxyXG4ubGFuZGluZy1wYWdlIC5mb3JtLWxpbmtzOmxhc3QtY2hpbGQge3BhZGRpbmctdG9wOiAyMHB4O31cclxuLmxhbmRpbmctcGFnZSAuZm9ybS1saW5rcyBhIHt0ZXh0LWRlY29yYXRpb246IG5vbmU7Y29sb3I6ICNFN0U4RUI7Zm9udC13ZWlnaHQ6IDQwMDtib3JkZXItYm90dG9tOiAxcHggc29saWQ7Zm9udC1zaXplOjE1cHg7fVxyXG4ubGFuZGluZy1wYWdlIC5iZy1zbGlkZXNob3d7LyogYmFja2dyb3VuZDojZmZmOyAqL31cclxuLmxhbmRpbmctcGFnZSAucGFzcy1maWVsZHt9XHJcbi5sYW5kaW5nLXBhZ2UgLmJnLXNsaWRlc2hvdyxcclxuLmxhbmRpbmctcGFnZSAuYmctc2xpZGVzaG93OmFmdGVyIHsgcG9zaXRpb246IGZpeGVkOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB0b3A6IDBweDsgbGVmdDogMHB4OyB6LWluZGV4OiAzOyBtYXJnaW46IDA7IHBhZGRpbmc6MDsgfSBcclxuXHJcbi8qIC5sYW5kaW5nLXBhZ2UgLmJnLXNsaWRlc2hvdzphZnRlciB7IGNvbnRlbnQ6ICcnOyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIHVybCgvYXNzZXRzL3BhdHRlcm4ucG5nKSByZXBlYXQgdG9wIGxlZnQ7IGJhY2tncm91bmQtc2l6ZToycHg7IH0gICovXHJcblxyXG4ubGFuZGluZy1wYWdlIC5iZy1zbGlkZXNob3cgbGkgc3BhbiB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgY29sb3I6IHRyYW5zcGFyZW50OyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlOyBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTsgb3BhY2l0eTogMDsgei1pbmRleDogMDsgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC13ZWJraXQtYW5pbWF0aW9uOiBpbWFnZUFuaW1hdGlvbiAyNHMgbGluZWFyIGluZmluaXRlIDBzOyAtbW96LWFuaW1hdGlvbjogaW1hZ2VBbmltYXRpb24gMjRzIGxpbmVhciBpbmZpbml0ZSAwczsgLW8tYW5pbWF0aW9uOiBpbWFnZUFuaW1hdGlvbiAyNHMgbGluZWFyIGluZmluaXRlIDBzOyAtbXMtYW5pbWF0aW9uOiBpbWFnZUFuaW1hdGlvbiAyNHMgbGluZWFyIGluZmluaXRlIDBzOyBhbmltYXRpb246IGltYWdlQW5pbWF0aW9uIDI0cyBsaW5lYXIgaW5maW5pdGUgMHM7IH1cclxuXHJcblxyXG4ubGFuZGluZy1wYWdlIC5iZy1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDEpIHNwYW4geyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYmFrX2ltYWdlMi5qcGVnKSB9XHJcblxyXG4ubGFuZGluZy1wYWdlIC5iZy1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDIpIHNwYW4geyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYmFrX2ltYWdlMy5qcGVnKTsgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDhzOyAtbW96LWFuaW1hdGlvbi1kZWxheTogOHM7IC1vLWFuaW1hdGlvbi1kZWxheTogOHM7IC1tcy1hbmltYXRpb24tZGVsYXk6IDhzOyBhbmltYXRpb24tZGVsYXk6IDhzOyB9XHJcblxyXG4ubGFuZGluZy1wYWdlIC5iZy1zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDMpIHNwYW4geyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYmFrX2ltYWdlNC5qcGVnKTsgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE2czsgLW1vei1hbmltYXRpb24tZGVsYXk6IDE2czsgLW8tYW5pbWF0aW9uLWRlbGF5OiAxNnM7IC1tcy1hbmltYXRpb24tZGVsYXk6IDE2czsgYW5pbWF0aW9uLWRlbGF5OiAxNnM7IH1cclxuXHQgXHJcbi8qIEFuaW1hdGlvbiBmb3IgdGhlIHNsaWRlc2hvdyBpbWcgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGltYWdlQW5pbWF0aW9uIHsgXHJcblx0MCUge1xyXG5cdCAgICBvcGFjaXR5OiAwO1xyXG5cdCAgICBcclxuXHR9XHJcblx0OCUge1xyXG5cdCAgICBvcGFjaXR5OiAxO1xyXG5cdCAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcblx0ICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG5cdCAgIFxyXG5cdH1cclxuXHQxNyUge1xyXG5cdCAgICBvcGFjaXR5OiAxO1xyXG5cdFx0XHJcblx0ICAgIFxyXG5cdH1cclxuXHQyMiUge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcblx0NDAlIHtcclxuXHQgICAgIG9wYWNpdHk6IDA7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcblx0XHQtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuXHQgICAgXHJcblx0fVxyXG5cdDEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcblxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBpbWFnZUFuaW1hdGlvbiB7IFxyXG5cdDAlIHtcclxuXHQgICAgb3BhY2l0eTogMDtcclxuXHQgICAgXHJcblx0fVxyXG5cdDglIHtcclxuXHQgICAgb3BhY2l0eTogMTtcclxuXHQgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdCAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuXHQgICBcclxuXHR9XHJcblx0MTclIHtcclxuXHQgICAgb3BhY2l0eTogMTtcclxuXHRcdFxyXG5cdCAgICBcclxuXHR9XHJcblx0MjIlIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcclxuXHR9XHJcblx0NDAlIHtcclxuXHQgICAgIG9wYWNpdHk6IDA7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcblx0XHQtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuXHQgICAgXHJcblx0fVxyXG5cdDEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBpbWFnZUFuaW1hdGlvbiB7IFxyXG5cdDAlIHtcclxuXHQgICAgb3BhY2l0eTogMDtcclxuXHQgICAgXHJcblx0fVxyXG5cdDglIHtcclxuXHQgICAgb3BhY2l0eTogMTtcclxuXHQgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdCAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuXHQgICBcclxuXHR9XHJcblx0MTclIHtcclxuXHQgICAgb3BhY2l0eTogMTtcclxuXHRcdFxyXG5cdCAgICBcclxuXHR9XHJcblx0MjIlIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcclxuXHR9XHJcblx0NDAlIHtcclxuXHQgICAgb3BhY2l0eTogMDtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuXHRcdC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG5cdCAgICBcclxuXHR9XHJcblx0MTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5ALW1zLWtleWZyYW1lcyBpbWFnZUFuaW1hdGlvbiB7IFxyXG5cdDAlIHtcclxuXHQgICAgb3BhY2l0eTogMDtcclxuXHQgICAgXHJcblx0fVxyXG5cdDglIHtcclxuXHQgICAgb3BhY2l0eTogMTtcclxuXHQgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdCAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuXHQgICBcclxuXHR9XHJcblx0MTclIHtcclxuXHQgICAgb3BhY2l0eTogMTtcclxuXHRcdFxyXG5cdH1cclxuXHQyMiUge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHRcdFxyXG5cdH1cclxuXHQ0MCUge1xyXG5cdCAgICAgb3BhY2l0eTogMDtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuXHRcdC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG5cdCAgICBcclxuXHR9XHJcblx0MTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIGltYWdlQW5pbWF0aW9uIHsgXHJcbjAlIHtcclxuXHQgICAgb3BhY2l0eTogMDtcclxuXHQgICAgXHJcblx0fVxyXG5cdDglIHtcclxuXHQgICAgb3BhY2l0eTogMTtcclxuXHQgICAgXHJcblx0ICAgXHJcblx0fVxyXG5cdDE3JSB7XHJcblx0ICAgIG9wYWNpdHk6IDE7XHJcblx0XHRcclxuXHQgICAgXHJcblx0fVxyXG5cdDIyJSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0XHJcblx0fVxyXG5cdDQwJSB7XHJcblx0ICAgIG9wYWNpdHk6IDA7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcblx0XHQtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuXHQgICAgXHJcblx0fVxyXG5cdFxyXG5cdDEwMCUgeyBcclxuXHRvcGFjaXR5OiAwO1xyXG5cdH1cclxufVxyXG5cdFxyXG4vKiBTaG93IGF0IGxlYXN0IHNvbWV0aGluZyB3aGVuIGFuaW1hdGlvbnMgbm90IHN1cHBvcnRlZCAqL1xyXG4ubm8tY3NzYW5pbWF0aW9ucyAuYmctc2xpZGVzaG93IGxpIHNwYW57XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogQWRkZWQgYnkgU2V0aHUgKi8gXHJcbi5sYW5kaW5nLXBhZ2UgLnctMTAwe3dpZHRoOjEwMCUgIWltcG9ydGFudDt9XHJcbi5sYW5kaW5nLXBhZ2UgLmZvcm0tY29udGVudCAuZm9ybS1sYmx7bWFyZ2luLWJvdHRvbToxMHB4O2ZvbnQtc2l6ZTogMThweDt9XHJcbi5sYW5kaW5nLXBhZ2UgLmZvcm0tY29udGVudCxwe3RleHQtYWxpZ246bGVmdDtjb2xvcjogI2E3YTdhNzt9XHJcbi5sYW5kaW5nLXBhZ2UgcHttYXJnaW4tdG9wOjEwcHg7bWFyZ2luOiAxMHB4IGF1dG87ZGlzcGxheTogYmxvY2s7d2lkdGg6IDMwMHB4O31cclxuLmxhbmRpbmctcGFnZSAgLmNoZWNrYm94IGxhYmVse3BhZGRpbmctbGVmdDowcHg7fVxyXG5cclxuXHJcbi8qIHJhZGlvIHN0eWxlcyAqL1xyXG4ubGFuZGluZy1wYWdlIC5yYWRpby5yYWRpby1pbmxpbmUgeyBtYXJnaW4tdG9wOiA1cHg7IG1hcmdpbi1yaWdodDogMTBweDsgbWFyZ2luLWxlZnQ6IDBweDsgfSBcclxuLmxhbmRpbmctcGFnZSAucmFkaW97cGFkZGluZy1sZWZ0OiAyMHB4OyB9IFxyXG4ubGFuZGluZy1wYWdlIC5yYWRpbyBpbnB1dHsgYm9yZGVyOiAxcHggc29saWQgI0MzQzNDMzsgaGVpZ2h0OiAzMnB4OyBjb2xvcjogIzAwMDsgZm9udC1zaXplOiAxM3B4O2N1cnNvcjogcG9pbnRlcjsgIH0gXHJcbi5sYW5kaW5nLXBhZ2UgLnJhZGlvIGxhYmVsIHsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwOyB9IFxyXG4ubGFuZGluZy1wYWdlIC5yYWRpbyBsYWJlbDo6YmVmb3JlIHsgd2lkdGg6IDIycHg7IGhlaWdodDogMjJweDsgdG9wOiAtMXB4OyB9IFxyXG4ubGFuZGluZy1wYWdlIC5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7Zm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjsgY29udGVudDogXCJcXGYwMGNcIjsgZm9udC1zaXplOiAxMHB4OyBsZWZ0OiAzcHg7IHRvcDogMHB4OyBjb2xvcjogIzM0NEE1RjsgYmFja2dyb3VuZDogI2IxYjFiMTsgYm9yZGVyLWNvbG9yOiAjMzQ0QTVGO30gXHJcbi5sYW5kaW5nLXBhZ2UgLmxhbmRpbmctcGFnZSAucmFkaW8gbGFiZWw6OmJlZm9yZSB7Y29udGVudDogXCJcIjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxN3B4OyBoZWlnaHQ6IDE3cHg7IGxlZnQ6IDA7IG1hcmdpbi1sZWZ0OiAtMjBweDsgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYzsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFiMWIxOyBib3JkZXI6IDFweCBzb2xpZCAjMzQ0QTVGICFpbXBvcnRhbnQ7IC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIDAuMTVzIGVhc2UtaW4tb3V0OyAtby10cmFuc2l0aW9uOiBib3JkZXIgMC4xNXMgZWFzZS1pbi1vdXQ7IHRyYW5zaXRpb246IGJvcmRlciAwLjE1cyBlYXNlLWluLW91dDt9IFxyXG4ubGFuZGluZy1wYWdlIC5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbDo6YmVmb3JlIHtvdXRsaW5lOiB0aGluIGRvdHRlZDsgb3V0bGluZTogMHB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO291dGxpbmUtb2Zmc2V0OiAwcHg7fVxyXG4ubGFuZGluZy1wYWdlIC5mb3JtLWZpZWxkIC5yYWRpbyBsYWJlbCA+IHNwYW57ZmxvYXQ6IGxlZnQ7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTJweDt9XHJcbi5sYW5kaW5nLXBhZ2UgLmEtbGluazpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2NvbG9yOiM4MjgyODI7Y3Vyc29yOnBvaW50ZXI7fVxyXG4ubGFuZGluZy1wYWdlIC5hLWxpbmt7Zm9udC1zaXplOjEycHg7fVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5XHQgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHsgXHJcblx0LmlubmVyLWJveHt3aWR0aDozMDBweDt9XHJcblx0LmxhbmRpbmctcGFnZSAuZm9ybS1maWVsZCBpbnB1dHt3aWR0aDoyNTBweH1cclxuXHQuZy1yZWNhcHRjaGEge3RyYW5zZm9ybTpzY2FsZSgwLjkyKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLjkyKTt0cmFuc2Zvcm0tb3JpZ2luOjAgMDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAwO31cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcblx0LmxhbmRpbmctcGFnZSAuc2xpZGVyLWNvbnRhaW5lcntkaXNwbGF5Om5vbmU7fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHsgXHJcblx0LmJnLXNsaWRlc2hvdyBsaSBkaXYgaDMgeyBmb250LXNpemU6IDEwMHB4IH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNDBweCkgeyBcclxuXHQuYmctc2xpZGVzaG93IGxpIGRpdiBoMyB7IGZvbnQtc2l6ZTogMTAwcHggfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4ud2lkdGhGdWxse1xyXG5cdHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuXHRtYXJnaW4tbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lc3NhZ2Vjc3N7XHJcblx0Y29sb3I6cmVkO1xyXG5cdGZvbnQtc2l6ZToyMHB4O1xyXG59XHJcbi5jZW50ZXJBbGlnbiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2FkaW5ndHh0e1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLnZlcnNpb25Dc3N7XHJcblx0ZmxvYXQ6cmlnaHQ7XHJcblx0cGFkZGluZy10b3A6IDBweDtcclxuXHRjb2xvcjogI0U3RThFQjtcclxufVxyXG4ubW9kYWwgLm1vZGFsLWRpYWxvZ3tcclxuICBtYXJnaW4tdG9wOiAzMHZoO1xyXG59XHJcbi5yZXF1aXJlZEVyck1zZ3tcclxuXHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblx0LmlucHV0Zm9udCB7bWFyZ2luLWxlZnQ6MTUlO31cclxuXHQuY2VudGVyQWxpZ24ge3RleHQtYWxpZ246IGxlZnQ7fVxyXG5cdC53aWR0aEZ1bGx7d2lkdGg6MTAwJTt9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCkge1xyXG5cdC5yZXF1aXJlZEVyck1zZ3tcclxuXHRcdG1hcmdpbi1sZWZ0OjVweCAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSB7XHJcblx0LnJlcXVpcmVkRXJyTXNne1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM4NHB4KSB7XHJcblx0LnJlcXVpcmVkRXJyTXNne1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");







//import { Cookie } from 'ng2-cookies/ng2-cookies';

var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, myservice, http, cookieService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.myservice = myservice;
        this.http = http;
        this.cookieService = cookieService;
        this.loading = false;
        this.submitted = false;
        this.flag_forgotPwd = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.LoginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.LoginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function (formval) {
        var _this = this;
        this.submitted = true;
        this.flag_forgotPwd = false;
        // stop here if form is invalid
        // if (this.LoginForm.invalid) {
        //     return;
        // } else {
        //   alert("Success!");
        // }
        var usrname = formval.username;
        var pwd = formval.password;
        usrname = usrname.trim();
        pwd = pwd.trim();
        // var params = 'usrname='+usrname+'&pwd='+pwd;x-www-form-urlencoded
        console.log("username=" + usrname + "--password=" + pwd);
        var params = { 'usrname': usrname, 'pwd': pwd };
        if (usrname != '' && pwd != '') {
            this.myservice.httpPostMethod('http://localhost:81/Angular/verify.php', params, 'application/json', false, 'Login')
                .then(function (resData) {
                if (resData != undefined) {
                    console.log("inside of resdata");
                    if (resData.hasOwnProperty('status')) {
                        console.log("inside of hasOwnProperty");
                        if (resData['status'] == 200) {
                            console.log("status=", resData);
                            var emirates = resData['body'];
                            console.log("emirates=" + emirates);
                            if (emirates != undefined && emirates != null && emirates != "") {
                                console.log("&&&&&&", emirates.success);
                                if (emirates.success) {
                                    var msg = emirates.message;
                                    var splitval = msg.split('$$');
                                    console.log("userid=", emirates.message);
                                    var userid = splitval[0];
                                    var fulname = splitval[1] + ' ' + splitval[2];
                                    _this.cookieService.set('username', usrname);
                                    _this.cookieService.set('userid', userid);
                                    _this.cookieService.set('fullname', fulname);
                                    alert("Successfully Logged-In");
                                    _this.router.navigate(['/menu']);
                                }
                                else {
                                    alert("Invalid User credentilas");
                                    return false;
                                }
                            }
                        }
                        else {
                            console.log("Get City List API - Error Occured : " + resData['txt']);
                            return false;
                        }
                    }
                }
            }, function (error) {
                console.log("Error", error);
                //this.spinner.hide();
            });
        }
        else {
            return false;
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: auto;\r\n    background-color: #f1f1f1;\r\n    position: fixed;\r\n    /* height: 100%; */\r\n    /* width: 100; */\r\n    overflow: auto;\r\n    /* width: 100%; */\r\n    /* height: 100%; */\r\n    top: 0;\r\n    height: 100%;\r\n    left: 0;\r\n  }\r\n  \r\n  .sidebar a {\r\n    display: block;\r\n    color: black;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .sidebar a.active {\r\n    background-color: #bd2130;\r\n    color: white;\r\n  }\r\n  \r\n  .sidebar a:hover:not(.active) {\r\n    background-color: #555;\r\n    color: white;\r\n  }\r\n  \r\n  div.content {\r\n    margin-left: 200px;\r\n    padding: 1px 16px;\r\n    height: 1000px;\r\n  }\r\n  \r\n  /* @media screen and (max-width: 700px) {\r\n    .sidebar {\r\n      width: 100%;\r\n      height: auto;\r\n      position: relative;\r\n    }\r\n    .sidebar a {float: left;}\r\n    div.content {margin-left: 0;}\r\n  }\r\n  \r\n  @media screen and (max-width: 400px) {\r\n    .sidebar a {\r\n      text-align: center;\r\n      float: none;\r\n    }\r\n  }  */\r\n  \r\n  .nav-tabs{border-bottom:1px solid #ddd}\r\n  \r\n  .nav-tabs>li{float:left;margin-bottom:-1px}\r\n  \r\n  .nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}\r\n  \r\n  .nav-tabs>li>a:hover{border-color:#eee #eee #ddd}\r\n  \r\n  .nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}\r\n  \r\n  .nav-tabs.nav-justified{width:100%;border-bottom:0}\r\n  \r\n  .nav-tabs.nav-justified>li{float:none}\r\n  \r\n  .nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center}\r\n  \r\n  .nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}\r\n  \r\n  @media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}\r\n  \r\n  .nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}\r\n  \r\n  .nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}\r\n  \r\n  @media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}\r\n  \r\n  .nav-pills>li{float:left}\r\n  \r\n  .nav-pills>li>a{border-radius:4px}\r\n  \r\n  .nav-pills>li+li{margin-left:2px}\r\n  \r\n  .nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}\r\n  \r\n  .nav-stacked>li{float:none}\r\n  \r\n  .nav-stacked>li+li{margin-top:2px;margin-left:0}\r\n  \r\n  .nav-justified{width:100%}\r\n  \r\n  .nav-justified>li{float:none}\r\n  \r\n  .nav-justified>li>a{margin-bottom:5px;text-align:center}\r\n  \r\n  .nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}\r\n  \r\n  @media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}\r\n  \r\n  .nav-tabs-justified{border-bottom:0}\r\n  \r\n  .nav-tabs-justified>li>a{margin-right:0;border-radius:4px}\r\n  \r\n  .nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}\r\n  \r\n  @media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}\r\n  \r\n  .tab-content>.tab-pane{display:none}\r\n  \r\n  .tab-content>.active{display:block}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFlBQVk7SUFDWixPQUFPO0VBQ1Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTs7Ozs7Ozs7Ozs7Ozs7O01BZUk7O0VBQ0osVUFBVSw0QkFBNEI7O0VBQUMsYUFBYSxVQUFVLENBQUMsa0JBQWtCOztFQUFDLGVBQWUsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLENBQUMseUJBQXlCOztFQUFDLHFCQUFxQiwyQkFBMkI7O0VBQUMsOEVBQThFLFVBQVUsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsK0JBQStCOztFQUFDLHdCQUF3QixVQUFVLENBQUMsZUFBZTs7RUFBQywyQkFBMkIsVUFBVTs7RUFBQyw2QkFBNkIsaUJBQWlCLENBQUMsaUJBQWlCOztFQUFDLGlEQUFpRCxRQUFRLENBQUMsU0FBUzs7RUFBQyx5QkFBeUIsMkJBQTJCLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDOztFQUFDLDZCQUE2QixjQUFjLENBQUMsaUJBQWlCOztFQUFDLGtIQUFrSCxxQkFBcUI7O0VBQUMseUJBQXlCLDZCQUE2Qiw0QkFBNEIsQ0FBQyx5QkFBeUIsQ0FBQyxrSEFBa0gsd0JBQXdCLENBQUM7O0VBQUMsY0FBYyxVQUFVOztFQUFDLGdCQUFnQixpQkFBaUI7O0VBQUMsaUJBQWlCLGVBQWU7O0VBQUMsaUZBQWlGLFVBQVUsQ0FBQyx3QkFBd0I7O0VBQUMsZ0JBQWdCLFVBQVU7O0VBQUMsbUJBQW1CLGNBQWMsQ0FBQyxhQUFhOztFQUFDLGVBQWUsVUFBVTs7RUFBQyxrQkFBa0IsVUFBVTs7RUFBQyxvQkFBb0IsaUJBQWlCLENBQUMsaUJBQWlCOztFQUFDLHdDQUF3QyxRQUFRLENBQUMsU0FBUzs7RUFBQyx5QkFBeUIsa0JBQWtCLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDOztFQUFDLG9CQUFvQixlQUFlOztFQUFDLHlCQUF5QixjQUFjLENBQUMsaUJBQWlCOztFQUFDLHNHQUFzRyxxQkFBcUI7O0VBQUMseUJBQXlCLHlCQUF5Qiw0QkFBNEIsQ0FBQyx5QkFBeUIsQ0FBQyxzR0FBc0csd0JBQXdCLENBQUM7O0VBQUMsdUJBQXVCLFlBQVk7O0VBQUMscUJBQXFCLGFBQWEiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAvKiB3aWR0aDogMTAwOyAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAgXHJcbiAgLnNpZGViYXIgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkMjEzMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgZGl2LmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIgYSB7ZmxvYXQ6IGxlZnQ7fVxyXG4gICAgZGl2LmNvbnRlbnQge21hcmdpbi1sZWZ0OiAwO31cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5zaWRlYmFyIGEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gIH0gICovXHJcbiAgLm5hdi10YWJze2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGR9Lm5hdi10YWJzPmxpe2Zsb2F0OmxlZnQ7bWFyZ2luLWJvdHRvbTotMXB4fS5uYXYtdGFicz5saT5he21hcmdpbi1yaWdodDoycHg7bGluZS1oZWlnaHQ6MS40Mjg1NzE0Mztib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NHB4IDRweCAwIDB9Lm5hdi10YWJzPmxpPmE6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNlZWUgI2VlZSAjZGRkfS5uYXYtdGFicz5saS5hY3RpdmU+YSwubmF2LXRhYnM+bGkuYWN0aXZlPmE6Zm9jdXMsLm5hdi10YWJzPmxpLmFjdGl2ZT5hOmhvdmVye2NvbG9yOiM1NTU7Y3Vyc29yOmRlZmF1bHQ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZDtib3JkZXItYm90dG9tLWNvbG9yOnRyYW5zcGFyZW50fS5uYXYtdGFicy5uYXYtanVzdGlmaWVke3dpZHRoOjEwMCU7Ym9yZGVyLWJvdHRvbTowfS5uYXYtdGFicy5uYXYtanVzdGlmaWVkPmxpe2Zsb2F0Om5vbmV9Lm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+bGk+YXttYXJnaW4tYm90dG9tOjVweDt0ZXh0LWFsaWduOmNlbnRlcn0ubmF2LXRhYnMubmF2LWp1c3RpZmllZD4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnV7dG9wOmF1dG87bGVmdDphdXRvfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2LXRhYnMubmF2LWp1c3RpZmllZD5saXtkaXNwbGF5OnRhYmxlLWNlbGw7d2lkdGg6MSV9Lm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+bGk+YXttYXJnaW4tYm90dG9tOjB9fS5uYXYtdGFicy5uYXYtanVzdGlmaWVkPmxpPmF7bWFyZ2luLXJpZ2h0OjA7Ym9yZGVyLXJhZGl1czo0cHh9Lm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+LmFjdGl2ZT5hLC5uYXYtdGFicy5uYXYtanVzdGlmaWVkPi5hY3RpdmU+YTpmb2N1cywubmF2LXRhYnMubmF2LWp1c3RpZmllZD4uYWN0aXZlPmE6aG92ZXJ7Ym9yZGVyOjFweCBzb2xpZCAjZGRkfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2LXRhYnMubmF2LWp1c3RpZmllZD5saT5he2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7Ym9yZGVyLXJhZGl1czo0cHggNHB4IDAgMH0ubmF2LXRhYnMubmF2LWp1c3RpZmllZD4uYWN0aXZlPmEsLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+LmFjdGl2ZT5hOmZvY3VzLC5uYXYtdGFicy5uYXYtanVzdGlmaWVkPi5hY3RpdmU+YTpob3Zlcntib3JkZXItYm90dG9tLWNvbG9yOiNmZmZ9fS5uYXYtcGlsbHM+bGl7ZmxvYXQ6bGVmdH0ubmF2LXBpbGxzPmxpPmF7Ym9yZGVyLXJhZGl1czo0cHh9Lm5hdi1waWxscz5saStsaXttYXJnaW4tbGVmdDoycHh9Lm5hdi1waWxscz5saS5hY3RpdmU+YSwubmF2LXBpbGxzPmxpLmFjdGl2ZT5hOmZvY3VzLC5uYXYtcGlsbHM+bGkuYWN0aXZlPmE6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjd9Lm5hdi1zdGFja2VkPmxpe2Zsb2F0Om5vbmV9Lm5hdi1zdGFja2VkPmxpK2xpe21hcmdpbi10b3A6MnB4O21hcmdpbi1sZWZ0OjB9Lm5hdi1qdXN0aWZpZWR7d2lkdGg6MTAwJX0ubmF2LWp1c3RpZmllZD5saXtmbG9hdDpub25lfS5uYXYtanVzdGlmaWVkPmxpPmF7bWFyZ2luLWJvdHRvbTo1cHg7dGV4dC1hbGlnbjpjZW50ZXJ9Lm5hdi1qdXN0aWZpZWQ+LmRyb3Bkb3duIC5kcm9wZG93bi1tZW51e3RvcDphdXRvO2xlZnQ6YXV0b31AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdi1qdXN0aWZpZWQ+bGl7ZGlzcGxheTp0YWJsZS1jZWxsO3dpZHRoOjElfS5uYXYtanVzdGlmaWVkPmxpPmF7bWFyZ2luLWJvdHRvbTowfX0ubmF2LXRhYnMtanVzdGlmaWVke2JvcmRlci1ib3R0b206MH0ubmF2LXRhYnMtanVzdGlmaWVkPmxpPmF7bWFyZ2luLXJpZ2h0OjA7Ym9yZGVyLXJhZGl1czo0cHh9Lm5hdi10YWJzLWp1c3RpZmllZD4uYWN0aXZlPmEsLm5hdi10YWJzLWp1c3RpZmllZD4uYWN0aXZlPmE6Zm9jdXMsLm5hdi10YWJzLWp1c3RpZmllZD4uYWN0aXZlPmE6aG92ZXJ7Ym9yZGVyOjFweCBzb2xpZCAjZGRkfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2LXRhYnMtanVzdGlmaWVkPmxpPmF7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOjRweCA0cHggMCAwfS5uYXYtdGFicy1qdXN0aWZpZWQ+LmFjdGl2ZT5hLC5uYXYtdGFicy1qdXN0aWZpZWQ+LmFjdGl2ZT5hOmZvY3VzLC5uYXYtdGFicy1qdXN0aWZpZWQ+LmFjdGl2ZT5hOmhvdmVye2JvcmRlci1ib3R0b20tY29sb3I6I2ZmZn19LnRhYi1jb250ZW50Pi50YWItcGFuZXtkaXNwbGF5Om5vbmV9LnRhYi1jb250ZW50Pi5hY3RpdmV7ZGlzcGxheTpibG9ja30iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






//import { Cookie } from 'ng2-cookies/ng2-cookies';

var MenuComponent = /** @class */ (function () {
    //status: boolean = false;
    function MenuComponent(router, route, http, myservice, cookieService) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.myservice = myservice;
        this.cookieService = cookieService;
        this.header_title = '';
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.myservice.setTitle('');
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





//import { HttpClientModule, HttpClient } from '@angular/common/http';
var MyserviceService = /** @class */ (function () {
    function MyserviceService(http) {
        this.http = http;
        //header_title = new BehaviorSubject('Menu');
        this.SelmoduleName = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    MyserviceService.prototype.setTitle = function (title) {
        //this.header_title.next(title);
        this.SelmoduleName.next(title);
    };
    MyserviceService.prototype.showTodayDate = function () {
        var ndate = new Date();
        var d = ndate.getDate();
        var m = ndate.getMonth() + 1; //January is 0!
        var yy = ndate.getFullYear();
        return d + '/' + m + '/' + yy;
    };
    MyserviceService.prototype.saveDetails = function (data) {
        // let someValue: any = "success";
        // console.log("VerifyDetails="+data);
        // return someValue;
        return this.http.post('http://localhost:83/Angular/test.php', data) //2 Min timeout
            .toPromise()
            .then(function (response) {
            console.log('httpPOSTMethod-- ' + response);
            return response;
        })
            .catch(function (err) {
            //let errorObject=JSON.parse(JSON.stringify(err));
            console.log("service error=" + err);
            return Promise.reject(err.error || 'Server error');
        });
    };
    MyserviceService.prototype.VerifyDetails = function (data) {
        // let someValue: any = "success";
        // console.log("VerifyDetails="+data);
        // return someValue;
        return this.http.post('http://localhost:83/Angular/verify.php', data) //2 Min timeout
            .toPromise()
            .then(function (response) {
            console.log('httpPOSTMethod-- ' + response);
            return response;
        })
            .catch(function (err) {
            //let errorObject=JSON.parse(JSON.stringify(err));
            console.log("service error=" + err);
            return Promise.reject(err.error || 'Server error');
        });
    };
    MyserviceService.prototype.Getapidata = function (data) {
        // let someValue: any = "success";
        // console.log("VerifyDetails="+data);
        // return someValue;
        return this.http.post('http://localhost:83/Angular/api_search.php', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(50)) //2 Min timeout
            .toPromise()
            .then(function (response) {
            console.log('httpPOSTMethod-- ' + response);
            return response;
        })
            .catch(function (err) {
            //let errorObject=JSON.parse(JSON.stringify(err));
            console.log("service error=" + err);
            return Promise.reject(err.error || 'Server error');
        });
    };
    /* http Post method - Added by shailesh */
    MyserviceService.prototype.httpPostMethod = function (url, parameter, contentType, token, moduleName) {
        console.log("URL-- " + url + parameter);
        var options;
        var tokenId = '';
        // if(token)
        // 	tokenId = this.getToken();
        if (token) {
            options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': contentType,
                    'in-auth-token': tokenId //token Value
                }),
                observe: 'response'
            }; //set the header
        }
        else {
            options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': contentType
                }),
                observe: 'response'
            }; //set the header
        }
        // return this.httpClient.post(this.globals.IP + url, parameter, options).timeout(30000)		//30 Sec timeout
        console.log("URL-- " + url + parameter);
        return this.http.post(url, parameter, options)
            .toPromise()
            .then(function (response) {
            console.log("PostService Response=" + response);
            return response;
        })
            .catch(function (err) {
            //this.errorAlert("Unable to connect server");
            return Promise.reject(err.error || 'Server error');
        });
    };
    MyserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MyserviceService);
    return MyserviceService;
}());



/***/ }),

/***/ "./src/app/rca/rca.component.css":
/*!***************************************!*\
  !*** ./src/app/rca/rca.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  .containercls {\r\n    margin-top: 80px;\r\n    position: relative;\r\n    z-index: -1;\r\n    height: 100%;\r\n    margin-bottom: 80px;\r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  textarea[type=\"text\"],input[type=\"text\"] {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  select {\r\n    width: 50%;\r\n    /* display: inline-block; */\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  .fieldlabel {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  }\r\n  /* #buttondiv { */\r\n  /* position: relative; */\r\n  /* left: 25%; */\r\n  /* } */\r\n  #save,#exit {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 17px;\r\n    padding-right: 10px;\r\n    /* position: relative; */\r\n    /* left: -15px; */\r\n    /* right: 338px; */\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmNhL3JjYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0VBQ0EsNERBQTREO0VBQzVEO0lBQ0UsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLG9CQUFvQjtFQUN0QjtFQUVBLG1DQUFtQztFQUNuQztJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBRUE7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjs7RUFFeEI7RUFFQTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCOztFQUV4QjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtFQUVGLGlCQUFpQjtFQUNiLHdCQUF3QjtFQUN4QixlQUFlO0VBQ25CLE1BQU07RUFFSjtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9yY2EvcmNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5jb250YWluZXJjbHMge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICB9XHJcbiAgLyogQ3JlYXRlIHR3byBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8qIGhlaWdodDogMzAwcHg7ICAqL1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuICAucm93dGJsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWFbdHlwZT1cInRleHRcIl0saW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgXHJcbiAgfVxyXG5cclxuICBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgXHJcbiAgfVxyXG5cclxuICAuZmllbGRsYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuLyogI2J1dHRvbmRpdiB7ICovXHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAvKiBsZWZ0OiAyNSU7ICovXHJcbi8qIH0gKi9cclxuICBcclxuICAjc2F2ZSwjZXhpdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmQyMTMwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xyXG4gICAgYm9yZGVyOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgLyogbGVmdDogLTE1cHg7ICovXHJcbiAgICAvKiByaWdodDogMzM4cHg7ICovXHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/rca/rca.component.ts":
/*!**************************************!*\
  !*** ./src/app/rca/rca.component.ts ***!
  \**************************************/
/*! exports provided: RcaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RcaComponent", function() { return RcaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var RcaComponent = /** @class */ (function () {
    function RcaComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.submitted = false;
        this.rcastatusval = ['Open', 'Close'];
        this.collection = [];
        this.existrecid = '';
    }
    RcaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('Create RCA');
        this.existrecid = this.route.snapshot.paramMap.get('recid');
        console.log("existrecid=" + this.existrecid);
        //if(this.existrecid!='' && this.existrecid!=null) {
        var params = { 'recidval': this.existrecid };
        this.myservice.httpPostMethod('http://localhost:81/Angular/getrcadetails.php', params, 'application/json', false, 'createroles')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitcol = mesg.split('$$');
                                _this.collection.push({ "complaintid": splitcol[0], "rcastatusval": splitcol[1], "why": splitcol[2], "how": splitcol[3], "reasoncode": splitcol[4], "what": splitcol[5], "when": splitcol[6], "remarks": splitcol[7], "recid": splitcol[8] });
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
        });
        /* } else {
            return false;
        } */
        this.rcadata = this.formBuilder.group({
            complaintid: ['', ''],
            rcastatus: ['', ''],
            why: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            how: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            reasoncode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            what: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            when: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    RcaComponent.prototype.onClickSubmit = function (formval) {
        var _this = this;
        console.log("complaintid=" + formval.complaintid);
        console.log("rcastatus=" + formval.rcastatus);
        console.log("why=" + formval.why);
        console.log("how=" + formval.how);
        console.log("reasoncode=" + formval.reasoncode);
        console.log("what=" + formval.what);
        console.log("when=" + formval.when);
        console.log("remarks=" + formval.remarks);
        this.submitted = true;
        if (!this.rcadata.valid) {
            alert("Please Enter the mandatory fields");
            return false;
        }
        else {
            // validate all form fields
            var params = { 'complaintid': formval.complaintid, 'rcastatus': formval.rcastatus, 'why': formval.why, 'how': formval.how, 'reasoncode': formval.reasoncode, 'what': formval.what, 'when': formval.when, 'remarks': formval.remarks };
            this.myservice.httpPostMethod('http://localhost:81/Angular/submitrca.php', params, 'application/json', false, 'rca')
                .then(function (resData) {
                if (resData != undefined) {
                    console.log("inside of resdata");
                    if (resData.hasOwnProperty('status')) {
                        console.log("inside of hasOwnProperty");
                        if (resData['status'] == 200) {
                            console.log("status=", resData);
                            var emirates = resData['body'];
                            console.log("emirates=" + emirates); //return false;
                            if (emirates != undefined && emirates != null && emirates != "") {
                                console.log("&&&&&&", emirates.success);
                                if (emirates.success) {
                                    var mesg = emirates.message;
                                    console.log("mesg=" + mesg);
                                    alert("RCA has been created successfully");
                                    _this.router.navigate(['/rcadetails', { 'recid': mesg }]);
                                }
                            }
                        }
                        else {
                            console.log("Get City List API - Error Occured : " + resData['txt']);
                            return false;
                        }
                    }
                }
            }, function (error) {
                console.log("Error", error);
            });
        }
    };
    RcaComponent.prototype.onClickExit = function () {
        if (this.existrecid != null && this.existrecid != '') {
            this.router.navigate(['/rcadetails', { "recid": this.existrecid }]);
        }
        else {
            this.router.navigate(['/rcadetails']);
        }
    };
    RcaComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    RcaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rca',
            template: __webpack_require__(/*! raw-loader!./rca.component.html */ "./node_modules/raw-loader/index.js!./src/app/rca/rca.component.html"),
            styles: [__webpack_require__(/*! ./rca.component.css */ "./src/app/rca/rca.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RcaComponent);
    return RcaComponent;
}());



/***/ }),

/***/ "./src/app/rcadetails/rcadetails.component.css":
/*!*****************************************************!*\
  !*** ./src/app/rcadetails/rcadetails.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n\t\r\n  }\r\n  .maindiv {\r\n\tmargin-top:100px;  \r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .goback {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    position: relative;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmNhZGV0YWlscy9yY2FkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7O0VBRXhCO0VBQ0E7Q0FDRCxnQkFBZ0I7RUFDZjtFQUNBLDREQUE0RDtFQUM1RDtJQUNFLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7SUFDYixvQkFBb0I7RUFDdEI7RUFFQSxtQ0FBbUM7RUFDbkM7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9yY2FkZXRhaWxzL3JjYWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcclxuICB9XHJcbiAgLm1haW5kaXYge1xyXG5cdG1hcmdpbi10b3A6MTAwcHg7ICBcclxuICB9XHJcbiAgLyogQ3JlYXRlIHR3byBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8qIGhlaWdodDogMzAwcHg7ICAqL1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuICAucm93dGJsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuZ29iYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNiZDIxMzA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXHJcbiAgICBib3JkZXI6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/rcadetails/rcadetails.component.ts":
/*!****************************************************!*\
  !*** ./src/app/rcadetails/rcadetails.component.ts ***!
  \****************************************************/
/*! exports provided: RcadetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RcadetailsComponent", function() { return RcadetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var RcadetailsComponent = /** @class */ (function () {
    function RcadetailsComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.collection = [];
        this.ComplaintID = '';
    }
    RcadetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('RCA Details');
        this.ComplaintID = this.route.snapshot.paramMap.get('recid');
        console.log("ComplaintID=" + this.ComplaintID);
        var params = { 'recidval': this.ComplaintID };
        this.myservice.httpPostMethod('http://localhost:81/Angular/getrcadetails.php', params, 'application/json', false, 'rcadetails')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitcol = mesg.split('$$');
                                _this.collection.push({ "complaintid": splitcol[0], "rcastatusval": splitcol[1], "why": splitcol[2], "how": splitcol[3], "reasoncode": splitcol[4], "what": splitcol[5], "when": splitcol[6], "remarks": splitcol[7], "recid": splitcol[8] });
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
            //this.spinner.hide();
        });
    };
    RcadetailsComponent.prototype.GoBack = function () {
        this.router.navigate(['/rcalist']);
    };
    RcadetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    RcadetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rcadetails',
            template: __webpack_require__(/*! raw-loader!./rcadetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/rcadetails/rcadetails.component.html"),
            styles: [__webpack_require__(/*! ./rcadetails.component.css */ "./src/app/rcadetails/rcadetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RcadetailsComponent);
    return RcadetailsComponent;
}());



/***/ }),

/***/ "./src/app/rcalist/rcalist.component.css":
/*!***********************************************!*\
  !*** ./src/app/rcalist/rcalist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.maindiv {\r\n\t/* margin-top:50px; */\r\n}\r\n\r\n tablecls {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n th {\r\n\tcolor: #bd2130;\t\r\n}\r\n\r\n th, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\n tr:nth-child(even) {background-color: #f2f2f2;}\r\n\r\n .tbltxt{\r\n  /* width:100px !important; */\r\n  text-align: center;\r\n \r\n }\r\n\r\n .Editicon {\r\n\tcolor: #bd2130; \r\n }\r\n\r\n .EnDetailLink {\r\n  color: #bd2130;\r\n }\r\n\r\n .inputborder {\r\n    border-top: 1px;\r\n    border-left: 1px;\r\n    padding: 5px;\r\n    border-bottom: groove;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmNhbGlzdC9yY2FsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOztDQUVDO0VBQ0MseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7Q0FDQTtDQUNDLGNBQWM7QUFDZjs7Q0FDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0NBRUEsb0JBQW9CLHlCQUF5QixDQUFDOztDQUU5QztFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7O0NBRW5COztDQUNBO0NBQ0EsY0FBYztDQUNkOztDQUNBO0VBQ0MsY0FBYztDQUNmOztDQUVEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcmNhbGlzdC9yY2FsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW5kaXYge1xyXG5cdC8qIG1hcmdpbi10b3A6NTBweDsgKi9cclxufVxyXG5cclxuIHRhYmxlY2xzIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRoIHtcclxuXHRjb2xvcjogI2JkMjEzMDtcdFxyXG59XHJcbnRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9IFxyXG5cclxuLnRibHR4dHtcclxuICAvKiB3aWR0aDoxMDBweCAhaW1wb3J0YW50OyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIFxyXG4gfVxyXG4gLkVkaXRpY29uIHtcclxuXHRjb2xvcjogI2JkMjEzMDsgXHJcbiB9XHJcbiAuRW5EZXRhaWxMaW5rIHtcclxuICBjb2xvcjogI2JkMjEzMDtcclxuIH1cclxuXHJcbi5pbnB1dGJvcmRlciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZ3Jvb3ZlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/rcalist/rcalist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/rcalist/rcalist.component.ts ***!
  \**********************************************/
/*! exports provided: RcalistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RcalistComponent", function() { return RcalistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");








var RcalistComponent = /** @class */ (function () {
    function RcalistComponent(formBuilder, router, http, myservice, route, cookieService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.cookieService = cookieService;
        this.collection = [];
    }
    RcalistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('RCA');
        var params = { 'recidval': '' };
        this.myservice.httpPostMethod('http://localhost:81/Angular/rcalist.php', params, 'application/json', false, 'roleslist')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitrow = mesg.split('||');
                                var reclen = splitrow.length;
                                for (var i = 0; i < reclen - 1; i++) {
                                    var splitcol = splitrow[i].split('$$');
                                    _this.collection.push({ "complaintid": splitcol[0], "rcastatusval": splitcol[1], "why": splitcol[2], "how": splitcol[3], "reasoncode": splitcol[4], "what": splitcol[5], "when": splitcol[6], "remarks": splitcol[7], "recid": splitcol[8] });
                                }
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
            //this.spinner.hide();
        });
    };
    RcalistComponent.prototype.EditSelrec = function (recidval) {
        console.log("EditSelrec=" + recidval);
        this.router.navigate(['/rca', { 'recid': recidval }]);
    };
    RcalistComponent.prototype.fn_redirect = function (requestidval) {
        this.router.navigate(['/rcadetails', { 'recid': requestidval }]);
    };
    RcalistComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    RcalistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rcalist',
            template: __webpack_require__(/*! raw-loader!./rcalist.component.html */ "./node_modules/raw-loader/index.js!./src/app/rcalist/rcalist.component.html"),
            styles: [__webpack_require__(/*! ./rcalist.component.css */ "./src/app/rcalist/rcalist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], RcalistComponent);
    return RcalistComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, route, myservice) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.myservice = myservice;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            emailid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobilenum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[6-9]\d{9}$/)]],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.todaydate = this.myservice.showTodayDate();
        console.log("todaydate=" + this.todaydate);
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log("inside of submit");
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } /*
        else {
          alert("Success!!!");
        }*/
        //localStorage.setItem('firstName', this.registerForm.value.firstname);
        console.log("registerdata=" + this.registerForm.value.firstName);
        // this.myservice.saveDetails(this.registerForm.value).subscribe(		
        //    data=>
        //   {			
        // 	 let res:any;
        // 	 res=data;
        //    //this.reset();
        //    console.log("response="+res);
        //    alert("successfully saved");
        //    this.router.navigate(['/menu']);
        //   },
        //   error=>
        //   {
        // 	  console.log(error);
        //   }
        // )
        this.myservice.saveDetails(this.registerForm.value).then(function (resData) {
            console.log("resdata=" + resData);
            if (resData == "success") {
                alert("successfully Registered In");
                _this.router.navigate(['/login']);
            }
            else {
                alert("Failed to Register");
                return false;
            }
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/requestdetails/requestdetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/requestdetails/requestdetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n\t\r\n  }\r\n  .maindiv {\r\n\tmargin-top:50px;  \r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .goback {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    position: relative;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdGRldGFpbHMvcmVxdWVzdGRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjs7RUFFeEI7RUFDQTtDQUNELGVBQWU7RUFDZDtFQUNBLDREQUE0RDtFQUM1RDtJQUNFLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7SUFDYixvQkFBb0I7RUFDdEI7RUFFQSxtQ0FBbUM7RUFDbkM7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9yZXF1ZXN0ZGV0YWlscy9yZXF1ZXN0ZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFxyXG4gIH1cclxuICAubWFpbmRpdiB7XHJcblx0bWFyZ2luLXRvcDo1MHB4OyAgXHJcbiAgfVxyXG4gIC8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICAuY29sdW1uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbiAgLnJvd3RibDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLmdvYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmQyMTMwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xyXG4gICAgYm9yZGVyOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/requestdetails/requestdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/requestdetails/requestdetails.component.ts ***!
  \************************************************************/
/*! exports provided: RequestdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestdetailsComponent", function() { return RequestdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var RequestdetailsComponent = /** @class */ (function () {
    function RequestdetailsComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.collection = [];
        this.RequestID = '';
    }
    RequestdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('Request Details');
        this.RequestID = this.route.snapshot.paramMap.get('requestid');
        console.log("requestid=" + this.RequestID);
        var params = { 'requestid': this.RequestID };
        this.myservice.httpPostMethod('http://localhost:81/Angular/api_reqsumery.php', params, 'application/json', false, 'custservice')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitcol = mesg.split('$$');
                                _this.collection.push({ "request_category": splitcol[0], "request_subcategory": splitcol[1], "request_type": splitcol[2], "request_desc": splitcol[3], "groupname": splitcol[4], "requestsource": splitcol[5], "agreement_no": splitcol[6], "request_id": splitcol[7], "customerid": splitcol[8], "customer_mailid": splitcol[9], "customer_name": splitcol[10], "requeststatus": splitcol[11], "remarks": splitcol[12], "request_classification": splitcol[13], "customer_mobileno": splitcol[14], "vehicleno": splitcol[15], "request_creation_dt": splitcol[16], "tentative_closing_dt": splitcol[17], "actual_closing_dt": splitcol[18] });
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
            //this.spinner.hide();
        });
    };
    RequestdetailsComponent.prototype.GoBack = function () {
        this.router.navigate(['/requestslist']);
    };
    RequestdetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    RequestdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-requestdetails',
            template: __webpack_require__(/*! raw-loader!./requestdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/requestdetails/requestdetails.component.html"),
            styles: [__webpack_require__(/*! ./requestdetails.component.css */ "./src/app/requestdetails/requestdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RequestdetailsComponent);
    return RequestdetailsComponent;
}());



/***/ }),

/***/ "./src/app/requestslist/requestslist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/requestslist/requestslist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.maindiv {\r\n\t/* margin-top:50px; */\r\n}\r\n\r\n .tablecls {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n th {\r\n\tcolor: #bd2130;\t\r\n}\r\n\r\n th, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\n tr:nth-child(even) {background-color: #f2f2f2;}\r\n\r\n .tbltxt{\r\n  /* width:100px !important; */\r\n  text-align: center;\r\n \r\n }\r\n\r\n .Editicon {\r\n\tcolor: #bd2130;\r\n }\r\n\r\n .EnDetailLink {\r\n  color: #bd2130;\r\n }\r\n\r\n .inputborder {\r\n    border-top: 1px;\r\n    border-left: 1px;\r\n    padding: 5px;\r\n    border-bottom: groove;\r\n}\r\n\r\n input[type=text],select {\r\n  width: 20%;\r\n  /* display: inline-block; */\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  padding: 8px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n #Assign {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    \r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdHNsaXN0L3JlcXVlc3RzbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLHFCQUFxQjtBQUN0Qjs7Q0FFQztFQUNDLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0NBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0NBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztDQUVBLG9CQUFvQix5QkFBeUIsQ0FBQzs7Q0FFOUM7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCOztDQUVuQjs7Q0FFQTtDQUNBLGNBQWM7Q0FDZDs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7Q0FFQTtFQUNFLFVBQVU7RUFDViwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztDQUVFO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCIiwiZmlsZSI6InNyYy9hcHAvcmVxdWVzdHNsaXN0L3JlcXVlc3RzbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYWluZGl2IHtcclxuXHQvKiBtYXJnaW4tdG9wOjUwcHg7ICovXHJcbn1cclxuXHJcbiAudGFibGVjbHMge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxudGgge1xyXG5cdGNvbG9yOiAjYmQyMTMwO1x0XHJcbn1cclxudGgsIHRkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO30gXHJcblxyXG4udGJsdHh0e1xyXG4gIC8qIHdpZHRoOjEwMHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gXHJcbiB9XHJcbiBcclxuIC5FZGl0aWNvbiB7XHJcblx0Y29sb3I6ICNiZDIxMzA7XHJcbiB9XHJcblxyXG4gLkVuRGV0YWlsTGluayB7XHJcbiAgY29sb3I6ICNiZDIxMzA7XHJcbiB9XHJcblxyXG4uaW5wdXRib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IGdyb292ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSxzZWxlY3Qge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuICAjQXNzaWduIHtcclxuICAgIGJhY2tncm91bmQ6ICNiZDIxMzA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/requestslist/requestslist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/requestslist/requestslist.component.ts ***!
  \********************************************************/
/*! exports provided: RequestslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestslistComponent", function() { return RequestslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");








var RequestslistComponent = /** @class */ (function () {
    function RequestslistComponent(formBuilder, router, http, myservice, route, cookieService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.cookieService = cookieService;
        this.collection = [];
        this.grpcollection = [];
        this.indvidualusrs = [];
        this.RequestID = '';
        this.AssignFields = false;
        this.Selchkbx = '';
        this.selfusr = '';
    }
    RequestslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('Request/Agreement Search');
        this.selfusr = this.cookieService.get('username');
        //this.RequestID = this.route.snapshot.paramMap.get('requestid'); 
        //console.log("requestid="+this.RequestID);
        this.requestlistdata = this.formBuilder.group({
            username: ['', ''],
            remarks: ['', ''],
            groupname: ['', ''],
            selfuser: ['', ''],
            api_chkbx: ['', '']
        });
        var params = { 'requestid': '' };
        this.myservice.httpPostMethod('http://localhost:81/Angular/requestlist.php', params, 'application/json', false, 'requestlist')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                // var splitrow = mesg.split('||');
                                // var reclen = splitrow.length;
                                // for(var i=0;i<reclen-1;i++){
                                // var splitcol = splitrow[i].split('$$');
                                // this.collection.push({ "request_category": splitcol[0], "request_subcategory": splitcol[1], "request_type": splitcol[2], "request_desc": splitcol[3], "groupname": splitcol[4], "requestsource": splitcol[5], "agreement_no": splitcol[6], "request_id": splitcol[7], "customerid": splitcol[8], "customer_mailid": splitcol[9], "customer_name": splitcol[10], "requeststatus": splitcol[11], "remarks": splitcol[12], "request_classification": splitcol[13], "customer_mobileno": splitcol[14], "vehicleno": splitcol[15], "request_creation_dt": splitcol[16], "tentative_closing_dt": splitcol[17], "actual_closing_dt": splitcol[18], "recid": splitcol[19], "assignedid": splitcol[20], "assignedusr": splitcol[21] });
                                // }
                                var splitmsg = mesg.split('&&');
                                console.log('collection=' + splitmsg[0]);
                                console.log('groupdata=' + splitmsg[1]);
                                var roledt = splitmsg[0].split('||');
                                var rolelen = roledt.length;
                                for (var i = 0; i < rolelen - 1; i++) {
                                    var splitcol = roledt[i].split('$$');
                                    _this.collection.push({ "request_category": splitcol[0], "request_subcategory": splitcol[1], "request_type": splitcol[2], "request_desc": splitcol[3], "groupname": splitcol[4], "requestsource": splitcol[5], "agreement_no": splitcol[6], "request_id": splitcol[7], "customerid": splitcol[8], "customer_mailid": splitcol[9], "customer_name": splitcol[10], "requeststatus": splitcol[11], "remarks": splitcol[12], "request_classification": splitcol[13], "customer_mobileno": splitcol[14], "vehicleno": splitcol[15], "request_creation_dt": splitcol[16], "tentative_closing_dt": splitcol[17], "actual_closing_dt": splitcol[18], "recid": splitcol[19], "assignedid": splitcol[20], "assignedusr": splitcol[21] });
                                }
                                var grpdt = splitmsg[1].split('||');
                                var grplen = grpdt.length;
                                for (var i = 0; i < grplen - 1; i++) {
                                    var splitgrp = grpdt[i].split('$$');
                                    _this.grpcollection.push({ "groupname": splitgrp[0], "groupid": splitgrp[1] });
                                }
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
            //this.spinner.hide();
        });
    };
    RequestslistComponent.prototype.EditSelrec = function (recidval) {
        console.log("EditSelrec=" + recidval);
        this.router.navigate(['/createrequest', { 'requestid': recidval }]);
    };
    RequestslistComponent.prototype.fn_redirect = function (requestidval) {
        this.router.navigate(['/requestdetails', { 'requestid': requestidval }]);
    };
    RequestslistComponent.prototype.verifyradiobtn = function (chkbxval) {
        console.log("chkbxval=" + chkbxval.target.value);
        this.AssignFields = true;
        this.Selchkbx = chkbxval.target.value;
        this.grpcollection = [];
        this.indvidualusrs = [];
        /* if(this.Selchkbx == 'Self') {
            this.selfusr = ;
        } */
    };
    RequestslistComponent.prototype.GetIndvidualuser = function (evnt) {
        var _this = this;
        console.log("GetIndvidualuser=" + evnt.target.value);
        this.indvidualusrs = [];
        if (this.Selchkbx != "Individual") {
            return false;
        }
        else {
            console.log("inside of ELSE=" + evnt.target.value);
            var nxtval = { 'groupid': evnt.target.value };
            this.myservice.httpPostMethod('http://localhost:81/Angular/getgroupusers.php', nxtval, 'application/json', false, 'createuser')
                .then(function (resData) {
                if (resData != undefined) {
                    console.log("inside of resdata");
                    if (resData.hasOwnProperty('status')) {
                        console.log("inside of hasOwnProperty");
                        if (resData['status'] == 200) {
                            console.log("status=", resData);
                            var emirates = resData['body'];
                            console.log("emirates=" + emirates); //return false;
                            if (emirates != undefined && emirates != null && emirates != "") {
                                console.log("&&&&&&", emirates.success);
                                if (emirates.success) {
                                    var mesg = emirates.message;
                                    console.log("mesg=" + mesg);
                                    var roledt = mesg.split('||');
                                    var rolelen = roledt.length;
                                    for (var i = 0; i < rolelen - 1; i++) {
                                        var splitrole = roledt[i].split('$$');
                                        _this.indvidualusrs.push({ "usrname": splitrole[0], "usrid": splitrole[1] });
                                    }
                                }
                            }
                        }
                        else {
                            console.log("Get City List API - Error Occured : " + resData['txt']);
                            return false;
                        }
                    }
                }
            }, function (error) {
                console.log("Error", error);
            });
        }
    };
    RequestslistComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        //this.dataSource.filter = filterValue;
    };
    RequestslistComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    RequestslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-requestslist',
            template: __webpack_require__(/*! raw-loader!./requestslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/requestslist/requestslist.component.html"),
            styles: [__webpack_require__(/*! ./requestslist.component.css */ "./src/app/requestslist/requestslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], RequestslistComponent);
    return RequestslistComponent;
}());



/***/ }),

/***/ "./src/app/roleslist/roleslist.component.css":
/*!***************************************************!*\
  !*** ./src/app/roleslist/roleslist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.maindiv {\r\n\t/* margin-top:50px; */\r\n}\r\n\r\n tablecls {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n th {\r\n\tcolor: #bd2130;\r\n}\r\n\r\n th, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\n tr:nth-child(even) {background-color: #f2f2f2;}\r\n\r\n .tbltxt{\r\n  /* width:100px !important; */\r\n  text-align: center;\r\n \r\n }\r\n\r\n .EnDetailLink,.Editicon {\r\n  color: #bd2130;\r\n }\r\n\r\n .inputborder {\r\n    border-top: 1px;\r\n    border-left: 1px;\r\n    padding: 5px;\r\n    border-bottom: groove;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXNsaXN0L3JvbGVzbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLHFCQUFxQjtBQUN0Qjs7Q0FFQztFQUNDLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0NBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0NBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztDQUVBLG9CQUFvQix5QkFBeUIsQ0FBQzs7Q0FFOUM7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCOztDQUVuQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzbGlzdC9yb2xlc2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbmRpdiB7XHJcblx0LyogbWFyZ2luLXRvcDo1MHB4OyAqL1xyXG59XHJcblxyXG4gdGFibGVjbHMge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxudGgge1xyXG5cdGNvbG9yOiAjYmQyMTMwO1xyXG59XHJcbnRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9IFxyXG5cclxuLnRibHR4dHtcclxuICAvKiB3aWR0aDoxMDBweCAhaW1wb3J0YW50OyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIFxyXG4gfVxyXG5cclxuIC5FbkRldGFpbExpbmssLkVkaXRpY29uIHtcclxuICBjb2xvcjogI2JkMjEzMDtcclxuIH1cclxuXHJcbi5pbnB1dGJvcmRlciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZ3Jvb3ZlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/roleslist/roleslist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/roleslist/roleslist.component.ts ***!
  \**************************************************/
/*! exports provided: RoleslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleslistComponent", function() { return RoleslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");








var RoleslistComponent = /** @class */ (function () {
    function RoleslistComponent(formBuilder, router, http, myservice, route, cookieService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.cookieService = cookieService;
        this.collection = [];
    }
    RoleslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('Roles');
        var params = { 'requestid': '' };
        this.myservice.httpPostMethod('http://localhost:81/Angular/roleslist.php', params, 'application/json', false, 'roleslist')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitrow = mesg.split('||');
                                var reclen = splitrow.length;
                                for (var i = 0; i < reclen - 1; i++) {
                                    var splitcol = splitrow[i].split('$$');
                                    _this.collection.push({ "rolename": splitcol[0], "rolelevel": splitcol[1], "company": splitcol[2], "roledesc": splitcol[3], "recid": splitcol[4] });
                                }
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
            //this.spinner.hide();
        });
    };
    RoleslistComponent.prototype.EditSelrec = function (recidval) {
        console.log("EditSelrec=" + recidval);
        this.router.navigate(['/createroles', { 'recidval': recidval }]);
    };
    RoleslistComponent.prototype.fn_redirect = function (requestidval) {
        this.router.navigate(['/createroles', { 'recidval': requestidval }]);
    };
    RoleslistComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    RoleslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roleslist',
            template: __webpack_require__(/*! raw-loader!./roleslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/roleslist/roleslist.component.html"),
            styles: [__webpack_require__(/*! ./roleslist.component.css */ "./src/app/roleslist/roleslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], RoleslistComponent);
    return RoleslistComponent;
}());



/***/ }),

/***/ "./src/app/srtatdetails/srtatdetails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/srtatdetails/srtatdetails.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NydGF0ZGV0YWlscy9zcnRhdGRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/srtatdetails/srtatdetails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/srtatdetails/srtatdetails.component.ts ***!
  \********************************************************/
/*! exports provided: SrtatdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrtatdetailsComponent", function() { return SrtatdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SrtatdetailsComponent = /** @class */ (function () {
    function SrtatdetailsComponent() {
    }
    SrtatdetailsComponent.prototype.ngOnInit = function () {
    };
    SrtatdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-srtatdetails',
            template: __webpack_require__(/*! raw-loader!./srtatdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/srtatdetails/srtatdetails.component.html"),
            styles: [__webpack_require__(/*! ./srtatdetails.component.css */ "./src/app/srtatdetails/srtatdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SrtatdetailsComponent);
    return SrtatdetailsComponent;
}());



/***/ }),

/***/ "./src/app/srtatslist/srtatslist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/srtatslist/srtatslist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NydGF0c2xpc3Qvc3J0YXRzbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/srtatslist/srtatslist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/srtatslist/srtatslist.component.ts ***!
  \****************************************************/
/*! exports provided: SrtatslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrtatslistComponent", function() { return SrtatslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SrtatslistComponent = /** @class */ (function () {
    function SrtatslistComponent() {
    }
    SrtatslistComponent.prototype.ngOnInit = function () {
    };
    SrtatslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-srtatslist',
            template: __webpack_require__(/*! raw-loader!./srtatslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/srtatslist/srtatslist.component.html"),
            styles: [__webpack_require__(/*! ./srtatslist.component.css */ "./src/app/srtatslist/srtatslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SrtatslistComponent);
    return SrtatslistComponent;
}());



/***/ }),

/***/ "./src/app/statedetails/statedetails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/statedetails/statedetails.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRlZGV0YWlscy9zdGF0ZWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/statedetails/statedetails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/statedetails/statedetails.component.ts ***!
  \********************************************************/
/*! exports provided: StatedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatedetailsComponent", function() { return StatedetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatedetailsComponent = /** @class */ (function () {
    function StatedetailsComponent() {
    }
    StatedetailsComponent.prototype.ngOnInit = function () {
    };
    StatedetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statedetails',
            template: __webpack_require__(/*! raw-loader!./statedetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/statedetails/statedetails.component.html"),
            styles: [__webpack_require__(/*! ./statedetails.component.css */ "./src/app/statedetails/statedetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatedetailsComponent);
    return StatedetailsComponent;
}());



/***/ }),

/***/ "./src/app/stateslist/stateslist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/stateslist/stateslist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRlc2xpc3Qvc3RhdGVzbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/stateslist/stateslist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/stateslist/stateslist.component.ts ***!
  \****************************************************/
/*! exports provided: StateslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateslistComponent", function() { return StateslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StateslistComponent = /** @class */ (function () {
    function StateslistComponent() {
    }
    StateslistComponent.prototype.ngOnInit = function () {
    };
    StateslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stateslist',
            template: __webpack_require__(/*! raw-loader!./stateslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/stateslist/stateslist.component.html"),
            styles: [__webpack_require__(/*! ./stateslist.component.css */ "./src/app/stateslist/stateslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateslistComponent);
    return StateslistComponent;
}());



/***/ }),

/***/ "./src/app/userdetails/userdetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userdetails/userdetails.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n\t\r\n  }\r\n  .maindiv {\r\n\tmargin-top:100px;  \r\n  }\r\n  /* Create two equal columns that floats next to each other */\r\n  .column {\r\n    background-color: lightgray;\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n    /* height: 300px;  */\r\n  }\r\n  /* Clear floats after the columns */\r\n  .rowtbl:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .goback {\r\n    background: #bd2130;\r\n    color: #fff;\r\n    /* text-transform: uppercase; */\r\n    border: aliceblue;\r\n    padding: 7px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    position: relative;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjs7RUFFeEI7RUFDQTtDQUNELGdCQUFnQjtFQUNmO0VBQ0EsNERBQTREO0VBQzVEO0lBQ0UsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLG9CQUFvQjtFQUN0QjtFQUVBLG1DQUFtQztFQUNuQztJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL3VzZXJkZXRhaWxzL3VzZXJkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHJcbiAgfVxyXG4gIC5tYWluZGl2IHtcclxuXHRtYXJnaW4tdG9wOjEwMHB4OyAgXHJcbiAgfVxyXG4gIC8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICAuY29sdW1uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbiAgLnJvd3RibDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLmdvYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmQyMTMwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xyXG4gICAgYm9yZGVyOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userdetails/userdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userdetails/userdetails.component.ts ***!
  \******************************************************/
/*! exports provided: UserdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function() { return UserdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var UserdetailsComponent = /** @class */ (function () {
    function UserdetailsComponent(formBuilder, router, http, myservice, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.collection = [];
        this.UserID = '';
    }
    UserdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('User Details');
        this.UserID = this.route.snapshot.paramMap.get('userid');
        console.log("UserID=" + this.UserID);
        var params = { 'recidval': this.UserID };
        this.myservice.httpPostMethod('http://localhost:81/Angular/getuserdetails.php', params, 'application/json', false, 'userdetails')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitcol = mesg.split('$$');
                                _this.collection.push({ "username": splitcol[0], "lastname": splitcol[1], "firstname": splitcol[2], "company": splitcol[3], "mobileno": splitcol[4], "reportsto": splitcol[5], "grpname": splitcol[6], "usertype": splitcol[7], "product": splitcol[8], "emailid": splitcol[9], "department": splitcol[11], "role": splitcol[10] });
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
            //this.spinner.hide();
        });
    };
    UserdetailsComponent.prototype.GoBack = function () {
        this.router.navigate(['/userslist']);
    };
    UserdetailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    UserdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userdetails',
            template: __webpack_require__(/*! raw-loader!./userdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/userdetails/userdetails.component.html"),
            styles: [__webpack_require__(/*! ./userdetails.component.css */ "./src/app/userdetails/userdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserdetailsComponent);
    return UserdetailsComponent;
}());



/***/ }),

/***/ "./src/app/userslist/userslist.component.css":
/*!***************************************************!*\
  !*** ./src/app/userslist/userslist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.maindiv {\r\n\t/* margin-top:50px; */\r\n}\r\n\r\n tablecls {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n th {\r\n\tcolor: #bd2130;\t\r\n}\r\n\r\n th, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\n tr:nth-child(even) {background-color: #f2f2f2;}\r\n\r\n .tbltxt{\r\n  /* width:100px !important; */\r\n  text-align: center;\r\n \r\n }\r\n\r\n .EnDetailLink,.Editicon {\r\n  color: #bd2130;\r\n }\r\n\r\n .inputborder {\r\n    border-top: 1px;\r\n    border-left: 1px;\r\n    padding: 5px;\r\n    border-bottom: groove;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnNsaXN0L3VzZXJzbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLHFCQUFxQjtBQUN0Qjs7Q0FFQztFQUNDLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0NBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0NBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztDQUVBLG9CQUFvQix5QkFBeUIsQ0FBQzs7Q0FFOUM7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCOztDQUVuQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzbGlzdC91c2Vyc2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbmRpdiB7XHJcblx0LyogbWFyZ2luLXRvcDo1MHB4OyAqL1xyXG59XHJcblxyXG4gdGFibGVjbHMge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxudGgge1xyXG5cdGNvbG9yOiAjYmQyMTMwO1x0XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9IFxyXG5cclxuLnRibHR4dHtcclxuICAvKiB3aWR0aDoxMDBweCAhaW1wb3J0YW50OyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIFxyXG4gfVxyXG5cclxuIC5FbkRldGFpbExpbmssLkVkaXRpY29uIHtcclxuICBjb2xvcjogI2JkMjEzMDtcclxuIH1cclxuXHJcbi5pbnB1dGJvcmRlciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZ3Jvb3ZlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/userslist/userslist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/userslist/userslist.component.ts ***!
  \**************************************************/
/*! exports provided: UserslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserslistComponent", function() { return UserslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");








var UserslistComponent = /** @class */ (function () {
    function UserslistComponent(formBuilder, router, http, myservice, route, cookieService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.myservice = myservice;
        this.route = route;
        this.cookieService = cookieService;
        this.collection = [];
    }
    UserslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.setTitle('Users');
        var params = { 'requestid': '' };
        this.myservice.httpPostMethod('http://localhost:81/Angular/userslist.php', params, 'application/json', false, 'roleslist')
            .then(function (resData) {
            if (resData != undefined) {
                console.log("inside of resdata");
                if (resData.hasOwnProperty('status')) {
                    console.log("inside of hasOwnProperty");
                    if (resData['status'] == 200) {
                        console.log("status=", resData);
                        var emirates = resData['body'];
                        console.log("emirates=" + emirates); //return false;
                        if (emirates != undefined && emirates != null && emirates != "") {
                            console.log("&&&&&&", emirates.success);
                            if (emirates.success) {
                                var mesg = emirates.message;
                                console.log("mesg=" + mesg);
                                var splitrow = mesg.split('||');
                                var reclen = splitrow.length;
                                for (var i = 0; i < reclen - 1; i++) {
                                    var splitcol = splitrow[i].split('$$');
                                    _this.collection.push({ "username": splitcol[0], "lastname": splitcol[1], "firstname": splitcol[2], "company": splitcol[3], "mobileno": splitcol[4], "reportsto": splitcol[5], "grpname": splitcol[6], "usertype": splitcol[7], "product": splitcol[8], "emailid": splitcol[9], "department": splitcol[11], "role": splitcol[10], "recid": splitcol[12] });
                                }
                            }
                        }
                    }
                    else {
                        console.log("Get City List API - Error Occured : " + resData['txt']);
                        return false;
                    }
                }
            }
        }, function (error) {
            console.log("Error", error);
            //this.spinner.hide();
        });
    };
    UserslistComponent.prototype.EditSelrec = function (recidval) {
        console.log("EditSelrec=" + recidval);
        this.router.navigate(['/createuser', { 'userid': recidval }]);
    };
    UserslistComponent.prototype.fn_redirect = function (requestidval) {
        this.router.navigate(['/userdetails', { 'userid': requestidval }]);
    };
    UserslistComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    UserslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userslist',
            template: __webpack_require__(/*! raw-loader!./userslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/userslist/userslist.component.html"),
            styles: [__webpack_require__(/*! ./userslist.component.css */ "./src/app/userslist/userslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], UserslistComponent);
    return UserslistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map