import { useState } from "react";

const useInput = (validateValue:string, type:string) => {
    console.log("hitting")
    const [enteredValue, setEnteredValue] = useState('');
    const [selectedId, setSelectedId] = useState<number>(0);
    const [isTouched, setIsTouched] = useState(false);
    let errorMessage = '';
    let hasError;
    let inputClass;
    const validityCheck = (attribute:string) => {
        let isValid = false;
        switch (attribute) {
            case 'candidateFirstName' :
                if(enteredValue.trim() !== '') {
                    isValid = true;
                } else {
                    errorMessage = 'candidate First Name must not be empty.';
                }
                break;
            case 'candidateLastName' :
                if(enteredValue.trim() !== '') {
                    isValid = true;
                } else {
                    errorMessage = 'candidate Last Name must not be empty.';
                }
                break;
            case 'employeeLocation' :
                if(selectedId != 0) {
                    isValid = true;
                }
                break;
            case 'employeeSalary' :
                if(enteredValue.trim() !== '') {
                    const regex = new RegExp('^[0-9]*$');
                    if(regex.test(enteredValue)) {
                        isValid = true;
                    } else {
                        errorMessage = 'Employee Salary should be a number';
                    }
                } else {
                    errorMessage = 'Employee Name must not be empty.';
                }
                break;
            case 'employeeDepartment' :
                if(selectedId != 0) {
                    isValid = true;
                }
                break;
            default:

        }
        return isValid;
    }

    if(isTouched) {
        if(validityCheck(validateValue)) {
            if(type === 'string') {
                inputClass = 'form-control is-valid';
            } else {
                inputClass = 'form-control form-control-sm is-valid';
            }
            hasError = false;
        } else {
            if(type === 'string'){
                inputClass = 'form-control is-invalid';
            } else {
                inputClass =  'form-control form-control-sm is-invalid';
            }

            hasError = true;
        }
    } else {
        if(type === 'string') {
            inputClass = 'form-control';
        } else {
            inputClass =  'form-control form-control-sm';
        }
        hasError = undefined;
    }

    const valueChangedHandler = (e:any) => {
        setIsTouched(true);
        setEnteredValue(e.target.value);
        setSelectedId(e.target.value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    const resetId = () => {
        setSelectedId(0);
        setIsTouched(false);
    };

    return {
        id: selectedId,
        value: enteredValue,
        hasError,
        valueChangedHandler,
        inputBlurHandler,
        inputClass,
        resetId,
        reset,
        errorMessage
    };
}

export default useInput;