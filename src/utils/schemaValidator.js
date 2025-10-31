import Ajv from 'ajv';
import schema from '../schemas/aetherModelCardSchema.json';

const ajv = new Ajv({ allErrors: true, strict: false });

const validate = ajv.compile(schema);

const formatInstancePath = (instancePath = '') => {
  if (!instancePath) {
    return 'root';
  }

  return instancePath
    .split('/')
    .filter(Boolean)
    .join('.');
};

export const validateModelCardSchema = (data) => {
  const isValid = validate(data);

  if (isValid) {
    return { valid: true, errors: [] };
  }

  const errors = (validate.errors || []).map((error) => {
    const path = formatInstancePath(error.instancePath);
    const message = error.message || 'is invalid';
    if (path === 'root') {
      return `Schema validation failed: ${message}`;
    }

    return `${path} ${message}`;
  });

  return {
    valid: false,
    errors
  };
};

export default validateModelCardSchema;
