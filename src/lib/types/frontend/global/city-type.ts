/**
 * Province type
 */
export type CityType = {
  code: string;
  name: string;

  geometric?: {
    location?: {
      lang?: number;
      lat?: number;
    };

    area?: number;
  };
};
