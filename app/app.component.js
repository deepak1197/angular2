"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
export1;
class1;
AppComponent1;
{
    userForm = new forms_1.FormGroup({
        name: new forms_1.FormControl('Deepak', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(12)]),
        email: new forms_1.FormControl(),
        address: new forms_1.FormGroup({
            street: new forms_1.FormControl(),
            city: new forms_1.FormControl(),
            postalcode: new forms_1.FormControl(null, forms_1.Validators.pattern('^[1-9][0-9]{5}'))
        })
    });
    mySubmitHandler();
    {
        console.log(this.userForm.value);
    }
}
//# sourceMappingURL=app.component.js.map