import React from 'react';

interface IEditTicketEventModalLayoutProps {
  form: React.ReactNode;
}

const classes = {
  wrapper: 'px-4 pt-5 pb-4 sm:p-6 flex flex-col space-y-4 min-w-[26rem]',
};

const EditTicketEventModalLayout = ({ form }: IEditTicketEventModalLayoutProps) => {
  return <div className={classes.wrapper}>{form}</div>;
};

export default EditTicketEventModalLayout;
