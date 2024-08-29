import React from "react";

const TagList = ({ tags }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <p
          key={index}
          className={`text-[14px] font-medium ${tag.color}`}
        >
          #{tag.name}
        </p>
      ))}
    </div>
  );
};

export default TagList;
