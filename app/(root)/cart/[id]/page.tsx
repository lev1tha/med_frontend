import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <div>Cart id {params.id}</div>;
};

export default page;
