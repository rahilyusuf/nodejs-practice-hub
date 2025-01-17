//@desc Get all contacts
//@route Get/api/contacts
//@access public

const getContacts =(req,res)=> {
  res.status(200).json({message:"get all contacts"});
};

//@desc Create new contact contacts
//@route POST/api/contacts
//@access public

const createContacts = (req,res)=> {
  res.status(201).json({message:"create contact"});
};

//@desc Get contacts
//@route Get/api/contacts/:id
//@access public

const getContact =(req,res)=> {
  res.status(200).json({message:`get contact for ${req.params.id}`});
};

//@desc update contacts
//@route put/api/contacts/:id
//@access public

const UpdateConatact = (req,res)=> {
  res.status(200).json({message:`update contact for ${req.params.id}`});
};

//@desc delete contacts
//@route delete/api/contacts/:id
//@access public

const deletecontact = (req,res)=> {
  res.status(200).json({message:`delete contact for ${req.params.id}`});
} ;
module.exports = {getContacts, createContacts, getContact, UpdateConatact, deletecontact};