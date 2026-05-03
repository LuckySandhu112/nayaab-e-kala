export interface AdmissionForm {
  name: string;
  age: string;
  contactNumber: string;
  email: string;
  courseSelection: string;
  message: string;
}

export type NavSection = {
  id: string;
  label: string;
};

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  nameEn: string;
  descriptionEn: string;
  level: CourseLevel;
  durationEn: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  altEn: string;
  category: string;
}
