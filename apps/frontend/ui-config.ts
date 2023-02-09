type UIConfig = {
  NEXT_PUBLIC_API: string;
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string;
};

export const uiConfig: UIConfig = {
  NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API || 'localhost:3333',
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
};
