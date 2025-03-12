import { FC, useEffect, useState } from 'react';

import classes from './Main.module.css';
import { LinkItem } from './LinkItem';
import { AddLink } from './AddLink';

export type Link = {
  id: number;
  value: string;
};

const LINKS: Link[] = [
  { id: 1, value: 'YA.RU' },
  { id: 2, value: 'ya.ru' },
  {
    id: 3,
    value:
      'meteum.ai/weather/en-US/maps/nowcast?via=mnc&lat=55.7519&lon=37.6205&ll=37.6186_55.7519&z=12',
  },
  { id: 4, value: 'HTTPS://YANDEX.IO' },
  { id: 5, value: 'дом.рф' },
];

export const LinksList: FC = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [initialLinks, setInitialLinks] = useState<Link[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (LINKS) {
      setLinks(LINKS);
      setInitialLinks(LINKS);
    }
  }, []);

  const handleStartAdding = () => {
    setIsAdding(true);
  };

  const handleFormSubmit = ({ id, value }: Link) => {
    console.log(id, value);
    setLinks((prev) => [...prev, { id, value }]);
    setIsAdding(false);
  };

  const handleCancelAdding = () => {
    setIsAdding(false);
  };

  const handleStartEditing = () => {
    console.log(isEditing);
    setInitialLinks([...links]);
    setIsEditing(true);
  };

  const handleCancelEditing = () => {
    setLinks([...initialLinks]);
    setIsEditing(false);
  };

  const handleConfirmEditing = () => {
    setIsEditing(false);
  };

  const handleDeleteLink = (id: number) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
    console.log(links.filter((link) => link.id !== id));
  };

  return (
    <>
      {(links.length > 0 || isEditing) && (
        <ul className={classes.linksList}>
          {links.slice(0, -1).map((link) => (
            <LinkItem
              key={link.id}
              value={link.value}
              isEditing={isEditing}
              id={link.id}
              handleDeleteLink={handleDeleteLink}
            />
          ))}
          <div className={classes.lastRowContainer}>
            {links.length > 0 && (
              <LinkItem
                key={links[links.length - 1].id}
                value={links[links.length - 1].value}
                isEditing={isEditing}
                id={links[links.length - 1].id}
                handleDeleteLink={handleDeleteLink}
              />
            )}
            <div className={classes.buttonsContainer}>
              {!isEditing && (
                <button
                  className={classes.editBtn}
                  onClick={handleStartEditing}
                  disabled={isAdding}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
                    />
                  </svg>
                </button>
              )}
              {isEditing && (
                <button
                  className={classes.okayBtn}
                  type="button"
                  onClick={handleConfirmEditing}
                >
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
              )}
              {isEditing && (
                <button
                  className={classes.cancelBtn}
                  type="button"
                  onClick={handleCancelEditing}
                >
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
              )}
            </div>
          </div>
        </ul>
      )}
      {isAdding && (
        <AddLink onSubmit={handleFormSubmit} onCancel={handleCancelAdding} />
      )}
      {!isAdding && (
        <button
          className={classes.addLinkBtn}
          onClick={handleStartAdding}
          disabled={isEditing}
        >
          + Добавить ссылку
        </button>
      )}
    </>
  );
};
