const CORS_ALLOWED_ORIGIN = '.*localhost.*|.*campus-diaries*';

const CORS_OPTION = {
  origin: new RegExp(CORS_ALLOWED_ORIGIN, 'i') || true,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

module.exports = {
  corsOptions: CORS_OPTION,
};
