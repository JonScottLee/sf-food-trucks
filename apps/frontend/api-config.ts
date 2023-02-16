type APIConfig = {
  SOURCE_API: string;
};

export const apiConfig: APIConfig = {
  SOURCE_API:
    process.env.SOURCE_API || 'https://data.sfgov.org/resource/rqzj-sfat.json',
};
