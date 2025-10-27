const defaultHeaders = () => {
  const headers = {
    'Content-Type': 'application/json'
  };

  const apiKey = process.env.REACT_APP_API_KEY;
  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`;
  }

  return headers;
};

const buildEndpointUrl = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL || '';
  const endpointPath = process.env.REACT_APP_MODEL_CARD_ENDPOINT || '/model-cards';
  return `${baseUrl}${endpointPath}`;
};

const wrapPayloadIfNeeded = (payload) => {
  const wrapperKey = process.env.REACT_APP_MODEL_CARD_WRAPPER;
  if (wrapperKey && typeof wrapperKey === 'string') {
    return { [wrapperKey]: payload };
  }

  return payload;
};

export const submitModelCard = async (payload) => {
  const url = buildEndpointUrl();
  const body = JSON.stringify(wrapPayloadIfNeeded(payload));

  const response = await fetch(url, {
    method: 'POST',
    headers: defaultHeaders(),
    body
  });

  const responseText = await response.text();
  let parsed;
  try {
    parsed = responseText ? JSON.parse(responseText) : null;
  } catch (error) {
    parsed = null;
  }

  if (!response.ok) {
    const message = parsed?.message || parsed?.error || response.statusText || 'Request failed';
    throw new Error(`API request failed: ${message}`);
  }

  return parsed;
};

export default submitModelCard;
