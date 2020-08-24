const Employee = require('../employee.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {

    it('should throw an error if no "firstName", "lastName" and "depratment" arg', () => {
      const emp = new Employee({}); // create new Department, but don't set `name` attr value
    
      emp.validate(err => {
        expect(err.errors.firstName).to.exist;
        expect(err.errors.lastName).to.exist;
        expect(err.errors.department).to.exist;
      });
    
    });

    it('should throw an error if "firstName" is not a string', () => {

        const cases = [{}, []];
        for(let firstName of cases) {
          const emp = new Employee({ firstName });
      
          emp.validate(err => {
            expect(err.errors.firstName).to.exist;
          });
      
        }
      
      });

    it('should throw an error if "lastName" is not a string', () => {

        const cases = [{}, []];
        for(let lastName of cases) {
          const emp = new Employee({ lastName });
      
          emp.validate(err => {
            expect(err.errors.lastName).to.exist;
          });
      
        }
      
      });

    it('should throw an error if "department" is not a string', () => {

        const cases = [{}, []];
        for(let department of cases) {
          const emp = new Employee({ department });
      
          emp.validate(err => {
            expect(err.errors.department).to.exist;
          });
      
        }
      
      });

    it('should not throw an error if "firstName", "lastName" and "department" is okay', () => { 
       
        const cases = ['John', 'Amanda'];
        for(let firstName of cases) {
          const emp = new Employee({ firstName });
      
          emp.validate(err => {
            expect(err.firstName).to.not.exist;
          });
      
        }
      
      });
    
    it('should not throw an error if "lastName" and  is okay', () => { 
       
        const cases = ['Doe', 'Wilson'];
        for(let lastName of cases) {
          const emp = new Employee({ lastName });
      
          emp.validate(err => {
            expect(err.lastName).to.not.exist;
          });
      
        }
      
      });

      it('should not throw an error if "department" and  is okay', () => { 
       
        const cases = ['Management', 'Human Resources'];
        for(let department of cases) {
          const emp = new Employee({ department });
      
          emp.validate(err => {
            expect(err.department).to.not.exist;
          });
      
        }
      
      });



    after(() => {
        mongoose.models = {};
    });
    
});
  