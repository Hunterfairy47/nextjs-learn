import { Card } from "@mui/material";


export interface CardProps {
  children: React.ReactNode;
}

function CardAdd(props: CardProps) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'white', borderRadius:'6px', boxShadow:' 0 2px 8px rgba(0, 0, 0, 0.2)' }}>
      {props.children}
    </Card>
  );
}

export default CardAdd;
