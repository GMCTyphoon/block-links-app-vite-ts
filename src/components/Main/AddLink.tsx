import { FC, useState } from 'react';

import classes from './Main.module.css';
import { Link } from './LinksList';

interface AddLinkProps {
  onSubmit: ({ id, value }: Link) => void;
  onCancel: () => void;
}

export const AddLink: FC<AddLinkProps> = ({ onSubmit, onCancel }) => {
  const [linkName, setLinkName] = useState('');

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (linkName.trim().length === 0) {
      return;
    }

    onSubmit({ id: Date.now(), value: linkName });
  };

  return (
    <form className={classes.addLinkForm} onSubmit={handleSubmitForm}>
      <input
        type="text"
        id="link-title"
        className={classes.addLinkInput}
        onChange={(e) => setLinkName(e.target.value)}
        value={linkName}
        placeholder="opros/b2b.ru"
      />
      <button className={classes.okayBtn} type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
          />
        </svg>
      </button>
      <button className={classes.cancelBtn} type="button" onClick={onCancel}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
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
    </form>
  );
};
