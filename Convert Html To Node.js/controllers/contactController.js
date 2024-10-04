const Contact = require('../models/contact');

// Render contact page
exports.getContactPage =(req, res)=>{
  res.render('contact');
};

// Handle contact form submission
exports.submitContactForm = async(req, res)=>{
  const {name, email, message} =req.body;

  try{
    const contact = new Contact({name, email, message});
    await contact.save();
    res.redirect('/contact');
  }catch(err){
    res.status(500).send('Failed to submit form.');
  }
};
