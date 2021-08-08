export interface Nav {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: Nav[];
}

