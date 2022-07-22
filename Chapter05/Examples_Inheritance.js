var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserOne = /** @class */ (function () {
    function UserOne() {
        this.email = "";
        this.createDate = 0;
        this.lastLogin = 0;
        this.token = "";
    }
    UserOne.prototype.setToken = function (token) {
        this.token = token;
    };
    UserOne.prototype.resetPassword = function (password) {
        return password;
    };
    return UserOne;
}());
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.adminPages = ["adming", " settings"];
        return _this;
    }
    AdminUser.prototype.resetUserPassword = function (email) {
        return "password123";
    };
    return AdminUser;
}(UserOne));
var AdminUserTwo = /** @class */ (function (_super) {
    __extends(AdminUserTwo, _super);
    function AdminUserTwo() {
        var _this = _super.call(this) || this;
        _this.adminPages = ["admin", "settings"];
        _this.email = _this.email;
        return _this;
    }
    AdminUserTwo.prototype.resetUserPassword = function () {
        return "password123";
    };
    return AdminUserTwo;
}(UserOne));
var SuperAdmin = /** @class */ (function (_super) {
    __extends(SuperAdmin, _super);
    function SuperAdmin() {
        var _this = _super.call(this) || this;
        _this.superPages = ["super", "Ultimate"];
        _this.myHash = "1234567";
        return _this;
    }
    SuperAdmin.prototype.createAdminUser = function (adminUser) {
        return adminUser;
    };
    SuperAdmin.prototype.resetPassword = function (password) {
        return password + this.myHash;
    };
    return SuperAdmin;
}(AdminUser));
var adminUser = new AdminUser();
var superAdmin = new SuperAdmin();
var newAdmin = new AdminUser();
var propString = "";
for (var u in adminUser) {
    propString += u + ",";
}
// console.log(propString, "propString");
console.log(superAdmin.resetPassword("iampassword"));
console.log(newAdmin.resetPassword("iampassword"));
