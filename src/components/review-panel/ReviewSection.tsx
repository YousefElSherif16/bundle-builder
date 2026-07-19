import ReviewItem from "./ReviewItem";

interface Props {
  title: string;
}

export default function ReviewSection({ title }: Props) {
  return (
    <div>
      <h3 className="mb-3 font-semibold">{title}</h3>

      <div className="flex flex-col gap-3">
        <ReviewItem />
      </div>
    </div>
  );
}
