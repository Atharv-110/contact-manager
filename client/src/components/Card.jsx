import Button from "../ui/Button";

const Card = () => {
  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <div className="card-body">
        <h1 className="card-title font-bold tracking-wide text-2xl">8889140648</h1>
        <h2 className="text-lg tracking-wide">Atharv Vani</h2>
        <div className="card-actions justify-end">
          <Button variant="normal" text="Update"/>
          <Button variant="danger" text="Delete"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
