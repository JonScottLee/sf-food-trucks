type UIConfig = {
  PUBLIC_API: string;
};

export const uiConfig: UIConfig = {
  PUBLIC_API: process.env.PUBLIC_API || 'localhost:3333',
};
