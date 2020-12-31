import { AcademicOrientationType } from "./academic-orientation-type";

export type FieldOfStudyType = {
    code: string;
    name: string;
    academicOrientation?: Array<AcademicOrientationType>;
  };