import { ReactNode } from "react";

type MajorSegmentProps = {
  image: ReactNode;
  imageFirst: boolean;
};

function MajorSegment(props: React.PropsWithChildren<MajorSegmentProps>) {
  return (
    <>
      <div className="p-4 rounded-3xl flex flex-row bg-white/5 h-[32em] mb-4 w-fit">
        {props.imageFirst ? props.image : <> </>}
        <div className="p-16 flex items-center">
          <div>{props.children}</div>
        </div>
        {!props.imageFirst ? props.image : <> </>}
      </div>
    </>
  );
}

export default MajorSegment;
