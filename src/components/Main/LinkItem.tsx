import { FC } from 'react';
import classes from './Main.module.css';

interface LinkItemProps {
  value: string;
  isEditing: boolean;
  handleDeleteLink: (id: number) => void;
  id: number;
}

export const LinkItem: FC<LinkItemProps> = ({
  value,
  isEditing,
  handleDeleteLink,
  id,
}) => {
  return (
    <div className={classes.linkItem}>
      <a
        className={classes.linkItemAncor}
        href={value}
        target="_blank"
        rel="noopener noreferrer"
      >
        {!isEditing && (
          <div className={classes.linkIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
              />
            </svg>
          </div>
        )}
        <div className={classes.linkName}>{value}</div>
      </a>
      <button
        className={classes.deleteBtn}
        type="button"
        disabled={!isEditing}
        onClick={() => handleDeleteLink(id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
          />
        </svg>
      </button>
    </div>
  );
};
