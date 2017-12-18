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
  imgUrl: Joi.string(),
  projectIds: Joi.array(),
};

export const OrganizationSchema = {
  _id: Joi.any(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  website: Joi.string().optional(),
  contactPerson: Joi.string().required(),
  contactNumber: Joi.number().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
};

export const ProjectSchema = {
  _id: Joi.any(),
  ownerId: Joi.any(),
  name: Joi.string().required(),
  projectChallenge: Joi.string().required(),
  volunteerReason: Joi.string().required(),
  taskDescription: Joi.string().required(),
  volunteersNeeded: Joi.number().required(),
  volunteerHoursNeeded: Joi.number().required(),
  timespanFrom: Joi.any(),
  timespanUntil: Joi.any(),
  volunteers: Joi.array(),
  imgUrl: Joi.string(),
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
  timespanFrom: ProjectSchema.timespanFrom,
  timespanUntil: ProjectSchema.timespanUntil,
};
