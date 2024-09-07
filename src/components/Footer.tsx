
export const Footer = (props: {
  year: string;
  fullName: string;
  studentId: string;
}) => {
  return (

 <>Copyright © {props.year} {props.fullName} {props.studentId} </>
  );
}