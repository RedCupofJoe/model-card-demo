const isPlainObject = (value) => {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
};

const trimStringsDeep = (value) => {
  if (typeof value === 'string') {
    return value.trim();
  }

  if (Array.isArray(value)) {
    return value.map(trimStringsDeep);
  }

  if (isPlainObject(value)) {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = trimStringsDeep(value[key]);
      return acc;
    }, {});
  }

  return value;
};

const hasMeaningfulValue = (value) => {
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return true;
  }

  if (Array.isArray(value)) {
    return value.some(hasMeaningfulValue);
  }

  if (isPlainObject(value)) {
    return Object.values(value).some(hasMeaningfulValue);
  }

  return false;
};

const filterEmptyArrayItemsDeep = (value) => {
  if (Array.isArray(value)) {
    return value
      .map(filterEmptyArrayItemsDeep)
      .filter((item) => hasMeaningfulValue(item));
  }

  if (isPlainObject(value)) {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = filterEmptyArrayItemsDeep(value[key]);
      return acc;
    }, {});
  }

  return value;
};

export const mapFormDataToApiPayload = (formData) => {
  const trimmed = trimStringsDeep(formData);
  return filterEmptyArrayItemsDeep(trimmed);
};

export default mapFormDataToApiPayload;
