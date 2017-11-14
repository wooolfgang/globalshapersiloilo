import Joi from 'joi';

export const UserSchema = {
  _id: Joi.optional(),
  username: Joi.string().min(6).max(30).required(),
  password: Joi.string().min(6).max(30).required(),
  email: Joi.string().email().required(),
  fullName: Joi.string().required(),
  birthDay: Joi.string(),
  address: Joi.string(),
  phoneNumber: Joi.string(),
  occupation: Joi.string(),
  affiliation: Joi.string(),
  provider: Joi.string(),
};

export const OrganizationSchema = {
  name: Joi.string().required(),
  description: Joi.string().required(),
  website: Joi.string().optional(),
  contactPerson: Joi.string().required(),
  contactNumber: Joi.number().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
};

export const ProjectSchema = {
  name: Joi.string().required(),
  projectChallenge: Joi.string().required(),
  volunteerReason: Joi.string().required(),
  taskDescription: Joi.string().required(),
  volunteersNeeded: Joi.number().required(),
  volunteerHoursNeeded: Joi.number().required(),
  timespan: Joi.object(),
};

export const ProjectSchemaFirst = {
  name: ProjectSchema.name,
  projectChallenge: ProjectSchema.projectChallenge,
  volunteerReason: ProjectSchema.volunteerReason,
};

export const ProjectSchemaSecond = {
  taskDescription: ProjectSchema.taskDescription,
  volunteersNeeded: ProjectSchema.volunteersNeeded,
  volunteerHoursNeeded: ProjectSchema.volunteerHoursNeeded,
  timespan: ProjectSchema.timespan,
};
