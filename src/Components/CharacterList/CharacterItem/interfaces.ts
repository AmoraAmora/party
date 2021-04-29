export interface ItemProps {
  id: number;
  name: string;
  image: string;
  onDelete(id:number):any;
}
