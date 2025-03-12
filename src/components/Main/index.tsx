import { FC } from 'react';
import { LinksList } from './LinksList';
import classes from './Main.module.css';

export const Main: FC = () => {
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.subTitle}>ПРОЦЕДУРЫ НА B2B ПОРТАЛЕ</h2>
        <LinksList />
      </div>
    </>
  );
};
