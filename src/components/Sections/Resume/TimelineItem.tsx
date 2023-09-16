import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';
import Image from 'next/image';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {
    title,
    date,
    location,
    content,
    objective,
    responsibility,
    response_content_1,
    response_content_2,
    response_content_3,
    response_content_4,
    response_content_5,
    response_content_6,
    response_content_7,
    response_content_8,
    technology,
    technology_content,
    image,
  } = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        {title ? 
        <>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
        </> :  ""}

      </div>
      <div className="flex flex-col ">
        <span className="font-bold">{objective}</span>
        <span>{content}</span>
        <span className="font-bold">{responsibility}</span>
        <span>{response_content_1 ? '* ' + response_content_1 : ''}</span>
        <span>{response_content_2 ? '* ' + response_content_2 : ''}</span>
        <span>{response_content_3 ? '* ' + response_content_3 : ''}</span>
        <span>{response_content_4 ? '* ' + response_content_4 : ''}</span>
        <span>{response_content_5 ? '* ' + response_content_5 : ''}</span>
        <span>{response_content_6 ? '* ' + response_content_6 : ''}</span>
        <span>{response_content_7 ? '* ' + response_content_7 : ''}</span>
        <span>{response_content_8 ? '* ' + response_content_8 : ''}</span>
        <span className="font-bold">{technology}</span>
        <span>{technology_content}</span>
      </div>
      {image ? (
        <Image alt='image' className="h-72 w-full object-contain " priority src={image} />
      ) : (
        ''
      )}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
