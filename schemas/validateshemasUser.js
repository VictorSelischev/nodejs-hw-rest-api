const Joi = require('joi');

const schemaAddUser = Joi.object({
  password: Joi.string()
    .min(7)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'ua'] },
    })
    .required(),
});

const schemaMailUser = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'ua'] },
    })
    .required(),
});

module.exports = { schemaAddUser, schemaMailUser };
