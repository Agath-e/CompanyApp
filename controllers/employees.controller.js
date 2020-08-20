const Employee = require('../models/employee.model');

exports.getAll = async (req, res) => {
    try {
      res.json(await Employee.find().populate('department'));
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
  };
  
  exports.getRandom = async (req, res) => {
  
    try {
      const count = await Employee.countDocuments();
      const rand = Math.floor(Math.random() * count);
      const dep = await Employee.findOne().populate('department').skip(rand);
      if(!dep) res.status(404).json({ message: 'Not found' });
      else res.json(dep);
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
  };
  
  exports.getId = async (req, res) => {
  
    try {
      const dep = await Employee.findById(req.params.id).populate('department');
      if(!dep) res.status(404).json({ message: 'Not found' });
      else res.json(dep);
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
  
  };
  
  exports.postId = async (req, res) => {
  
    try {
  
      const { name } = req.body;
      const newEmployee = new Employee({ name: name });
      await newEmployee.save();
      res.json({ message: 'OK' });
  
    } catch(err) {
      res.status(500).json({ message: err });
    }
  
  };
  
  exports.putId = async (req, res) => {
    const { name } = req.body;
  
    try {
      const dep = await(Employee.findById(req.params.id));
      if(dep) {
        await Employee.updateOne({ _id: req.params.id }, { $set: { name: name }});
        res.json(dep);
      }
      else res.status(404).json({ message: 'Not found...' });
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
  
  };
  
  exports.deleteId = async (req, res) => {
  
    try {
      const dep = await(Employee.findById(req.params.id));
      if(dep) {
        await Employee.deleteOne({ _id: req.params.id });
        res.json(dep);
      }
      else res.status(404).json({ message: 'Not found...' });
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
  
  };