const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
const fs = require('fs')
var path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    const now = new Date();
    const date = Math.floor(now.getTime() / 1000);
    cb(null, date + "_" + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

const Contact = require("../models/contact");

router.get("/", (req, res, next) => {
  Contact.find()
    .select("firstName lastName _id phoneNumber groups remark favourite contactImage")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        contacts: docs.map(doc => {
          return {
            firstName: doc.firstName,
            lastName: doc.lastName,
            phoneNumber: doc.phoneNumber,
            groups: doc.groups,
            remark: doc.remark,
            favourite: doc.favourite,
            contactImage: doc.contactImage,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/contacts/" + doc._id
            }
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", upload.single('profile-image'), (req, res, next) => {
  var contactImage = "none";
  if (req.file && req.file.path) {
    contactImage = req.file.path 
  }
  const contact = new Contact({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    groups: req.body.groups,
    remark: req.body.remark,
    favourite: req.body.favourite,
    contactImage: contactImage
  });

  contact.save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Created contact successfully",
        createdContact: {
          name: result.name,
          price: result.price,
          _id: result._id,
          request: {
            type: 'GET',
            url: "http://localhost:3000/contacts/" + result._id
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:contactId", (req, res, next) => {
  const id = req.params.contactId;
  Contact.findById(id)
    .select('_id firstName lastName phoneNumber groups remark favourite contactImage')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          contact: doc,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/contacts'
          }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:contactId", upload.single('profile-image-edit'), (req, res, next) => {
  const id = req.params.contactId;
  var updateOps =  Object.assign({}, req.body)
  if (req.file && req.file.path) {
    updateOps["contactImage"] = req.file.path }
  Contact.updateMany({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'contact updated',
        request: {
          type: 'GET',
          url: 'http://localhost:3000/contacts/' + id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:contactId", (req, res, next) => {
  const id = req.params.contactId;
  Contact.findById(id)
  .select('_id  contactImage')
  .exec()
  .then(resp =>{
    if(resp.contactImage && resp.contactImage!= "none") {fs.unlinkSync(path.join(__dirname,'..\\' , resp.contactImage))}
    Contact.deleteOne({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'contact deleted',
        request: {
          type: 'POST',
          url: 'http://localhost:3000/contacts',
          body: { id: 'String' }
        }
      });
    })
  }



  )
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;