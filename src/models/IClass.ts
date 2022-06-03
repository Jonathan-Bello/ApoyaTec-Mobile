export interface IClass {
  id: number,
  created_at: string,
  updated_at: string,
  name: string,
  urlvideo: string,
  duration: string,
  views: number,
  notes: string,
  index: number,
  section_id: number,
  course_id?: number,
  nav?(id: number): void
}